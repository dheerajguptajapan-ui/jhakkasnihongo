import React from 'react';
import { Item } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Furigana } from './Furigana';
import { useAuth } from '../lib/AuthContext';
import { motion } from 'framer-motion';

interface GrammarViewProps {
  items: Item[];
}

export const GrammarView: React.FC<GrammarViewProps> = ({ items }) => {
  const { showFurigana } = useAuth();

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border-2 border-dashed border-white/10">
        <p className="text-gray-400 font-medium text-lg">No grammar points found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden bg-white/5 border-white/10 hover:border-indigo-500/30 transition-all duration-500 backdrop-blur-xl group">
            <CardHeader className="bg-white/[0.02] border-b border-white/5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors">
                    <Furigana text={item.character} show={showFurigana} />
                  </CardTitle>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mt-3">
                    <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px]">{item.meanings[0]}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="bg-purple-500/5 p-6 rounded-3xl border border-purple-500/10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-3">Usage & Rules</h4>
                <p className="text-gray-300 leading-relaxed text-lg">{item.explanation}</p>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Live Examples</h4>
                <div className="space-y-4">
                  {item.sentences?.map((s, i) => (
                    <div key={i} className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 hover:border-white/10 transition-colors space-y-3">
                      <div className="text-xl font-bold text-white">
                        <Furigana text={s.furigana || s.japanese} show={showFurigana} />
                      </div>
                      <p className="text-gray-400 italic text-sm border-l-2 border-indigo-500/30 pl-4">{s.english}</p>
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

