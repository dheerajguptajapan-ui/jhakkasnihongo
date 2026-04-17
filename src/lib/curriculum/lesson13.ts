import { Item } from '../../types';

export const lesson13: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl13-v1', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'あそびます', readings: ['asobimasu'], meanings: ['play', 'enjoy oneself'], explanation: '遊ぶ.' },
  { id: 'nl13-v2', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'およぎます', readings: ['oyogimasu'], meanings: ['swim'], explanation: '泳ぐ.' },
  { id: 'nl13-v6', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'はいります', readings: ['hairimasu'], meanings: ['enter [a shop]'], explanation: '入る.' },
  { id: 'nl13-v7', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'でます', readings: ['demasu'], meanings: ['leave [a shop]'], explanation: '出る.' },
  { id: 'nl13-v8', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'けっこんします', readings: ['kekkon shimasu'], meanings: ['get married'] },
  { id: 'nl13-v9', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'かいものします', readings: ['kaimono shimasu'], meanings: ['do shopping'] },
  { id: 'nl13-v10', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'しょくじします', readings: ['shokuji shimasu'], meanings: ['have a meal'] },
  { id: 'nl13-v13', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'ほしい', readings: ['hoshii'], meanings: ['want (something)'], explanation: '欲しい.' },
  { id: 'nl13-v15', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'ひろい', readings: ['hiroi'], meanings: ['spacious', 'wide'], explanation: '広い.' },
  { id: 'nl13-v16', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'せまい', readings: ['semai'], meanings: ['narrow', 'small'], explanation: '狭い.' },
  { id: 'nl13-v18', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'プール', readings: ['pu-ru'], meanings: ['pool'] },
  { id: 'nl13-v19', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'かわ', readings: ['kawa'], meanings: ['river'] },
  { id: 'nl13-v26', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'しゅうまつ', readings: ['shuumatsu'], meanings: ['weekend'] },
  { id: 'nl13-v27', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'なにか', readings: ['nanika'], meanings: ['something'] },
  { id: 'nl13-v28', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'どこか', readings: ['dokoka'], meanings: ['somewhere'] },
  { id: 'nl13-v29', lessonNumber: 13, type: 'vocabulary', level: 1, character: 'おなかが すきました', readings: ['onaka ga sukimashita'], meanings: ['(I am) hungry'] },

  // --- GRAMMAR ---
  {
    id: 'nl13-g1',
    lessonNumber: 13,
    type: 'grammar',
    level: 1,
    character: 'N が ほしい です',
    readings: ['N ga hoshii desu'],
    meanings: ['I want [Noun]'],
    explanation: 'Desire for an object.',
    sentences: [
      {
        japanese: [
          { text: '私は', reading: 'わたしは' }, { text: '新しい', reading: 'あたらしい' }, { text: 'パソコン', reading: null }, { text: 'が', reading: null }, { text: 'ほしい', reading: null }, { text: 'です', reading: null }, { text: '。', reading: null }
        ],
        english: 'I want a new computer.'
      }
    ]
  },
  {
    id: 'nl13-g2',
    lessonNumber: 13,
    type: 'grammar',
    level: 1,
    character: 'V-たい です',
    readings: ['V-tai desu'],
    meanings: ['I want to [Verb]'],
    explanation: 'Desire to perform an action.',
    sentences: [
      {
        japanese: [
          { text: '日本', reading: 'にほん' }, { text: 'へ', reading: null }, { text: '行きたい', reading: 'いきたい' }, { text: 'です', reading: null }, { text: '。', reading: null }
        ],
        english: 'I want to go to Japan.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl13-d1',
    lessonNumber: 13,
    type: 'dokkai',
    level: 1,
    character: '誕生日の願い',
    meanings: ['Birthday Wish'],
    content: [
      { text: 'Aalind: ', reading: null }, { text: 'Riyaさん、来週', reading: 'Riya-san, raishuu' }, { text: '誕生日', reading: 'たんじょうび' }, { text: 'ですね。何が', reading: null }, { text: 'ほしい', reading: null }, { text: 'ですか。', reading: null },
      { text: '\n', reading: null },
      { text: 'Riya: ', reading: null }, { text: 'そうですね。私は', reading: 'わたしは' }, { text: '広い', reading: 'ひろい' }, { text: '家', reading: 'いえ' }, { text: 'が', reading: null }, { text: 'ほしい', reading: null }, { text: 'です。', reading: null }
    ],
    translation: "Aalind: Riya, it's your birthday next week. What do you want? Riya: Well, I want a spacious house.",
    questions: [
      {
        question: 'Riyaさんは 何が ほしいですか。',
        options: ['広い 家', '新しい 車', 'お金', '休み'],
        answerIndex: 0
      }
    ]
  }
];
