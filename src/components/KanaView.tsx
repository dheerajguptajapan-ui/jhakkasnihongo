import React, { useState } from 'react';
import { hiragana, katakana } from '../lib/curriculum/kana';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Info, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export const KanaView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hiragana' | 'katakana'>('hiragana');
  const [selectedChar, setSelectedChar] = useState<any>(null);

  const data = activeTab === 'hiragana' ? hiragana : katakana;

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            Kana <span className={activeTab === 'hiragana' ? 'text-indigo-400' : 'text-rose-400'}>Foundation</span>
          </h2>
          <p className="text-gray-500 font-medium italic">Mastering the primary Japanese phonetic symbols.</p>
        </div>

        <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
          <button 
            onClick={() => setActiveTab('hiragana')}
            className={`h-11 px-8 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${
              activeTab === 'hiragana' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Hiragana
          </button>
          <button 
            onClick={() => setActiveTab('katakana')}
            className={`h-11 px-8 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${
              activeTab === 'katakana' ? 'bg-rose-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Katakana
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {data.map((char) => (
          <motion.button
            key={char.id}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelectedChar(char);
              playAudio(char.character);
            }}
            className={`relative p-6 rounded-3xl border transition-all duration-300 backdrop-blur-sm flex flex-col items-center justify-center gap-2 group ${
              activeTab === 'hiragana' 
                ? 'bg-indigo-500/5 border-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/10' 
                : 'bg-rose-500/5 border-white/5 hover:border-rose-500/40 hover:bg-rose-500/10'
            }`}
          >
            <span className="text-4xl font-black text-white group-hover:scale-110 transition-transform">{char.character}</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{char.readings[0]}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedChar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <Card className="w-full max-w-lg bg-[#0A0A0F]/95 border-white/10 rounded-[3rem] p-10 pointer-events-auto backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              
              <button 
                onClick={() => setSelectedChar(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-10">
                <div className={`text-9xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
                  {selectedChar.character}
                </div>
                <div className="space-y-6 flex-1">
                  <Badge className="bg-indigo-600/20 text-indigo-400 border-indigo-600/30 uppercase font-black text-[10px]">
                    {activeTab} Mastery
                  </Badge>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-black text-white tracking-tighter uppercase">{selectedChar.readings[0]}</h3>
                    <p className="text-gray-400 font-medium italic">{selectedChar.explanation}</p>
                  </div>
                  <button 
                    onClick={() => playAudio(selectedChar.character)}
                    className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                  >
                    <Volume2 size={20} className="text-indigo-400" />
                    Play Pronunciation
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
