import { Item } from '../../types';

export const lesson12: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl12-v1', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'かんたん [な]', readings: ['kantan [na]'], meanings: ['easy', 'simple'], explanation: '簡単.' },
  { id: 'nl12-v2', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'ちかい', readings: ['chikai'], meanings: ['near', 'close'], explanation: '近い.' },
  { id: 'nl12-v3', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'とおい', readings: ['tooi'], meanings: ['far', 'distant'], explanation: '遠い.' },
  { id: 'nl12-v4', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'はやい', readings: ['hayai'], meanings: ['fast', 'early'], explanation: '早い / 速い.' },
  { id: 'nl12-v5', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'おそい', readings: ['osoi'], meanings: ['slow', 'late'], explanation: '遅い.' },
  { id: 'nl12-v8', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'あたたかい', readings: ['atatakai'], meanings: ['warm'], explanation: '温かい / 暖かい.' },
  { id: 'nl12-v9', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'すずしい', readings: ['suzushii'], meanings: ['cool'], explanation: '涼しい.' },
  { id: 'nl12-v15', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'きせつ', readings: ['kisetsu'], meanings: ['season'] },
  { id: 'nl12-v16', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'はる', readings: ['haru'], meanings: ['spring'] },
  { id: 'nl12-v17', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'なつ', readings: ['natsu'], meanings: ['summer'] },
  { id: 'nl12-v18', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'あき', readings: ['aki'], meanings: ['autumn', 'fall'] },
  { id: 'nl12-v19', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'ふゆ', readings: ['fuyu'], meanings: ['winter'] },
  { id: 'nl12-v20', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'てんき', readings: ['tenki'], meanings: ['weather'] },
  { id: 'nl12-v21', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'あめ', readings: ['ame'], meanings: ['rain'] },
  { id: 'nl12-v22', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'ゆき', readings: ['yuki'], meanings: ['snow'] },
  { id: 'nl12-v24', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'ホテル', readings: ['hoteru'], meanings: ['hotel'] },
  { id: 'nl12-v25', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'くうこう', readings: ['kuukou'], meanings: ['airport'] },
  { id: 'nl12-v26', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'うみ', readings: ['umi'], meanings: ['sea', 'ocean'] },
  { id: 'nl12-v27', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'せかい', readings: ['sekai'], meanings: ['world'] },
  { id: 'nl12-v28', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'パーティー', readings: ['pa-ti-'], meanings: ['party'] },
  { id: 'nl12-v29', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'まつり', readings: ['matsuri'], meanings: ['festival'] },
  { id: 'nl12-v30', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'しけん', readings: ['shiken'], meanings: ['examination', 'test'] },
  { id: 'nl12-v37', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'ずっと', readings: ['zutto'], meanings: ['by far', 'throughout'] },
  { id: 'nl12-v38', lessonNumber: 12, type: 'vocabulary', level: 1, character: 'はじめて', readings: ['hajimete'], meanings: ['for the first time'] },

  // --- GRAMMAR ---
  {
    id: 'nl12-g1',
    lessonNumber: 12,
    type: 'grammar',
    level: 1,
    character: 'Adj/N Past Tense',
    readings: ['Adj/N deshita / katta desu'],
    meanings: ['Was Adj/Noun'],
    explanation: 'Na-adj/N uses [deshita]. I-adj uses [~katta desu].',
    sentences: [
      {
        japanese: [
          { text: '昨日', reading: 'きのう' }, { text: 'は', reading: null }, { text: '雨', reading: 'あめ' }, { text: 'でした', reading: null }, { text: '。', reading: null }
        ],
        english: 'Yesterday was rainy.'
      },
      {
        japanese: [
          { text: '旅行', reading: 'りょこう' }, { text: 'は', reading: null }, { text: '楽しかった', reading: 'たのしかった' }, { text: 'です', reading: null }, { text: '。', reading: null }
        ],
        english: 'The trip was fun.'
      }
    ]
  },
  {
    id: 'nl12-g2',
    lessonNumber: 12,
    type: 'grammar',
    level: 1,
    character: 'N1 は N2 より Adj です',
    readings: ['N1 wa N2 yori Adj desu'],
    meanings: ['N1 is more Adj than N2'],
    explanation: 'Comparison between two items.',
    sentences: [
      {
        japanese: [
          { text: 'この', reading: null }, { text: 'パソコン', reading: null }, { text: 'は', reading: null }, { text: 'あの', reading: null }, { text: 'パソコン', reading: null }, { text: 'より', reading: null }, { text: '速い', reading: 'はやい' }, { text: 'です', reading: null }, { text: '。', reading: null }
        ],
        english: 'This computer is faster than that one.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl12-d1',
    lessonNumber: 12,
    type: 'dokkai',
    level: 1,
    character: '日本の季節',
    meanings: ['Seasons in Japan'],
    content: [
      { text: '日本', reading: 'にほん' }, { text: 'に', reading: null }, { text: '季節', reading: 'きせつ' }, { text: 'が', reading: null }, { text: '４つ', reading: 'よっつ' }, { text: 'あります。', reading: null },
      { text: '\n', reading: null },
      { text: '春、夏、秋、冬', reading: 'はる、なつ、あき、ふゆ' }, { text: 'です。', reading: null },
      { text: '\n', reading: null },
      { text: '私は', reading: 'わたしは' }, { text: '秋', reading: 'あき' }, { text: 'が', reading: null }, { text: '一番', reading: 'いちばん' }, { text: '好き', reading: 'すき' }, { text: 'です。', reading: null }
    ],
    translation: 'There are four seasons in Japan: Spring, Summer, Autumn, and Winter. I like autumn the best.',
    questions: [
      {
        question: 'どの 季節が 一番 好きですか。',
        options: ['春', '夏', '秋', '冬'],
        answerIndex: 2
      }
    ]
  }
];
