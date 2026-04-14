import React, { useEffect, useState } from 'react';
import { Item } from '../types';
import { CurriculumService } from '../lib/services/CurriculumService';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Search, Volume2, Info, BookOpen, X, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Furigana } from './Furigana';
import { useAuth } from '../lib/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export const ItemsView: React.FC = () => {
  const { showFurigana } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  useEffect(() => {
    setItems(CurriculumService.getTotalSystemItems());
    setLoading(false);
  }, []);

  const filtered = items.filter(item => 
    item.character.includes(search) || 
    item.meanings.some(m => m.toLowerCase().includes(search.toLowerCase())) ||
    item.readings.some(r => r.toLowerCase().includes(search.toLowerCase()))
  ).slice(0, 100); // Limit results for performance

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
      <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Loading Knowledge Base...</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Synaptic search</h2>
        <p className="text-gray-500 font-medium italic">Instant access to {items.length} curriculum nodes.</p>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-indigo-600/10 blur-2xl group-focus-within:bg-indigo-600/20 transition-all duration-500" />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6 group-focus-within:text-indigo-400 transition-colors" />
        <input
          className="w-full pl-14 pr-6 py-5 rounded-2xl bg-[#0A0A14]/80 border border-white/5 focus:border-indigo-500/50 outline-none transition-all backdrop-blur-3xl text-lg text-white font-medium placeholder:text-gray-600 shadow-2xl relative z-10"
          placeholder="Type character, meaning, or reading..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 relative z-0">
        <AnimatePresence>
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.5) }}
              layout
            >
              <Card 
                onClick={() => setSelectedItem(item)}
                className="group h-full bg-white/5 border-white/5 hover:border-indigo-500/30 transition-all duration-500 cursor-pointer backdrop-blur-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] rounded-[2rem] overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className={`text-4xl font-black group-hover:scale-110 transition-transform duration-500 ${
                    item.type === 'kanji' ? 'text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.3)]' : 
                    item.type === 'radical' ? 'text-sky-400' : 'text-indigo-400'
                  }`}>
                    {item.character}
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-sm line-clamp-1">{item.meanings[0]}</p>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.readings[0] || '---'}</p>
                  </div>
                  <Badge variant="outline" className="text-[9px] bg-white/5 border-white/10 text-gray-400 group-hover:text-indigo-300 transition-colors uppercase font-black px-2">
                    {item.type}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && search && (
        <div className="text-center py-20 bg-white/5 rounded-[3rem] border-2 border-dashed border-white/5">
          <p className="text-gray-500 font-medium text-xl">No curriculum nodes matching your query.</p>
          <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mt-4">Try searching for a simpler character or concept.</p>
        </div>
      )}

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-2xl bg-[#0A0A0F] border-white/10 rounded-[2.5rem] p-0 shadow-2xl overflow-hidden neural-grid">
          {selectedItem && (
            <div className="relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="p-10 space-y-8 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <Badge className="bg-indigo-600/20 text-indigo-400 border-indigo-600/30 uppercase font-black tracking-widest text-[10px] px-3 py-1">
                      {selectedItem.type} Mastery
                    </Badge>
                    <div className="flex items-end gap-6">
                      <h1 className="text-7xl font-black text-white tracking-tighter">
                        <Furigana text={selectedItem.character} show={showFurigana} />
                      </h1>
                      <button 
                        onClick={() => playAudio(selectedItem.character)}
                        className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all shadow-xl shadow-indigo-500/10"
                      >
                        <Volume2 size={24} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Info size={14} className="text-indigo-400" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Readings</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.readings.map((r, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-lg font-bold text-gray-200">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Sparkles size={14} className="text-purple-400" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Meanings</h3>
                    </div>
                    <div className="space-y-2">
                       {selectedItem.meanings.map((m, i) => (
                        <p key={i} className="text-2xl font-black text-white tracking-tight">{m}</p>
                       ))}
                    </div>
                  </div>
                </div>

                {selectedItem.explanation && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Info size={14} className="text-sky-400" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Synaptic Context</h3>
                    </div>
                    <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 text-gray-400 leading-relaxed font-medium">
                      {selectedItem.explanation}
                    </div>
                  </div>
                )}

                {selectedItem.sentences && selectedItem.sentences.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <BookOpen size={14} className="text-emerald-400" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Live Examples</h3>
                    </div>
                    <div className="space-y-4">
                      {selectedItem.sentences.slice(0, 2).map((s, i) => (
                        <div key={i} className="p-6 bg-indigo-500/5 rounded-[1.5rem] border border-indigo-500/10 space-y-2">
                          <p className="text-xl font-bold text-white">
                            <Furigana text={s.furigana || s.japanese} show={showFurigana} />
                          </p>
                          <p className="text-sm text-gray-500 italic border-l-2 border-indigo-500/30 pl-4">{s.english}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
