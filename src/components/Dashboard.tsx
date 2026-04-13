import React, { useEffect, useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { getAllItems } from '../lib/curriculum';
import { Item, UserItem, SRS_STAGES_NAMES } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { BookOpen, GraduationCap, Trophy, BarChart3, Zap, Flame, Target } from 'lucide-react';
import { motion } from 'framer-motion';
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

    // Modular Curriculum Loading
    const allItems = getAllItems();
    const storedUserItems = persistence.getUserItems();
    
    setItems(allItems);
    setUserItems(storedUserItems);
    setLoading(false);
  }, [user]);

  const reviewsAvailable = userItems.filter(ui => {
    if (ui.srsStage === 0) return false;
    if (ui.srsStage === 9) return false;
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

  const COLORS = ['#64748b', '#38bdf8', '#0ea5e9', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#ef4444'];

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
      <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
      <p className="text-gray-500 font-black uppercase tracking-widest text-[10px]">Accessing Core...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 pb-24">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(79,70,229,0.3)]">
              J
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase">
              Okaeri, <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{profile?.displayName}</span>
            </h1>
          </div>
          <p className="text-gray-500 font-medium italic pl-1 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             Core systems operational • {items.length} lexical nodes indexed
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">Cognitive Load</span>
             <span className="text-2xl font-black text-white">{Math.round((userItems.length / items.length) * 100)}%</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Flame className="text-orange-500" size={24} />
          </div>
        </div>
      </motion.div>

      {/* Action Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
          <Card className="h-full bg-white/5 border-white/10 hover:border-indigo-500/30 transition-all duration-500 backdrop-blur-2xl rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-colors" />
            <CardHeader className="p-10 pb-0">
               <div className="flex items-center justify-between mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20">
                    <BookOpen size={28} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Node Expansion</span>
               </div>
               <div className="space-y-2">
                 <div className="text-7xl font-black text-white tracking-tighter tabular-nums">{lessonsAvailable}</div>
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">New Data Fragments</p>
               </div>
            </CardHeader>
            <CardContent className="p-10">
              <Button 
                className="w-full bg-indigo-600 hover:bg-indigo-500 h-16 text-lg font-black rounded-3xl shadow-2xl shadow-indigo-500/30 transition-all active:scale-95 group" 
                disabled={lessonsAvailable === 0}
                onClick={onStartLessons}
              >
                Sync Lessons
                <Zap className="ml-2 w-5 h-5 group-hover:animate-pulse" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
          <Card className="h-full bg-white/5 border-white/10 hover:border-rose-500/30 transition-all duration-500 backdrop-blur-2xl rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-rose-500/20 transition-colors" />
            <CardHeader className="p-10 pb-0">
               <div className="flex items-center justify-between mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-xl shadow-rose-500/20">
                    <Target size={28} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Synapse Training</span>
               </div>
               <div className="space-y-2">
                 <div className="text-7xl font-black text-white tracking-tighter tabular-nums">{reviewsAvailable}</div>
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Pending Verifications</p>
               </div>
            </CardHeader>
            <CardContent className="p-10">
              <Button 
                className="w-full bg-rose-600 hover:bg-rose-50 h-16 text-lg font-black rounded-3xl shadow-2xl shadow-rose-500/30 text-white transition-all active:scale-95" 
                disabled={reviewsAvailable === 0}
                onClick={onStartReviews}
              >
                Execute Reviews
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Data Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 backdrop-blur-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="border-b border-white/5 p-8 flex flex-row items-center justify-between">
            <CardTitle className="flex items-center text-white font-black uppercase tracking-[0.2em] text-xs">
              <BarChart3 className="w-4 h-4 mr-3 text-indigo-400" />
              SRS Spectrum Analytics
            </CardTitle>
            <Trophy className="text-amber-400" size={18} />
          </CardHeader>
          <CardContent className="h-[400px] p-8">
            {userItems.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={srsDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={120}
                    paddingAngle={10}
                    dataKey="value"
                    stroke="none"
                  >
                    {srsDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
                    itemStyle={{ color: '#fff', fontWeight: '900', textTransform: 'uppercase', fontSize: '10px' }}
                  />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-600 space-y-6">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 opacity-20" />
                </div>
                <div className="text-center">
                   <p className="font-black uppercase tracking-[0.3em] text-[10px]">No Neural Data Found</p>
                   <p className="text-xs mt-2 italic">Begin syncing lessons to generate metrics.</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="border-b border-white/5 p-8">
            <CardTitle className="text-white font-black uppercase tracking-[0.2em] text-xs">Pilot Meta-Data</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Synaptic Stability</span>
                <span className="text-sm font-black text-indigo-400">Lv.{profile?.level || 1} • {profile?.linkQuality || 0.1}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(profile?.synapticStability || 0) % 100}%` }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
                />
              </div>
            </div>
            
            <div className="space-y-6 pt-6 border-t border-white/5">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Operational Milestones</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-[1.5rem] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-white uppercase tracking-tight">Apprentice I</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-0.5 tracking-widest">Base Established</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white/[0.02] rounded-[1.5rem] border border-white/5 opacity-40">
                  <div className="w-10 h-10 rounded-xl bg-gray-500/10 flex items-center justify-center text-gray-500">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-500 uppercase tracking-tight">N5 Certification</p>
                    <p className="text-[10px] text-gray-600 font-bold uppercase mt-0.5 tracking-widest">Locked</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanji Feed */}
      <section className="space-y-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              N5 <span className="text-indigo-400">Lexicon</span> Collection
            </h2>
            <p className="text-gray-500 text-sm font-medium italic">High-frequency ideograms optimized for rapid recognition.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <span className="text-indigo-400 font-black text-xs">{items.filter(i => i.type === 'kanji' && i.level === 1).length}</span>
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Modules Loaded</span>
          </div>
        </div>
        <KanjiExplorer items={items.filter(i => i.type === 'kanji' && i.level === 1)} />
      </section>
    </div>
  );
};

