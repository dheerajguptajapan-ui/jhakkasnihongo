import { Item } from '../../types';

export const lesson21: Item[] = [
  // Vocabulary
  {
    id: 'mn21-v1',
    lessonNumber: 21,
    type: 'vocabulary',
    character: 'おもいます',
    readings: ['omoimasu'],
    meanings: ['think'],
    explanation: '思う.'
  },
  {
    id: 'mn21-v2',
    lessonNumber: 21,
    type: 'vocabulary',
    character: 'いいます',
    readings: ['iimasu'],
    meanings: ['say'],
    explanation: '言う.'
  },

  // Grammar
  {
    id: 'mn21-g1',
    lessonNumber: 21,
    type: 'grammar',
    character: '〜と 思います',
    readings: ['~to omoimasu'],
    meanings: ['I think that...'],
    explanation: 'Expressing conjecture or opinion.',
    sentences: [{ japanese: '明日は 雨が 降ると 思います。', english: 'I think it will rain tomorrow.', furigana: '明日[あした]は雨[あめ]が降[ふ]ると思[おも]います。' }]
  },

  // Kanji (Unit 16)
  {
    id: 'mn21-k1',
    lessonNumber: 21,
    type: 'kanji',
    character: '降',
    readings: ['こう', 'ご', 'お', 'ふ'],
    meanings: ['Descend', 'Precipitate', 'Fall', 'Surrender'],
    level: 1,
    radical: '⻖',
    mnemonic: 'Stepping down from a mound.',
    combinations: [{ word: '降る', reading: 'furu', meaning: 'To fall (rain/snow)' }]
  },
  {
    id: 'mn21-k2',
    lessonNumber: 21,
    type: 'kanji',
    character: '思',
    readings: ['し', 'おも'],
    meanings: ['Think'],
    level: 1,
    radical: '心',
    mnemonic: 'Thinking with your heart (心) while in the field (田).',
    combinations: [{ word: '思想', reading: 'shisou', meaning: 'Thought/Philosophy' }]
  },
  {
    id: 'mn21-k3',
    lessonNumber: 21,
    type: 'kanji',
    character: '寝',
    readings: ['しん', 'ね'],
    meanings: ['Sleep', 'Lie down'],
    level: 1,
    radical: '宀',
    mnemonic: 'A house where a person is lying down to sleep.',
    combinations: [{ word: '寝室', reading: 'shinshitsu', meaning: 'Bedroom' }]
  },
  {
    id: 'mn21-k4',
    lessonNumber: 21,
    type: 'kanji',
    character: '終',
    readings: ['しゅう', 'お'],
    meanings: ['End', 'Finish'],
    level: 1,
    radical: '糸',
    mnemonic: 'The end of a thread (糸).',
    combinations: [{ word: '終了', reading: 'shuuryou', meaning: 'End/Termination' }]
  },
  {
    id: 'mn21-k5',
    lessonNumber: 21,
    type: 'kanji',
    character: '言',
    readings: ['げん', 'ごん', 'い', 'こと'],
    meanings: ['Say', 'Word'],
    level: 1,
    radical: '言',
    mnemonic: 'Words coming out of a mouth.',
    combinations: [{ word: '言語', reading: 'gengo', meaning: 'Language' }]
  },
  {
    id: 'mn21-k6',
    lessonNumber: 21,
    type: 'kanji',
    character: '知',
    readings: ['ち', 'し'],
    meanings: ['Know', 'Wisdom'],
    level: 1,
    radical: '矢',
    mnemonic: 'An arrow (矢) that hits the mark (mouth/knowledge).',
    combinations: [{ word: '知り合い', reading: 'shiriai', meaning: 'Acquaintance' }]
  },
  {
    id: 'mn21-k7',
    lessonNumber: 21,
    type: 'kanji',
    character: '答',
    readings: ['とう', 'こた'],
    meanings: ['Answer', 'Reply'],
    level: 1,
    radical: '竹',
    mnemonic: 'An answer given on a bamboo (竹) slip.',
    combinations: [{ word: '回答', reading: 'kaitou', meaning: 'Answer/Reply' }]
  },
  {
    id: 'mn21-k8',
    lessonNumber: 21,
    type: 'kanji',
    character: '漢',
    readings: ['かん'],
    meanings: ['Han Chinese', 'China'],
    level: 1,
    radical: '水',
    mnemonic: 'Water drying up in the sun, representing China/Han dynasty.',
    combinations: [{ word: '漢字', reading: 'kanji', meaning: 'Kanji' }]
  },
  {
    id: 'mn21-k9',
    lessonNumber: 21,
    type: 'kanji',
    character: '字',
    readings: ['じ'],
    meanings: ['Character', 'Letter', 'Word'],
    level: 1,
    radical: '宀',
    mnemonic: 'A child (子) learning characters inside a house (宀).',
    combinations: [{ word: '文字', reading: 'moji', meaning: 'Character/Letter' }]
  },
  {
    id: 'mn21-k10',
    lessonNumber: 21,
    type: 'kanji',
    character: '方',
    readings: ['ほう', 'かた', 'がた'],
    meanings: ['Direction', 'Way', 'Side', 'Person (polite)'],
    level: 1,
    radical: '方',
    mnemonic: 'A direction pointer or agricultural tool.',
    combinations: [{ word: '読み方', reading: 'yomikata', meaning: 'Way of reading' }]
  }
];
