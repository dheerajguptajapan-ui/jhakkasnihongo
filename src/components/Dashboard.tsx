import React, { useEffect, useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, writeBatch, doc, onSnapshot } from 'firebase/firestore';
import { INITIAL_ITEMS } from '../lib/initialData';
import { Item, UserItem, SRS_STAGES_NAMES } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { BookOpen, GraduationCap, Trophy, BarChart3, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Furigana } from './Furigana';
import { KanjiExplorer } from './KanjiExplorer';
import { Switch } from './ui/switch';
import { toast } from 'sonner';

interface DashboardProps {
  onStartLessons: () => void;
  onStartReviews: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartLessons, onStartReviews }) => {
  const { user, profile, isMock, showFurigana, setShowFurigana } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  const [userItems, setUserItems] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedKanji, setSelectedKanji] = useState<Item | null>(null);

  useEffect(() => {
    if (!user) return;

    if (isMock) {
      setItems(INITIAL_ITEMS);
      setUserItems([]); // Fresh start for mock
      setLoading(false);
      return;
    }

    // Fetch all items
    const fetchItems = async () => {
      try {
        const itemsSnap = await getDocs(collection(db, 'items'));
        const itemsData = itemsSnap.docs.map(doc => doc.data() as Item);
        setItems(itemsData);
      } catch (err) {
        console.error("Firestore error:", err);
        setItems(INITIAL_ITEMS); // Fallback to initial data on error
      }
    };

    fetchItems();

    // Listen for user items
    const q = query(collection(db, `users/${user.uid}/userItems`));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data() as UserItem);
      setUserItems(data);
      setLoading(false);
    }, (err) => {
      console.error("UserItems fetch error:", err);
      setUserItems([]);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, isMock]);

  const seedData = async () => {
    try {
      const batch = writeBatch(db);
      INITIAL_ITEMS.forEach(item => {
        const itemRef = doc(db, 'items', item.id);
        batch.set(itemRef, item);
      });
      await batch.commit();
      toast.success('Global items seeded successfully!');
    } catch (error) {
      console.error("Seed error:", error);
      toast.error('Failed to seed global items. Check permissions.');
    }
  };

  const seedUserProgress = async () => {
    if (!user) return;
    try {
      const batch = writeBatch(db);
      // Seed first 5 items as Apprentice 1
      const firstFive = items.slice(0, 5);
      firstFive.forEach(item => {
        const userItemRef = doc(db, `users/${user.uid}/userItems`, item.id);
        const userItem: UserItem = {
          uid: user.uid,
          itemId: item.id,
          srsStage: 1,
          nextReviewAt: new Date().toISOString(), // Ready now
          lastReviewedAt: new Date().toISOString(),
          streak: 0
        };
        batch.set(userItemRef, userItem);
      });
      await batch.commit();
      toast.success('User progress seeded! You have 5 reviews ready.');
    } catch (error) {
      console.error("Seed progress error:", error);
      toast.error('Failed to seed user progress.');
    }
  };

  const reviewsAvailable = userItems.filter(ui => {
    if (ui.srsStage === 0) return false; // Not started
    if (ui.srsStage === 9) return false; // Burned
    if (!ui.nextReviewAt) return true;
    return new Date(ui.nextReviewAt) <= new Date();
  }).length;

  const lessonsAvailable = items.filter(item => 
    !userItems.find(ui => ui.itemId === item.id) && item.level <= (profile?.level || 1)
  ).length;

  const srsDistribution = SRS_STAGES_NAMES.map((name, index) => ({
    name,
    value: userItems.filter(ui => ui.srsStage === index).length
  })).filter(d => d.value > 0);

  const COLORS = ['#94a3b8', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#10b981', '#059669', '#8b5cf6', '#7c3aed', '#f43f5e'];

  const kanjiItems = items.filter(item => item.type === 'kanji');

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Welcome back, <span className="text-sky-600">{profile?.displayName}</span>!
          </h1>
          <p className="text-slate-500 mt-1">Level {profile?.level} • {profile?.xp} XP</p>
        </div>
        <div className="flex gap-3">
          {profile?.role === 'admin' && (
            <>
              <Button variant="outline" size="sm" onClick={seedData}>
                <Settings className="w-4 h-4 mr-2" />
                Seed Global Items
              </Button>
              <Button variant="outline" size="sm" onClick={seedUserProgress}>
                <Settings className="w-4 h-4 mr-2" />
                Seed User Progress
              </Button>
            </>
          )}
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
            Rank: Apprentice
          </Badge>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full border-2 border-sky-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-sky-50/50">
              <CardTitle className="flex items-center text-sky-900">
                <BookOpen className="w-5 h-5 mr-2" />
                Lessons
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="text-5xl font-black text-sky-600">{lessonsAvailable}</div>
                <p className="text-slate-600">New items available to learn</p>
                <Button 
                  className="w-full bg-sky-600 hover:bg-sky-700 h-12 text-lg" 
                  disabled={lessonsAvailable === 0}
                  onClick={onStartLessons}
                >
                  Start Lessons
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full border-2 border-rose-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-rose-50/50">
              <CardTitle className="flex items-center text-rose-900">
                <GraduationCap className="w-5 h-5 mr-2" />
                Reviews
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="text-5xl font-black text-rose-600">{reviewsAvailable}</div>
                <p className="text-slate-600">Items ready for SRS review</p>
                <Button 
                  className="w-full bg-rose-600 hover:bg-rose-700 h-12 text-lg" 
                  disabled={reviewsAvailable === 0}
                  onClick={onStartReviews}
                >
                  Start Reviews
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Progress & Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              SRS Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            {userItems.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={srsDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {srsDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400 italic">
                Start learning to see your progress!
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Level Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600 font-medium">Kanji Mastery</span>
                <span className="text-sky-600 font-bold">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600 font-medium">Vocab Mastery</span>
                <span className="text-rose-600 font-bold">20%</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
            <div className="pt-4 border-t">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Recent Achievements</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  First 10 items learned!
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                  Reached Level 2!
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanji Explorer (N5) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            JLPT <span className="text-sky-600">N5</span> Kanji Explorer
          </h2>
          <Badge variant="outline" className="text-slate-400 font-bold">
            {items.filter(i => i.type === 'kanji' && i.level === 1).length} KANJI
          </Badge>
        </div>
        <KanjiExplorer items={items.filter(i => i.type === 'kanji' && i.level === 1)} />
        {items.length === 0 && profile?.role === 'admin' && (
          <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium mb-4">No data found. Please seed the global items first.</p>
            <Button variant="outline" onClick={seedData}>Seed Global Items</Button>
          </div>
        )}
      </section>
    </div>
  );
};
