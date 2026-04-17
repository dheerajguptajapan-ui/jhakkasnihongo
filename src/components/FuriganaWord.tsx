import { useAuth } from '../lib/AuthContext';
import { TextSegment } from '../types';

interface FuriganaWordProps {
  kanji: string;
  kana: string | null;
}

/**
 * High-performance Furigana engine using native HTML5 <ruby> tags.
 * Synced with Phase 1 & 2 baseline specifications.
 */
const FuriganaWord: React.FC<FuriganaWordProps> = ({ kanji, kana }) => {
  const { settings } = useAuth();
  
  // Logic: Only use ruby tags if furigana actually exists AND settings allow it
  if (!kana || !settings.showFurigana) {
    return (
      <span className="text-slate-900 dark:text-slate-100 font-medium transition-colors duration-300">
        {kanji}
      </span>
    );
  }

  return (
    <ruby className="relative text-slate-900 dark:text-slate-100 font-medium group cursor-default transition-all duration-300">
      {/* The main Kanji character */}
      {kanji}
      
      {/* RP (Ruby Parentheses) for fallback rendering (older browsers) */}
      <rp className="absolute opacity-0">(</rp>
      
      {/* RT (Ruby Text) for the Furigana, stylized for contrast and interactivity */}
      <rt className="text-emerald-600 dark:text-emerald-400 font-black text-[0.6em] uppercase tracking-widest group-hover:text-amber-500 transition-colors duration-300 mb-0.5">
        {kana}
      </rt>
      
      {/* Closing parenthesis fallback */}
      <rp className="absolute opacity-0">)</rp>
    </ruby>
  );
};

export default FuriganaWord;
