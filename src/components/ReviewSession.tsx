import React, { useState, useEffect, useRef } from 'react';
import { Item, UserItem, TextSegment } from '../types';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { X, Volume2, CheckCircle2, AlertCircle, Zap, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { PersistenceService } from '../lib/services/PersistenceService';
import { processReviewResult } from '../lib/srs';
import { GrammarPuzzle } from './GrammarPuzzle';
import { toast } from 'sonner';

interface ReviewSessionProps {
  items: (Item & { userItem: UserItem })[];
  onComplete: () => void;
  onCancel: () => void;
}

type SubPhase = 'meaning' | 'reading' | 'grammar-boss';

export const ReviewSession: React.FC<ReviewSessionProps> = ({ items, onComplete, onCancel }) => {
  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [subPhase, setSubPhase] = useState<SubPhase>('meaning');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [itemStates, setItemStates] = useState<Record<string, {
    meaningDone: boolean;
    readingDone: boolean;
    grammarDone: boolean;
    incorrectCount: number;
  }>>({});

  const currentItem = items[currentIndex];
  const currentState = itemStates[currentItem?.id] || {
    meaningDone: false,
    readingDone: currentItem?.type === 'radical',
    grammarDone: true,
    incorrectCount: 0
  };

  const progress = (completedCount / items.length) * 100;

  useEffect(() => {
    if (!currentItem) return;
    // Decide whether this item gets a grammar boss fight (25% chance if it has sentences with TextSegment arrays)
    const hasPuzzleSentences = currentItem.sentences?.some(
      s => Array.isArray(s.japanese) && (s.japanese as TextSegment[]).length >= 3
    );
    const shouldHaveBoss = hasPuzzleSentences && Math.random() < 0.25;

    if (!itemStates[currentItem.id]) {
      setItemStates(prev => ({
        ...prev,
        [currentItem.id]: {
          meaningDone: false,
          readingDone: currentItem.type === 'radical',
          grammarDone: !shouldHaveBoss,
          incorrectCount: 0
        }
      }));
    }
    setSubPhase('meaning');
    setInput('');
    setFeedback(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [currentIndex, currentItem?.id]);

  const playAudio = (text: string) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    window.speechSynthesis.speak(u);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback) return;

    const isCorrect = subPhase === 'meaning'
      ? currentItem.meanings.some(m => m.toLowerCase() === input.trim().toLowerCase())
      : currentItem.readings.some(r => r === input.trim());

    if (isCorrect) {
      setFeedback('correct');
      playAudio(currentItem.character);

      setTimeout(async () => {
        setFeedback(null);
        setInput('');
        const newState = { ...currentState };

        if (subPhase === 'meaning') {
          newState.meaningDone = true;
          if (!newState.readingDone) {
            setSubPhase('reading');
            setItemStates(prev => ({ ...prev, [currentItem.id]: newState }));
            return;
          }
        } else {
          newState.readingDone = true;
        }

        setItemStates(prev => ({ ...prev, [currentItem.id]: newState }));

        if (newState.meaningDone && newState.readingDone) {
          if (!newState.grammarDone) {
            // Trigger the grammar boss fight!
            setSubPhase('grammar-boss');
          } else {
            await finalizeItem(newState.incorrectCount);
          }
        }
      }, 700);
    } else {
      setFeedback('incorrect');
      setStreak(0);
      setItemStates(prev => ({
        ...prev,
        [currentItem.id]: { ...currentState, incorrectCount: currentState.incorrectCount + 1 }
      }));
      setTimeout(() => {
        setFeedback(null);
        setInput('');
      }, 900);
    }
  };

  const handleGrammarSuccess = async () => {
    const newState = { ...currentState, grammarDone: true };
    setItemStates(prev => ({ ...prev, [currentItem.id]: newState }));
    await finalizeItem(newState.incorrectCount);
  };

  const finalizeItem = async (incorrectCount: number) => {
    if (!user) return;

    const isPerfect = incorrectCount === 0;
    const sm2 = processReviewResult(isPerfect, currentItem.userItem);

    await PersistenceService.updateUserItem(user.uid, currentItem.id, {
      nextReviewAt: sm2.nextReviewAt.toISOString(),
      lastReviewedAt: new Date().toISOString(),
      easinessFactor: sm2.easinessFactor,
      interval: sm2.interval,
      repetitions: sm2.repetitions,
      streak: isPerfect ? (currentItem.userItem.streak || 0) + 1 : 0
    });

    await PersistenceService.trackActivity('reviews');

    if (isPerfect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > 0 && newStreak % 5 === 0) {
        toast.success(`🔥 ${newStreak} item streak! +${newStreak * 10} XP`, { duration: 2500 });
      }
    }

    setCompletedCount(prev => prev + 1);

    if (currentIndex < items.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      const totalXP = items.length * 10 + streak * 5;
      toast.success(`🎉 Session complete! +${totalXP} XP earned`, { duration: 3000 });
      setTimeout(onComplete, 1200);
    }
  };

  if (!currentItem) return null;

  const typeColor = currentItem.type === 'kanji' ? 'text-rose-500' : currentItem.type === 'radical' ? 'text-sky-500' : 'text-primary';
  const typeBg = currentItem.type === 'kanji' ? 'bg-rose-500/8' : currentItem.type === 'radical' ? 'bg-sky-500/8' : 'bg-primary/8';

  // ── GRAMMAR BOSS FIGHT ────────────────────────────────────────────────────
  if (subPhase === 'grammar-boss') {
    const puzzleSentence = currentItem.sentences?.find(
      s => Array.isArray(s.japanese) && (s.japanese as TextSegment[]).length >= 3
    );

    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <Button variant="ghost" size="sm" onClick={onCancel} className="gap-2 text-muted-foreground">
            <X size={16} /> Quit
          </Button>
          <div className="flex items-center gap-3 flex-1 mx-6">
            <Progress value={progress} className="h-2 flex-1" />
            <span className="text-xs font-bold text-muted-foreground tabular-nums">{completedCount + 1}/{items.length}</span>
          </div>
          {streak >= 3 && (
            <Badge className="gap-1 font-bold bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20">
              <Flame size={12} /> {streak}
            </Badge>
          )}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full space-y-6"
          >
            {/* Context header */}
            <div className={`flex items-center justify-between p-4 rounded-2xl border border-border ${typeBg}`}>
              <span className={`text-4xl font-bold ${typeColor}`}>{currentItem.character}</span>
              <div className="text-right">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Boss Fight</p>
                <p className="text-sm font-bold text-foreground">{currentItem.meanings[0]}</p>
              </div>
            </div>

            {puzzleSentence ? (
              <GrammarPuzzle
                segments={puzzleSentence.japanese as TextSegment[]}
                translation={puzzleSentence.english}
                onSuccess={handleGrammarSuccess}
                onSkip={() => finalizeItem(currentState.incorrectCount + 1)}
              />
            ) : (
              // Fallback if no puzzle sentence
              <div className="text-center">
                <Button onClick={handleGrammarSuccess}>Continue</Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  // ── STANDARD REVIEW ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Button variant="ghost" size="sm" onClick={onCancel} className="gap-2 text-muted-foreground">
          <X size={16} /> Quit
        </Button>
        <div className="flex items-center gap-3 flex-1 mx-6">
          <Progress value={progress} className="h-2 flex-1" />
          <span className="text-xs font-bold text-muted-foreground tabular-nums">{completedCount + 1}/{items.length}</span>
        </div>
        <div className="flex items-center gap-2">
          {streak >= 3 && (
            <Badge className="gap-1 font-bold bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20">
              <Flame size={12} /> {streak}
            </Badge>
          )}
          <Badge variant="secondary" className="font-bold">
            <Zap size={10} className="mr-1" />
            SRS {currentItem.userItem.srsStage}
          </Badge>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 max-w-lg mx-auto w-full gap-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentItem.id}-${subPhase}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full space-y-8"
          >
            {/* Character display with feedback overlay */}
            <div className={`relative rounded-3xl border-2 overflow-hidden transition-all duration-300 ${
              feedback === 'correct' ? 'border-emerald-500' :
              feedback === 'incorrect' ? 'border-rose-500' :
              'border-border'
            }`}>
              <div className={`flex flex-col items-center justify-center py-14 gap-4 ${typeBg}`}>
                <span className={`text-8xl font-bold ${typeColor}`}>{currentItem.character}</span>

                {/* Phase indicator dots */}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full transition-colors ${currentState.meaningDone ? 'bg-emerald-500' : 'bg-muted-foreground/30'}`} />
                  {currentItem.type !== 'radical' && (
                    <div className={`w-2 h-2 rounded-full transition-colors ${currentState.readingDone ? 'bg-emerald-500' : 'bg-muted-foreground/30'}`} />
                  )}
                </div>
              </div>

              {/* Feedback overlay */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 flex items-center justify-center ${
                      feedback === 'correct' ? 'bg-emerald-500/15' : 'bg-rose-500/15'
                    }`}
                  >
                    {feedback === 'correct'
                      ? <CheckCircle2 className="w-20 h-20 text-emerald-500" />
                      : <AlertCircle className="w-20 h-20 text-rose-500" />
                    }
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Prompt & Input */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {subPhase === 'meaning' ? 'What does this mean?' : 'How do you read this?'}
              </p>
              <input
                ref={inputRef}
                autoFocus
                className={`w-full text-3xl text-center font-bold border-b-2 outline-none py-3 bg-transparent transition-colors ${
                  feedback === 'correct' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' :
                  feedback === 'incorrect' ? 'border-rose-500 text-rose-600 dark:text-rose-400' :
                  'border-border focus:border-primary text-foreground'
                }`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your answer..."
                disabled={!!feedback}
              />
              <AnimatePresence>
                {feedback && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center text-sm font-bold ${feedback === 'correct' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}
                  >
                    {feedback === 'correct'
                      ? `✓ ${subPhase === 'meaning' ? currentItem.meanings[0] : currentItem.readings[0]}`
                      : `✗ ${subPhase === 'meaning' ? currentItem.meanings[0] : currentItem.readings[0]}`
                    }
                  </motion.p>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                className="w-full h-12 font-bold text-base"
                disabled={!input.trim() || !!feedback}
              >
                Submit
              </Button>
            </form>

            {/* Audio button */}
            <div className="flex justify-center">
              <button
                onClick={() => playAudio(currentItem.character)}
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-full bg-muted"
              >
                <Volume2 size={12} /> Hear it
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-xs text-muted-foreground">Press Enter to submit</p>
      </div>
    </div>
  );
};
