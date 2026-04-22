import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/AuthContext';
import { useI18n } from '../lib/i18n';
import { PersistenceService } from '../lib/services/PersistenceService';
import { getAllItems } from '../lib/curriculum';
import { Item, UserItem } from '../types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ProgressCharts } from './ProgressCharts';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  Flame, 
  Briefcase,
  UserCheck,
  Zap,
  Target,
  CheckCircle,
  Layout,
  BarChart3,
  Megaphone
} from 'lucide-react';
import { DashboardSkeleton } from './DashboardSkeleton';

interface DashboardProps {
  onStartLessons: () => void;
  onStartReviews: () => void;
  onSelectLevel: (level: number) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartLessons, onStartReviews, onSelectLevel }) => {
  const { user, profile, getTodayProgress, calculateCurrentStreak, getLevelStats } = useAuth();
  const { t } = useI18n();
  
  const [quotes] = useState([
    "Consistency is the path to mastery.",
    "Every mission completed strengthens your Core link.",
    "Focus on the matrix. Mastery is your destination.",
    "Your synaptic matrix is expanding. Keep pushing.",
    "Small steps, big impact. Keep learning.",
    "The best time to practice was yesterday. The second best time is now."
  ]);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  const [items, setItems] = useState<Item[]>([]);
  const [userItems, setUserItems] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [levelStats, setLevelStats] = useState<Record<number, { seen: number; total: number; percentage: number }>>({});

  useEffect(() => {
    const loadData = async () => {
      if (!user) return;
      setLoading(true);
      const allItems = getAllItems();
      const storedUserItems = await PersistenceService.getUserItems();
      const stats = await getLevelStats();
      
      setItems(allItems);
      setUserItems(storedUserItems);
      setLevelStats(stats);
      setLoading(false);
    };
    loadData();
  }, [user]);

  const reviewsAvailable = userItems.filter(ui => {
    if (ui.srsStage === 0 || ui.srsStage === 9) return false;
    if (!ui.nextReviewAt) return true;
    return new Date(ui.nextReviewAt) <= new Date();
  }).length;

  const srsDistribution = {
    apprentice: userItems.filter(ui => ui.srsStage >= 1 && ui.srsStage <= 4).length,
    guru: userItems.filter(ui => ui.srsStage >= 5 && ui.srsStage <= 6).length,
    master: userItems.filter(ui => ui.srsStage >= 7 && ui.srsStage <= 8).length,
    burned: userItems.filter(ui => ui.srsStage === 9).length,
  };

  const { percentage, total: todayTotal } = getTodayProgress();
  const streak = calculateCurrentStreak();

  const tracks = [
    { id: 5, label: 'N5', title: 'N5 Foundation', desc: 'Basics of daily Japanese.', icon: <GraduationCap size={24} className="text-blue-500" /> },
    { id: 4, label: 'N4', title: 'N4 Pre-Int', desc: 'Everyday life communication.', icon: <BookOpen size={24} className="text-emerald-500" /> },
    { id: 3, label: 'N3', title: 'N3 Intermediate', desc: 'Bridge to advanced fluency.', icon: <Briefcase size={24} className="text-amber-500" /> },
    { id: 2, label: 'N2', title: 'N2 Pre-Adv', desc: 'Business and specialized topics.', icon: <UserCheck size={24} className="text-fuchsia-500" /> },
    { id: 1, label: 'N1', title: 'N1 Advanced', desc: 'Polished academic proficiency.', icon: <Zap size={24} className="text-rose-500" /> },
  ];

  if (loading) return <DashboardSkeleton />;

  return (
    <div className="min-h-screen bg-background">
      {/* SECTION 1: Absolute Black Hero (Chiaroscuro) */}
      <div className="bg-black text-white p-4 md:p-12 space-y-6 md:space-y-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic">
                JHAKKAS <span className="text-white NOT-italic">CORE</span>
              </h1>
              <p className="text-[10px] md:text-lg font-black text-primary tracking-[0.2em] uppercase mt-1 md:mt-2">
                WELCOME, {profile?.displayName || 'RECRUIT'}
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-60">SYNC ACTIVE</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Session Convergence</p>
                <span className="text-2xl font-black tabular-nums">{percentage}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-sm overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, percentage)}%` }}
                  className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />
              </div>
              <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">
                {todayTotal} OBJECTS CACHED / GOAL {profile?.dailyGoal || 20}
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <ProgressCharts profile={profile} srsDistribution={srsDistribution} isDark />
          </div>
        </div>
      </div>

      {/* Release Announcement Banner */}
      <div className="bg-primary/10 border-b border-primary/20 py-3 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-primary/20 flex items-center justify-center shrink-0">
              <Megaphone size={14} className="text-primary animate-bounce" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase text-primary tracking-widest leading-none mb-1">
                SYSTEM_UPDATE_DEPLOYED v3.2.3
              </p>
              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest truncate">
                Universal Furigana Engine Stabilized: High-fidelity Kanji preservation and ruby alignment verified.
              </p>
            </div>
          </div>
          <Badge variant="outline" className="hidden md:flex border-primary/30 text-primary text-[8px] font-black uppercase tracking-tighter shrink-0">
            STABLE_BUILD
          </Badge>
        </div>
      </div>

      {/* SECTION 2: Pure White Operations (Chiaroscuro) */}
      <div className="bg-white text-black p-6 md:p-12 border-b border-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black uppercase tracking-tight">MISSION STATUS</h2>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Sector Performance & Review Protocols</p>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <div className="px-4 md:px-6 py-2 md:py-3 bg-black text-white rounded-sm border border-white/10">
                <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] opacity-60">Streak</p>
                <p className="text-sm md:text-xl font-black">{streak} DAYS</p>
              </div>
              <Button 
                onClick={onStartReviews}
                disabled={reviewsAvailable === 0}
                className="h-10 md:h-12 px-4 md:px-8 bg-primary rounded-sm font-black text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase flex-1"
              >
                REVIEWS ({reviewsAvailable})
              </Button>
            </div>
          </div>

          {/* Level Stats Detail */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
            {[1,2,3,4,5].reverse().map(l => (
              <div key={l} className="p-2 md:p-4 bg-muted/30 border border-black/5 rounded-sm space-y-1 md:space-y-3">
                <p className="text-[8px] md:text-[10px] font-black opacity-60 uppercase">N{l}</p>
                <div className="h-1 bg-black/5 rounded-sm overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${levelStats[l]?.percentage || 0}%` }}
                    className="h-full bg-black/20"
                  />
                </div>
                <p className="text-xs md:text-xl font-black tabular-nums">{levelStats[l]?.percentage || 0}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: Absolute Black Hub (Chiaroscuro) */}
      <div className="bg-black text-white p-6 md:p-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <div className="space-y-1">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">LEARNING <span className="NOT-italic text-primary">TRACKS</span></h2>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Tactical Sector Access</p>
            </div>
            <div className="hidden md:block">
               <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-30 text-right">REPOSITORY PROTECTED</p>
               <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-30 text-right">ENROLLMENT REQUIRED FOR CORE SYNC</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {tracks.map((track) => {
              const isEnrolled = profile?.enrolledLevels?.includes(track.id);
              const stats = levelStats[track.id] || { percentage: 0 };
              return (
              <div
                key={track.id}
                className={`group relative p-6 rounded-sm bg-card border flex flex-col h-full transition-all hover:border-primary/40 ${
                    isEnrolled ? 'border-primary shadow-lg' : 'border-border opacity-70 hover:opacity-100'
                }`}
              >
                {isEnrolled && (
                    <div className="absolute top-4 right-4 text-primary bg-primary/10 p-1.5 ">
                        <CheckCircle size={14} strokeWidth={3} />
                    </div>
                )}
                <div className={`w-12 h-12 rounded-sm bg-muted flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  {track.icon}
                </div>
                <h3 className="text-lg font-black uppercase text-foreground leading-tight">{track.title}</h3>
                
                {/* Completion Bar */}
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-[8px] font-black uppercase opacity-60">
                    <span>Sync Progress</span>
                    <span>{stats.percentage}%</span>
                  </div>
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stats.percentage}%` }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-relaxed mt-4 line-clamp-2 min-h-[2.5rem]">{track.desc}</p>
                
                <Button 
                  variant={isEnrolled ? "default" : "outline"}
                  className={`w-full font-black rounded-sm mt-auto h-10 text-[10px] tracking-widest uppercase shadow-none ${
                    isEnrolled ? 'bg-primary text-white' : 'border-border text-foreground hover:bg-muted'
                  }`}
                  onClick={() => onSelectLevel(track.id)}
                >
                  {isEnrolled ? "RESUME MISSION" : "INIT SYNC"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

const ActionCard = ({ title, subtitle, count, icon, onClick, disabled, statusText = "Available" }: any) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`group relative p-6 rounded-sm border text-left flex justify-between items-center transition-all ${
      disabled 
        ? 'opacity-40 cursor-not-allowed bg-muted/30 border-border' 
        : 'bg-card border-border hover:border-primary/20 hover:shadow-lg'
    }`}
  >
    <div className="space-y-1">
      <h3 className="text-sm font-black text-foreground uppercase tracking-[0.2em]">{title}</h3>
      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1">Jhakkas Activity</p>
      <div className="flex items-end gap-3">
        <span className="text-4xl font-black tabular-nums">{count}</span>
        <span className="text-sm font-bold text-muted-foreground uppercase pb-1 tracking-widest">Items SYNCED</span>
      </div>
    </div>
    <div className="w-16 h-16 rounded-sm bg-muted/50 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
      {icon}
    </div>
  </button>
);
