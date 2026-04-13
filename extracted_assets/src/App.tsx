import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './lib/AuthContext';
import { Dashboard } from './components/Dashboard';
import { LessonSession } from './components/LessonSession';
import { ReviewSession } from './components/ReviewSession';
import { ItemsView } from './components/ItemsView';
import { CommunityView } from './components/CommunityView';
import { JLPTView } from './components/JLPTView';
import { db } from './lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Item, UserItem } from './types';
import { Button } from './components/ui/button';
import { GraduationCap, LogOut, BookOpen } from 'lucide-react';
import { Switch } from './components/ui/switch';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export type JLPTLevel = 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
export type JLPTSection = 'kanji' | 'vocabulary' | 'grammar' | 'dokkai';

const AppContent: React.FC = () => {
  const { user, profile, loading, signIn, logout, showFurigana, setShowFurigana } = useAuth();
  const [view, setView] = useState<'dashboard' | 'lessons' | 'reviews' | 'items' | 'community' | 'jlpt'>('dashboard');
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>('n5');
  const [selectedSection, setSelectedSection] = useState<JLPTSection>('kanji');
  const [lessonItems, setLessonItems] = useState<Item[]>([]);
  const [reviewItems, setReviewItems] = useState<(Item & { userItem: UserItem })[]>([]);

  const startLessons = async () => {
    if (!user) return;
    try {
      const itemsSnap = await getDocs(collection(db, 'items'));
      const allItems = itemsSnap.docs.map(doc => doc.data() as Item);
      
      const userItemsSnap = await getDocs(collection(db, `users/${user.uid}/userItems`));
      const userItemIds = userItemsSnap.docs.map(doc => doc.data().itemId);
      
      const available = allItems.filter(item => 
        !userItemIds.includes(item.id) && item.level <= (profile?.level || 1)
      ).slice(0, 5); // Take 5 items at a time

      if (available.length > 0) {
        setLessonItems(available);
        setView('lessons');
      } else {
        toast.info("No lessons available right now!");
      }
    } catch (error) {
      toast.error("Failed to start lessons. Check permissions.");
    }
  };

  const startReviews = async () => {
    if (!user) return;
    try {
      const itemsSnap = await getDocs(collection(db, 'items'));
      const allItems = itemsSnap.docs.reduce((acc, doc) => {
        const data = doc.data() as Item;
        acc[data.id] = data;
        return acc;
      }, {} as Record<string, Item>);
      
      const userItemsSnap = await getDocs(collection(db, `users/${user.uid}/userItems`));
      const ready = userItemsSnap.docs
        .map(doc => doc.data() as UserItem)
        .filter(ui => {
          if (ui.srsStage === 0 || ui.srsStage === 9) return false;
          if (!ui.nextReviewAt) return true;
          return new Date(ui.nextReviewAt) <= new Date();
        })
        .map(ui => ({ ...allItems[ui.itemId], userItem: ui }));

      if (ready.length > 0) {
        setReviewItems(ready);
        setView('reviews');
      } else {
        toast.info("No reviews available right now!");
      }
    } catch (error) {
      toast.error("Failed to start reviews. Check permissions.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-sky-200 rounded-full mb-4" />
          <div className="h-4 w-32 bg-slate-200 rounded" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 p-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center space-y-8">
          <div className="flex justify-center">
            <div className="bg-sky-100 p-4 rounded-2xl">
              <GraduationCap className="w-12 h-12 text-sky-600" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Jhakkas Nihongo</h1>
            <p className="text-slate-500 mt-2">Master Japanese Kanji and Vocabulary with SRS</p>
          </div>
          <Button onClick={signIn} className="w-full h-14 text-lg bg-sky-600 hover:bg-sky-700 rounded-xl">
            Sign in with Google
          </Button>
          <p className="text-xs text-slate-400">
            By signing in, you agree to our terms of service.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 
                className="text-2xl font-black text-sky-600 cursor-pointer shrink-0" 
                onClick={() => setView('dashboard')}
              >
                Jhakkas Nihongo
              </h1>
              <div className="flex overflow-x-auto no-scrollbar gap-2 py-2 md:py-0 md:overflow-visible md:gap-4">
                <button 
                  onClick={() => setView('dashboard')}
                  className={`text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${view === 'dashboard' ? 'bg-sky-50 text-sky-600' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Dashboard
                </button>
                {(['n5', 'n4', 'n3', 'n2', 'n1'] as JLPTLevel[]).map((level) => (
                  <button 
                    key={level}
                    onClick={() => {
                      setSelectedLevel(level);
                      setView('jlpt');
                    }}
                    className={`text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-colors uppercase whitespace-nowrap ${view === 'jlpt' && selectedLevel === level ? 'bg-sky-50 text-sky-600' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    {level}
                  </button>
                ))}
                <button 
                  onClick={() => setView('items')}
                  className={`text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${view === 'items' ? 'bg-sky-50 text-sky-600' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Items
                </button>
                <button 
                  onClick={() => setView('community')}
                  className={`text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${view === 'community' ? 'bg-sky-50 text-sky-600' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Community
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Furigana</span>
                <Switch checked={showFurigana} onCheckedChange={setShowFurigana} />
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">{profile?.displayName}</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase mt-1">Level {profile?.level}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={logout} className="text-slate-400 hover:text-rose-600">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Sub-navbar for JLPT Sections */}
          {view === 'jlpt' && (
            <div className="h-12 flex items-center gap-8 border-t border-slate-100">
              {(['kanji', 'vocabulary', 'grammar', 'dokkai'] as JLPTSection[]).map((section) => (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors relative h-full flex items-center ${selectedSection === section ? 'text-sky-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {section}
                  {selectedSection === section && (
                    <motion.div 
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          {view === 'dashboard' && (
            <Dashboard onStartLessons={startLessons} onStartReviews={startReviews} />
          )}
          {view === 'jlpt' && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
                    JLPT <span className="text-sky-600">{selectedLevel}</span> <span className="text-slate-300">/</span> {selectedSection}
                  </h2>
                  <p className="text-slate-500 mt-2 font-medium">Mastering {selectedLevel} {selectedSection} with Minna no Nihongo curriculum.</p>
                </div>
              </div>
              <JLPTView level={selectedLevel} section={selectedSection} />
            </div>
          )}
          {view === 'items' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">All Items</h2>
              <ItemsView />
            </div>
          )}
          {view === 'community' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Community</h2>
              <CommunityView />
            </div>
          )}
        </div>

        {view === 'lessons' && (
          <LessonSession 
            items={lessonItems} 
            onComplete={() => {
              setView('dashboard');
              toast.success("Lessons completed! New items added to your SRS queue.");
            }}
            onCancel={() => setView('dashboard')}
          />
        )}
        {view === 'reviews' && (
          <ReviewSession 
            items={reviewItems} 
            onComplete={() => {
              setView('dashboard');
              toast.success("Reviews finished! Your SRS levels have been updated.");
            }}
            onCancel={() => setView('dashboard')}
          />
        )}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
