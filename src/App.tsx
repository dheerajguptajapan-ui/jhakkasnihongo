import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from './lib/AuthContext';
import { Dashboard } from './components/Dashboard';
import { ReviewSession } from './components/ReviewSession';
import { ItemsView } from './components/ItemsView';
import { SettingsView } from './components/SettingsView';
import { AdminView } from './components/AdminView';
import { KanaView } from './components/KanaView';
import { LessonSession } from './components/LessonSession';
import { MasteryHubView } from './components/MasteryHubView';
import { WelcomeView } from './components/WelcomeView';
import { 
  Search as SearchIcon, 
  Settings as SettingsIcon, 
  GraduationCap as LearnIcon, 
  Activity, 
  BookOpen, 
  Package, 
  Zap, 
  Binary,
  Paintbrush,
  Eye,
  EyeOff,
  User,
  Map
} from 'lucide-react';
import { JLPTQuizEngine } from './components/JLPTQuizEngine';
import { AppLogo } from './components/AppLogo';
import { JhakkasBot } from './components/JhakkasBot';
import { useI18n } from './lib/i18n';
import { Item } from './types';
import { getAllItems } from './lib/curriculum';
import { PersistenceService } from './lib/services/PersistenceService';
import { CurriculumService } from './lib/services/CurriculumService';
import { Button } from './components/ui/button';
import { Toaster, toast } from 'sonner';

export type JLPTLevel = 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
export type JLPTSection = 'kanji' | 'vocabulary' | 'grammar' | 'dokkai';

function App() {
  const { user, profile, loading, settings, updateSettings, getTodayProgress } = useAuth();
  const { t } = useI18n();
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'items' | 'jlpt' | 'kana' | 'settings' | 'admin'>('dashboard');
  const [session, setSession] = useState<{ type: 'review', items: any[] } | null>(null);
  const [mascotState, setMascotState] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeQuiz, setActiveQuiz] = useState<{
    level: number;
    lesson: number;
    category?: string;
    isCumulative: boolean;
    limit: number;
  } | null>(null);
  const [activeLessonSession, setActiveLessonSession] = useState<Item[] | null>(null);
  const [preselectedLevel, setPreselectedLevel] = useState<number>(5);

  React.useEffect(() => {
    CurriculumService.initialize();
  }, []);

  if (loading) return null;

  if (!user) {
    return (
      <>
        <Toaster position="top-center" theme={settings.theme === 'dark' ? 'dark' : 'light'} richColors />
        <WelcomeView />
      </>
    );
  }

  if (activeLessonSession) {
    return (
      <LessonSession 
        items={activeLessonSession} 
        onComplete={() => setActiveLessonSession(null)} 
        onCancel={() => setActiveLessonSession(null)} 
      />
    );
  }

  if (session) {
    return <ReviewSession items={session.items} onComplete={() => setSession(null)} onCancel={() => setSession(null)} />;
  }

  const startReviews = async () => {
    const allItems = getAllItems();
    const allUserItems = await PersistenceService.getUserItems();
    // Isolation check: only current user items
    const userItems = allUserItems.filter(i => i.uid === user.uid);

    const ready = userItems.filter(ui => {
      if (ui.srsStage === 9) return false; // Burned
      return !ui.nextReviewAt || new Date(ui.nextReviewAt) <= new Date();
    }).map(ui => {
      const item = allItems.find(i => i.id === ui.itemId);
      return item ? { ...item, userItem: ui } : null;
    }).filter(Boolean);
    
    if (ready.length > 0) setSession({ type: 'review', items: ready });
    else toast.info("No reviews pending.");
  };

  const startLessons = async (level: number = 1, lessonNum: number = 1) => {
    const allItems = CurriculumService.getChapterItems(level, lessonNum);
    const allUserItems = await PersistenceService.getUserItems();
    const userItems = allUserItems.filter(i => i.uid === user.uid);
    
    const newItems = allItems.filter(ai => !userItems.some(ui => ui.itemId === ai.id));
    
    const limit = settings.dailyNewCards || 20;
    const sessionItems = newItems.slice(0, limit);

    if (sessionItems.length > 0) {
      setActiveLessonSession(sessionItems);
    } else {
      toast.info('All items mastered for this section.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 antialiased">
      <Toaster position="top-center" theme={settings.theme === 'dark' ? 'dark' : 'light'} richColors />

      <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md z-50 px-6 flex items-center justify-between border-b border-border/50">
        <div className="flex items-center gap-3">
          <AppLogo size={32} />
          <span className="font-black tracking-tighter text-xl uppercase italic">JHAKKAS <span className="text-primary NOT-italic">NIHONGO</span></span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em]">Daily Focus</span>
            <div className="w-32 h-1 bg-muted rounded-full mt-1.5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${getTodayProgress().percentage}%` }}
                className="h-full bg-primary" 
              />
            </div>
          </div>
          <div className="group relative">
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 cursor-pointer hover:border-primary transition-all">
               <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-primary font-black text-xs uppercase overflow-hidden">
                 {profile?.displayName?.charAt(0) || <User size={16} />}
               </div>
            </div>
          </div>
        </div>
      </header>
      
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 md:top-24 md:bottom-auto bg-card border border-border rounded-sm p-2 flex md:flex-col gap-1 z-50 shadow-xl">
        <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-sm bg-primary text-primary-foreground font-black text-xl mb-4">
          J
        </div>
        
        <NavButton active={currentTab === 'dashboard'} onClick={() => setCurrentTab('dashboard')} icon={<Activity />} label={t('hq')} />
        <NavButton active={currentTab === 'kana'} onClick={() => setCurrentTab('kana')} icon={<BookOpen />} label={t('kana')} />
        <NavButton active={currentTab === 'jlpt'} onClick={() => setCurrentTab('jlpt')} icon={<Map />} label="MASTERY HUB" />
        <NavButton active={currentTab === 'items'} onClick={() => setCurrentTab('items')} icon={<SearchIcon />} label={t('search')} />
        
        <div className="w-full h-px bg-border/50 my-2 hidden md:block" />

        <NavButton 
          active={false} 
          onClick={() => updateSettings({ showFurigana: !settings.showFurigana })} 
          icon={settings.showFurigana ? <Eye className="text-emerald-500" /> : <EyeOff className="text-rose-500" />} 
          label="FURI" 
        />

        <NavButton 
          active={false} 
          onClick={() => {
            const next = settings.theme === 'light' ? 'dark' : 'light';
            updateSettings({ theme: next });
          }} 
          icon={<Paintbrush />} 
          label="COLOR" 
        />

        <NavButton active={currentTab === 'settings'} onClick={() => setCurrentTab('settings')} icon={<SettingsIcon />} label={t('settings')} />
        
        {user?.role === 'admin' && (
          <NavButton active={currentTab === 'admin'} onClick={() => setCurrentTab('admin')} icon={<Package className="text-rose-500" />} label="CORE" />
        )}
      </nav>

      <main className="pt-24 pb-32 md:pb-6 md:pl-32 lg:pl-32 max-w-7xl mx-auto min-h-screen overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="px-4 md:px-8"
          >
            {currentTab === 'dashboard' && (
              <Dashboard 
                onStartLessons={() => startLessons(preselectedLevel, 1)} 
                onStartReviews={startReviews} 
                onSelectLevel={(level) => {
                  setPreselectedLevel(level);
                  setCurrentTab('jlpt');
                }}
              />
            )}
            {currentTab === 'items' && <ItemsView />}
            {currentTab === 'jlpt' && (
              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  {!activeQuiz ? (
                    <motion.div
                      key="selection"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <MasteryHubView 
                        initialLevel={preselectedLevel}
                        lockLevel={true}
                        onStartQuiz={(level, lesson, category, isCumulative, limit) => {
                          setActiveQuiz({ level, lesson, category, isCumulative, limit });
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="quiz"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <JLPTQuizEngine 
                        level={activeQuiz.level}
                        lessonNumber={activeQuiz.lesson}
                        category={activeQuiz.category}
                        limit={activeQuiz.limit}
                        isCumulative={activeQuiz.isCumulative}
                        onResult={(isCorrect) => {
                          setMascotState(isCorrect ? 'success' : 'error');
                          setTimeout(() => setMascotState('idle'), 1200);
                        }}
                        onFinish={() => setActiveQuiz(null)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
            {currentTab === 'kana' && (
              <KanaView 
                onResult={(isCorrect) => {
                  setMascotState(isCorrect ? 'success' : 'error');
                  setTimeout(() => setMascotState('idle'), 2000);
                }} 
              />
            )}
            {currentTab === 'settings' && <SettingsView />}
            {currentTab === 'admin' && <AdminView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Mascot */}
      <div className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[60]">
        <JhakkasBot state={mascotState} />
      </div>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-sm transition-all relative group ${
        active 
          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
          : 'text-muted-foreground hover:bg-muted/80 hover:text-foreground'
      }`}
    >
      <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:translate-y-[-2px]'}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 18, strokeWidth: 2.5 } as any)}
      </div>
      <span className="text-[8px] font-black uppercase tracking-[0.2em] mt-2 hidden md:block opacity-70">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-active"
          className="absolute -left-1 w-1 h-6 bg-primary rounded-full hidden md:block" 
        />
      )}
    </button>
  );
}

export default App;
