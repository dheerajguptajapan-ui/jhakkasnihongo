/**
 * Furigana utility functions for Jhakkas Nihongo.
 * 
 * Supports multiple furigana formats:
 * 1. Internal Format: [今日:きょう] or ［今日：きょう］
 * 2. External Format: 明日[あした] or 明日［あした］
 */

export interface FuriganaSegment {
  text: string;
  reading: string | null;
}

/**
 * Universal Furigana Parser
 * Splits string into segments for <ruby> rendering.
 */
export function parseFurigana(input: string): FuriganaSegment[] {
  if (!input) return [];

  const segments: FuriganaSegment[] = [];
  
  // Normalize full-width brackets/colons to standard ones for parsing
  const normalized = input
    .replace(/［/g, '[')
    .replace(/］/g, ']')
    .replace(/：/g, ':');

  // Regex to find all bracketed components: [Base:Reading] or [Reading]
  const parts = normalized.split(/(\[[^\]]+\])/g).filter(Boolean);

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (part.startsWith('[') && part.endsWith(']')) {
      const content = part.slice(1, -1);
      
      if (content.includes(':')) {
        // Mode 1: [Base:Reading]
        const [base, reading] = content.split(':');
        segments.push({ text: base || '', reading: reading || null });
      } else {
        // Mode 2: Base[Reading]
        const lastSeg = segments[segments.length - 1];
        if (lastSeg && lastSeg.reading === null) {
          // Associate with previous plain text segment
          lastSeg.reading = content;
        } else {
          // Standalone reading or orphan: render as text within brackets
          segments.push({ text: part, reading: null });
        }
      }
    } else {
      // Plain text part
      segments.push({ text: part, reading: null });
    }
  }

  return segments.length > 0 ? segments : [{ text: input, reading: null }];
}

/**
 * Strips all furigana annotations to leave only the base Japanese text.
 */
export function stripFurigana(input: string): string {
  if (!input) return '';
  return parseFurigana(input)
    .map(seg => seg.text)
    .join('');
}

/**
 * Checks if the string contains any furigana bracket patterns.
 */
export function hasFurigana(input: string): boolean {
  if (!input) return false;
  return /\[[^\]]+\]|［[^］]+］/.test(input);
}
