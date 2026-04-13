import { Item } from '../../types';

export const lesson14: Item[] = [
  // Vocabulary
  {
    id: 'mn14-v1',
    lessonNumber: 14,
    type: 'vocabulary',
    character: 'つけます',
    readings: ['tsukemasu'],
    meanings: ['turn on'],
    explanation: '点ける.'
  },
  {
    id: 'mn14-v2',
    lessonNumber: 14,
    type: 'vocabulary',
    character: 'けします',
    readings: ['keshimasu'],
    meanings: ['turn off', 'erase'],
    explanation: '消す.'
  },

  // Grammar
  {
    id: 'mn14-g1',
    lessonNumber: 14,
    type: 'grammar',
    character: 'V (te-form) ください',
    readings: ['V te kudasai'],
    meanings: ['Please [Verb]'],
    explanation: 'Requesting something from the listener.',
    sentences: [{ japanese: 'ちょっと 待ってください。', english: 'Please wait a moment.', furigana: 'ちょっと待[ま]ってください。' }]
  },

  // Kanji (Unit 12 - Part 2)
  {
    id: 'mn14-k1',
    lessonNumber: 14,
    type: 'kanji',
    character: '雨',
    readings: ['う', 'あめ', 'あま'],
    meanings: ['Rain'],
    level: 1,
    radical: '雨',
    mnemonic: 'Drops of rain falling from a cloud or sky.',
    combinations: [{ word: '大雨', reading: 'ooame', meaning: 'Heavy rain' }]
  },
  {
    id: 'mn14-k2',
    lessonNumber: 14,
    type: 'kanji',
    character: '入',
    readings: ['にゅう', 'じゅ', 'はい', 'い'],
    meanings: ['Enter', 'Insert', 'Put in'],
    level: 1,
    radical: '入',
    mnemonic: 'A person entering a doorway.',
    combinations: [{ word: '入口', reading: 'iriguchi', meaning: 'Entrance' }]
  },
  {
    id: 'mn14-k3',
    lessonNumber: 14,
    type: 'kanji',
    character: '出',
    readings: ['しゅつ', 'すい', 'だ', 'で'],
    meanings: ['Go out', 'Exit', 'Put out'],
    level: 1,
    radical: '凵',
    mnemonic: 'A sprout coming out of the mountain range (stylized).',
    combinations: [{ word: '出口', reading: 'deguchi', meaning: 'Exit' }]
  }
];
