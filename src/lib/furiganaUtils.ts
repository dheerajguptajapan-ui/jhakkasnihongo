/**
 * Furigana utility functions for Jhakkas Nihongo.
 * 
 * Two furigana formats in the codebase:
 * 1. Bracket notation in `character`: '富士山[ふじさん]' → display 富士山 with ふじさん above it
 * 2. Separate `readings` array: ['とざん'] → shown in smaller text below
 * 3. `sentences[].furigana` string like '最後[さいご]まで走[はし]り切[き]ることができました。'
 */

export interface FuriganaSegment {
  text: string;       // the kanji/text to display
  reading: string | null; // the reading to show above (null = plain kana, no ruby)
}

/**
 * Parses a string containing optional [bracket] furigana annotations.
 * e.g. '富士山[ふじさん]に登[のぼ]る' → segments with readings above kanji
 * e.g. 'おはようございます' → single segment with no reading
 */
export function parseFurigana(input: string): FuriganaSegment[] {
  if (!input) return [];
  
  const segments: FuriganaSegment[] = [];
  // Match kanji followed by [reading], or plain text chunks
  const regex = /([^\[\]]+?)(\[([^\]]+)\])|([^\[\]]+)/g;
  let match;
  
  while ((match = regex.exec(input)) !== null) {
    if (match[1] !== undefined && match[3] !== undefined) {
      // kanji + [reading]
      segments.push({ text: match[1], reading: match[3] });
    } else if (match[4] !== undefined) {
      // plain text (no brackets) — split into individual chars for better layout
      segments.push({ text: match[4], reading: null });
    }
  }
  
  return segments.length > 0 ? segments : [{ text: input, reading: null }];
}

/**
 * Strips bracket furigana from a string, returning just the base text.
 * e.g. '富士山[ふじさん]' → '富士山'
 */
export function stripFurigana(input: string): string {
  return input.replace(/\[([^\]]+)\]/g, '');
}

/**
 * Checks if a string contains embedded furigana brackets.
 */
export function hasFurigana(input: string): boolean {
  return /\[/.test(input);
}
