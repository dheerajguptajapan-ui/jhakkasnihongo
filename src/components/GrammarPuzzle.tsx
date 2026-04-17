import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextSegment } from '../types';
import FuriganaWord from './FuriganaWord';
import { Button } from './ui/button';

interface GrammarPuzzleProps {
  segments: TextSegment[];
  translation: string;
  onSuccess: () => void;
  onSkip: () => void;
}

/**
 * Native Grammar Puzzle - Elite Implementation
 * No external DND dependencies. Uses native state for sorting.
 * Fully compliant with our native HTML5 Furigana engine.
 */
export const GrammarPuzzle: React.FC<GrammarPuzzleProps> = ({ segments, translation, onSuccess, onSkip }) => {
  const [shuffled, setShuffled] = useState<{ id: string; segment: TextSegment }[]>([]);
  const [selected, setSelected] = useState<{ id: string; segment: TextSegment }[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const pieces = segments.map((s, i) => ({ 
      id: `piece-${i}-${Date.now()}`, 
      segment: s 
    }));
    setShuffled([...pieces].sort(() => Math.random() - 0.5));
    setSelected([]);
    setError(false);
  }, [segments]);

  const togglePiece = (piece: { id: string; segment: TextSegment }, isSelected: boolean) => {
    if (isSelected) {
      setSelected(selected.filter(p => p.id !== piece.id));
      setShuffled([...shuffled, piece]);
    } else {
      setShuffled(shuffled.filter(p => p.id !== piece.id));
      setSelected([...selected, piece]);
    }
    setError(false);
  };

  const checkResult = () => {
    const result = selected.map(p => p.segment.text).join('');
    const correct = segments.map(s => s.text).join('');
    
    if (result === correct) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="space-y-12 py-8 animate-in fade-in duration-700">
      {/* Translation Context */}
      <div className="text-center px-6">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 block mb-4 italic">Neural Decryption Target</span>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
          {translation}
        </h2>
      </div>

      {/* Assembly Area */}
      <div className={`min-h-[140px] glass rounded-[2.5rem] p-8 flex flex-wrap gap-3 items-center justify-center border-2 transition-all duration-400 ${error ? 'border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]' : 'border-primary/10 shadow-premium'}`}>
        <AnimatePresence mode="popLayout">
          {selected.length === 0 && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="text-sm font-black uppercase tracking-[0.2em]"
            >
              Sequence segments to sync...
            </motion.p>
          )}
          {selected.map((piece) => (
            <motion.button
              key={piece.id}
              layoutId={piece.id}
              onClick={() => togglePiece(piece, true)}
              className="px-5 py-3 bg-primary text-primary-foreground rounded-2xl font-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              <FuriganaWord kanji={piece.segment.text} kana={piece.segment.reading || null} />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Segment Supply Vector */}
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto min-h-[100px] p-4"
      >
        <AnimatePresence mode="popLayout">
          {shuffled.map((piece, index) => (
             <motion.button
              key={piece.id}
              layoutId={piece.id}
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              onClick={() => togglePiece(piece, false)}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 glass rounded-2xl border border-primary/20 font-black text-slate-700 dark:text-slate-200 hover:border-primary/50 transition-all shadow-premium text-xl"
            >
              <FuriganaWord kanji={piece.segment.text} kana={piece.segment.reading || null} />
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Synchronizer Controls */}
      <div className="flex justify-center gap-4 pt-4">
        <Button 
          variant="outline" 
          onClick={onSkip}
          className="h-14 px-8 rounded-2xl font-black uppercase tracking-widest text-xs border-primary/20 hover:bg-rose-500/10 hover:text-rose-500 hover:border-rose-500/50"
        >
          Bypass
        </Button>
        <Button 
          onClick={checkResult}
          disabled={selected.length === 0}
          className="h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/30"
        >
          Execute Sync
        </Button>
      </div>
    </div>
  );
};
