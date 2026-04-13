import { Item } from '../../types';

export const lesson12: Item[] = [
  // Vocabulary
  {
    id: 'mn12-v1',
    lessonNumber: 12,
    type: 'vocabulary',
    character: 'かんたん [な]',
    readings: ['kantan [na]'],
    meanings: ['easy', 'simple'],
    explanation: '簡単.'
  },
  {
    id: 'mn12-v2',
    lessonNumber: 12,
    type: 'vocabulary',
    character: 'ちかい',
    readings: ['chikai'],
    meanings: ['near', 'close'],
    explanation: '近い.'
  },

  // Grammar
  {
    id: 'mn12-g1',
    lessonNumber: 12,
    type: 'grammar',
    character: 'N1 は N2 より Adj です',
    readings: ['N1 wa N2 yori Adj desu'],
    meanings: ['N1 is more Adj than N2'],
    explanation: 'Standard comparison structure.',
    sentences: [{ japanese: 'このかばんは そのかばんより 重いです。', english: 'This bag is heavier than that bag.', furigana: 'このかばんはそのかばんより重[おも]いです。' }]
  },

  // Kanji (Unit 11 - Part 2)
  {
    id: 'mn12-k1',
    lessonNumber: 12,
    type: 'kanji',
    character: '教',
    readings: ['きょう', 'おし', 'おそ'],
    meanings: ['Teach', 'Doctrine', 'Faith'],
    level: 1,
    radical: '攵',
    mnemonic: 'A child (子) being struck (攵) to learn lessons.',
    combinations: [{ word: '教官', reading: 'kyoukan', meaning: 'Instructor' }]
  },
  {
    id: 'mn12-k2',
    lessonNumber: 12,
    type: 'kanji',
    character: '習',
    readings: ['しゅう', 'じゅ', 'なら'],
    meanings: ['Learn', 'Study', 'Custom'],
    level: 1,
    radical: '羽',
    mnemonic: 'White wings (羽) learning to fly repeated cycles (日).',
    combinations: [{ word: '自習', reading: 'jishuu', meaning: 'Self-study' }]
  },
  {
    id: 'mn12-k3',
    lessonNumber: 12,
    type: 'kanji',
    character: '勉',
    readings: ['べん'],
    meanings: ['Exertion', 'Endeavor', 'Effort'],
    level: 1,
    radical: '力',
    mnemonic: 'A person using power (力) to exert themselves.',
    combinations: [{ word: '勉強', reading: 'benkyou', meaning: 'Study' }]
  },
  {
    id: 'mn12-k4',
    lessonNumber: 12,
    type: 'kanji',
    character: '強',
    readings: ['きょう', 'ごう', 'つよ', 'し'],
    meanings: ['Strong', 'Powerful'],
    level: 1,
    radical: '弓',
    mnemonic: 'A strong bow (弓) and an insect (representing strength of string).',
    combinations: [{ word: '強風', reading: 'kyoufuu', meaning: 'Strong wind' }]
  },
  {
    id: 'mn12-k5',
    lessonNumber: 12,
    type: 'kanji',
    character: '花',
    readings: ['か', 'はな'],
    meanings: ['Flower', 'Blossom'],
    level: 1,
    radical: '艸',
    mnemonic: 'Plants (艸) that transform (化) into flowers.',
    combinations: [{ word: '花火', reading: 'hanabi', meaning: 'Fireworks' }]
  }
];
