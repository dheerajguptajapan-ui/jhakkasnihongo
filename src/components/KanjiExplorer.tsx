import React, { useState } from 'react';
import { Item } from '../types';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Furigana } from './Furigana';
import { StrokeOrder } from './StrokeOrder';
import { motion } from 'framer-motion';
import { useAuth } from '../lib/AuthContext';
import { 
  Sparkles, 
  Book, 
  Layers, 
  Layout as LayoutIcon, 
  PenTool,
  Quote,
  Zap,
  BookOpen
} from 'lucide-react';

interface KanjiExplorerProps {
  items: Item[];
}

export const KanjiExplorer: React.FC<KanjiExplorerProps> = ({ items }) => {
  const { showFurigana } = useAuth();

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-white/5 rounded-sm border-2 border-dashed border-white/10">
        <p className="text-gray-400 font-black text-sm uppercase tracking-widest">No data synchronized for this level.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-12">
      {items.map((kanji) => (
        <Dialog key={kanji.id}>
          <DialogTrigger
            render={
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4 }}
                className="relative group cursor-pointer"
              />
            }
          >
            <Card className="h-full bg-card border-border hover:border-primary/40 transition-all duration-300 relative overflow-hidden rounded-sm shadow-sm group">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3 relative z-10">
                <div className="text-5xl font-black text-foreground group-hover:scale-110 transition-transform duration-300">
                  {kanji.character}
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                    {(kanji.kunReadings?.[0] || kanji.onReadings?.[0] || kanji.readings?.[0])}
                  </div>
                  <div className="text-xs text-primary font-black uppercase line-clamp-1 tracking-tight">
                    {kanji.meanings[0]}
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 bg-background border-border rounded-sm shadow-2xl">
            <DialogHeader className="p-8 md:p-12 bg-muted/30 border-b border-border relative">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-8 relative z-10">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-9xl font-black text-foreground drop-shadow-sm select-none"
                >
                  {kanji.character}
                </motion.div>
                <div className="space-y-4 flex-1 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20 font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm">
                      JLPT N{kanji.level} Mission
                    </Badge>
                    <Badge className="bg-muted text-muted-foreground border-border font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm">
                      Radical: {kanji.radical || 'None'}
                    </Badge>
                  </div>
                  <DialogTitle className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tighter uppercase">
                    {kanji.meanings.join(' • ')}
                  </DialogTitle>
                </div>
              </div>
            </DialogHeader>

            <ScrollArea className="flex-1 p-8 md:p-12">
              <div className="space-y-12 pb-10">
                
                {/* Writing & Reading Core */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                   {/* Writing Engine */}
                   <div className="space-y-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <PenTool size={16} className="text-primary" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Writing Engine</h3>
                      </div>
                      <div className="p-6 bg-muted/20 border border-border rounded-sm flex items-center justify-center min-h-[220px]">
                        <StrokeOrder character={kanji.character} />
                      </div>
                   </div>

                   {/* Phonic Calibration (Readings) */}
                   <div className="space-y-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Zap size={16} className="text-amber-500" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Phonic Calibration</h3>
                      </div>
                      
                      <div className="space-y-4">
                         {/* Kun-yomi */}
                         <div className="p-5 bg-card border border-border rounded-sm space-y-2">
                            <p className="text-[9px] font-black text-primary uppercase tracking-widest">KUNYOMI (Native)</p>
                            <div className="flex flex-wrap gap-2">
                               {(kanji.kunReadings || []).length > 0 ? (
                                 kanji.kunReadings?.map((r, i) => (
                                   <span key={i} className="text-xl font-black text-foreground">{r}</span>
                                 ))
                               ) : (
                                 <span className="text-xs font-bold text-muted-foreground uppercase">None Recorded</span>
                               )}
                            </div>
                         </div>
                         
                         {/* On-yomi */}
                         <div className="p-5 bg-card border border-border rounded-sm space-y-2">
                            <p className="text-[9px] font-black text-rose-500 uppercase tracking-widest">ONYOMI (Sino)</p>
                            <div className="flex flex-wrap gap-2">
                               {(kanji.onReadings || []).length > 0 ? (
                                 kanji.onReadings?.map((r, i) => (
                                   <span key={i} className="text-xl font-black text-foreground">{r}</span>
                                 ))
                               ) : (
                                 <span className="text-xs font-bold text-muted-foreground uppercase">None Recorded</span>
                               )}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Vocab Fusion (Jukugo) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Layers size={16} className="text-indigo-400" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Vocab Fusion (Jukugo)</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(kanji.jukugo || kanji.combinations)?.map((c, i) => (
                      <div key={i} className="flex justify-between items-center p-5 bg-card border border-border rounded-sm hover:border-primary/20 transition-colors group/item">
                        <div className="flex flex-col gap-1">
                          <span className="font-black text-foreground text-2xl group-hover/item:text-primary transition-colors">{c.word}</span>
                          <span className="text-[10px] text-muted-foreground font-black tracking-[0.2em] uppercase">{c.reading}</span>
                        </div>
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-tight text-right max-w-[50%]">{c.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example Resonance (Sentences) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <BookOpen size={16} className="text-emerald-500" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Context Resonance</h3>
                  </div>
                  <div className="space-y-4">
                    {kanji.sentences?.map((s, i) => (
                      <div key={i} className="p-8 bg-muted/10 border border-border rounded-sm space-y-4 relative overflow-hidden group/s">
                        <Quote className="absolute -top-2 -left-2 text-primary opacity-5 group-hover/s:opacity-10" size={80} />
                        <div className="text-3xl font-bold text-foreground relative z-10 leading-relaxed">
                          <Furigana text={s.furigana || s.japanese} show={showFurigana} />
                        </div>
                        <div className="flex gap-4 items-center relative z-10 pt-2">
                           <div className="w-8 h-[2px] bg-primary/30" />
                           <p className="text-sm font-bold text-muted-foreground italic uppercase tracking-tight">{s.english}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mnemonic Segment */}
                {kanji.mnemonic && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Sparkles size={16} className="text-amber-500" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Memory Calibration</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg bg-muted/20 p-8 rounded-sm border-l-4 border-amber-500 italic">
                      {kanji.mnemonic}
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
