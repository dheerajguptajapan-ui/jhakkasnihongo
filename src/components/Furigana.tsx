import React from 'react';

interface FuriganaProps {
  text: string;
  show: boolean;
}

/**
 * Parses a string like "漢字[かんじ]" and renders it with ruby tags.
 * If show is false, it just renders the original text without furigana.
 */
export const Furigana: React.FC<FuriganaProps> = ({ text, show }) => {
  if (!show) {
    return <span>{text.replace(/\[.*?\]/g, '')}</span>;
  }

  const parts = text.split(/(\S+\[.*?\])/g);

  return (
    <span>
      {parts.map((part, index) => {
        const match = part.match(/(\S+)\[(.*?)\]/);
        if (match) {
          return (
            <ruby key={index}>
              {match[1]}
              <rt className="text-[0.6em] text-sky-600">{match[2]}</rt>
            </ruby>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
