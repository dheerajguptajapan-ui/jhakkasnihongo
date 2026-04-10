import React, { useEffect, useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { INITIAL_ITEMS } from '../lib/initialData';
import { Item, UserItem, SRS_STAGES_NAMES } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { BookOpen, GraduationCap, Trophy, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { KanjiExplorer } from './KanjiExplorer';
import { persistence } from '../lib/persistence';

interface DashboardProps {
  onStartLessons: () => void;
  onStartReviews: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartLessons, onStartReviews }) => {
  const { user, profile } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  const [userItems, setUserItems] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    // Use local persistence only
    const allItems = INITIAL_ITEMS;
    const storedUserItems = persistence.getUserItems();
    
    setItems(allItems);
    setUserItems(storedUserItems);
    setLoading(false);
  }, [user]);

  const reviewsAvailable = userItems.filter(ui => {
    if (ui.srsStage === 0) return false; // Not started
    if (ui.srsStage === 9) return false; // Burned
    if (!ui.nextReviewAt) return true;
    return new Date(ui.nextReviewAt) <= new Date();
  }).length;

  const lessonsAvailable = items.filter(item => 
    !userItems.find(ui => ui.itemId === item.id) && (item.level || 1) <= (profile?.level || 1)
  ).length;

  const srsDistribution = SRS_STAGES_NAMES.map((name, index) => ({
    name,
    value: userItems.filter(ui => ui.srsStage === index).length
  })).filter(d => d.value > 0);

  const COLORS = ['#94a3b8', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#10b981', '#059669', '#8b5cf6', '#7c3aed', '#f43f5e'];

  if (loading) return <div className="flex items-center justify-center h-64">Loading Dashboard...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Welcome back, <span className="text-sky-600">{profile?.displayName}</span>!
          </h1>
          <p className="text-slate-500 mt-1 font-medium italic">Your progress is safely stored on this device.</p>
        </div>
        <div className="flex gap-3">
          <Badge variant="secondary" className="px-3 py-1 text-sm bg-sky-50 text-sky-700 border-sky-100">
            <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
            Rank: {profile?.level && profile.level > 5 ? 'Master' : 'Apprentice'}
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
          <Card className="h-full border-none shadow-2xl shadow-slate-200/50 hover:scale-[1.01] transition-transform overflow-hidden rounded-3xl">
            <CardHeader className="bg-sky-600 p-6">
              <CardTitle className="flex items-center text-white text-xl font-black uppercase tracking-widest">
                <BookOpen className="w-5 h-5 mr-3" />
                Available Lessons
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 pb-8 px-8">
              <div className="text-center space-y-4">
                <div className="text-7xl font-black text-slate-900 tracking-tighter">{lessonsAvailable}</div>
                <p className="text-slate-500 font-medium">New vocabulary items ready to learn</p>
                <Button 
                  className="w-full bg-sky-600 hover:bg-sky-700 h-14 text-lg font-bold rounded-2xl shadow-lg shadow-sky-100" 
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
          <Card className="h-full border-none shadow-2xl shadow-slate-200/50 hover:scale-[1.01] transition-transform overflow-hidden rounded-3xl">
            <CardHeader className="bg-rose-500 p-6">
              <CardTitle className="flex items-center text-white text-xl font-black uppercase tracking-widest">
                <GraduationCap className="w-5 h-5 mr-3" />
                Pending Reviews
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 pb-8 px-8">
              <div className="text-center space-y-4">
                <div className="text-7xl font-black text-slate-900 tracking-tighter">{reviewsAvailable}</div>
                <p className="text-slate-500 font-medium">Items waiting for your review</p>
                <Button 
                  className="w-full bg-rose-500 hover:bg-rose-600 h-14 text-lg font-bold rounded-2xl shadow-lg shadow-rose-100" 
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-100 rounded-3xl">
          <CardHeader className="border-b border-slate-50 p-6">
            <CardTitle className="flex items-center text-slate-800 font-black uppercase tracking-widest text-sm">
              <BarChart3 className="w-4 h-4 mr-2 text-sky-500" />
              SRS Progress Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[350px] p-6">
            {userItems.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={srsDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {srsDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 opacity-20" />
                </div>
                <p className="font-bold uppercase tracking-widest text-xs">No progress data yet</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl shadow-slate-100 rounded-3xl">
          <CardHeader className="border-b border-slate-50 p-6">
            <CardTitle className="text-slate-800 font-black uppercase tracking-widest text-sm">Personal Stats</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Level Progress</span>
                <span className="text-sm font-black text-sky-600">{Math.min(100, (profile?.xp || 0) % 1000 / 10)}%</span>
              </div>
              <Progress value={Math.min(100, (profile?.xp || 0) % 1000 / 10)} className="h-3 rounded-full bg-slate-100" />
            </div>
            
            <div className="space-y-3 pt-4 border-t border-slate-50">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Milestones</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-700 uppercase tracking-tight">Apprentice I</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Beginner Journey</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanji Explorer (N5) */}
      <section className="space-y-6 pt-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            N5 <span className="text-sky-600">Kanji</span> Collection
          </h2>
          <Badge variant="outline" className="bg-white text-slate-400 font-black text-[10px] tracking-widest px-3 py-1 uppercase">
            {items.filter(i => i.type === 'kanji' && i.level === 1).length} Characters
          </Badge>
        </div>
        <KanjiExplorer items={items.filter(i => i.type === 'kanji' && i.level === 1)} />
      </section>
    </div>
  );
};
