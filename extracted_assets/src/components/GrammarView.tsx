import React from 'react';
import { Item } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Furigana } from './Furigana';
import { useAuth } from '../lib/AuthContext';

interface GrammarViewProps {
  items: Item[];
}

export const GrammarView: React.FC<GrammarViewProps> = ({ items }) => {
  const { showFurigana } = useAuth();

  if (items.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-200">
        <p className="text-slate-400 font-medium text-lg">No grammar points found for this level.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden border-2 border-slate-100 hover:border-sky-200 transition-colors">
          <CardHeader className="bg-slate-50/50 border-b border-slate-100">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-black text-slate-900">
                  <Furigana text={item.character} show={showFurigana} />
                </CardTitle>
                <p className="text-sky-600 font-bold mt-1 uppercase tracking-wider text-xs">{item.meanings[0]}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">Explanation</h4>
              <p className="text-slate-700 leading-relaxed">{item.explanation}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Example Sentences</h4>
              <div className="space-y-4">
                {item.sentences?.map((s, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <div className="text-lg font-bold text-slate-900">
                      <Furigana text={s.furigana || s.japanese} show={showFurigana} />
                    </div>
                    <p className="text-sm text-slate-500 italic">{s.english}</p>
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
