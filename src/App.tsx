import React, { useState } from 'react';
import { useAuth } from './lib/AuthContext';
import { Dashboard } from './components/Dashboard';
import { LessonSession } from './components/LessonSession';
import { ReviewSession } from './components/ReviewSession';
import { ItemsView } from './components/ItemsView';
import { JLPTView } from './components/JLPTView';
import { CommunityView } from './components/CommunityView';
import { SettingsView } from './components/SettingsView';
import { Item, UserItem } from './types';
import { INITIAL_ITEMS } from './lib/initialData';
import { persistence } from './lib/persistence';
import { Layout, Menu, BookOpen, GraduationCap, Users, Settings, Package, Info } from 'lucide-react';
import { Button } from './components/ui/button';
import { Toaster } from 'sonner';

export type JLPTLevel = 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
export type JLPTSection = 'kanji' | 'vocabulary' | 'grammar' | 'dokkai';

function App() {
  const { user, profile, loading, mockSignIn } = useAuth();
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'items' | 'jlpt' | 'community' | 'settings'>('dashboard');
  const [session, setSession] = useState<{ type: 'lesson' | 'review', items: any[] } | null>(null);
  const [jlptState, setJlptState] = useState<{ level: JLPTLevel, section: JLPTSection }>({ level: 'n5', section: 'kanji' });

  if (loading) return null;

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-background flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8 animate-in fade-in duration-700">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-sky-600 shadow-2xl shadow-sky-200 dark:shadow-none mb-4">
              <span className="text-4xl">🇯🇵</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Jhakkas Nihongo</h1>
            <p className="text-slate-500 font-medium italic">Master Japanese Offline. v2.0.0</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-bold mb-6 text-center text-slate-800 dark:text-slate-200">Local Offline Login</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              mockSignIn(formData.get('username') as string, formData.get('password') as string);
            }} className="space-y-4">
              <input
                name="username"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-sky-500 transition-all font-medium"
                placeholder="Enter Student ID"
                required
              />
              <input
                name="password"
                type="password"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-sky-500 transition-all font-medium"
                placeholder="Password"
                required
              />
              <Button type="submit" className="w-full h-14 bg-sky-600 hover:bg-sky-700 text-lg font-bold rounded-2xl shadow-lg shadow-sky-100 dark:shadow-none">
                Access Dashboard
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (session) {
    if (session.type === 'lesson') {
      return <LessonSession items={session.items} onComplete={() => setSession(null)} onCancel={() => setSession(null)} />;
    }
    return <ReviewSession items={session.items} onComplete={() => setSession(null)} onCancel={() => setSession(null)} />;
  }

  const startLessons = () => {
    const userItems = persistence.getUserItems();
    const available = INITIAL_ITEMS.filter(item => 
      !userItems.find(ui => ui.itemId === item.id) && (item.level || 1) <= (profile?.level || 1)
    ).slice(0, 5);
    if (available.length > 0) setSession({ type: 'lesson', items: available });
  };

  const startReviews = () => {
    const userItems = persistence.getUserItems();
    const ready = userItems.filter(ui => {
      if (ui.srsStage === 0 || ui.srsStage === 9) return false;
      return !ui.nextReviewAt || new Date(ui.nextReviewAt) <= new Date();
    }).map(ui => {
      const item = INITIAL_ITEMS.find(i => i.id === ui.itemId);
      return item ? { ...item, userItem: ui } : null;
    }).filter(Boolean);
    
    if (ready.length > 0) setSession({ type: 'review', items: ready });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background pb-24 md:pb-0 md:pl-20 transition-colors duration-500">
      <Toaster position="top-center" richColors />
      
      {/* Desktop Sidebar / Tablet Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 md:h-screen md:w-20 bg-white dark:bg-slate-900 border-t md:border-t-0 md:border-r border-slate-100 dark:border-slate-800 flex md:flex-col items-center justify-around md:justify-center gap-2 md:gap-8 z-50 transition-colors">
        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-600 text-white font-black text-xl mb-auto mt-6">
          J
        </div>
        
        <NavButton active={currentTab === 'dashboard'} onClick={() => setCurrentTab('dashboard')} icon={<Layout />} label="Home" />
        <NavButton active={currentTab === 'items'} onClick={() => setCurrentTab('items')} icon={<Package />} label="Market" />
        <NavButton active={currentTab === 'jlpt'} onClick={() => setCurrentTab('jlpt')} icon={<GraduationCap />} label="Learn" />
        <NavButton active={currentTab === 'community'} onClick={() => setCurrentTab('community')} icon={<Info />} label="About" />
        <NavButton active={currentTab === 'settings'} onClick={() => setCurrentTab('settings')} icon={<Settings />} label="Config" />
        
        <div className="hidden md:block mt-auto mb-6">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-500">
            {profile?.displayName?.charAt(0)}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="p-4 md:p-8">
        {currentTab === 'dashboard' && <Dashboard onStartLessons={startLessons} onStartReviews={startReviews} />}
        {currentTab === 'items' && <ItemsView />}
        {currentTab === 'jlpt' && (
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Learning Hub</h2>
              <div className="flex flex-wrap gap-2">
                {(['n5', 'n4', 'n3', 'n2', 'n1'] as JLPTLevel[]).map(level => (
                  <Button 
                    key={level}
                    variant={jlptState.level === level ? 'default' : 'outline'}
                    onClick={() => setJlptState({ ...jlptState, level })}
                    className={`h-11 px-6 rounded-xl font-bold uppercase tracking-widest text-xs ${
                      jlptState.level === level ? 'bg-sky-600' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {level}
                  </Button>
                ))}
              </div>
              <div className="flex overflow-x-auto no-scrollbar gap-2">
                {(['kanji', 'vocabulary', 'grammar', 'dokkai'] as JLPTSection[]).map(section => (
                  <Button 
                    key={section}
                    variant={jlptState.section === section ? 'secondary' : 'ghost'}
                    onClick={() => setJlptState({ ...jlptState, section })}
                    className={`rounded-xl font-bold uppercase tracking-widest text-xs h-10 px-5 ${
                      jlptState.section === section ? 'bg-sky-100 dark:bg-sky-900/30 text-sky-600' : 'text-slate-400'
                    }`}
                  >
                    {section}
                  </Button>
                ))}
              </div>
            </div>
            <JLPTView level={jlptState.level} section={jlptState.section} />
          </div>
        )}
        {currentTab === 'community' && <CommunityView />}
        {currentTab === 'settings' && <SettingsView />}
      </main>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 ${
        active 
          ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 scale-110 shadow-sm' 
          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">{label}</span>
    </button>
  );
}

export default App;
