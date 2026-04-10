import React, { useState } from 'react';
import { Item } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Furigana } from './Furigana';
import { motion } from 'motion/react';
import { useAuth } from '../lib/AuthContext';

interface KanjiExplorerProps {
  items: Item[];
}

export const KanjiExplorer: React.FC<KanjiExplorerProps> = ({ items }) => {
  const { showFurigana } = useAuth();
  const [selectedKanji, setSelectedKanji] = useState<Item | null>(null);

  if (items.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-200">
        <p className="text-slate-400 font-medium text-lg">No kanji found for this level.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((kanji) => (
        <Dialog key={kanji.id}>
          <DialogTrigger>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => setSelectedKanji(kanji)}
            >
              <Card className="h-full border-2 border-slate-100 hover:border-sky-300 transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                  <div className="text-4xl font-bold text-slate-900">{kanji.character}</div>
                  <div className="text-xs text-slate-500 font-medium">{kanji.readings.slice(0, 2).join(', ')}</div>
                  <div className="text-[10px] text-slate-400 italic line-clamp-1">
                    {kanji.combinations?.slice(0, 2).map(c => c.word).join(', ')}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col p-0">
            <DialogHeader className="p-6 bg-sky-600 text-white">
              <div className="flex items-center gap-6">
                <div className="text-7xl font-bold">{kanji.character}</div>
                <div>
                  <DialogTitle className="text-3xl text-white">{kanji.meanings.join(', ')}</DialogTitle>
                  <p className="text-sky-100 mt-1">Radical: {kanji.radical}</p>
                </div>
              </div>
            </DialogHeader>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-8">
                {/* Readings & Combinations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 border-b pb-2 uppercase tracking-widest text-xs">Readings</h3>
                    <div className="flex flex-wrap gap-2">
                      {kanji.readings.map((r, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">{r}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 border-b pb-2 uppercase tracking-widest text-xs">Combinations</h3>
                    <div className="space-y-2">
                      {kanji.combinations?.map((c, i) => (
                        <div key={i} className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded">
                          <span className="font-bold text-sky-700">{c.word} ({c.reading})</span>
                          <span className="text-slate-500">{c.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mnemonic */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 border-b pb-2 uppercase tracking-widest text-xs">Mnemonic Story</h3>
                  <p className="text-slate-700 leading-relaxed bg-amber-50 p-4 rounded-lg border border-amber-100">
                    {kanji.mnemonic}
                  </p>
                </div>

                {/* Sentences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 border-b pb-2 uppercase tracking-widest text-xs">Example Sentences</h3>
                  <div className="space-y-4">
                    {kanji.sentences?.map((s, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-xl font-medium text-slate-900">
                          <Furigana text={s.furigana || s.japanese} show={showFurigana} />
                        </div>
                        <p className="text-sm text-slate-500">{s.english}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day to Day Uses */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 border-b pb-2 uppercase tracking-widest text-xs">Day-to-Day Uses</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    {kanji.dayToDayUses?.map((use, i) => (
                      <li key={i}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
