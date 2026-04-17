import { Item } from '../../types';

export const lesson24: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl24-v1', lessonNumber: 24, type: 'vocabulary', level: 5, character: 'くれます', readings: ['kuremasu'], meanings: ['give [to me]'] },
  { id: 'nl24-v2', lessonNumber: 24, type: 'vocabulary', level: 5, character: '連れて行きます', readings: ['tsurete ikimasu'], meanings: ['take [someone]'] },
  { id: 'nl24-v3', lessonNumber: 24, type: 'vocabulary', level: 5, character: '連れて来ます', readings: ['tsurete kimasu'], meanings: ['bring [someone]'] },
  { id: 'nl24-v5', lessonNumber: 24, type: 'vocabulary', level: 5, character: '紹介します', readings: ['shoukai shimasu'], meanings: ['introduce'] },
  { id: 'nl24-v6', lessonNumber: 24, type: 'vocabulary', level: 5, character: '案内します', readings: ['annai shimasu'], meanings: ['show around'] },
  { id: 'nl24-v7', lessonNumber: 24, type: 'vocabulary', level: 5, character: '説明します', readings: ['setsumei shimasu'], meanings: ['explain'] },
  { id: 'nl24-v9', lessonNumber: 24, type: 'vocabulary', level: 5, character: '準備します', readings: ['junbi shimasu'], meanings: ['prepare'] },
  { id: 'nl24-v10', lessonNumber: 24, type: 'vocabulary', level: 5, character: '意味', readings: ['imi'], meanings: ['meaning'] },
  { id: 'nl24-v11', lessonNumber: 24, type: 'vocabulary', level: 5, character: 'お菓子', readings: ['okashi'], meanings: ['sweets', 'snacks'] },
  { id: 'nl24-v12', lessonNumber: 24, type: 'vocabulary', level: 5, character: '全部', readings: ['zenbu'], meanings: ['all'] },
  { id: 'nl24-v15', lessonNumber: 24, type: 'vocabulary', level: 5, character: 'お弁当', readings: ['obentou'], meanings: ['boxed lunch'] },

  // --- GRAMMAR ---
  {
    id: 'nl24-g1',
    lessonNumber: 24,
    type: 'grammar',
    level: 5,
    character: 'くれる / あげる / もらう',
    readings: ['kureru / ageru / morau'],
    meanings: ['Giving and receiving favors'],
    explanation: 'Using ~te form with giving/receiving verbs.',
    sentences: [
      {
        japanese: [
          { text: 'Riyaさんは', reading: 'Riya-san wa' }, { text: '私に', reading: 'watashi ni' }, { text: 'お菓子', reading: 'おかし' }, { text: 'を', reading: null }, { text: 'くれました', reading: 'kuremashita' }, { text: '。', reading: null }
        ],
        english: 'Riya gave me some sweets.'
      },
      {
        japanese: [
          { text: '私は', reading: 'わたしは' }, { text: 'Dheerajさんに', reading: 'Dheeraj-san ni' }, { text: '本', reading: 'ほん' }, { text: 'を', reading: null }, { text: '貸して', reading: 'かして' }, { text: 'あげました', reading: 'agemashita' }, { text: '。', reading: null }
        ],
        english: 'I lent a book to Dheeraj.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl24-d1',
    lessonNumber: 24,
    type: 'dokkai',
    level: 5,
    character: '誕生日のプレゼント',
    meanings: ['Birthday Present'],
    content: [
      { text: '昨日', reading: 'きのう' }, { text: 'は', reading: null }, { text: '私の', reading: 'わたしの' }, { text: '誕生日', reading: 'たんじょうび' }, { text: 'でした。', reading: null },
      { text: '\n', reading: null },
      { text: 'Dheerajさんは', reading: 'Dheeraj-san wa' }, { text: 'ネクタイを', reading: null }, { text: 'くれました。', reading: null },
      { text: '\n', reading: null },
      { text: 'Riyaさんは', reading: 'Riya-san wa' }, { text: 'パーティーを', reading: null }, { text: '準備', reading: 'じゅんび' }, { text: 'してくれました。', reading: null }
    ],
    translation: 'Yesterday was my birthday. Dheeraj gave me a tie. Riya prepared a party for me.',
    questions: [
      {
        question: 'Dheerajさんは 何を くれましたか。',
        options: ['ネクタイ', 'お菓子', '本', '時計'],
        answerIndex: 0
      }
    ]
  }
];
