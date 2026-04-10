import React, { useState, useEffect } from 'react';
import { Item, UserItem, SRS_INTERVALS } from '../types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { persistence } from '../lib/persistence';

interface ReviewSessionProps {
  items: (Item & { userItem: UserItem })[];
  onComplete: () => void;
  onCancel: () => void;
}

export const ReviewSession: React.FC<ReviewSessionProps> = ({ items, onComplete, onCancel }) => {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [subStep, setSubStep] = useState<'meaning' | 'reading'>('meaning');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [itemStates, setItemStates] = useState<Record<string, { meaningDone: boolean, readingDone: boolean, incorrectCount: number }>>({});

  const currentItem = items[currentIndex];
  const currentState = itemStates[currentItem.id] || { meaningDone: false, readingDone: false, incorrectCount: 0 };

  useEffect(() => {
    // Initialize state for current item if not exists
    if (!itemStates[currentItem.id]) {
      setItemStates(prev => ({
        ...prev,
        [currentItem.id]: { meaningDone: false, readingDone: currentItem.type === 'radical', incorrectCount: 0 }
      }));
      setSubStep('meaning');
    }
  }, [currentIndex, currentItem, itemStates]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback) return;

    const isCorrect = subStep === 'meaning'
      ? currentItem.meanings.some(m => m.toLowerCase() === input.trim().toLowerCase())
      : currentItem.readings.some(r => r === input.trim());

    if (isCorrect) {
      setFeedback('correct');
      setTimeout(() => {
        setFeedback(null);
        setInput('');
        
        const newState = { ...currentState };
        if (subStep === 'meaning') newState.meaningDone = true;
        else newState.readingDone = true;

        setItemStates(prev => ({ ...prev, [currentItem.id]: newState }));

        if (newState.meaningDone && newState.readingDone) {
          // Item fully reviewed
          handleItemFinished(newState.incorrectCount);
        } else {
          setSubStep('reading');
        }
      }, 600);
    } else {
      setFeedback('incorrect');
      setItemStates(prev => ({
        ...prev,
        [currentItem.id]: { ...currentState, incorrectCount: currentState.incorrectCount + 1 }
      }));
      setTimeout(() => {
        setFeedback(null);
        setInput('');
      }, 1000);
    }
  };

  const handleItemFinished = async (incorrectCount: number) => {
    if (!user) return;

    const { userItem } = currentItem;
    let newStage = userItem.srsStage;
    
    if (incorrectCount === 0) {
      newStage = Math.min(9, newStage + 1);
    } else {
      const penalty = userItem.srsStage >= 5 ? 2 : 1;
      newStage = Math.max(1, newStage - penalty);
    }

    const nextInterval = SRS_INTERVALS[newStage];
    const nextReviewAt = nextInterval === -1 ? null : new Date(Date.now() + nextInterval).toISOString();

    persistence.updateUserItem(user.uid, currentItem.id, {
      srsStage: newStage,
      nextReviewAt,
      lastReviewedAt: new Date().toISOString(),
      streak: incorrectCount === 0 ? (userItem.streak || 0) + 1 : 0
    });

    setCompletedCount(prev => prev + 1);
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSubStep('meaning');
    } else {
      onComplete();
    }
  };

  const progress = (completedCount / items.length) * 100;

  if (!currentItem) return null;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <Button variant="ghost" size="sm" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
            {completedCount} Done
          </Badge>
          <Badge variant="secondary" className="bg-rose-100 text-rose-700">
            {items.length - completedCount} Remaining
          </Badge>
        </div>
      </div>

      <Progress value={progress} className="h-2" />

      <Card className={`overflow-hidden border-4 transition-colors duration-300 ${
        feedback === 'correct' ? 'border-emerald-500' : 
        feedback === 'incorrect' ? 'border-rose-500' : 'border-slate-200'
      }`}>
        <div className={`h-48 flex items-center justify-center text-8xl font-bold text-white relative ${
          currentItem.type === 'radical' ? 'bg-sky-500' : 
          currentItem.type === 'kanji' ? 'bg-rose-500' : 'bg-purple-500'
        }`}>
          {currentItem.character}
          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
              >
                {feedback === 'correct' ? (
                  <CheckCircle2 className="w-24 h-24 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-24 h-24 text-rose-400" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">
                {subStep === 'meaning' ? 'Meaning' : 'Reading'}
              </p>
              <input
                autoFocus
                className={`w-full text-4xl text-center border-b-2 outline-none py-2 transition-colors ${
                  feedback === 'correct' ? 'border-emerald-500 text-emerald-600' :
                  feedback === 'incorrect' ? 'border-rose-500 text-rose-600' :
                  'border-slate-200 focus:border-sky-500'
                }`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type answer..."
                disabled={!!feedback}
              />
            </div>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="text-slate-400">
                SRS Stage: {currentItem.userItem.srsStage}
              </Badge>
              <Badge variant="outline" className="text-slate-400">
                Type: {currentItem.type}
              </Badge>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="text-center text-slate-400 text-sm italic">
        Press Enter to submit
      </div>
    </div>
  );
};
