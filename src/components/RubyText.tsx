import React from 'react';
import { parseFurigana } from '../lib/furiganaUtils';
import { cn } from '../lib/utils';

interface RubyTextProps {
  /** The text to render, supporting [Base:Reading] and Base[Reading] formats */
  text: string;
  /** Optional manual readings if brackets are missing */
  readings?: string[];
  /** Whether to display furigana on top */
  showFurigana?: boolean;
  /** Global class for the parent container */
  className?: string;
}

/**
 * Professional-grade Japanese Ruby component.
 * Ensures Kanji are preserved in the text flow with readings perfectly aligned on top.
 */
export const RubyText: React.FC<RubyTextProps> = ({ 
  text, 
  readings,
  showFurigana = true, 
  className = ''
}) => {
  const segments = React.useMemo(() => parseFurigana(text), [text]);

  // Fallback logic for curriculum items that provide a separate readings array
  const hasBrackets = text.includes('[') || text.includes('［');
  const shouldUseFallback = !hasBrackets && readings && readings.length > 0 && showFurigana;

  return (
    <span className={cn("ruby-sentence-container", className)}>
      {segments.map((seg, i) => {
        const displayReading = shouldUseFallback && i === 0 ? readings[0] : seg.reading;
        
        if (displayReading && showFurigana) {
          return (
            <ruby key={i} className="ruby-text-item">
              {seg.text}
              <rp className="sr-only">(</rp>
              <rt className="ruby-text-reading">
                {displayReading}
              </rt>
              <rp className="sr-only">)</rp>
            </ruby>
          );
        }
        
        return <span key={i} className="ruby-base-text">{seg.text}</span>;
      })}
    </span>
  );
};

export default RubyText;
