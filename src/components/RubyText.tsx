import React from 'react';
import { parseFurigana } from '../lib/furiganaUtils';

interface RubyTextProps {
  /** The text to render, e.g. '富士山[ふじさん]' or just '富士山' */
  text: string;
  /** Optional separate readings to use if bracket notation is absent */
  readings?: string[];
  /** Whether to show the furigana readings above kanji */
  showFurigana?: boolean;
  className?: string;
  rubyClassName?: string;
}

/**
 * RubyText: Renders Japanese text with optional inline furigana using HTML <ruby> tags.
 */
export const RubyText: React.FC<RubyTextProps> = ({ 
  text, 
  readings,
  showFurigana = true, 
  className = '',
  rubyClassName = ''
}) => {
  const segments = parseFurigana(text);

  // If we have separate readings but the text didn't have brackets
  // We apply the first reading to the entire string if it contains kanji
  const hasBrackets = text.includes('[');
  const shouldApplyFallback = !hasBrackets && readings && readings.length > 0 && showFurigana;

  return (
    <span className={className}>
      {segments.map((seg, i) => {
        const displayReading = shouldApplyFallback && i === 0 ? readings[0] : seg.reading;
        
        if (displayReading && showFurigana) {
          return (
            <ruby key={i} className={rubyClassName}>
              {seg.text}
              <rp>(</rp>
              <rt className="text-[0.55em] text-primary font-normal not-italic">{displayReading}</rt>
              <rp>)</rp>
            </ruby>
          );
        }
        return <span key={i}>{seg.text}</span>;
      })}
    </span>
  );
};

export default RubyText;
