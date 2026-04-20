import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';

import { 
  Book, 
  Type, 
  ScrollText, 
  Library, 
  Search, 
  ChevronRight, 
  Play,
  ArrowLeft,
  Zap,
  Eye,
  EyeOff
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { allCurriculum } from '../lib/curriculum';
import { Item } from '../types';
import { badgeStyles } from './ItemsView';
import { RubyText } from './RubyText';
import { stripFurigana } from '../lib/furiganaUtils';
import { useAuth } from '../lib/AuthContext';
import { ItemDetailModal } from './ItemDetailModal';


interface MasteryHubViewProps {
  initialLevel?: number;
  lockLevel?: boolean;
  onStartQuiz: (level: number, lesson: number, category: string, isCumulative: boolean, limit: number) => void;
}

type CategoryType = 'vocabulary' | 'kanji' | 'grammar' | 'dokkai';

export const MasteryHubView: React.FC<MasteryHubViewProps> = ({ 
  initialLevel = 5,
  lockLevel = false,
  onStartQuiz 
}) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(initialLevel);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [quizSetup, setQuizSetup] = useState<{ category: string } | null>(null);
  const [quizCount, setQuizCount] = useState<number>(20);
  
  const { settings, updateSettings } = useAuth();
  const showFurigana = settings?.showFurigana ?? true;

  const levels = [
    { id: 5, label: 'N5', color: 'from-blue-500 to-indigo-600' },
    { id: 4, label: 'N4', color: 'from-emerald-500 to-teal-600' },
    { id: 3, label: 'N3', color: 'from-orange-500 to-amber-600' },
    { id: 2, label: 'N2', color: 'from-rose-500 to-pink-600' },
    { id: 1, label: 'N1', color: 'from-slate-600 to-slate-800' },
  ];

  const categories = [
    { id: 'vocabulary' as CategoryType, label: 'Vocabulary', icon: Book, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-400/10' },
    { id: 'kanji' as CategoryType, label: 'Kanji', icon: Type, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10 dark:bg-emerald-400/10' },
    { id: 'grammar' as CategoryType, label: 'Grammar', icon: Library, color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10 dark:bg-orange-400/10' },
    { id: 'dokkai' as CategoryType, label: 'Dokkai', icon: ScrollText, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-500/10 dark:bg-rose-400/10' },
  ];

  const { filteredItems, categoryCounts } = useMemo(() => {
    const internalLevel = selectedLevel; 
    const lessons = allCurriculum[internalLevel] || {};
    const allItems: Item[] = Object.values(lessons).flat();

    const counts: Record<string, number> = {};
    for (const cat of ['vocabulary', 'kanji', 'grammar', 'dokkai']) {
      counts[cat] = allItems.filter(i => i.type === cat).length;
    }

    if (!selectedCategory) return { filteredItems: [], categoryCounts: counts };

    const q = searchQuery.toLowerCase().trim();
    const filtered = allItems.filter(item => {
      if (item.type !== selectedCategory) return false;
      if (!q) return true;
      const charClean = stripFurigana(item.character || '').toLowerCase();
      const readMatch = (item.readings || []).some(r => r.toLowerCase().includes(q));
      const meanMatch = item.meanings.some(m => m.toLowerCase().includes(q));
      return charClean.includes(q) || readMatch || meanMatch;
    });

    return { filteredItems: filtered, categoryCounts: counts };
  }, [selectedLevel, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 pb-20">
      {/* Level Selection Bar - Only visible if no category is selected AND level is not locked */}
      {!selectedCategory && !lockLevel && (
        <div className="flex flex-col items-center gap-4 mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex flex-wrap gap-1 bg-muted/50 p-1.5 rounded-sm border border-border max-w-2xl w-full mx-auto backdrop-blur-sm shadow-premium">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`flex-1 min-w-[60px] h-10 md:h-12 rounded-sm font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-[10px] transition-all px-1 border ${
                  selectedLevel === lvl.id 
                    ? `bg-primary text-white border-primary shadow-lg shadow-primary/20` 
                    : 'bg-card/40 border-transparent text-muted-foreground hover:border-primary/30 hover:text-foreground'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
          <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] opacity-60">
            Select Tactical Sector for Synchronization
          </p>
        </div>
      )}

      {/* Level Lock Indicator (Breadcrumb like) */}
      {lockLevel && !selectedCategory && (
        <div className="flex items-center gap-4 border-b border-border/50 pb-8 mb-8">
           <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm">
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Active Sector: N{selectedLevel} Foundation</span>
           </div>
           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">
              Access Restricted to Enrolled Mission Parameters
           </p>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          <motion.div
            key="categories"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4"
          >
            {categories.map((cat) => {
              const count = categoryCounts[cat.id] ?? 0;
              return (
                <div 
                  key={cat.id}
                  onClick={() => {
                    if (count === 0) {
                      alert("NO MISSION DATA FOUND: Sector contains zero cached objects for this level.");
                      return;
                    }
                    setSelectedCategory(cat.id);
                  }}
                  className="group cursor-pointer border border-border bg-card hover:border-primary/20 transition-all rounded-sm shadow-sm hover:shadow-xl flex flex-col items-center text-center p-6 md:p-10 gap-4 md:gap-6"
                >
                  <div className={`w-16 h-16 rounded-sm bg-muted flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <cat.icon size={28} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">{cat.label}</h3>
                    <p className="text-[9px] text-muted-foreground font-black uppercase tracking-[0.2em]">
                      {count > 0 ? `${count} CACHED OBJECTS` : 'EMPTY'}
                    </p>
                  </div>
                  <div className="w-full h-1 bg-muted rounded-sm mt-4 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: count > 0 ? `${Math.max(10, Math.min(100, (count / 200) * 100))}%` : '0%' }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4 px-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}
                  className="rounded-sm h-12 w-12 p-0 border-border shrink-0 hover:border-primary"
                >
                  <ArrowLeft size={18} />
                </Button>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-foreground flex items-center gap-3">
                    SECTOR N{selectedLevel} · {selectedCategory}
                    <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-sm font-black tracking-widest">
                      {filteredItems.length} OBJECTS
                    </span>
                  </h2>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1">Convergence Track Stability: ACTIVE</p>
                </div>
              </div>

              <div className="flex gap-2 w-full md:max-w-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40" size={14} />
                  <Input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`ID CODE SEARCH…`}
                    className="pl-11 h-12 rounded-sm bg-muted/20 border-border text-foreground placeholder:text-muted-foreground/40 font-bold text-xs uppercase tracking-widest min-w-0"
                  />
                </div>

                {selectedCategory !== 'dokkai' && (
                  <Button 
                    onClick={() => selectedCategory && setQuizSetup({ category: selectedCategory })}
                    className="h-12 rounded-sm font-black gap-2 md:gap-3 px-4 md:px-8 bg-primary text-white shadow-lg shadow-primary/20 shrink-0 uppercase tracking-widest text-[10px] md:text-xs"
                  >
                    <Zap size={15} fill="currentColor" />
                    <span className="hidden xs:inline">INIT SYNC</span>
                    <span className="xs:hidden">SYNC</span>
                  </Button>
                )}
              </div>
            </div>

            {selectedCategory === 'grammar' && (
              <div className="space-y-3">
                {filteredItems.length === 0 && <EmptyState />}
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id} 
                    onClick={() => setSelectedItem(item)}
                    className="border border-border bg-card rounded-sm overflow-hidden hover:border-primary/30 transition-colors cursor-pointer group"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <RubyText 
                            text={item.character || ''} 
                            showFurigana={showFurigana}
                            className="text-xl font-black text-foreground"
                          />
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide mt-1">{item.meanings.join(' / ')}</p>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 border border-border rounded-sm font-black uppercase tracking-widest text-muted-foreground shrink-0">
                          Grammar
                        </span>
                      </div>
                      {item.explanation && (
                        <p className="text-xs text-foreground font-bold leading-relaxed border-l-2 border-primary pl-4">{item.explanation}</p>
                      )}
                      {item.sentences && item.sentences.length > 0 && (
                        <div className="bg-muted p-4 rounded-sm space-y-3">
                          {item.sentences.slice(0, 1).map((s, si) => (
                            <div key={si}>
                              <RubyText 
                                text={s.furigana || (typeof s.japanese === 'string' ? s.japanese : '')} 
                                showFurigana={showFurigana}
                                className="text-sm font-black text-foreground"
                              />
                              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight mt-1">{s.english}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {selectedCategory === 'dokkai' && (
              <div className="space-y-3">
                {filteredItems.length === 0 && <EmptyState />}
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="border border-border bg-card rounded-sm cursor-pointer hover:border-primary hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="w-14 h-14 rounded-sm bg-muted flex items-center justify-center shrink-0">
                        <ScrollText size={24} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <RubyText text={item.character || ''} showFurigana={showFurigana} className="font-black text-lg text-foreground uppercase tracking-tight" />
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1 truncate">{item.meanings.join(' · ')}</p>
                        {item.content && (
                          <p className="text-[10px] text-foreground font-bold mt-2 line-clamp-2 leading-relaxed opacity-60">
                            {typeof item.content === 'string' ? item.content.slice(0, 100) + '…' : ''}
                          </p>
                        )}
                      </div>
                      <ChevronRight className="text-primary shrink-0" size={20} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {(selectedCategory === 'vocabulary' || selectedCategory === 'kanji') && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
                {filteredItems.length === 0 && <div className="col-span-full"><EmptyState /></div>}
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id} 
                    onClick={() => setSelectedItem(item)}
                    className="border border-border bg-card rounded-sm group overflow-hidden hover:shadow-xl transition-all hover:border-primary/30 cursor-pointer"
                  >
                    <CardContent className="p-5 flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center font-black text-xl text-foreground shrink-0 border border-border">
                          <RubyText 
                            text={(stripFurigana(item.character || '')).slice(0, 1)} 
                            showFurigana={false}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <RubyText 
                            text={item.character || ''} 
                            readings={item.readings}
                            showFurigana={showFurigana}
                            className="font-black text-lg text-foreground block tracking-tight"
                          />
                          <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mt-1">{item.meanings.join(', ')}</p>
                          {selectedCategory === 'kanji' && item.readings && item.readings.length > 0 && (
                            <div className="flex gap-2 mt-2 flex-wrap text-foreground">
                              {item.readings.map((r, ri) => (
                                <span key={ri} className="text-[9px] bg-muted px-2 py-0.5 rounded-sm font-black uppercase tracking-tight border border-border">{r}</span>
                              ))}
                            </div>
                          )}
                          {selectedCategory === 'vocabulary' && (
                            <div className="flex gap-2 mt-2 flex-wrap">
                              {item.readings && item.readings.length > 0 && !showFurigana && (
                                <span className="text-[9px] text-primary font-black uppercase tracking-widest border border-primary/20 px-2 py-0.5 rounded-sm">{item.readings[0]}</span>
                              )}
                              <span className="text-[8px] bg-foreground text-background px-2 py-0.5 rounded-sm font-black uppercase tracking-widest">
                                {item.type}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {item.sentences && item.sentences.length > 0 && (
                        <div className="bg-muted/40 rounded-xl p-3 space-y-2">
                          <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Example</p>
                          {item.sentences.map((s, si) => (
                            <div key={si} className="space-y-0.5">
                              <RubyText 
                                text={s.furigana || (typeof s.japanese === 'string' ? s.japanese : '')} 
                                showFurigana={showFurigana}
                                className="text-sm font-medium text-foreground block leading-snug"
                              />
                              <p className="text-xs text-muted-foreground">{s.english}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {quizSetup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
              onClick={() => setQuizSetup(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border rounded-sm p-10 w-full max-w-sm shadow-2xl relative"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Zap size={28} className="text-primary" fill="currentColor" />
                  </div>
                  <h3 className="text-sm font-black text-foreground uppercase tracking-[0.3em]">
                    SYNC PARAMETERS
                  </h3>
                  <p className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-widest">Select synchronization depth</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-10">
                  {[20, 50, 100].map((count) => (
                    <button
                      key={count}
                      onClick={() => setQuizCount(count)}
                      className={`h-16 rounded-sm font-black text-xl transition-all border-2 ${
                        quizCount === count
                          ? 'border-primary bg-primary text-white'
                          : 'border-border bg-muted/30 text-muted-foreground hover:border-primary/40'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onStartQuiz(selectedLevel, 0, quizSetup.category, true, quizCount);
                      setQuizSetup(null);
                    }}
                    className="w-full h-14 rounded-sm font-black text-xs tracking-[0.3em] bg-primary text-white shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 uppercase"
                  >
                    <Play size={14} fill="currentColor" />
                    INITIATE MISSION
                  </button>
                  <button
                    onClick={() => setQuizSetup(null)}
                    className="w-full h-10 rounded-sm font-bold text-[10px] tracking-widest text-muted-foreground hover:bg-muted transition-all uppercase"
                  >
                    Abort
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}




      <ItemDetailModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
};

const EmptyState = () => (
  <div className="text-center py-16 col-span-full rounded-3xl border border-dashed border-border bg-muted/20">
    <Library size={40} className="mx-auto text-muted-foreground/40 mb-3" />
    <p className="font-bold text-muted-foreground">No items found</p>
    <p className="text-sm text-muted-foreground/60 mt-1">Try a different search or level</p>
  </div>
);
