import { Item } from '../../types';

export const lesson15: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl15-v1', lessonNumber: 15, type: 'vocabulary', level: 1, character: 'おきます', readings: ['okimasu'], meanings: ['put', 'place'], explanation: '置く.' },
  { id: 'nl15-v2', lessonNumber: 15, type: 'vocabulary', level: 1, character: 'つくります', readings: ['tsukurimasu'], meanings: ['make', 'produce'], explanation: '作る.' },
  { id: 'nl15-v3', lessonNumber: 15, type: 'vocabulary', level: 1, character: 'うります', readings: ['urimasu'], meanings: ['sell'], explanation: '売る.' },
  { id: 'nl15-v4', lessonNumber: 15, type: 'vocabulary', level: 1, character: 'しります', readings: ['shirimasu'], meanings: ['get to know'], explanation: '知る.' },
  { id: 'nl15-v5', lessonNumber: 15, type: 'vocabulary', level: 1, character: 'すみます', readings: ['sumimasu'], meanings: ['live', 'reside'], explanation: '住む.' },
  { id: 'nl15-v7', lessonNumber: 15, type: 'vocabulary', level: 1, character: '資料', readings: ['shiryou'], meanings: ['materials', 'data'] },
  { id: 'nl15-v12', lessonNumber: 15, type: 'vocabulary', level: 1, character: 'ソフト', readings: ['sofuto'], meanings: ['software'] },
  { id: 'nl15-v13', lessonNumber: 15, type: 'vocabulary', level: 1, character: '専門', readings: ['senmon'], meanings: ['specialty', 'field of study'] },
  { id: 'nl15-v14', lessonNumber: 15, type: 'vocabulary', level: 1, character: '歯医者', readings: ['haisha'], meanings: ['dentist'] },
  { id: 'nl15-v17', lessonNumber: 15, type: 'vocabulary', level: 1, character: '独身', readings: ['dokushin'], meanings: ['single', 'unmarried'] },
  { id: 'nl15-v19', lessonNumber: 15, type: 'vocabulary', level: 1, character: '思い出します', readings: ['omoidashimasu'], meanings: ['remember', 'recollect'] },
  { id: 'nl15-v22', lessonNumber: 15, type: 'vocabulary', level: 1, character: '高校', readings: ['koukou'], meanings: ['senior high school'] },

  // --- GRAMMAR ---
  {
    id: 'nl15-g1',
    lessonNumber: 15,
    type: 'grammar',
    level: 1,
    character: 'V-て も いい です',
    readings: ['V-te mo ii desu'],
    meanings: ['You may [Verb]'],
    explanation: 'Giving or asking for permission.',
    sentences: [
      {
        japanese: [
          { text: 'ここで', reading: null }, { text: '写真', reading: 'しゃしん' }, { text: 'を', reading: null }, { text: '撮っても', reading: 'とっても' }, { text: 'いいですか', reading: null }, { text: '。', reading: null }
        ],
        english: 'May I take a photo here?'
      }
    ]
  },
  {
    id: 'nl15-g2',
    lessonNumber: 15,
    type: 'grammar',
    level: 1,
    character: 'V-て は いけません',
    readings: ['V-te wa ikemasen'],
    meanings: ['You must not [Verb]'],
    explanation: 'Used for prohibition.',
    sentences: [
      {
        japanese: [
          { text: 'ここで', reading: null }, { text: 'タバコを', reading: null }, { text: '吸っては', reading: 'すっては' }, { text: 'いけません', reading: null }, { text: '。', reading: null }
        ],
        english: 'You must not smoke here.'
      }
    ]
  },
  {
    id: 'nl15-g3',
    lessonNumber: 15,
    type: 'grammar',
    level: 1,
    character: 'V-て います',
    readings: ['V-te imasu'],
    meanings: ['Resultant State / Occupation'],
    explanation: 'Used for states like marriage or working.',
    sentences: [
      {
        japanese: [
          { text: 'Riyaさんは', reading: 'Riya-san wa' }, { text: '結婚して', reading: 'けっこんして' }, { text: 'います', reading: null }, { text: '。', reading: null }
        ],
        english: 'Riya is married.'
      },
      {
        japanese: [
          { text: '私は', reading: 'わたしは' }, { text: 'Antigravityで', reading: null }, { text: '働いて', reading: 'はたらいて' }, { text: 'います', reading: null }, { text: '。', reading: null }
        ],
        english: 'I work at Antigravity.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl15-d1',
    lessonNumber: 15,
    type: 'dokkai',
    level: 1,
    character: '図書館の規則',
    meanings: ['Library Rules'],
    content: [
      { text: 'この', reading: null }, { text: '図書館', reading: 'としょかん' }, { text: 'で', reading: null }, { text: '食べ物', reading: 'たべもの' }, { text: 'を', reading: null }, { text: '食べては', reading: 'たべては' }, { text: 'いけません。', reading: null },
      { text: '\n', reading: null },
      { text: 'でも、', reading: null }, { text: 'パソコンを', reading: null }, { text: '使っても', reading: 'つかっても' }, { text: 'いいです。', reading: null }
    ],
    translation: 'You must not eat food in this library. However, you may use a computer.',
    questions: [
      {
        question: '図書館で 何を しても いいですか。',
        options: ['ごはんを 食べる', 'タバコを 吸う', 'パソコンを 使う', '音楽を 聞く'],
        answerIndex: 2
      }
    ]
  }
];
