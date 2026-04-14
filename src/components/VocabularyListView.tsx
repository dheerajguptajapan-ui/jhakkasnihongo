import React from 'react';
import { Item } from '../types';
import { Card, CardContent } from './ui/card';
import { Furigana } from './Furigana';
import { useAuth } from '../lib/AuthContext';
import { Volume2 } from 'lucide-react';

interface VocabularyListViewProps {
  items: Item[];
}

export const VocabularyListView: React.FC<VocabularyListViewProps> = ({ items }) => {
  const { showFurigana } = useAuth();

  if (items.length === 0) {
    return (
      <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
        <p className="text-slate-400 font-medium text-lg">No vocabulary found for this level.</p>
      </div>
    );
  }

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="group hover:border-sky-300 transition-all duration-300">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => playAudio(item.character)}
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <div>
                <div className="text-2xl font-black text-slate-900 dark:text-white transition-colors">
                  <Furigana text={item.character} show={showFurigana} />
                </div>
                <p className="text-sm text-slate-500 font-medium mt-1 uppercase tracking-tighter">{item.meanings.join(', ')}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-slate-300 group-hover:text-sky-200 transition-colors uppercase tracking-widest">
                {item.readings[0]}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
