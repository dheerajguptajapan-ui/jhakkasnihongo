import React, { useState } from 'react';
import { Item, UserItem } from '../types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { persistence } from '../lib/persistence';

interface LessonSessionProps {
  items: Item[];
  onComplete: () => void;
  onCancel: () => void;
}

export const LessonSession: React.FC<LessonSessionProps> = ({ items, onComplete, onCancel }) => {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizInput, setQuizInput] = useState('');
  const [quizSubStep, setQuizSubStep] = useState<'meaning' | 'reading'>('meaning');

  const currentItem = items[currentIndex];
  const progress = ((currentIndex + 1) / items.length) * 100;

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsQuizMode(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleQuizSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const item = items[quizStep];
    const isCorrect = quizSubStep === 'meaning' 
      ? item.meanings.some(m => m.toLowerCase() === quizInput.toLowerCase())
      : item.readings.some(r => r === quizInput);

    if (isCorrect) {
      if (quizSubStep === 'meaning' && item.type !== 'radical') {
        setQuizSubStep('reading');
        setQuizInput('');
      } else {
        // Correct and finished this item
        if (quizStep < items.length - 1) {
          setQuizStep(quizStep + 1);
          setQuizSubStep('meaning');
          setQuizInput('');
        } else {
          // All items finished!
          await finalizeLessons();
        }
      }
    } else {
      alert('Incorrect! Try again.');
    }
  };

  const finalizeLessons = async () => {
    if (!user) return;
    
    // Save all items to local persistent storage
    items.forEach(item => {
      persistence.updateUserItem(user.uid, item.id, {
        srsStage: 1, // Apprentice 1
        nextReviewAt: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
        lastReviewedAt: new Date().toISOString(),
        streak: 0
      });
    });

    onComplete();
  };

  if (isQuizMode) {
    const quizItem = items[quizStep];
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Lesson Quiz</h2>
          <Badge variant="outline">{quizStep + 1} / {items.length}</Badge>
        </div>
        <Progress value={((quizStep + 1) / items.length) * 100} className="h-2" />
        
        <Card className="overflow-hidden border-2 border-sky-200">
          <div className={`h-32 flex items-center justify-center text-6xl font-bold text-white ${
            quizItem.type === 'radical' ? 'bg-sky-500' : 
            quizItem.type === 'kanji' ? 'bg-rose-500' : 'bg-purple-500'
          }`}>
            {quizItem.character}
          </div>
          <CardContent className="p-8">
            <form onSubmit={handleQuizSubmit} className="space-y-6">
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">
                  {quizSubStep === 'meaning' ? 'What is the meaning?' : 'What is the reading?'}
                </p>
                <input
                  autoFocus
                  className="w-full text-3xl text-center border-b-2 border-slate-200 focus:border-sky-500 outline-none py-2 transition-colors"
                  value={quizInput}
                  onChange={(e) => setQuizInput(e.target.value)}
                  placeholder="Type answer..."
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={onCancel}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Quit
        </Button>
        <div className="flex items-center gap-4">
          <BookOpen className="w-5 h-5 text-sky-600" />
          <span className="font-bold">Lesson Session</span>
        </div>
        <div className="w-24" />
      </div>

      <Progress value={progress} className="h-2" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="overflow-hidden border-none shadow-xl">
            <div className={`h-48 flex items-center justify-center text-8xl font-bold text-white ${
              currentItem.type === 'radical' ? 'bg-sky-500' : 
              currentItem.type === 'kanji' ? 'bg-rose-500' : 'bg-purple-500'
            }`}>
              {currentItem.character}
            </div>
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Meaning</h3>
                    <p className="text-3xl font-bold text-slate-900">{currentItem.meanings.join(', ')}</p>
                  </div>
                  {currentItem.readings.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Reading</h3>
                      <p className="text-3xl font-bold text-slate-900">{currentItem.readings.join(', ')}</p>
                    </div>
                  )}
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Mnemonic</h3>
                  <p className="text-slate-700 leading-relaxed">{currentItem.mnemonic}</p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button onClick={handleNext} className="bg-sky-600 hover:bg-sky-700 px-8">
                  {currentIndex === items.length - 1 ? 'Start Quiz' : 'Next'}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
