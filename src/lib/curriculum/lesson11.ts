import { Item } from '../../types';

export const lesson11: Item[] = [
  // Vocabulary
  {
    id: 'mn11-v1',
    lessonNumber: 11,
    type: 'vocabulary',
    character: 'います [こどもが〜]',
    readings: ['imasu'],
    meanings: ['have [a child]'],
    explanation: '居る.'
  },
  {
    id: 'mn11-v2',
    lessonNumber: 11,
    type: 'vocabulary',
    character: 'かかります',
    readings: ['kakarimasu'],
    meanings: ['take (time)', 'cost (money)'],
    explanation: 'かかる.'
  },

  // Grammar
  {
    id: 'mn11-g1',
    lessonNumber: 11,
    type: 'grammar',
    character: 'Quantity を V',
    readings: ['Quantity o V'],
    meanings: ['[Verb] [Quantity]'],
    explanation: 'How to use counter suffixes.',
    sentences: [{ japanese: 'りんごを ４つ 買いました。', english: 'I bought four apples.', furigana: 'りんごを４つ買[か]いました。' }]
  },

  // Kanji (Unit 11 - Part 1)
  {
    id: 'mn11-k1',
    lessonNumber: 11,
    type: 'kanji',
    character: '切',
    readings: ['せつ', 'さい', 'き'],
    meanings: ['Cut', 'Sever', 'Sharp'],
    level: 1,
    radical: '刀',
    mnemonic: 'A knife (刀) cutting seven (七) pieces.',
    combinations: [{ word: '切手', reading: 'kitte', meaning: 'Postage stamp' }]
  },
  {
    id: 'mn11-k2',
    lessonNumber: 11,
    type: 'kanji',
    character: '送',
    readings: ['そう', 'おく'],
    meanings: ['Send', 'Escort', 'Forward'],
    level: 1,
    radical: '⻌',
    mnemonic: 'Sending someone on the road (⻌) with a gift.',
    combinations: [{ word: '送金', reading: 'soukin', meaning: 'Remittance' }]
  },
  {
    id: 'mn11-k3',
    lessonNumber: 11,
    type: 'kanji',
    character: '貸',
    readings: ['たい', 'か'],
    meanings: ['Lend', 'Loan'],
    level: 1,
    radical: '貝',
    mnemonic: 'Lending money (貝).',
    combinations: [{ word: '貸す', reading: 'kasu', meaning: 'To lend' }]
  },
  {
    id: 'mn11-k4',
    lessonNumber: 11,
    type: 'kanji',
    character: '借',
    readings: ['しゃく', 'か'],
    meanings: ['Borrow', 'Rent'],
    level: 1,
    radical: '人',
    mnemonic: 'A person (人) borrowing something from the past (昔).',
    combinations: [{ word: '借りる', reading: 'kariru', meaning: 'To borrow' }]
  },
  {
    id: 'mn11-k5',
    lessonNumber: 11,
    type: 'kanji',
    character: '旅',
    readings: ['りょ', 'たび'],
    meanings: ['Trip', 'Travel'],
    level: 1,
    radical: '方',
    mnemonic: 'People traveling in all directions (方) under a flag.',
    combinations: [{ word: '旅行', reading: 'ryokou', meaning: 'Travel' }]
  }
];
