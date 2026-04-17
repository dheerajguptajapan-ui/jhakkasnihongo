import React, { useState, useEffect } from 'react';
import { Item } from '../types';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, Volume2, BookOpen, CheckCircle2, PenTool, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { PersistenceService } from '../lib/services/PersistenceService';
import { StrokeOrder } from './StrokeOrder';
import { toast } from 'sonner';

interface LessonSessionProps {
  items: Item[];
  onComplete: () => void;
  onCancel: () => void;
}

type Phase = 'learn' | 'quiz-meaning' | 'quiz-reading' | 'complete';

export const LessonSession: React.FC<LessonSessionProps> = ({ items, onComplete, onCancel }) => {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('learn');
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizInput, setQuizInput] = useState('');
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showStroke, setShowStroke] = useState(true);

  const currentItem = items[currentIndex];
  const quizItem = items[quizIndex];
  const learnProgress = ((currentIndex) / items.length) * 100;
  const quizProgress = ((quizIndex) / items.length) * 100;

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  // Auto-play audio when a new item loads
  useEffect(() => {
    if (phase === 'learn' && currentItem) {
      const t = setTimeout(() => playAudio(currentItem.character), 400);
      setShowStroke(false);
      const t2 = setTimeout(() => setShowStroke(true), 100);
      return () => { clearTimeout(t); clearTimeout(t2); };
    }
  }, [currentIndex, phase]);

  const handleNextLearn = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      // All items seen — move to quiz phase
      setPhase('quiz-meaning');
      setQuizIndex(0);
      setQuizInput('');
    }
  };

  const handlePrevLearn = () => {
    if (currentIndex > 0) setCurrentIndex(c => c - 1);
  };

  const handleQuizSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quizFeedback) return;

    const isCorrect = phase === 'quiz-meaning'
      ? quizItem.meanings.some(m => m.toLowerCase() === quizInput.trim().toLowerCase())
      : quizItem.readings.some(r => r === quizInput.trim());

    if (isCorrect) {
      setQuizFeedback('correct');
      playAudio(quizItem.character);
      setTimeout(() => {
        setQuizFeedback(null);
        setQuizInput('');
        if (phase === 'quiz-meaning' && quizItem.type !== 'radical') {
          // Move to reading quiz for same item
          setPhase('quiz-reading');
        } else {
          // Move to next item
          if (quizIndex < items.length - 1) {
            setQuizIndex(qi => qi + 1);
            setPhase('quiz-meaning');
          } else {
            finalizeLessons();
          }
        }
      }, 700);
    } else {
      setQuizFeedback('incorrect');
      setTimeout(() => {
        setQuizFeedback(null);
        setQuizInput('');
      }, 900);
    }
  };

  const finalizeLessons = async () => {
    if (!user) return;
    setPhase('complete');

    const savePromises = items.map(item =>
      PersistenceService.updateUserItem(user.uid, item.id, {
        srsStage: 1,
        nextReviewAt: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
        lastReviewedAt: new Date().toISOString(),
        streak: 0,
      })
    );
    await Promise.all(savePromises);
    for (let i = 0; i < items.length; i++) {
      await PersistenceService.trackActivity('lessons');
    }

    toast.success(`🎉 Lesson complete! ${items.length} new items learned.`, { duration: 3000 });
    setTimeout(onComplete, 1500);
  };

  // ── COMPLETE SCREEN ────────────────────────────────────────────────────────
  if (phase === 'complete') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-6"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Lesson Complete!</h2>
            <p className="text-muted-foreground">You mastered {items.length} new items. They'll enter your SRS review queue in 4 hours.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── QUIZ PHASE ─────────────────────────────────────────────────────────────
  if (phase === 'quiz-meaning' || phase === 'quiz-reading') {
    const isReading = phase === 'quiz-reading';
    const typeColor = quizItem.type === 'kanji' ? 'text-rose-500' : quizItem.type === 'radical' ? 'text-sky-500' : 'text-primary';

    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <Button variant="ghost" size="sm" onClick={onCancel} className="gap-2 text-muted-foreground">
            <X size={16} /> Quit
          </Button>
          <div className="flex items-center gap-3 flex-1 mx-6">
            <Progress value={quizProgress} className="h-2 flex-1" />
            <span className="text-xs font-bold text-muted-foreground tabular-nums">{quizIndex + 1}/{items.length}</span>
          </div>
          <Badge variant="secondary" className="font-bold text-xs">Quiz</Badge>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 gap-8 max-w-lg mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${quizItem.id}-${phase}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full space-y-8"
            >
              {/* Character display */}
              <div className={`text-center text-8xl font-bold ${typeColor}`}>
                {quizItem.character}
              </div>

              {/* Prompt */}
              <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {isReading ? 'What is the reading?' : 'What is the meaning?'}
              </p>

              {/* Input */}
              <form onSubmit={handleQuizSubmit} className="space-y-4">
                <input
                  autoFocus
                  className={`w-full text-3xl text-center font-bold border-b-2 outline-none py-3 bg-transparent transition-colors ${
                    quizFeedback === 'correct' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' :
                    quizFeedback === 'incorrect' ? 'border-rose-500 text-rose-600 dark:text-rose-400' :
                    'border-border focus:border-primary text-foreground'
                  }`}
                  value={quizInput}
                  onChange={(e) => setQuizInput(e.target.value)}
                  placeholder={isReading ? 'Type reading...' : 'Type meaning...'}
                  disabled={!!quizFeedback}
                />
                <AnimatePresence>
                  {quizFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`text-center text-sm font-bold uppercase tracking-wider ${
                        quizFeedback === 'correct' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                      }`}
                    >
                      {quizFeedback === 'correct' ? '✓ Correct!' : '✗ Try again'}
                    </motion.div>
                  )}
                </AnimatePresence>
                <Button type="submit" className="w-full h-12 font-bold text-base" disabled={!quizInput.trim() || !!quizFeedback}>
                  Submit
                </Button>
              </form>

              {/* Hint pill */}
              <div className="flex justify-center">
                <button
                  onClick={() => playAudio(quizItem.character)}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-full bg-muted"
                >
                  <Volume2 size={12} /> Hear it
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // ── LEARN PHASE ────────────────────────────────────────────────────────────
  const typeColor = currentItem.type === 'kanji' ? 'text-rose-500' : currentItem.type === 'radical' ? 'text-sky-500' : 'text-primary';
  const typeBg = currentItem.type === 'kanji' ? 'bg-rose-500/8' : currentItem.type === 'radical' ? 'bg-sky-500/8' : 'bg-primary/8';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Button variant="ghost" size="sm" onClick={onCancel} className="gap-2 text-muted-foreground">
          <X size={16} /> Quit
        </Button>
        <div className="flex items-center gap-3 flex-1 mx-6">
          <Progress value={learnProgress} className="h-2 flex-1" />
          <span className="text-xs font-bold text-muted-foreground tabular-nums">{currentIndex + 1}/{items.length}</span>
        </div>
        <Badge variant="secondary" className="font-bold text-xs">Learn</Badge>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 max-w-2xl mx-auto w-full gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full space-y-6"
          >
            {/* Hero Card */}
            <div className={`rounded-3xl border border-border overflow-hidden`}>
              {/* Character hero */}
              <div className={`${typeBg} flex flex-col items-center justify-center py-12 gap-4 border-b border-border`}>
                <div className={`text-8xl md:text-9xl font-black ${typeColor}`}>
                  {currentItem.character}
                </div>
                <button
                  onClick={() => playAudio(currentItem.character)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all text-sm font-medium"
                >
                  <Volume2 size={14} /> Play audio
                </button>
              </div>

              {/* Info */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Meaning</p>
                    <p className="text-2xl font-bold text-foreground">{currentItem.meanings.join(', ')}</p>
                  </div>
                  {currentItem.readings.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Reading</p>
                      <p className="text-2xl font-bold text-foreground">{currentItem.readings.join(', ')}</p>
                    </div>
                  )}
                </div>

                {currentItem.mnemonic && (
                  <div className="p-4 bg-muted rounded-xl border border-border">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Mnemonic</p>
                    <p className="text-sm text-foreground leading-relaxed">{currentItem.mnemonic}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Stroke Order Panel */}
            <div className="rounded-2xl border border-border p-6 bg-card space-y-4">
              <div className="flex items-center gap-2">
                <PenTool size={14} className="text-rose-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Stroke Order</p>
              </div>
              {showStroke && <StrokeOrder character={currentItem.character} />}
            </div>

            {/* Example Sentences */}
            {currentItem.sentences && currentItem.sentences.length > 0 && (
              <div className="rounded-2xl border border-border p-6 bg-card space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-primary" />
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Example</p>
                </div>
                {currentItem.sentences.slice(0, 1).map((s, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-lg font-bold text-foreground">
                      {typeof s.japanese === 'string' ? s.japanese : s.japanese.map((seg: any) => seg.text).join('')}
                    </p>
                    <p className="text-sm text-muted-foreground">{s.english}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between w-full pt-2">
          <Button
            variant="outline"
            onClick={handlePrevLearn}
            disabled={currentIndex === 0}
            className="gap-2"
          >
            <ChevronLeft size={16} /> Previous
          </Button>
          <Button onClick={handleNextLearn} className="gap-2 px-8 font-bold">
            {currentIndex === items.length - 1 ? 'Start Quiz' : 'Next'}
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
