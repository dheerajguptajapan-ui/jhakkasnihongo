import React, { useState } from 'react';
import { Item } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Furigana } from './Furigana';
import { useAuth } from '../lib/AuthContext';
import { Button } from './ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';

interface DokkaiViewProps {
  items: Item[];
}

export const DokkaiView: React.FC<DokkaiViewProps> = ({ items }) => {
  const { showFurigana } = useAuth();
  const [answers, setAnswers] = useState<Record<string, number[]>>({});

  if (items.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-200">
        <p className="text-slate-400 font-medium text-lg">No reading passages found for this level.</p>
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
    <div className="space-y-12">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-sky-600 text-white p-8">
            <CardTitle className="text-3xl font-black">{item.character}</CardTitle>
            <p className="text-sky-100 mt-2 font-medium italic">{item.meanings[0]}</p>
          </CardHeader>
          <CardContent className="p-8 space-y-10">
            <div className="space-y-6">
              <div className="text-2xl leading-[2.5] text-slate-800 font-medium bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <Furigana text={item.content || ''} show={showFurigana} />
              </div>
              <details className="group">
                <summary className="cursor-pointer text-sky-600 font-bold uppercase tracking-widest text-xs hover:text-sky-700 transition-colors">
                  Show Translation
                </summary>
                <div className="mt-4 p-6 bg-slate-50 rounded-2xl text-slate-600 leading-relaxed italic">
                  {item.translation}
                </div>
              </details>
            </div>

            <div className="space-y-8">
              <h4 className="text-lg font-black text-slate-900 border-b pb-4">Comprehension Questions</h4>
              <div className="space-y-10">
                {item.questions?.map((q, qi) => (
                  <div key={qi} className="space-y-4">
                    <p className="text-lg font-bold text-slate-800 flex gap-3">
                      <span className="text-sky-600">Q{qi + 1}.</span>
                      {q.question}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((opt: string, oi: number) => {
                        const isSelected = answers[item.id]?.[qi] === oi;
                        const isCorrect = oi === q.answerIndex;
                        const showResult = answers[item.id]?.[qi] !== undefined;

                        return (
                          <button
                            key={oi}
                            onClick={() => handleAnswer(item.id, qi, oi)}
                            className={`p-4 rounded-xl text-left transition-all border-2 ${
                              isSelected 
                                ? (isCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-rose-50 border-rose-500 text-rose-700')
                                : (showResult && isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-slate-100 hover:border-sky-300 text-slate-600')
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{opt}</span>
                              {isSelected && (
                                isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
