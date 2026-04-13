import { Item } from '../../types';

export const lesson15: Item[] = [
  // Vocabulary
  {
    id: 'mn15-v1',
    lessonNumber: 15,
    type: 'vocabulary',
    character: 'たちます',
    readings: ['tachimasu'],
    meanings: ['stand up'],
    explanation: '立つ.'
  },
  {
    id: 'mn15-v2',
    lessonNumber: 15,
    type: 'vocabulary',
    character: 'すわります',
    readings: ['suwarimasu'],
    meanings: ['sit down'],
    explanation: '座る.'
  },

  // Grammar
  {
    id: 'mn15-g1',
    lessonNumber: 15,
    type: 'grammar',
    character: 'V (te-form) も いいです',
    readings: ['V te mo ii desu'],
    meanings: ['You may [Verb]'],
    explanation: 'Giving permission.',
    sentences: [{ japanese: '写真を 撮っても いいですか。', english: 'May I take a photo?', furigana: '写[しゃ]真[しん]を撮[と]ってもいいですか。' }]
  },

  // Kanji (Unit 12 - Part 3)
  {
    id: 'mn15-k1',
    lessonNumber: 15,
    type: 'kanji',
    character: '使',
    readings: ['し', 'つか'],
    meanings: ['Use', 'Mission', 'Messenger'],
    level: 1,
    radical: '人',
    mnemonic: 'A person (人) being told what to do (the government official part).',
    combinations: [{ word: '使用', reading: 'shiyou', meaning: 'Use/Utilization' }]
  },
  {
    id: 'mn15-k2',
    lessonNumber: 15,
    type: 'kanji',
    character: '売',
    readings: ['ばい', 'う'],
    meanings: ['Sell'],
    level: 1,
    radical: '士',
    mnemonic: 'A person (official) giving something away (opposite of buy).',
    combinations: [{ word: '売店', reading: 'baiten', meaning: 'Kiosk/Stand' }]
  },
  {
    id: 'mn15-k3',
    lessonNumber: 15,
    type: 'kanji',
    character: '作',
    readings: ['さく', 'さ', 'つく'],
    meanings: ['Make', 'Produce', 'Create'],
    level: 1,
    radical: '人',
    mnemonic: 'A person (人) working on a project.',
    combinations: [{ word: '手作り', reading: 'tezukuri', meaning: 'Handmade' }]
  }
];
