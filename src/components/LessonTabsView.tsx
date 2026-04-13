import React, { useState } from 'react';
import { Item } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Info, BookOpen, ChevronRight, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface LessonTabsViewProps {
  items: Item[];
  lessonNumber?: number;
}

export const LessonTabsView: React.FC<LessonTabsViewProps> = ({ items, lessonNumber }) => {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const activeItem = items.find(item => item.id === activeId) || items[0];

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  if (!activeItem) return null;

  return (
    <div className="flex flex-col md:flex-row gap-8 h-[700px]">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-80 flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto no-scrollbar gap-3 bg-white/5 p-4 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="hidden md:flex items-center gap-2 px-3 mb-4">
          <Zap size={14} className="text-indigo-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Vocabulary List</span>
        </div>
        {items.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveId(item.id)}
            className={`flex items-center justify-between px-5 py-4 rounded-[1.5rem] transition-all duration-500 min-w-max md:min-w-0 border ${
              activeId === item.id 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-xl shadow-indigo-500/20' 
                : 'text-gray-400 border-white/5 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className="flex flex-col items-start">
              <span className="text-xl font-black tracking-tight">{item.character}</span>
              <span className={`text-[10px] uppercase font-bold tracking-widest ${activeId === item.id ? 'text-indigo-200' : 'text-gray-500'}`}>
                {item.readings[0]}
              </span>
            </div>
            <ChevronRight className={`w-4 h-4 hidden md:block transition-transform duration-500 ${activeId === item.id ? 'translate-x-1' : 'opacity-0'}`} />
          </motion.button>
        ))}
      </div>

      {/* Main Detail Area */}
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <Card className="h-full border-white/10 bg-white/5 overflow-hidden rounded-[3rem] relative backdrop-blur-2xl group shadow-2xl">
              {/* Decorative Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-opacity duration-1000 group-hover:opacity-100 opacity-50" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -ml-32 -mb-32 transition-opacity duration-1000 group-hover:opacity-100 opacity-50" />
              
              <CardContent className="p-10 md:p-16 h-full flex flex-col relative z-10">
                <div className="flex items-start justify-between mb-12">
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-[10px] uppercase tracking-widest">
                        Lesson {lessonNumber || 1}
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 font-black text-[10px] uppercase tracking-widest">
                        N5 Basic
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <h2 className="text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
                        {activeItem.character}
                      </h2>
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => playAudio(activeItem.character)}
                        className="w-20 h-20 rounded-[2rem] bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all shadow-xl active:shadow-indigo-500/50"
                      >
                        <Volume2 className="w-8 h-8" />
                      </motion.button>
                    </div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                      {activeItem.readings.join(' / ')}
                    </p>
                  </div>
                </div>

                <div className="space-y-12 flex-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Info className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Meaning & Grammar</span>
                    </div>
                    <p className="text-4xl font-black text-white leading-tight">
                      {activeItem.meanings.join(', ')}
                    </p>
                    <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 text-gray-300 leading-relaxed text-lg font-medium shadow-xl">
                      {activeItem.explanation}
                    </div>
                  </div>

                  {activeItem.sentences && activeItem.sentences.length > 0 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-gray-500">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Situational Usage</span>
                      </div>
                      <div className="space-y-4">
                        {activeItem.sentences.map((s, i) => (
                          <motion.div 
                            key={i} 
                            whileHover={{ x: 10 }}
                            className="p-6 bg-white/[0.02] rounded-[1.5rem] border border-white/5 hover:border-white/10 transition-colors cursor-pointer group/item" 
                            onClick={() => playAudio(s.japanese)}
                          >
                            <p className="text-2xl font-bold text-white group-hover/item:text-indigo-400 transition-colors">
                              {s.japanese}
                            </p>
                            <p className="text-sm text-gray-500 font-medium mt-1">
                              {s.english}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-10 border-t border-white/5 flex justify-between items-center text-gray-600">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Jhakkas Nihongo Explorer</span>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${((items.indexOf(activeItem) + 1) / items.length) * 100}%` }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" 
                      />
                    </div>
                    <span className="text-xs font-black tabular-nums text-gray-400">
                      {items.indexOf(activeItem) + 1} <span className="opacity-30">/</span> {items.length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

