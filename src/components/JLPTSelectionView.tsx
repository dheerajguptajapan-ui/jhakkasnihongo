import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, BookOpen, Briefcase, Zap, UserCheck, Play, Layers } from 'lucide-react';
import { totalLessons, allCurriculum } from '../lib/curriculum';
import { useAuth } from '../lib/AuthContext';
import { motion } from 'motion/react';

interface JLPTSelectionViewProps {
  onStartQuiz: (level: number, lesson: number, mode: 'vocab' | 'grammar' | 'full', isCumulative: boolean, limit: number) => void;
  initialLevel?: number;
  initialLesson?: number;
}

export const JLPTSelectionView: React.FC<JLPTSelectionViewProps> = ({ 
  onStartQuiz, 
  initialLevel = 5, 
  initialLesson = 1 
}) => {
  const { profile, enrollLevel, unenrollLevel, getTodayProgress } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState<number>(initialLevel);
  const [selectedLesson, setSelectedLesson] = useState<number>(initialLesson);
  const [questionLimit, setQuestionLimit] = useState<number>(20);

  const levels = [
    { id: 5, label: 'N5', icon: GraduationCap },
    { id: 4, label: 'N4', icon: BookOpen },
    { id: 3, label: 'N3', icon: Briefcase },
    { id: 2, label: 'N2', icon: UserCheck },
    { id: 1, label: 'N1', icon: Zap },
  ];

  const maxLessons = selectedLevel === 5 ? 26 : 11;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-black text-slate-900 dark:text-slate-50 uppercase tracking-tight text-gradient">Mastery Tracks</h2>
        <p className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em]">Synchronize with Core Matrix</p>
      </div>

      {/* Level Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {levels.map((lvl) => {
          const Icon = lvl.icon;
          const isActive = selectedLevel === lvl.id;
          const isEnrolled = profile?.enrolledLevels?.includes(lvl.id);
          const { percentage } = getTodayProgress();

          return (
            <div key={lvl.id} className="relative group">
              <button
                onClick={() => setSelectedLevel(lvl.id)}
                className={`w-full p-6 rounded-3xl flex flex-col items-center gap-3 transition-all border-2 relative h-full ${
                  isActive 
                    ? 'border-primary bg-primary/5 scale-105 shadow-xl shadow-primary/10 z-10' 
                    : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 opacity-60 hover:opacity-100'
                }`}
              >
                <div className={`p-3 rounded-2xl ${isActive ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                  <Icon size={24} />
                </div>
                <div className="text-center">
                  <span className={`font-black text-lg block ${isActive ? 'text-primary' : 'text-slate-500'}`}>{lvl.label}</span>
                  {isEnrolled && (
                    <div className="mt-2 w-16 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mx-auto">
                       <motion.div 
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, percentage)}%` }}
                       />
                    </div>
                  )}
                </div>
              </button>

              {/* Enrollment Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  isEnrolled ? unenrollLevel(lvl.id) : enrollLevel(lvl.id);
                }}
                className={`absolute -top-2 -right-2 p-2 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-90 z-20 ${
                  isEnrolled ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 opacity-0 group-hover:opacity-100'
                }`}
              >
                {isEnrolled ? <UserCheck size={14} /> : <Play size={10} className="fill-current" />}
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Lesson List */}
        <Card className="md:col-span-2 border-none bg-slate-50 dark:bg-slate-900/50 rounded-3xl overflow-hidden">
          <CardHeader className="p-6 pb-0">
             <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Mission Select</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
              {Array.from({ length: maxLessons }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedLesson(i + 1)}
                  className={`h-12 rounded-xl font-bold transition-all ${
                    selectedLesson === i + 1
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-110'
                      : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-500 hover:border-primary'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Panel */}
        <div className="space-y-4">
           <Card className="border-none bg-slate-50 dark:bg-slate-900/50 p-4 rounded-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Session Intensity</p>
              <div className="grid grid-cols-4 gap-2">
                {[10, 20, 50, 100].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => setQuestionLimit(cnt)}
                    className={`h-10 rounded-xl font-bold transition-all text-xs ${
                      questionLimit === cnt 
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                        : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-500 hover:border-primary'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
           </Card>

           <Card className="border-none bg-primary p-1 rounded-[2.5rem] shadow-2xl shadow-primary/20 overflow-hidden">
              <CardContent className="p-8 text-white space-y-6">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">START PHASE</h3>
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">
                    Target: {levels.find(l => l.id === selectedLevel)?.label} • Lesson {selectedLesson}
                  </p>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => onStartQuiz(selectedLevel, selectedLesson, 'full', false, questionLimit)}
                    className="w-full bg-white text-primary hover:bg-white/90 h-14 rounded-2xl font-black gap-2 shadow-none"
                  >
                    <Play size={18} fill="currentColor" />
                    START MISSION
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => onStartQuiz(selectedLevel, 0, 'full', true, questionLimit)}
                    className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white h-14 rounded-2xl font-black gap-2"
                  >
                    <Layers size={18} />
                    CUMULATIVE TEST
                  </Button>
                </div>
              </CardContent>
           </Card>
           
           <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Neural Link Ready for Sequential Input
           </p>
        </div>
      </div>
    </div>
  );
};
