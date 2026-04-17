import { Item } from '../../types';

export const lesson1: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl1-v1', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'わたし', readings: ['watashi'], meanings: ['I'], explanation: 'Standard personal pronoun. (私)' },
  { id: 'nl1-v2', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'わたしたち', readings: ['watashitachi'], meanings: ['we'], explanation: 'Plural form of "I".' },
  { id: 'nl1-v3', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'あなた', readings: ['anata'], meanings: ['you'], explanation: 'Direct translation of "you", but rarely used in polite tech circles. Use names instead.' },
  { id: 'nl1-v4', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'あのひと', readings: ['ano hito'], meanings: ['that person', 'he', 'she'], explanation: 'Referring to a third party.' },
  { id: 'nl1-v13', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'かいしゃいん', readings: ['kaishain'], meanings: ['company employee'], explanation: 'General term for corporate workers.' },
  { id: 'nl1-v14', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'しゃいん', readings: ['shain'], meanings: ['employee of ～ company'], explanation: 'Used with a specific company.' },
  { id: 'nl1-v18', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'エンジニア', readings: ['enjinia'], meanings: ['engineer'], explanation: 'Software or hardware specialist.' },
  { id: 'nl1-v19', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'だいがく', readings: ['daigaku'], meanings: ['university'], explanation: 'Educational institution for higher learning.' },
  { id: 'nl1-v31', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'はじめまして', readings: ['hajimemashite'], meanings: ['How do you do?'], explanation: 'Initial greeting for first-time sync.' },
  { id: 'nl1-v32', lessonNumber: 1, type: 'vocabulary', level: 1, character: 'どうぞよろしく', readings: ['douzo yoroshiku'], meanings: ['Pleased to meet you'], explanation: 'Closing phrase for an introduction.' },

  // --- GRAMMAR ---
  {
    id: 'nl1-g1',
    lessonNumber: 1,
    type: 'grammar',
    level: 1,
    character: 'N1 は N2 です',
    readings: ['N1 wa N2 desu'],
    meanings: ['Noun 1 is Noun 2'],
    explanation: 'Basic sentence structure. は identifies the topic, です acts as the "be" verb.',
    sentences: [
      { 
        japanese: 'ディレジさんは エンジニアです。', 
        english: 'Dheeraj is an engineer.', 
        segments: [
          { text: 'ディレジさん', reading: 'Dheeraj-san' }, { text: 'は', reading: null }, 
          { text: 'エンジニア', reading: null }, { text: 'です。', reading: null }
        ] 
      },
      { 
        japanese: 'リヤさんは 学生です。', 
        english: 'Riya is a student.', 
        segments: [
          { text: 'リヤさん', reading: 'Riya-san' }, { text: 'は', reading: null }, 
          { text: '学生', reading: 'がくせい' }, { text: 'です。', reading: null }
        ] 
      }
    ]
  },
  {
    id: 'nl1-g2',
    lessonNumber: 1,
    type: 'grammar',
    level: 1,
    character: 'N1 は N2 じゃ ありません',
    readings: ['N1 wa N2 ja arimasen'],
    meanings: ['Noun 1 is not Noun 2'],
    explanation: 'Negative form of です.',
    sentences: [
      { 
        japanese: 'アアリンドさんは 医者じゃありません。', 
        english: 'Aalind is not a doctor.', 
        segments: [
          { text: 'アアリンドさん', reading: 'Aalind-san' }, { text: 'は', reading: null }, 
          { text: '医者', reading: 'いしゃ' }, { text: 'じゃありません。', reading: null }
        ] 
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl1-d1',
    lessonNumber: 1,
    type: 'dokkai',
    level: 1,
    character: '東京クラウドの ミーティング',
    meanings: ['Tokyo Cloud Meeting'],
    content: [
      { text: 'はじめまして。', reading: null },
      { text: '\n', reading: null },
      { text: '私は', reading: 'わたしは' }, { text: 'ディレジ', reading: 'Dheeraj' }, { text: 'です。', reading: null },
      { text: 'インド', reading: 'いんど' }, { text: 'から', reading: null }, { text: 'きました。', reading: null },
      { text: '\n', reading: null },
      { text: '東京クラウド', reading: 'とうきょうくらうど' }, { text: 'の', reading: null }, { text: 'エンジニア', reading: null }, { text: 'です。', reading: null },
      { text: 'どうぞ', reading: null }, { text: 'よろしく', reading: null }, { text: '。', reading: null }
    ],
    translation: 'How do you do?\nI am Dheeraj. I came from India.\nI am an engineer at Tokyo Cloud. Pleased to meet you.',
    questions: [
      {
        question: 'ディレジさんは どこから きましたか。',
        options: ['アメリカ', 'インド', '日本', 'カナダ'],
        answerIndex: 1
      }
    ]
  },
  {
    id: 'nl1-d2',
    lessonNumber: 1,
    type: 'dokkai',
    level: 1,
    character: '新しい リーダー',
    meanings: ['The New Leader'],
    content: [
      { text: 'こちらは', reading: 'こちらは' }, { text: 'リヤさん', reading: 'Riya-san' }, { text: 'です。', reading: null },
      { text: 'リヤさんは', reading: 'りやさんは' }, { text: '次世代', reading: 'じせだい' }, { text: 'SaaS', reading: 'さーす' }, { text: 'の', reading: null }, { text: 'デザイナー', reading: null }, { text: 'です。', reading: null }
    ],
    translation: 'This is Riya. Riya is a designer for NextGen SaaS.',
    questions: [
      {
        question: 'リヤさんは 何ですか。',
        options: ['医者', '学生', 'デザイナー', '研究者'],
        answerIndex: 2
      }
    ]
  }
];
