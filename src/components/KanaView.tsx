import React, { useState, useMemo } from 'react';
import { hiragana, katakana, hiraganaExtended, katakanaExtended } from '../lib/curriculum/kana';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Info, Play } from 'lucide-react';
import { Button } from './ui/button';
import { StrokeOrder } from './StrokeOrder';

interface KanaViewProps {
  onResult?: (isCorrect: boolean) => void;
}

const TabButton: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({ active, onClick, label }) => (
  <button 
    onClick={onClick}
    className={`h-8 px-3 md:px-6 rounded-sm font-black uppercase tracking-widest text-[8px] transition-all whitespace-nowrap ${
      active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-muted-foreground hover:text-foreground'
    }`}
  >
    {label}
  </button>
);

export const KanaView: React.FC<KanaViewProps> = ({ onResult }) => {
  const [activeTab, setActiveTab] = useState<'hiragana' | 'hiragana-ext' | 'katakana' | 'katakana-ext'>('hiragana');
  const [selectedChar, setSelectedChar] = useState<any>(null);
  const [isTesting, setIsTesting] = useState(false);
  const [testStage, setTestStage] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const data = useMemo(() => {
    switch (activeTab) {
      case 'hiragana-ext': return hiraganaExtended;
      case 'katakana': return katakana;
      case 'katakana-ext': return katakanaExtended;
      default: return hiragana;
    }
  }, [activeTab]);

  const testQueue = useMemo(() => {
    return [...data].sort(() => 0.5 - Math.random());
  }, [data, isTesting]);

  const currentTestChar = testQueue[testStage];

  const options = useMemo(() => {
    if (!currentTestChar) return [];
    const correct = currentTestChar.readings[0];
    const others = data
      .filter(c => c.id !== currentTestChar.id)
      .map(c => c.readings[0])
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return [correct, ...others].sort(() => 0.5 - Math.random());
  }, [currentTestChar, data]);

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  const handleAnswer = (opt: string) => {
    const isCorrect = opt === currentTestChar.readings[0];
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) playAudio(currentTestChar.character);
    
    if (onResult) onResult(isCorrect);

    setTimeout(() => {
      setFeedback(null);
      if (testStage < testQueue.length - 1) {
        setTestStage(s => s + 1);
      } else {
        setIsTesting(false);
        setTestStage(0);
      }
    }, 1000);
  };

  if (isTesting && currentTestChar) {
    return (
      <div className="max-w-xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="flex justify-between items-end border-l-4 border-primary pl-4">
           <div>
             <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-1">Active Exercise</p>
             <h3 className="text-2xl font-black uppercase tracking-tighter italic">KANA <span className="text-primary NOT-italic">BLITZ</span></h3>
           </div>
           <span className="text-sm font-black text-muted-foreground uppercase tracking-widest tabular-nums">{testStage + 1} // {testQueue.length}</span>
        </div>

        <div className="bg-card border-2 border-border dark:border-primary/20 rounded-sm p-12 overflow-hidden relative shadow-premium flex flex-col items-center">
          <AnimatePresence initial={false}>
             <motion.div 
               key={currentTestChar.id}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.2 }}
               className="flex flex-col items-center gap-12 md:gap-16 w-full"
             >
                <div className="text-8xl md:text-9xl font-black text-foreground drop-shadow-sm select-none">
                  {currentTestChar.character}
                </div>
                
                <div className="grid grid-cols-2 gap-3 w-full">
                  {options.map((opt, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      onClick={() => handleAnswer(opt)}
                      disabled={feedback !== null}
                      className="h-12 md:h-14 rounded-sm border-border hover:border-primary hover:bg-primary/5 text-foreground font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      {opt}
                    </Button>
                  ))}
                </div>
             </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {feedback === 'wrong' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-rose-600/5"
              >
                <div className="text-center p-6 bg-background border border-border shadow-2xl rounded-sm">
                   <p className="text-4xl font-black uppercase tracking-tighter text-primary">
                      FAILED
                   </p>
                </div>
              </motion.div>
            )}
            {feedback === 'correct' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-emerald-600/5"
              >
                <div className="text-center p-6 bg-background border border-border shadow-2xl rounded-sm">
                   <p className="text-4xl font-black uppercase tracking-tighter text-emerald-500">
                      SUCCESS
                   </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Button 
          variant="ghost" 
          onClick={() => setIsTesting(false)}
          className="w-full text-muted-foreground font-black uppercase tracking-[0.4em] text-[10px] hover:text-primary transition-colors"
        >
          ABORT MISSION
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
        <div className="space-y-2">
          <h2 className="text-5xl font-black text-foreground uppercase tracking-tighter italic leading-none">
            LEXICAL <span className="text-primary NOT-italic">FOUNDATION</span>
          </h2>
          <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.4em]">Hiragana and Katakana Mastery</p>
        </div>

        <div className="flex flex-col items-end gap-4 w-full md:w-auto">
          <div className="flex bg-muted p-1 rounded-sm border border-border overflow-x-auto max-w-full no-scrollbar">
            <TabButton active={activeTab === 'hiragana'} onClick={() => setActiveTab('hiragana')} label="Hiragana" />
            <TabButton active={activeTab === 'hiragana-ext'} onClick={() => setActiveTab('hiragana-ext')} label="Hira Ext" />
            <TabButton active={activeTab === 'katakana'} onClick={() => setActiveTab('katakana')} label="Katakana" />
            <TabButton active={activeTab === 'katakana-ext'} onClick={() => setActiveTab('katakana-ext')} label="Kata Ext" />
          </div>
          
          <Button 
            onClick={() => setIsTesting(true)}
            className="rounded-sm h-11 px-8 bg-foreground text-background font-black uppercase tracking-[0.3em] text-[10px] gap-3 shadow-xl hover:opacity-90 w-full md:w-auto"
          >
            <Play size={12} fill="currentColor" />
            INIT TEST
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {data.map((char) => (
          <motion.button
            key={char.id}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedChar(char);
              playAudio(char.character);
            }}
            className="relative h-24 rounded-sm border border-border transition-all duration-300 bg-card hover:border-primary hover:shadow-lg flex flex-col items-center justify-center gap-1 group"
          >
            <span className="text-3xl font-black text-foreground group-hover:scale-110 transition-transform">{char.character}</span>
            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{char.readings[0]}</span>
            <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Info size={10} className="text-primary" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedChar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/95 animate-in fade-in duration-500">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              style={{ backgroundColor: 'var(--card)' }}
              className="w-full max-w-2xl border-2 border-border border-t-4 border-t-primary rounded-sm p-8 md:p-12 shadow-premium relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedChar(null)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors uppercase font-black text-xs tracking-widest flex items-center gap-2 group"
              >
                <span className="opacity-50 group-hover:opacity-100">[</span> CLOSE <span className="opacity-50 group-hover:opacity-100">]</span>
              </button>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-shrink-0 bg-background p-4 md:p-8 border border-border rounded-sm shadow-inner group transition-colors hover:border-primary/20 max-w-[200px] md:max-w-none">
                  <StrokeOrder character={selectedChar.character} />
                </div>
                <div className="space-y-8 flex-1">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em]">Phonetic Signature</p>
                    <h3 className="text-5xl font-black text-foreground tracking-tighter uppercase italic">{selectedChar.readings[0]}</h3>
                  </div>
                  
                  <div className="bg-muted p-6 border-l-2 border-primary">
                    <p className="text-xs text-foreground font-bold uppercase tracking-wide leading-relaxed">{selectedChar.explanation}</p>
                  </div>

                  <Button 
                    onClick={() => playAudio(selectedChar.character)}
                    variant="outline"
                    className="h-14 w-full rounded-sm border-border bg-card hover:bg-muted font-black text-[10px] uppercase tracking-[0.4em] gap-3"
                  >
                    <Volume2 size={16} className="text-primary" />
                    PLAY PRONUNCIATION
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
