import React, { useState } from 'react';
import { Item } from '../types';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Furigana } from './Furigana';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../lib/AuthContext';
import { Sparkles, Book, Layers, Layout as LayoutIcon } from 'lucide-react';

interface KanjiExplorerProps {
  items: Item[];
}

export const KanjiExplorer: React.FC<KanjiExplorerProps> = ({ items }) => {
  const { showFurigana } = useAuth();
  const [selectedKanji, setSelectedKanji] = useState<Item | null>(null);

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border-2 border-dashed border-white/10">
        <p className="text-gray-400 font-medium text-lg">No kanji found for this level.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {items.map((kanji, idx) => (
        <Dialog key={kanji.id}>
          <DialogTrigger
            render={
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              />
            }
          >
            <Card className="h-full bg-white/5 border-white/10 hover:border-indigo-500/50 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="text-5xl font-black text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {kanji.character}
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
                    {kanji.readings.slice(0, 1).join(', ')}
                  </div>
                  <div className="text-sm text-indigo-400 font-bold line-clamp-1">
                    {kanji.meanings[0]}
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500/0 group-hover:bg-indigo-500 transition-all duration-500" />
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 bg-slate-950 border-white/10 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <DialogHeader className="p-10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-b border-white/5 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="flex items-center gap-10 relative z-10">
                <motion.div 
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  className="text-9xl font-black text-white drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                >
                  {kanji.character}
                </motion.div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30 font-black text-[10px] uppercase tracking-widest px-3 py-1">
                      N5 Level
                    </Badge>
                    <Badge className="bg-white/5 text-gray-400 border-white/10 font-black text-[10px] uppercase tracking-widest px-3 py-1">
                      Radical: {kanji.radical}
                    </Badge>
                  </div>
                  <DialogTitle className="text-5xl font-black text-white leading-tight">
                    {kanji.meanings.join(', ')}
                  </DialogTitle>
                </div>
              </div>
            </DialogHeader>
            <ScrollArea className="flex-1 p-10 bg-[#0A0A0F]">
              <div className="space-y-12 pb-10">
                {/* Readings & Combinations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <LayoutIcon size={14} className="text-indigo-400" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Readings</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {kanji.readings.map((r, i) => (
                        <Badge key={i} className="bg-white/5 border-white/10 text-white font-bold px-4 py-2 rounded-xl">
                          {r}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Layers size={14} className="text-purple-400" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Vocab Fusion</h3>
                    </div>
                    <div className="space-y-3">
                      {kanji.combinations?.map((c, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                          <div className="flex flex-col">
                            <span className="font-black text-white text-lg">{c.word}</span>
                            <span className="text-xs text-indigo-400 font-bold tracking-widest uppercase">{c.reading}</span>
                          </div>
                          <span className="text-gray-400 font-medium">{c.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mnemonic */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Sparkles size={14} className="text-amber-400" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Memory Prism (Mnemonic)</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl bg-gradient-to-r from-amber-500/5 to-transparent p-8 rounded-3xl border border-amber-500/10 italic">
                    {kanji.mnemonic}
                  </p>
                </div>

                {/* Sentences */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Book size={14} className="text-emerald-400" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Example Resonance</h3>
                  </div>
                  <div className="space-y-4">
                    {kanji.sentences?.map((s, i) => (
                      <div key={i} className="p-6 bg-white/[0.02] rounded-[1.5rem] border border-white/5 space-y-2 group/s">
                        <div className="text-2xl font-bold text-white group-hover/s:text-indigo-400 transition-colors">
                          <Furigana text={s.furigana || s.japanese} show={showFurigana} />
                        </div>
                        <p className="text-sm text-gray-500 font-medium border-l-2 border-indigo-500/30 pl-4 italic">{s.english}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

