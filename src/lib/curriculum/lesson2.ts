import { Item } from '../../types';

export const lesson2: Item[] = [
  // --- VOCABULARY ---
  {
    id: 'l2-v1',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: 'これ',
    readings: ['kore'],
    meanings: ['this (near me)'],
    explanation: 'A demonstrative pronoun referring to a thing near the speaker. Cannot be followed directly by a noun.',
    sentences: [
      { japanese: 'これは私のです。', english: 'This is mine.' },
      { japanese: 'それは何ですか？', english: 'What is that?' }
    ]
  },
  {
    id: 'l2-v2',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: '本',
    readings: ['hon'],
    meanings: ['book'],
    explanation: 'Standard term for a printed book (本). Can also be used as a counter for long, cylindrical objects.',
    sentences: [
      { japanese: 'これは日本語の本です。', english: 'This is a Japanese language book.' },
      { japanese: '毎日、本を読みます。', english: 'I read books every day.' }
    ]
  },
  {
    id: 'l2-v3',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: '時計',
    readings: ['tokei'],
    meanings: ['watch', 'clock'],
    explanation: 'Term for any timekeeping device (時計). Used for both wristwatches and wall clocks.',
    sentences: [
      { japanese: 'その時計はいくらですか？', english: 'How much is that watch?' },
      { japanese: 'あの時計は三千円です。', english: 'That clock is 3,000 yen.' }
    ]
  },
  {
    id: 'l2-v4',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: '自動車',
    readings: ['jidousha'],
    meanings: ['automobile', 'car'],
    explanation: 'The formal term for a car (自動車). "Kuruma" is more common in daily conversation.',
    sentences: [
      { japanese: '自動車を買いました。', english: 'I bought a car.' },
      { japanese: 'この自動車は速いです。', english: 'This car is fast.' }
    ]
  },
  {
    id: 'l2-v5',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: 'コンピューター',
    readings: ['konpyuutaa'],
    meanings: ['computer'],
    explanation: 'Modern Katakana term for computer. Often abbreviated to "pasokon" in casual speech.',
    sentences: [
      { japanese: '私のコンピューターです。', english: "It's my computer." },
      { japanese: '新しいコンピューターが欲しいです。', english: 'I want a new computer.' }
    ]
  },

  // --- GRAMMAR ---
  {
    id: 'l2-g1',
    lessonNumber: 2,
    type: 'grammar',
    level: 5,
    character: 'これ / それ / あれ は N です',
    readings: ['kore / sore / are wa N desu'],
    meanings: ['This / That / That over there is N'],
    explanation: 'Demonstrative pronouns are used to identify objects relative to the positions of the speaker and the listener. \n- これ: near the speaker\n- それ: near the listener\n- あれ: distant from both',
    sentences: [
      {
        japanese: 'これはミラーさんの本です。',
        english: "This is Mr. Miller's book.",
        segments: [
          { text: 'これ', reading: 'これ' },
          { text: 'は', reading: null },
          { text: 'ミラーさん', reading: 'Miraa-san' },
          { text: 'の', reading: null },
          { text: '本', reading: 'ほん' },
          { text: 'です', reading: null }
        ]
      },
      {
        japanese: 'あれは誰のコンピューターですか？',
        english: 'Whose computer is that over there?',
        segments: [
          { text: 'あれ', reading: 'あれ' },
          { text: 'は', reading: null },
          { text: '誰', reading: 'だれ' },
          { text: 'の', reading: null },
          { text: 'コンピューター', reading: null },
          { text: 'です', reading: null },
          { text: 'か？', reading: null }
        ]
      }
    ]
  },
];