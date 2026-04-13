import React, { useState } from 'react';
import { useAuth } from './lib/AuthContext';
import { Dashboard } from './components/Dashboard';
import { LessonSession } from './components/LessonSession';
import { ReviewSession } from './components/ReviewSession';
import { ItemsView } from './components/ItemsView';
import { JLPTView } from './components/JLPTView';
import { CommunityView } from './components/CommunityView';
import { SettingsView } from './components/SettingsView';
import { AdminView } from './components/AdminView';
import { Item, UserItem } from './types';
import { getAllItems } from './lib/curriculum';
import { persistence } from './lib/persistence';
import { Layout, Menu, BookOpen, GraduationCap, Users, Settings, Package, Info, Activity } from 'lucide-react';
import { Button } from './components/ui/button';
import { Toaster } from 'sonner';

export type JLPTLevel = 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
export type JLPTSection = 'kanji' | 'vocabulary' | 'grammar' | 'dokkai';

function App() {
  const { user, profile, loading, mockSignIn } = useAuth();
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'items' | 'jlpt' | 'community' | 'settings' | 'admin'>('dashboard');
  const [session, setSession] = useState<{ type: 'lesson' | 'review', items: any[] } | null>(null);
  const [jlptState, setJlptState] = useState<{ level: JLPTLevel, section: JLPTSection }>({ level: 'n5', section: 'vocabulary' });
  const [focusMode, setFocusMode] = useState(false);

  if (loading) return null;

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full space-y-12 animate-in fade-in zoom-in duration-700">
          <div className="text-center space-y-6">
            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-30 animate-pulse" />
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-indigo-600 shadow-2xl text-white font-black text-4xl">
                J
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase">Jhakkas Nihongo</h1>
              <p className="text-indigo-400 font-bold tracking-[0.3em] text-[10px] uppercase">Neural Language Interface v2.5</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 shadow-2xl shadow-indigo-500/10">
            <h2 className="text-sm font-black mb-8 text-center text-gray-500 uppercase tracking-[0.2em]">Authentication Required</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              mockSignIn(formData.get('username') as string, formData.get('password') as string);
            }} className="space-y-6">
              <div className="space-y-2">
                <input
                  name="username"
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:ring-2 ring-indigo-500 transition-all font-bold"
                  placeholder="STUDENT_ID"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  name="password"
                  type="password"
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:ring-2 ring-indigo-500 transition-all font-bold"
                  placeholder="PASS_CODE"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-16 bg-indigo-600 hover:bg-indigo-500 text-lg font-black rounded-2xl shadow-xl shadow-indigo-500/20 transition-all">
                INITIATE SYNC
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
    const allItems = getAllItems();
    const userItems = persistence.getUserItems();
    const available = allItems.filter(item => 
      !userItems.find(ui => ui.itemId === item.id) && (item.level || 1) <= (profile?.level || 1)
    ).slice(0, 5);
    if (available.length > 0) setSession({ type: 'lesson', items: available });
  };

  const startReviews = () => {
    const allItems = getAllItems();
    const userItems = persistence.getUserItems();
    const ready = userItems.filter(ui => {
      if (ui.srsStage === 9) return false; // Burned
      return !ui.nextReviewAt || new Date(ui.nextReviewAt) <= new Date();
    }).map(ui => {
      const item = allItems.find(i => i.id === ui.itemId);
      return item ? { ...item, userItem: ui } : null;
    }).filter(Boolean);
    
    if (ready.length > 0) setSession({ type: 'review', items: ready });
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0F] text-white pb-24 md:pb-0 md:pl-24 font-sans selection:bg-indigo-500 selection:text-white neural-grid ${focusMode ? 'focus-active' : ''}`}>
      <div className="scanline" />
      <Toaster position="top-center" theme="dark" richColors />
      
      {/* Tokyo Midnight Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-24 md:h-screen md:w-24 bg-[#0A0A14]/80 backdrop-blur-3xl border-t md:border-t-0 md:border-r border-white/5 flex md:flex-col items-center justify-around md:justify-center gap-2 md:gap-10 z-50">
        <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-600 text-white font-black text-2xl mb-auto mt-10 shadow-lg shadow-indigo-500/20">
          J
        </div>
        
        <NavButton active={currentTab === 'dashboard'} onClick={() => setCurrentTab('dashboard')} icon={<Activity />} label="HQ" />
        <NavButton active={currentTab === 'jlpt'} onClick={() => setCurrentTab('jlpt')} icon={<GraduationCap />} label="LEARN" />
        <NavButton active={currentTab === 'items'} onClick={() => setCurrentTab('items')} icon={<Package />} label="DATA" />
        <NavButton active={false} onClick={() => setFocusMode(!focusMode)} icon={<Zap className={focusMode ? 'text-indigo-400' : ''} />} label="FOCUS" />
        <NavButton active={currentTab === 'community'} onClick={() => setCurrentTab('community')} icon={<Users />} label="NEXUS" />
        <NavButton active={currentTab === 'settings'} onClick={() => setCurrentTab('settings')} icon={<Settings />} label="CONFIG" />
        
        {profile?.role === 'admin' && (
          <NavButton active={currentTab === 'admin'} onClick={() => setCurrentTab('admin')} icon={<Package className="text-rose-500" />} label="CORE" />
        )}
        
        <div className="hidden md:block mt-auto mb-10">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-xs text-indigo-400">
            {profile?.displayName?.charAt(0)}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="animate-in fade-in duration-700">
        {currentTab === 'dashboard' && <Dashboard onStartLessons={startLessons} onStartReviews={startReviews} />}
        {currentTab === 'items' && <div className="p-8"><ItemsView /></div>}
        {currentTab === 'jlpt' && (
          <div className="p-8 space-y-12">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-2">
                  <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Learning Hub</h2>
                  <p className="text-gray-500 font-medium italic">Architecting your Japanese knowledge base.</p>
                </div>
                <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
                  {(['n5', 'n4', 'n3', 'n2', 'n1'] as JLPTLevel[]).map(level => (
                    <button 
                      key={level}
                      onClick={() => setJlptState({ ...jlptState, level })}
                      className={`h-11 px-6 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${
                        jlptState.level === level ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex overflow-x-auto no-scrollbar gap-4 border-b border-white/5 pb-6">
                {(['vocabulary', 'grammar', 'kanji', 'dokkai'] as JLPTSection[]).map(section => (
                  <button 
                    key={section}
                    onClick={() => setJlptState({ ...jlptState, section })}
                    className={`rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] h-12 px-8 transition-all border ${
                      jlptState.section === section 
                        ? 'bg-white/10 border-indigo-500 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.1)]' 
                        : 'text-gray-600 border-white/5 hover:border-white/10'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
            <div className="max-w-7xl mx-auto">
              <JLPTView level={jlptState.level} section={jlptState.section} />
            </div>
          </div>
        )}
        {currentTab === 'community' && < CommunityView />}
        {currentTab === 'settings' && <SettingsView />}
        {currentTab === 'admin' && <AdminView />}
      </main>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-4 rounded-3xl transition-all duration-500 group ${
        active 
          ? 'bg-indigo-600/10 text-indigo-400 shadow-[inset_0_0_20px_rgba(99,102,241,0.05)]' 
          : 'text-gray-600 hover:text-gray-400'
      }`}
    >
      <div className={`transition-transform duration-500 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 24, strokeWidth: active ? 3 : 2 })}
      </div>
      <span className="text-[9px] font-black uppercase tracking-[0.3em] hidden md:block">{label}</span>
      {active && <motion.div layoutId="nav-active" className="absolute left-0 w-1 h-8 bg-indigo-500 rounded-r-full hidden md:block" />}
    </button>
  );
}

export default App;

