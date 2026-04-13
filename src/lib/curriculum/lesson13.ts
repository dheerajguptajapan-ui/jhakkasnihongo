import { Item } from '../../types';

export const lesson13: Item[] = [
  // Vocabulary
  {
    id: 'mn13-v1',
    lessonNumber: 13,
    type: 'vocabulary',
    character: 'あそびます',
    readings: ['asobimasu'],
    meanings: ['play', 'enjoy oneself'],
    explanation: '遊ぶ.'
  },
  {
    id: 'mn13-v2',
    lessonNumber: 13,
    type: 'vocabulary',
    character: 'およぎます',
    readings: ['oyogimasu'],
    meanings: ['swim'],
    explanation: '泳ぐ.'
  },

  // Grammar
  {
    id: 'mn13-g1',
    lessonNumber: 13,
    type: 'grammar',
    character: 'V (masu-form) たい です',
    readings: ['V tai desu'],
    meanings: ['Want to [Verb]'],
    explanation: 'Expressing desires for actions.',
    sentences: [{ japanese: 'お茶を 飲みたいです。', english: 'I want to drink tea.', furigana: 'お茶[ちゃ]を飲[の]みたいです。' }]
  },

  // Kanji (Unit 12 - Part 1)
  {
    id: 'mn13-k1',
    lessonNumber: 13,
    type: 'kanji',
    character: '歩',
    readings: ['ほ', 'ふ', 'ぶ', 'ある', 'あゆ'],
    meanings: ['Walk', 'Step'],
    level: 1,
    radical: '止',
    mnemonic: 'Stopping (止) and starting again correctly.',
    combinations: [{ word: '散歩', reading: 'sanpo', meaning: 'Stroll' }]
  },
  {
    id: 'mn13-k2',
    lessonNumber: 13,
    type: 'kanji',
    character: '立',
    readings: ['りつ', 'りゅう', 'た', 'だ'],
    meanings: ['Stand up', 'Establish'],
    level: 1,
    radical: '立',
    mnemonic: 'A person standing on the ground.',
    combinations: [{ word: '起立', reading: 'kiritsu', meaning: 'Standing up' }]
  },
  {
    id: 'mn13-k3',
    lessonNumber: 13,
    type: 'kanji',
    character: '止',
    readings: ['し', 'と', 'ど'],
    meanings: ['Stop', 'Halt'],
    level: 1,
    radical: '止',
    mnemonic: 'A footprint showing where someone stopped.',
    combinations: [{ word: '中止', reading: 'chuushi', meaning: 'Cancellation/Suspension' }]
  }
];
