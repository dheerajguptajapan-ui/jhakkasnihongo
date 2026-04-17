import { Item } from '../../types';

export const lesson7: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl7-v1', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'きります', readings: ['kirimasu'], meanings: ['cut', 'slice'], explanation: '切る.' },
  { id: 'nl7-v2', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'おくります', readings: ['okurimasu'], meanings: ['send'], explanation: '送る.' },
  { id: 'nl7-v3', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'あげます', readings: ['agemasu'], meanings: ['give'], explanation: 'あげる.' },
  { id: 'nl7-v4', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'もらいます', readings: ['moraimasu'], meanings: ['receive'], explanation: 'もらう.' },
  { id: 'nl7-v5', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'かします', readings: ['kashimasu'], meanings: ['lend'], explanation: '貸す.' },
  { id: 'nl7-v6', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'かります', readings: ['karimasu'], meanings: ['borrow'], explanation: '借りる.' },
  { id: 'nl7-v7', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'おしえます', readings: ['oshiemasu'], meanings: ['teach', 'tell'], explanation: '教える.' },
  { id: 'nl7-v8', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'ならいます', readings: ['naraimasu'], meanings: ['learn'], explanation: '習う.' },
  { id: 'nl7-v9', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'かけます', readings: ['kakemasu'], meanings: ['make [a phone call]'] },
  { id: 'nl7-v10', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'て', readings: ['te'], meanings: ['hand', 'arm'] },
  { id: 'nl7-v11', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'はし', readings: ['hashi'], meanings: ['chopsticks'] },
  { id: 'nl7-v16', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'パソコン', readings: ['pasokon'], meanings: ['personal computer'] },
  { id: 'nl7-v17', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'ケータイ', readings: ['ke-tai'], meanings: ['cell phone'] },
  { id: 'nl7-v18', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'メール', readings: ['me-ru'], meanings: ['email'] },
  { id: 'nl7-v25', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'はな', readings: ['hana'], meanings: ['flower'] },
  { id: 'nl7-v26', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'シャツ', readings: ['shatsu'], meanings: ['shirt'] },
  { id: 'nl7-v27', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'プレゼント', readings: ['purezento'], meanings: ['present'] },
  { id: 'nl7-v28', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'にもつ', readings: ['nimotsu'], meanings: ['baggage', 'parcel'] },
  { id: 'nl7-v29', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'おかね', readings: ['okane'], meanings: ['money'] },
  { id: 'nl7-v30', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'きっぷ', readings: ['kippu'], meanings: ['ticket'] },
  { id: 'nl7-v36', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'もう', readings: ['mou'], meanings: ['already'] },
  { id: 'nl7-v37', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'まだ', readings: ['mada'], meanings: ['not yet'] },
  { id: 'nl7-v38', lessonNumber: 7, type: 'vocabulary', level: 5, character: 'これから', readings: ['korekara'], meanings: ['soon', 'from now on'] },

  // --- GRAMMAR ---
  {
    id: 'nl7-g1',
    lessonNumber: 7,
    type: 'grammar',
    level: 5,
    character: 'Tool で V',
    readings: ['Tool de V'],
    meanings: ['Do [Verb] with [Tool]'],
    explanation: 'Particle で indicates tool or means.',
    sentences: [
      {
        japanese: [
          { text: 'パソコンで', reading: null }, { text: 'メール', reading: null }, { text: 'を', reading: null }, { text: '送ります', reading: 'おくります' }, { text: '。', reading: null }
        ],
        english: 'I send emails with a computer.'
      }
    ]
  },
  {
    id: 'nl7-g3',
    lessonNumber: 7,
    type: 'grammar',
    level: 5,
    character: 'Giver は Receiver に N を あげます',
    readings: ['Giver wa Receiver ni N o agemasu'],
    meanings: ['Giver gives N to Receiver'],
    explanation: 'Describes giving actions.',
    sentences: [
      {
        japanese: [
          { text: 'Dheerajさんは', reading: 'Dheeraj-san wa' }, { text: 'Riyaさんに', reading: 'Riya-san ni' }, { text: '花', reading: 'はな' }, { text: 'を', reading: null }, { text: 'あげました。', reading: null }
        ],
        english: 'Dheeraj gave flowers to Riya.'
      }
    ]
  },
  {
    id: 'nl7-g4',
    lessonNumber: 7,
    type: 'grammar',
    level: 5,
    character: 'Receiver は Giver に N を もらいます',
    readings: ['Receiver wa Giver ni N o moraimasu'],
    meanings: ['Receiver receives N from Giver'],
    explanation: 'Describes receiving actions.',
    sentences: [
      {
        japanese: [
          { text: 'Aalindさんは', reading: 'Aalind-san wa' }, { text: 'Dheerajさんに', reading: 'Dheeraj-san ni' }, { text: '本', reading: 'ほん' }, { text: 'を', reading: null }, { text: 'もらいました。', reading: null }
        ],
        english: 'Aalind received a book from Dheeraj.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl7-d1',
    lessonNumber: 7,
    type: 'dokkai',
    level: 5,
    character: '誕生日',
    meanings: ['Birthday'],
    content: [
      { text: '私は', reading: 'わたしは' }, { text: '先週', reading: 'せんしゅう' }, { text: 'Dheerajさんに', reading: 'Dheeraj-san ni' }, { text: '誕生日', reading: 'たんじょうび' }, { text: 'の', reading: null }, { text: 'プレゼント', reading: null }, { text: 'を', reading: null }, { text: 'もらいました。', reading: null },
      { text: '\n', reading: null },
      { text: '素敵な', reading: 'すてきな' }, { text: 'シャツ', reading: null }, { text: 'です。', reading: null },
      { text: '私は', reading: 'わたしは' }, { text: 'Dheerajさんに', reading: 'Dheeraj-san ni' }, { text: 'ネクタイ', reading: null }, { text: 'を', reading: null }, { text: 'あげました。', reading: null }
    ],
    translation: 'Last week I received a birthday present from Dheeraj. It is a nice shirt. I gave Dheeraj a necktie.',
    questions: [
      {
        question: 'Dheerajさんは 何を もらいましたか。',
        options: ['シャツ', 'ネクタイ', '花', 'お金'],
        answerIndex: 1
      }
    ]
  }
];
