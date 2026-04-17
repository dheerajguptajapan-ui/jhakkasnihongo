import React, { useEffect, useState } from 'react';
import type { Item } from '@/types';
import { CurriculumService } from '../lib/services/CurriculumService';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Search, Volume2, Info, BookOpen, Sparkles, PenTool } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Furigana } from './Furigana';
import FuriganaWord from './FuriganaWord';
import { StrokeOrder } from './StrokeOrder';
import { useAuth } from '../lib/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export const badgeStyles: Record<string, string> = {
  vocabulary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  kanji: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  grammar: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  dokkai: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  kana: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
};

export const ItemsView: React.FC = () => {
  const { showFurigana } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'vocabulary' | 'kanji' | 'grammar'>('all');

  useEffect(() => {
    setItems(CurriculumService.getTotalSystemItems());
    setLoading(false);
  }, []);

  const filtered = items.filter(item => {
    const matchesSearch = 
      item?.character?.includes(search) || 
      (item?.meanings || []).some(m => m?.toLowerCase().includes(search.toLowerCase())) ||
      (item?.readings || []).some(r => r?.toLowerCase().includes(search.toLowerCase())) ||
      item?.explanation?.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || item.type === activeCategory;
    
    return matchesSearch && matchesCategory;
  }).slice(0, 100);

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      <div className="w-10 h-10 border-4 border-muted border-t-primary rounded-full animate-spin" />
      <p className="text-muted-foreground font-bold text-sm">Loading...</p>
    </div>
  );

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-foreground">Dictionary</h2>
          <p className="text-muted-foreground font-medium text-sm">Search {items.length} items.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            className="w-full pl-12 pr-6 py-4 rounded-xl bg-card border border-border focus:border-primary/50 outline-none transition-all text-foreground font-medium placeholder:text-muted-foreground shadow-sm"
            placeholder="Search by kanji, meaning, or reading..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['all', 'vocabulary', 'kanji', 'grammar'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === cat 
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' 
                  : 'bg-muted text-muted-foreground border-border hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <AnimatePresence>
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <Card 
                onClick={() => setSelectedItem(item)}
                className="group h-full bg-card border-border hover:border-primary/30 transition-all cursor-pointer rounded-2xl overflow-hidden hover:shadow-sm"
              >
                <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
                  <div className={`text-2xl md:text-3xl font-bold transition-transform group-hover:scale-105 ${
                    item.type === 'kanji' ? 'text-rose-500' : 
                    item.type === 'radical' ? 'text-sky-500' : 'text-primary'
                  }`}>
                    {item.character}
                  </div>
                  <div className="space-y-1 w-full flex flex-col items-center">
                    <p className="text-foreground font-semibold text-sm line-clamp-1">{item.meanings?.[0] || '---'}</p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{item.readings?.[0] || '---'}</p>
                  </div>
                  <Badge variant="secondary" className="text-[9px] bg-muted text-muted-foreground uppercase font-bold px-2 py-0.5">
                    {item.type}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && search && (
        <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed border-border">
          <p className="text-muted-foreground font-medium text-sm">No items matching your query.</p>
        </div>
      )}

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border rounded-3xl p-6 md:p-10 shadow-lg custom-scrollbar">
          {selectedItem && (
            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 uppercase font-bold tracking-widest text-[10px] px-3 py-1">
                    {selectedItem.type}
                  </Badge>
                  <div className="flex items-end gap-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                      <Furigana text={selectedItem.character} show={showFurigana} />
                    </h1>
                    <button 
                      onClick={() => playAudio(selectedItem.character)}
                      className="shrink-0 w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stroke Order Animation */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <PenTool size={14} className="text-rose-500" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">Stroke Order</h3>
                </div>
                <div className="bg-muted p-4 rounded-2xl border border-border inline-block">
                  <StrokeOrder character={selectedItem.character} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Info size={14} className="text-blue-500" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">Readings</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(selectedItem.readings || []).map((r, i) => (
                      <span key={i} className="px-3 py-1 bg-muted rounded-lg border border-border font-medium text-foreground">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Sparkles size={14} className="text-amber-500" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">Meanings</h3>
                  </div>
                  <div className="space-y-1">
                     {(selectedItem.meanings || []).map((m, i) => (
                      <p key={i} className="text-lg font-bold text-foreground tracking-tight">{m}</p>
                     ))}
                  </div>
                </div>
              </div>

              {selectedItem.explanation && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Info size={14} className="text-emerald-500" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">Context</h3>
                  </div>
                  <div className="p-5 bg-muted rounded-2xl border border-border text-foreground leading-relaxed text-sm">
                    {selectedItem.explanation}
                  </div>
                </div>
              )}

              {selectedItem.sentences && selectedItem.sentences.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen size={14} className="text-primary" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">Examples</h3>
                  </div>
                  <div className="space-y-3">
                    {selectedItem.sentences.slice(0, 2).map((s, i) => (
                      <div key={i} className="p-4 bg-muted/50 rounded-xl border border-border space-y-1">
                        <p className="text-lg font-bold text-foreground flex flex-wrap gap-1">
                          {Array.isArray(s.japanese) ? (
                            s.japanese.map((seg: any, idx: number) => (
                              <FuriganaWord key={idx} kanji={seg.text} kana={seg.reading} />
                            ))
                          ) : (
                            <Furigana text={s.furigana || s.japanese} show={showFurigana} />
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.english}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
