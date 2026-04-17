import React from 'react';
import { TextSegment } from '../types';
import FuriganaWord from './FuriganaWord';

interface FuriganaProps {
  text: string | TextSegment[];
  show: boolean;
}

/**
 * Renders either:
 * - A string like "漢字[かんじ]" with ruby tags.
 * - An array of TextSegments native to the new curriculum.
 * If show is false, it renders without furigana.
 */
export const Furigana: React.FC<FuriganaProps> = ({ text, show }) => {
  // Handle new TextSegment[] format native to gamification structure
  if (Array.isArray(text)) {
    if (!show) {
      return (
        <span className="font-medium tracking-tight">
          {text.map(seg => seg.text).join('')}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center flex-wrap gap-x-0.5 whitespace-pre-wrap">
        {text.map((seg, idx) => (
          <FuriganaWord key={idx} kanji={seg.text} kana={seg.reading} />
        ))}
      </span>
    );
  }

  // Handle legacy string parsing
  if (!show) {
    return <span className="font-medium tracking-tight">{text.replace(/\[.*?\]/g, '')}</span>;
  }

  const parts = text.split(/(\S+\[.*?\])/g);

  return (
    <span className="inline-flex items-center flex-wrap gap-x-0.5 whitespace-pre-wrap">
      {parts.map((part, index) => {
        const match = part.match(/(\S+)\[(.*?)\]/);
        if (match) {
          return (
            <ruby key={index} className="ruby-base">
              <span className="text-white drop-shadow-[0_0_8px_rgba(249,168,212,0.2)]">
                {match[1]}
              </span>
              <rt className="text-[0.55em] font-black text-primary uppercase tracking-tighter opacity-90 mb-1">
                {match[2]}
              </rt>
            </ruby>
          );
        }
        return <span key={index} className="text-gray-300">{part}</span>;
      })}
    </span>
  );
};
