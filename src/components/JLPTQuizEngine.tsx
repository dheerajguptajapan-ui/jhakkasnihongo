import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { getLesson, allCurriculum } from '../lib/curriculum';
import { Item } from '../types';
import { Timer, CheckCircle2, XCircle, Trophy, SkipForward, ArrowLeft, Target, Award } from 'lucide-react';
import { RubyText } from './RubyText';
import { useAuth } from '../lib/AuthContext';
import { JhakkasBot } from './JhakkasBot';
import { analyzeGrammarSegment } from '../lib/grammarEngine';

interface JLPTQuizEngineProps {
  level?: number;
  lessonNumber?: number;
  limit?: number;
  category?: string;
  isCumulative? : boolean;
  onFinish?: (score: number) => void;
  onResult?: (isCorrect: boolean, item: Item) => void;
}

export const JLPTQuizEngine: React.FC<JLPTQuizEngineProps> = ({ 
  level = 5, 
  lessonNumber = 1,
  limit = 20,
  category,
  isCumulative = false,
  onFinish,
  onResult 
}) => {
  const { settings, getTodayProgress } = useAuth();
  const showFuri = settings?.showFurigana ?? true;
  const [queue, setQueue] = useState<Item[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [missedOnce, setMissedOnce] = useState<Set<string>>(new Set());
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isInterrupted, setIsInterrupted] = useState(false);
  const [showExitReport, setShowExitReport] = useState(false);

  // Initialize Queue
  useEffect(() => {
    let poolItems: Item[] = [];
    if (isCumulative) {
      const internalLevel = level; 
      const lessons = allCurriculum[internalLevel] || {};
      poolItems = Object.values(lessons).flat();
    } else {
      poolItems = getLesson(lessonNumber, level);
    }
    
    if (category) {
      poolItems = poolItems.filter(i => i.type === category);
    } else {
      // INCLUDE GRAMMAR BY DEFAULT IN CHAPTER QUIZZES
      poolItems = poolItems.filter(i => i.type === 'vocabulary' || i.type === 'kanji' || i.type === 'grammar');
    }
    
    if (poolItems.length === 0) {
      // Avoid placeholder if possible, use level data
      return;
    }

    // GLOBAL DISTRACTOR POOL: Pull from the entire level, not just the current lesson
    const fullLevelItems = Object.values(allCurriculum[level] || {}).flat();
    
    // Distractor pool for grammar syntax (Strictly Japanese segments ONLY)
    const grammarPool = fullLevelItems.flatMap(i => {
      const parts: string[] = [i.character, ...(i.readings || [])];
      if (i.sentences) {
        i.sentences.forEach(s => {
          if (typeof s.japanese === 'string') parts.push(s.japanese);
          if (Array.isArray(s.japanese)) s.japanese.forEach(seg => parts.push(seg.text));
          if (s.segments) s.segments.forEach(seg => parts.push(seg.text));
        });
      }
      return parts;
    })
    .map(t => (typeof t === 'string' ? t.trim() : ''))
    .filter(t => t.length > 0 && t.length < 15 && !['。', '、', '？', '！', '「', '」'].includes(t))
    .filter(t => !/[a-zA-Z]/.test(t)); // PURGE ROMAJI/ENGLISH FROM OPTIONS

    const randomized = [...poolItems]
      .sort(() => 0.5 - Math.random())
      .slice(0, limit)
      .map(item => {
        if (item.type === 'grammar' && item.sentences && item.sentences.length > 0) {
          const sentence = item.sentences[Math.floor(Math.random() * item.sentences.length)];
          
          // Data Normalization: Handle different curriculum segment formats
          let segments: any[] = [];
          if (Array.isArray(sentence.japanese)) {
            segments = sentence.japanese;
          } else if (sentence.segments) {
            segments = sentence.segments;
          } else if (typeof sentence.japanese === 'string') {
            // Fallback: splitting by common particles and copulas if segments are missing
            // We use a more comprehensive list for N5/N4 (desu, masu, particles)
            segments = (sentence.japanese as string)
              .split(/([はがをにでともへより]|です|ます|でした|ました|じゃありません|ではありません)/g)
              .filter(Boolean)
              .map(t => ({ text: t.trim() }));
          }

          // Pick a random significant segment (not punctuation)
          const validIndices = segments.map((s, i) => (!s.text.match(/^[。！？、、]$/) ? i : -1)).filter(i => i !== -1);
          
          // Prioritize grammar markers (particles, copulas, common suffixes) over nouns/names
          const grammarIndices = validIndices.filter(i => {
            const text = segments[i].text;
            return text.match(/^(は|が|を|に|で|と|も|へ|から|まで|や|か|ね|よ|です|ます|ました|ません|でした|じゃありません|ではありません)$/);
          });
          
          const poolToPickFrom = grammarIndices.length > 0 ? grammarIndices : validIndices;
          const targetIndex = poolToPickFrom.length > 0 ? poolToPickFrom[Math.floor(Math.random() * poolToPickFrom.length)] : 0;
          const targetSegment = segments[targetIndex]?.text || item.character;
          
          // Use Grammar Engine to get consistent distractors
          const analysis = analyzeGrammarSegment(targetSegment, grammarPool);
          
          // Construct display string using professional Japanese blanking with Furigana support
          const displayCharacter = segments.map((s, i) => {
            if (i === targetIndex) return "（　　）";
            if (s.reading && s.reading !== s.text) {
              return `[${s.text}:${s.reading}]`;
            }
            return s.text;
          }).join("");

          return {
            ...item,
            questionType: 'syntax',
            displayCharacter,
            correctText: targetSegment,
            distractors: analysis.distractors,
            logicTitle: analysis.logicTitle,
            logicDescription: analysis.logicDescription,
            hintMeaning: sentence.english,
            correctSentence: sentence.japanese as string
          };
        }
        
        return {
          ...item,
          questionType: item.type === 'radical' ? 'meaning' : (item.type === 'grammar' ? 'meaning' : (Math.random() > 0.5 ? 'reading' : 'meaning'))
        };
      });

    setQueue(randomized as any);
  }, [level, lessonNumber, isCumulative, limit, category]);

  const currentItem = queue[currentIndex];

  const options = useMemo(() => {
    if (!currentItem) return [];
    const qItem = currentItem as any;
    const fullLevelItems = Object.values(allCurriculum[level] || {}).flat();
    
    // NEW GRAMMAR SYNTAX LOGIC
    if (qItem.questionType === 'syntax') {
      const correct = qItem.correctText;
      const others = qItem.distractors || [];
      
      return [correct, ...others].sort(() => 0.5 - Math.random());
    }

    const isReading = qItem.questionType === 'reading';
    
    const getSafeReading = (item: any) => {
      const readings = [
        ...(item.readings || []),
        ...(item.kunReadings || []),
        ...(item.onReadings || [])
      ].filter(r => r && r !== "DATA_OFFLINE");
      return readings.length > 0 ? readings[0] : "DATA_OFFLINE";
    };
    const getSafeMeaning = (item: any) => (item.meanings && item.meanings.length > 0) ? item.meanings[0] : "DATA_OFFLINE";

    const correct = isReading ? getSafeReading(qItem) : getSafeMeaning(qItem);
    
    const others = fullLevelItems
      .filter(i => i.id !== currentItem.id)
      .map(i => isReading ? getSafeReading(i) : getSafeMeaning(i))
      .filter((m, i, self) => m && m !== "DATA_OFFLINE" && self.indexOf(m) === i && m !== correct)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    while (others.length < 3) {
      const fallbacks = isReading ? ['---', '...', '???'] : ['None', 'Unknown', 'TBD'];
      others.push(fallbacks[others.length] || '---');
    }
    
    return [correct, ...others].sort(() => 0.5 - Math.random());
  }, [currentItem, queue]);

  const handleAnswer = (opt: string) => {
    if (feedback || !currentItem || isInterrupted) return;
    setSelectedOption(opt);
    const qItem = currentItem as any;
    
    if (opt === "__timeout__") {
      setIsInterrupted(true);
      return;
    }

    let isCorrect = false;
    if (qItem.questionType === 'syntax') {
      isCorrect = opt === qItem.correctText;
    } else {
      const isReading = qItem.questionType === 'reading';
      isCorrect = isReading 
        ? [
            ...(qItem.readings || []),
            ...(qItem.kunReadings || []),
            ...(qItem.onReadings || [])
          ].some((r: string) => r === opt)
        : qItem.meanings.some((m: string) => m === opt);
    }

    setFeedback(isCorrect ? 'correct' : 'wrong');
    onResult?.(isCorrect, currentItem);

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      if (!missedOnce.has(currentItem.id)) {
        setScore(s => s + 100);
      }
      
      setTimeout(() => {
        setFeedback(null);
        setSelectedOption(null);
        if (currentIndex < queue.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setTimeLeft(30);
        } else {
          setShowExitReport(true);
        }
      }, 800);
    } else {
      setMissedOnce(prev => new Set(prev).add(currentItem.id));
      setQueue(prev => [...prev, currentItem]);

      setTimeout(() => {
        setFeedback(null);
        setSelectedOption(null);
      }, 1800);
    }
  };

  const retryCurrentQuestion = () => {
    setTimeLeft(30);
    setIsInterrupted(false);
    setFeedback(null);
    setSelectedOption(null);
  };

  useEffect(() => {
    if (timeLeft > 0 && !feedback && !showExitReport && !isInterrupted) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isInterrupted) {
      handleAnswer("__timeout__");
    }
  }, [timeLeft, feedback, showExitReport, isInterrupted]);

  if (!queue.length) return <div>Matrix Empty. Rebooting...</div>;

  const { total, percentage } = getTodayProgress();
  const sessionTotal = total + correctCount; // Estimate current progress
  const finalPercentage = Math.round((sessionTotal / 20) * 100);

  if (showExitReport) {
    return (
      <div className="flex flex-col items-center gap-8 py-12 animate-in fade-in duration-700 max-w-xl mx-auto">
        <JhakkasBot state={correctCount > 0 ? "success" : "idle"} />
        <div className="text-center space-y-2">
           <h2 className="text-4xl font-black uppercase tracking-tighter italic">TEST <span className="text-primary NOT-italic">REPORT</span></h2>
           <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Test Complete</p>
        </div>

        <div className="w-full bg-card border border-border rounded-sm p-10 space-y-8 shadow-2xl">
           <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Items</p>
                <p className="text-4xl font-black">{correctCount} <span className="text-sm opacity-30">/ {queue.length}</span></p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Achieved Goal</p>
                <p className="text-4xl font-black text-primary">{finalPercentage}%</p>
              </div>
           </div>

           <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, finalPercentage)}%` }}
                className="h-full bg-primary"
              />
           </div>

           <div className="pt-4 border-t border-border">
             <p className="text-[11px] text-center font-bold text-foreground uppercase tracking-wider leading-relaxed">
               {finalPercentage === 0 ? `YOU HAVE ACHIEVED 0 PERCENT. GOOD TRY, RESUME TEST.` : 
                `YOU HAVE COMPLETED ${finalPercentage} PERCENT OF YOUR GOAL. NEURAL MATRIX STABILIZING.`}
             </p>
           </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <Button 
            onClick={() => onFinish?.(score)} 
            className="h-14 rounded-sm font-black bg-primary text-white text-xs tracking-[0.4em] shadow-xl hover:opacity-90 uppercase"
          >
            CLOSE TEST
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => window.location.reload()} 
            className="h-12 rounded-sm font-black text-muted-foreground hover:text-foreground text-[10px] tracking-widest uppercase"
          >
            RETRY TEST
          </Button>
        </div>
      </div>
    );
  }

  const isReadingPhase = (currentItem as any)?.questionType === 'reading';

  return (
    <div className="max-w-2xl mx-auto space-y-8 px-4 pb-12">
      {/* Precision HUD Header */}
      <div className="flex justify-between items-center bg-card p-5 rounded-sm border border-border shadow-sm">
         <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowExitReport(true)}
              className="h-10 w-10 p-0 rounded-sm border-border hover:border-primary transition-colors"
            >
              <ArrowLeft size={16} />
            </Button>
            <div className="h-8 w-px bg-border mx-1" />
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Convergence</span>
              <span className="text-lg font-black tabular-nums">{score}</span>
            </div>
         </div>
         
         <div className="flex items-center gap-8">
            <div className={`flex flex-col items-end ${timeLeft < 10 ? 'text-primary animate-pulse' : 'text-muted-foreground'}`}>
               <span className="text-[9px] font-black uppercase tracking-widest leading-none mb-1">Stability</span>
               <div className="flex items-center gap-2">
                 <Timer size={14} />
                 <span className="font-mono text-base font-black tracking-tighter">{timeLeft}s</span>
               </div>
            </div>
             <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground bg-muted px-4 py-2 rounded-sm">
                SEGMENT {currentIndex + 1} // {queue.length}
             </div>
         </div>
      </div>

      <div className="flex justify-center -mb-4 relative z-10">
         <JhakkasBot state={feedback === 'correct' ? 'success' : feedback === 'wrong' ? 'error' : 'idle'} />
      </div>

      <div className="bg-card border border-border rounded-sm shadow-2xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id + (currentItem as any).questionType}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-10 pt-16 space-y-12"
          >
            <div className="flex flex-col items-center justify-center space-y-8">
              {(isReadingPhase || (currentItem as any).questionType === 'syntax') && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-6 py-2 border-b border-primary/20 text-center mb-4 max-w-lg"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-1">Target Concept</p>
                  <p className="text-sm md:text-xl font-black uppercase tracking-tight text-foreground leading-snug">
                    {(currentItem as any).hintMeaning || currentItem.meanings.join(' / ')}
                  </p>
                </motion.div>
              )}

              <div className="text-center px-4">
                <RubyText
                  text={(currentItem as any).displayCharacter || currentItem.character || ''}
                  showFurigana={isReadingPhase ? false : showFuri}
                  className={`${((currentItem as any).displayCharacter?.length > 10) ? 'text-4xl md:text-6xl' : 'text-7xl md:text-9xl'} font-black text-foreground leading-tight block tracking-tighter`}
                />
              </div>
              
              <div className="px-6 py-2 bg-muted rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-foreground/60 flex items-center gap-4">
                <span>{currentItem.type}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary">
                  {currentItem.type === 'grammar' ? "COMMAND: CALIBRATE SYNTAX" : (isReadingPhase ? "COMMAND: DECODE READING" : "COMMAND: DECODE MEANING")}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
               {options.map((opt, i) => {
                 const isSelected = selectedOption === opt;
                 const isCorrectFeedback = feedback === 'correct' && isSelected;
                 const isWrongFeedback = feedback === 'wrong' && isSelected;
                 
                 return (
                   <Button
                      key={i}
                      variant={isSelected ? "default" : "outline"}
                      onClick={() => handleAnswer(opt)}
                      className={`h-16 rounded-sm border font-black text-xs transition-all active:scale-[0.98] uppercase tracking-widest ${
                        isCorrectFeedback 
                          ? 'bg-emerald-600 border-emerald-400 text-white animate-pulse' 
                          : isWrongFeedback 
                          ? 'bg-rose-600 border-rose-400 text-white animate-bounce' 
                          : 'border-border hover:border-primary hover:bg-primary/5 text-foreground'
                      }`}
                   >
                     {opt}
                   </Button>
                 );
               })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feedback Neural HUD Overlay */}
        <AnimatePresence>
          {(feedback === 'wrong' || isInterrupted) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md ${
                isInterrupted 
                  ? 'bg-primary/20' 
                  : (feedback === 'correct' ? 'bg-primary/10' : 'bg-rose-600/10')
              }`}
            >
              <div className="text-center p-12 bg-background border border-border shadow-2xl rounded-sm max-w-sm w-full mx-6 space-y-6">
                 <div className="space-y-2">
                   <p className={`text-4xl font-black uppercase tracking-tighter ${isInterrupted ? 'text-foreground' : (feedback === 'correct' ? 'text-foreground' : 'text-primary')}`}>
                      {isInterrupted ? 'TEST INTERRUPTED' : (feedback === 'correct' ? 'STABLE' : 'FAILED')}
                   </p>
                   {isInterrupted && (
                     <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Jhakkas stability failure detected</p>
                   )}
                 </div>

                 {!isInterrupted && feedback === 'wrong' && (
                   <div className="space-y-2 py-4 border-y border-border">
                      <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Protocol Correction</p>
                      <p className="text-2xl font-black text-foreground">
                        {(currentItem as any).correctText || (currentItem.type === 'grammar' ? currentItem.meanings[0] : (currentItem as any).readings[0])}
                      </p>
                      
                      {currentItem.type === 'grammar' && (currentItem as any).logicTitle && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 mb-2">
                             <div className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded-sm">
                               <p className="text-[7px] font-black uppercase text-primary tracking-widest">{(currentItem as any).logicTitle}</p>
                             </div>
                             <p className="text-[8px] font-black uppercase text-muted-foreground tracking-[0.2em]">Neural Directive</p>
                          </div>
                          <p className="text-[10px] font-bold text-muted-foreground leading-relaxed italic mb-3">{(currentItem as any).explanation}</p>
                          <div className="bg-muted/50 p-2 border-l-2 border-primary">
                            <p className="text-[9px] font-medium text-foreground leading-snug">{(currentItem as any).logicDescription}</p>
                          </div>
                        </div>
                      )}
                      
                      {currentItem.type === 'grammar' && !(currentItem as any).logicTitle && (currentItem as any).explanation && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <p className="text-[8px] font-black uppercase text-primary tracking-widest mb-2">Neural Directive</p>
                          <p className="text-[10px] font-bold text-muted-foreground leading-relaxed italic">{(currentItem as any).explanation}</p>
                        </div>
                      )}
                   </div>
                 )}

                 {isInterrupted && (
                   <div className="flex flex-col gap-2 pt-4">
                     <Button 
                       onClick={retryCurrentQuestion}
                       className="h-14 bg-primary text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-sm shadow-xl"
                     >
                       RETRY TEST
                     </Button>
                     <Button 
                       variant="ghost"
                       onClick={() => setShowExitReport(true)}
                       className="h-10 text-muted-foreground font-black uppercase tracking-widest text-[9px]"
                     >
                       CLOSE TEST
                     </Button>
                   </div>
                 )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <Button 
          variant="ghost" 
          onClick={() => setShowExitReport(true)}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary flex items-center gap-3 transition-colors"
        >
          <SkipForward size={14} />
          CLOSE TEST
        </Button>
      </div>
    </div>
  );
};
