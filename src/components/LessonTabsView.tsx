import React, { useState } from 'react';
import { Item, TextSegment } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Info, BookOpen, ChevronRight, Zap, PenTool } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { StrokeOrder } from './StrokeOrder';

interface LessonTabsViewProps {
  items: Item[];
  lessonNumber?: number;
}

export const LessonTabsView: React.FC<LessonTabsViewProps> = ({ items, lessonNumber }) => {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const activeItem = items.find(item => item.id === activeId) || items[0];

  const playAudio = (text: string | TextSegment[]) => {
    const speechText = typeof text === 'string' ? text : text.map(seg => seg.text).join('');
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  const renderJapanese = (text: string | TextSegment[]) => {
    if (typeof text === 'string') return text;
    return text.map(seg => seg.text).join('');
  };

  if (!activeItem) return null;

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[700px] max-w-6xl mx-auto">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-72 flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto custom-scrollbar gap-2 bg-card p-4 rounded-3xl border border-border">
        <div className="hidden md:flex items-center gap-2 px-3 mb-2">
          <Zap size={14} className="text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Vocabulary List</span>
        </div>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all min-w-max md:min-w-0 border ${
              activeId === item.id 
                ? 'bg-primary text-primary-foreground border-transparent shadow-sm' 
                : 'text-muted-foreground border-transparent hover:bg-muted hover:text-foreground'
            }`}
          >
            <div className="flex flex-col items-start min-w-0">
              <span className="text-lg font-bold tracking-tight truncate w-full text-left">{item.character}</span>
              <span className={`text-[10px] uppercase font-bold tracking-widest ${activeId === item.id ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {item.readings?.[0] || '---'}
              </span>
            </div>
            <ChevronRight className={`w-4 h-4 hidden md:block transition-transform shrink-0 ${activeId === item.id ? 'translate-x-1' : 'opacity-0'}`} />
          </button>
        ))}
      </div>

      {/* Main Detail Area */}
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <Card className="h-full border-border bg-card overflow-hidden rounded-3xl shadow-sm">
              <CardContent className="p-8 md:p-12 h-full flex flex-col">
                <div className="flex items-start justify-between border-b border-border mb-8 pb-8">
                  <div className="space-y-4 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-8">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-0.5 rounded text-primary font-bold text-[10px] uppercase tracking-wider bg-primary/10">
                            Lesson {lessonNumber || 1}
                          </div>
                          <div className="px-2 py-0.5 rounded text-muted-foreground font-bold text-[10px] uppercase tracking-wider bg-muted">
                            {activeItem.type}
                          </div>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight truncate">
                          {activeItem.character}
                        </h2>
                      </div>
                      <button 
                        onClick={() => playAudio(activeItem.character)}
                        className="w-14 h-14 shrink-0 rounded-2xl bg-muted border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Volume2 className="w-6 h-6" />
                      </button>
                    </div>
                    <p className="text-2xl font-semibold text-muted-foreground tracking-tight">
                      {(activeItem.readings || []).join(' / ')}
                    </p>
                  </div>
                </div>

                <div className="space-y-10 flex-1 overflow-y-auto pr-4 custom-scrollbar">

                  {/* Stroke Order Animation */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <PenTool size={14} className="text-rose-500" />
                      <h3 className="text-xs font-bold uppercase tracking-wider">Stroke Order</h3>
                    </div>
                    <div className="bg-muted p-4 rounded-2xl border border-border inline-block">
                      <StrokeOrder character={activeItem.character} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Info className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-bold uppercase tracking-wider">Meaning & Grammar</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {(activeItem.meanings || []).join(', ')}
                    </p>
                    {activeItem.explanation && (
                      <div className="bg-muted p-6 rounded-2xl border border-border text-foreground leading-relaxed text-sm font-medium">
                        {activeItem.explanation}
                      </div>
                    )}
                  </div>

                  {activeItem.sentences && activeItem.sentences.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">Examples</span>
                      </div>
                      <div className="space-y-3">
                        {activeItem.sentences.map((s, i) => (
                          <div 
                            key={i} 
                            className="p-5 bg-muted/50 rounded-2xl border border-border cursor-pointer hover:bg-muted transition-colors" 
                            onClick={() => playAudio(s.japanese)}
                          >
                            <p className="text-xl font-bold text-foreground">
                              {renderJapanese(s.japanese)}
                            </p>
                            <p className="text-sm text-muted-foreground font-medium mt-2">
                              {s.english}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-border flex justify-between items-center text-muted-foreground">
                  <span className="text-[10px] font-bold uppercase tracking-wider hidden md:block">Progress</span>
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="flex-1 md:w-48 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${((items.indexOf(activeItem) + 1) / items.length) * 100}%` }} 
                      />
                    </div>
                    <span className="text-xs font-bold tabular-nums">
                      {items.indexOf(activeItem) + 1} / {items.length}
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
