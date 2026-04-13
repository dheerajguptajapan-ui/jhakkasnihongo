import React, { useState } from 'react';
import { Item } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Furigana } from './Furigana';
import { useAuth } from '../lib/AuthContext';
import { CheckCircle2, XCircle, BookOpen, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DokkaiViewProps {
  items: Item[];
}

export const DokkaiView: React.FC<DokkaiViewProps> = ({ items }) => {
  const { showFurigana } = useAuth();
  const [answers, setAnswers] = useState<Record<string, number[]>>({});

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border-2 border-dashed border-white/10">
        <p className="text-gray-400 font-medium text-lg">No reading passages found.</p>
      </div>
    );
  }

  const handleAnswer = (passageId: string, questionIndex: number, optionIndex: number) => {
    setAnswers(prev => {
      const passageAnswers = [...(prev[passageId] || [])];
      passageAnswers[questionIndex] = optionIndex;
      return { ...prev, [passageId]: passageAnswers };
    });
  };

  return (
    <div className="space-y-16 pb-12">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden bg-white/5 border-white/10 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-10 border-b border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <BookOpen size={20} />
                </div>
                <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 uppercase font-black text-[10px] tracking-widest px-3 py-1">
                  Reading Comprehension
                </Badge>
              </div>
              <CardTitle className="text-4xl font-black text-white">{item.character}</CardTitle>
              <p className="text-gray-400 mt-2 font-medium italic text-lg">{item.meanings[0]}</p>
            </CardHeader>
            <CardContent className="p-10 space-y-12">
              <div className="space-y-8">
                <div className="text-2xl leading-[2.8] text-gray-200 font-medium bg-white/[0.02] p-10 rounded-[2.5rem] border border-white/5 shadow-inner">
                  <Furigana text={item.content || ''} show={showFurigana} />
                </div>
                
                <AnimatePresence>
                  <details className="group">
                    <summary className="cursor-pointer text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-indigo-300 transition-colors list-none flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      View Translation
                    </summary>
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 p-8 bg-white/[0.01] rounded-[2rem] text-gray-400 leading-relaxed italic border border-white/5"
                    >
                      {item.translation}
                    </motion.div>
                  </details>
                </AnimatePresence>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                  <HelpCircle className="text-purple-400" size={24} />
                  <h4 className="text-xl font-black text-white uppercase tracking-tight">Quiz Arena</h4>
                </div>
                
                <div className="space-y-12">
                  {item.questions?.map((q, qi) => (
                    <div key={qi} className="space-y-6">
                      <p className="text-xl font-bold text-white flex gap-4">
                        <span className="text-indigo-500 font-black">Q{qi + 1}.</span>
                        {q.question}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {q.options.map((opt: string, oi: number) => {
                          const isSelected = answers[item.id]?.[qi] === oi;
                          const isCorrect = oi === q.answerIndex;
                          const showResult = answers[item.id]?.[qi] !== undefined;

                          return (
                            <motion.button
                              key={oi}
                              whileHover={!showResult ? { scale: 1.02, x: 5 } : {}}
                              whileTap={!showResult ? { scale: 0.98 } : {}}
                              onClick={() => !showResult && handleAnswer(item.id, qi, oi)}
                              disabled={showResult}
                              className={`p-6 rounded-3xl text-left transition-all duration-300 border-2 flex items-center justify-between group ${
                                isSelected 
                                  ? (isCorrect ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'bg-rose-500/10 border-rose-500 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.1)]')
                                  : (showResult && isCorrect ? 'bg-emerald-500/5 border-emerald-500/30 text-emerald-400' : 'bg-white/[0.02] border-white/5 hover:border-indigo-500/30 text-gray-400')
                              }`}
                            >
                              <span className="font-bold">{opt}</span>
                              {isSelected && (
                                isCorrect 
                                  ? <CheckCircle2 className="w-6 h-6 text-emerald-400 animate-in zoom-in duration-300" /> 
                                  : <XCircle className="w-6 h-6 text-rose-400 animate-in zoom-in duration-300" />
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const Badge = ({ children, variant, className }: any) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
    {children}
  </span>
);

