/**
 * Jhakkas Core Syntax: Specialized Grammar Distractor Engine
 * Specifically designed for JLPT N5-N1 testing patterns.
 */

const PARTICLES = ['は', 'が', 'を', 'に', 'で', 'と', 'も', 'へ', 'まで', 'から', 'の', 'より'];
const MASU_SUFFIXES = ['ます', 'ません', 'ました', 'ませんでした'];
const I_ADJ_SUFFIXES = ['い', 'くない', 'かった', 'くなかった'];
const COPULA_SUFFIXES = ['です', 'でした', 'ではありません', 'じゃありません', 'だった', 'じゃない'];

export type GrammarCategory = 'PARTICLE' | 'MASU_VERB' | 'I_ADJECTIVE' | 'COPULA' | 'GENERAL';

export interface GrammarAnalysis {
  category: GrammarCategory;
  correct: string;
  distractors: string[];
  logicTitle: string;
  logicDescription: string;
}

/**
 * Strips common sentence-ending punctuation for cleaner analysis
 */
function cleanText(text: string): string {
  if (!text) return '';
  return text.replace(/[。！？、.!?]/g, '').trim();
}

/**
 * Analyzes a Japanese segment and generates 3 context-appropriate distractors.
 */
export function analyzeGrammarSegment(text: string, curriculumPool: string[] = []): GrammarAnalysis {
  const clean = cleanText(text);
  
  // 1. Particle Check (Direct or Suffix)
  let detectedParticle = PARTICLES.find(p => clean === p);
  
  // High-fidelity fallback: detect particle at the end of a segment (e.g. 'バスで')
  if (!detectedParticle) {
    // Check for common particles at the end of the string
    for (const p of PARTICLES) {
      if (clean.endsWith(p) && clean.length > p.length) {
        detectedParticle = p;
        break;
      }
    }
  }

  if (detectedParticle) {
    const distractors = PARTICLES
      .filter(p => p !== detectedParticle)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
      
    // If it was a suffix, generate the same noun with different particles
    if (clean !== detectedParticle) {
        const noun = clean.slice(0, clean.length - detectedParticle.length);
        return { 
            category: 'PARTICLE', 
            correct: text, 
            distractors: distractors.map(d => noun + d + (text.endsWith('。') ? '。' : '')),
            logicTitle: 'SYNTAX: PARTICLE ROLE',
            logicDescription: `Grammar logic identifies '${detectedParticle}' as the required particle. The options test your ability to distinguish between different particle markers like は, が, を, に, and で.`
        };
    }
    
    return { 
      category: 'PARTICLE', 
      correct: text, 
      distractors,
      logicTitle: 'SYNTAX: PARTICLE ROLE',
      logicDescription: "Grammar logic requires a specific functional particle. Correct selection depends on the relationship between nouns and the verb."
    };
  }

  // 2. Polite Verb (Masu-form) Check
  for (const suffix of MASU_SUFFIXES) {
    if (clean.endsWith(suffix)) {
      const stem = clean.slice(0, clean.length - suffix.length);
      const distractors = MASU_SUFFIXES
        .filter(s => s !== suffix)
        .map(s => s + (text.endsWith('。') ? '。' : '').replace('。。', '。')); // Preserve punctuation if any
      
      // If the original has a 'か' (question), add it back
      const finalDistractors = distractors.map(d => stem + d + (text.endsWith('か') ? 'か' : ''));
      
      return { 
        category: 'MASU_VERB', 
        correct: text, 
        distractors: finalDistractors,
        logicTitle: 'LOGIC: VERB INFLECTION',
        logicDescription: "Testing polite form ('masu') conjugation. You must distinguish between Affirmative (ます), Negative (ません), and Past (ました) forms."
      };
    }
  }

  // 3. I-Adjective Check
  for (const suffix of I_ADJ_SUFFIXES) {
    if (clean.endsWith(suffix) && clean.length > suffix.length) {
      const stem = clean.slice(0, clean.length - suffix.length);
      const distractors = I_ADJ_SUFFIXES
        .filter(s => s !== suffix)
        .map(s => stem + s + (text.endsWith('です') ? 'です' : ''));
      
      return { 
        category: 'I_ADJECTIVE', 
        correct: text, 
        distractors,
        logicTitle: 'LOGIC: ADJECTIVE INFLECTION',
        logicDescription: "Testing [ i ] adjective conjugation. You must choose between Present/Future and Past forms in both Affirmative and Negative states."
      };
    }
  }

  // 4. Copula (Desu) Check
  for (const suffix of COPULA_SUFFIXES) {
    if (clean.endsWith(suffix)) {
      const stem = clean.slice(0, clean.length - suffix.length);
      const distractors = COPULA_SUFFIXES
        .filter(s => s !== suffix)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(s => stem + s + (text.endsWith('。') ? '。' : ''));

      return {
        category: 'COPULA',
        correct: text,
        distractors,
        logicTitle: 'SYNTAX: COPULA (DESU)',
        logicDescription: "Identifying the correct state-of-being marker (Copula). This tests your understanding of Tense (Past/Present) and Politeness/Negation."
      };
    }
  }

  // 5. Fallback (General Noun/Word)
  // Pull distractors from the curriculum pool of similar length
  const distractors = curriculumPool
    .filter(t => cleanText(t) !== clean && t.length >= 1 && t.length <= 15)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // If pool is empty or too small, use generic but Japanese-themed markers if we must, 
  // but ideally the caller should provide a robust pool.
  while (distractors.length < 3) {
    const fallbacks = ['なし', '不明', '確認中', '未設定']; // Japanese for "none", "unknown", "verifying", "not set"
    distractors.push(fallbacks[distractors.length] || '---');
  }

  return { 
    category: 'GENERAL', 
    correct: text, 
    distractors,
    logicTitle: 'VOCABULARY CONTEXT',
    logicDescription: 'Identifying the correct noun or word required for this specific logical slot.'
  };
}
