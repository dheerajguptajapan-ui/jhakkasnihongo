import { Item } from '../../types';

export const lesson9: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl9-v1', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'わかります', readings: ['wakarimasu'], meanings: ['understand'], explanation: '分かる.' },
  { id: 'nl9-v2', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'あります', readings: ['arimasu'], meanings: ['have', 'be', 'exist'], explanation: 'ある (inanimate objects).' },
  { id: 'nl9-v3', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'すき [な]', readings: ['suki [na]'], meanings: ['like', 'favorite'], explanation: '好き.' },
  { id: 'nl9-v4', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'きらい [な]', readings: ['kirai [na]'], meanings: ['dislike', 'hate'], explanation: '嫌い.' },
  { id: 'nl9-v5', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'じょうず [な]', readings: ['jouzu [na]'], meanings: ['good at', 'skillful'], explanation: '上手.' },
  { id: 'nl9-v6', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'へた [な]', readings: ['heta [na]'], meanings: ['bad at', 'unskillful'], explanation: '下手.' },
  { id: 'nl9-v7', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'りょうり', readings: ['ryouri'], meanings: ['cooking', 'cuisine'], explanation: '料理.' },
  { id: 'nl9-v9', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'スポーツ', readings: ['supo-tsu'], meanings: ['sport'] },
  { id: 'nl9-v12', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'おんがく', readings: ['ongaku'], meanings: ['music'], explanation: '音楽.' },
  { id: 'nl9-v13', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'うた', readings: ['uta'], meanings: ['song'], explanation: '歌.' },
  { id: 'nl9-v17', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'カラオケ', readings: ['karaoke'], meanings: ['karaoke'] },
  { id: 'nl9-v21', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'かんじ', readings: ['kanji'], meanings: ['Kanji'], explanation: '漢字.' },
  { id: 'nl9-v27', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'じかん', readings: ['jikan'], meanings: ['time'], explanation: '時間.' },
  { id: 'nl9-v28', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'ようじ', readings: ['youji'], meanings: ['errand', 'something to do'], explanation: '用事.' },
  { id: 'nl9-v29', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'やくそく', readings: ['yakusoku'], meanings: ['promise', 'appointment'], explanation: '約束.' },
  { id: 'nl9-v32', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'よく', readings: ['yoku'], meanings: ['well', 'often'] },
  { id: 'nl9-v34', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'たくさん', readings: ['takusan'], meanings: ['many', 'much'] },
  { id: 'nl9-v35', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'すこし', readings: ['sukoshi'], meanings: ['a little'] },
  { id: 'nl9-v36', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'ぜんぜん', readings: ['zenzen'], meanings: ['not at all (with negative)'] },
  { id: 'nl9-v38', lessonNumber: 9, type: 'vocabulary', level: 5, character: '～から', readings: ['kara'], meanings: ['because ～'] },
  { id: 'nl9-v39', lessonNumber: 9, type: 'vocabulary', level: 5, character: 'どうして', readings: ['doushite'], meanings: ['why'] },

  // --- GRAMMAR ---
  {
    id: 'nl9-g1',
    lessonNumber: 9,
    type: 'grammar',
    level: 5,
    character: 'N が あります / わかります',
    readings: ['N ga arimasu / wakarimasu'],
    meanings: ['Understand/Have N'],
    explanation: 'Certain verbs use が for the object.',
    sentences: [
      {
        japanese: [
          { text: 'Aalindさんは', reading: 'Aalind-san wa' }, { text: '漢字', reading: 'かんじ' }, { text: 'が', reading: null }, { text: '少し', reading: 'すこし' }, { text: 'わかります', reading: null }, { text: '。', reading: null }
        ],
        english: 'Aalind understands Kanji a little.'
      }
    ]
  },
  {
    id: 'nl9-g2',
    lessonNumber: 9,
    type: 'grammar',
    level: 5,
    character: 'N が すき / きらい / じょうず / へた です',
    readings: ['N ga suki / kirai / jouzu / heta desu'],
    meanings: ['Like/Dislike/Good at/Bad at N'],
    explanation: 'Adjectives describing skills or feelings use が.',
    sentences: [
      {
        japanese: [
          { text: 'Riyaさんは', reading: 'Riya-san wa' }, { text: '歌', reading: 'うた' }, { text: 'が', reading: null }, { text: '上手', reading: 'じょうず' }, { text: 'です。', reading: null }
        ],
        english: 'Riya is good at singing.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl9-d1',
    lessonNumber: 9,
    type: 'dokkai',
    level: 5,
    character: 'カラオケ',
    meanings: ['Karaoke'],
    content: [
      { text: 'Aalindさん、', reading: 'Aalind-san' }, { text: '土曜日', reading: 'どようび' }, { text: 'に', reading: null }, { text: '一緒に', reading: 'いっしょに' }, { text: 'カラオケ', reading: null }, { text: 'へ', reading: null }, { text: '行きませんか。', reading: 'いきませんか' },
      { text: '\n', reading: null },
      { text: '土曜日', reading: 'どようび' }, { text: 'ですか。', reading: null }, { text: 'すみません。', reading: null }, { text: '用事', reading: 'ようじ' }, { text: 'が', reading: null }, { text: 'ありますから、', reading: null }, { text: '行けません。', reading: 'いけません' }
    ],
    translation: "Aalind, won't you go to karaoke with me on Saturday? Saturday? I'm sorry. I have an errand, so I can't go.",
    questions: [
      {
        question: 'どうして Aalindさんは 行けませんか。',
        options: ['時間が ありませんから', '約束が ありますから', '用事が ありますから', '日本語が わかりませんから'],
        answerIndex: 2
      }
    ]
  }
];
