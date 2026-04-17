import React, { useEffect, useState, useId } from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface StrokeOrderRendererProps {
  char: string;
}

const StrokeOrderRenderer: React.FC<StrokeOrderRendererProps> = ({ char }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const uniqueId = useId().replace(/:/g, '');

  useEffect(() => {
    if (!char) return;

    // Convert character to Unicode Hex
    const hex = char.charCodeAt(0).toString(16).padStart(5, '0');
    // KanjiVG raw github url works for both Hiragana/Katakana and Kanji
    const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;

    setSvgContent(null);
    setError(false);

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Not found in KanjiVG');
        return res.text();
      })
      .then(text => {
        // Replace hardcoded black colors with currentColor for dark mode support
        const modifiedSvg = text
          .replace(/stroke="#000000"/g, 'stroke="currentColor"')
          .replace(/stroke:#000000/g, 'stroke:currentColor')
          // Make the stroke numbers indigo
          .replace(/fill:#808080/g, 'fill:#818cf8')
          // Update SVG size to preserve aspect ratio bounds
          .replace(/<svg /, '<svg preserveAspectRatio="xMidYMid meet" ');

        setSvgContent(modifiedSvg);
      })
      .catch((e) => {
        console.error(`Stroke order fetching error for ${char}:`, e);
        setError(true);
      });
  }, [char]);

  useEffect(() => {
    if (svgContent) {
      // Find the SVG element and add sequential animation delays
      const container = document.getElementById(`stroke-container-${uniqueId}-${char}`);
      if (container) {
        // KanjiVG convention: StrokePaths group has id containing 'StrokePaths'
        const paths = container.querySelectorAll('g[id*="StrokePaths"] path');
        paths.forEach((path, index) => {
          (path as SVGPathElement).style.strokeDasharray = '500';
          (path as SVGPathElement).style.strokeDashoffset = '500';
          (path as SVGPathElement).style.animation = `drawStroke 0.8s ease-out forwards`;
          // Sequential delay, waiting for previous stroke to finish
          (path as SVGPathElement).style.animationDelay = `${index * 0.9}s`;
        });
      }
    }
  }, [svgContent, char, uniqueId]);

  if (error) return null; // Gracefully fail if character is not a kanji/kana (e.g. English letter)

  if (!svgContent) {
    return (
      <div className="w-[120px] md:w-[160px] aspect-square flex flex-col items-center justify-center animate-pulse bg-muted/30 rounded-[2rem] border border-border shrink-0">
        <Loader2 className="animate-spin text-primary w-8 h-8 opacity-50" />
      </div>
    );
  }

  return (
    <div className="w-[120px] md:w-[160px] relative group shrink-0">
      {/* Replay Button */}
      <button
        onClick={() => {
          const container = document.getElementById(`stroke-container-${uniqueId}-${char}`);
          if (container) {
            const paths = container.querySelectorAll('g[id*="StrokePaths"] path');
            paths.forEach((path) => {
              const el = path as SVGElement;
              el.style.animation = 'none';
              el.getBoundingClientRect(); // trigger reflow
              el.style.animation = '';
            });
          }
        }}
        className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        Replay
      </button>

      <div
        id={`stroke-container-${uniqueId}-${char}`}
        style={{ backgroundColor: 'var(--muted)' }}
        className="w-full aspect-square kanjivg-wrapper text-foreground p-4 rounded-[2rem] border border-border mt-4"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>

  );
};

export const StrokeOrder: React.FC<{ character: string }> = ({ character }) => {
  // Extract only Kanji, Hiragana and Katakana using Regex
  // This filters out spaces, romaji, punctuation, or numbers
  const validChars = character.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g) || [];

  if (validChars.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col w-full"
    >
      <style>
        {`
          @keyframes drawStroke {
            0% { stroke-dashoffset: 500; }
            100% { stroke-dashoffset: 0; }
          }
          .kanjivg-wrapper svg {
            width: 100%;
            height: 100%;
          }
          .kanjivg-wrapper path {
            /* Initial state before animation starts */
            stroke-dashoffset: 500; 
            stroke-dasharray: 500;
          }
        `}
      </style>

      <div className="flex overflow-x-auto custom-scrollbar gap-4 pb-4 px-2 -mx-2 items-center">
        {validChars.map((char, index) => (
          <StrokeOrderRenderer key={`${index}-${char}`} char={char} />
        ))}
      </div>
    </motion.div>
  );
};
