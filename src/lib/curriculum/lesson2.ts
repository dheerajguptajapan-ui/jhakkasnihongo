import { Item } from '../../types';

export const lesson2: Item[] = [
  // --- VOCABULARY ---
  {
    id: 'l2-v1',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: 'これ',
    segments: [{ text: 'これ', reading: null }],
    meanings: ['this (near me)'],
    explanation: 'A demonstrative pronoun referring to a thing near the speaker.'
  },
  {
    id: 'l2-v2',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: '本',
    segments: [{ text: '本', reading: 'ほん' }],
    meanings: ['book'],
    explanation: 'Neural knowledge container.'
  },
  {
    id: 'l2-v3',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: '時計',
    segments: [{ text: '時計', reading: 'とけい' }],
    meanings: ['watch', 'clock'],
    explanation: 'System time synchronization device.'
  },
  {
    id: 'l2-v4',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: '自動車',
    segments: [{ text: '自動車', reading: 'じどうしゃ' }],
    meanings: ['automobile', 'car']
  },
  {
    id: 'l2-v5',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 5,
    character: 'コンピューター',
    segments: [{ text: 'コンピューター', reading: null }],
    meanings: ['computer'],
    explanation: 'The primary interface for Neural Sync.'
  },

  // --- GRAMMAR ---
  {
    id: 'l2-g1',
    lessonNumber: 2,
    type: 'grammar',
    level: 5,
    character: 'これ / それ / あれ は N です',
    meanings: ['Demonstrative Particles'],
    explanation: 'Demonstrative pronouns used to identify objects relative to the speaker/listener.',
    sentences: [
      {
        japanese: [
          { text: 'これ', reading: 'これ' },
          { text: 'は', reading: null },
          { text: 'Dheeraj', reading: null },
          { text: 'の', reading: null },
          { text: '本', reading: 'ほん' },
          { text: 'です', reading: null }
        ],
        english: "This is Dheeraj's book.",
        segments: [
          { text: 'これ', reading: 'これ' },
          { text: 'は', reading: null },
          { text: 'Dheeraj', reading: null },
          { text: 'の', reading: null },
          { text: '本', reading: 'ほん' },
          { text: 'です', reading: null }
        ]
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'l2-d1',
    lessonNumber: 2,
    type: 'dokkai',
    level: 5,
    character: 'Neural Sync Log: Item Discovery',
    meanings: ['Neural Sync Log'],
    content: [
      { text: 'Aalind：あのう、これ', reading: null },
      { text: 'は', reading: null },
      { text: '何', reading: 'なん' },
      { text: 'ですか', reading: null },
      { text: '。\n', reading: null },
      { text: 'Riya：それ', reading: null },
      { text: 'は', reading: null },
      { text: '日本語', reading: 'にほんご' },
      { text: 'の', reading: null },
      { text: '時計', reading: 'とけい' },
      { text: 'です', reading: null },
      { text: '。\n', reading: null },
      { text: 'Aalind：そうですか。ありがとう。', reading: null }
    ],
    translation: 'Aalind: Er, what is this?\nRiya: That is a Japanese watch.\nAalind: I see. Thank you.',
    questions: [
      {
        question: '「これ」は 何ですか。',
        options: ['ほん', 'とけい', 'コンピューター', 'かぎ'],
        answerIndex: 1
      }
    ]
  }
];
