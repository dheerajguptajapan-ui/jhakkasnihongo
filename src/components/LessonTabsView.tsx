import React, { useState } from 'react';
import { Item } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Info, BookOpen, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface LessonTabsViewProps {
  items: Item[];
}

export const LessonTabsView: React.FC<LessonTabsViewProps> = ({ items }) => {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const activeItem = items.find(item => item.id === activeId) || items[0];

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  if (!activeItem) return null;

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[600px]">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-64 flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto no-scrollbar gap-2 bg-white p-3 rounded-3xl border border-slate-100 shadow-sm">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 min-w-max md:min-w-0 ${
              activeId === item.id 
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-100 ring-4 ring-sky-50' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <div className="flex flex-col items-start">
              <span className="text-lg font-black tracking-tight">{item.character}</span>
              <span className={`text-[10px] uppercase font-bold tracking-widest ${activeId === item.id ? 'text-sky-100' : 'text-slate-400'}`}>
                {item.readings[0]}
              </span>
            </div>
            <ChevronRight className={`w-4 h-4 hidden md:block transition-transform duration-300 ${activeId === item.id ? 'translate-x-1' : 'opacity-0'}`} />
          </button>
        ))}
      </div>

      {/* Main Detail Area */}
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full"
          >
            <Card className="h-full border-none shadow-2xl shadow-slate-200/50 bg-white overflow-hidden rounded-3xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full opacity-50 -mr-8 -mt-8" />
              
              <CardContent className="p-8 md:p-12 h-full flex flex-col">
                <div className="flex items-start justify-between mb-10">
                  <div className="space-y-4">
                    <Badge variant="outline" className="bg-sky-50 text-sky-600 border-sky-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                      Minna no Nihongo L1
                    </Badge>
                    <div className="flex items-center gap-6">
                      <h2 className="text-7xl font-black text-slate-900 tracking-tighter">
                        {activeItem.character}
                      </h2>
                      <button 
                        onClick={() => playAudio(activeItem.character)}
                        className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-100 hover:text-sky-600 transition-all active:scale-95 group"
                      >
                        <Volume2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                    <p className="text-2xl font-bold text-sky-600/80 tracking-tight">
                      {activeItem.readings.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="space-y-8 flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Info className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Meaning & Usage</span>
                    </div>
                    <p className="text-3xl font-black text-slate-800 leading-tight">
                      {activeItem.meanings.join(', ')}
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-600 leading-relaxed font-medium">
                      {activeItem.explanation}
                    </div>
                  </div>

                  {activeItem.sentences && activeItem.sentences.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-400">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Usage Example</span>
                      </div>
                      <div className="space-y-4">
                        {activeItem.sentences.map((s, i) => (
                          <div key={i} className="group cursor-pointer" onClick={() => playAudio(s.japanese)}>
                            <p className="text-2xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                              {s.japanese}
                            </p>
                            <p className="text-sm text-slate-500 font-medium">
                              {s.english}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-8 border-t border-slate-50 flex justify-between items-center text-slate-300">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Lesson Vocabulary Explorer</span>
                  <span className="text-sm font-black tabular-nums">{items.indexOf(activeItem) + 1} / {items.length}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
