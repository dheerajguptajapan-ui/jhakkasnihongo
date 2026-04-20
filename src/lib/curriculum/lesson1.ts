import { Item } from '../../types';

export const lesson1: Item[] = [
  // --- VOCABULARY ---
  { 
    id: 'nl1-v1', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'わたし', 
    readings: ['watashi'], 
    meanings: ['I'], 
    explanation: 'Standard personal pronoun (私). Used as the basic way to refer to oneself in formal and neutral contexts.',
    sentences: [
      { japanese: '私はデレジです。', english: 'I am Dheeraj.' },
      { japanese: '私はエンジニアです。', english: 'I am an engineer.' }
    ]
  },
  { 
    id: 'nl1-v2', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'わたしたち', 
    readings: ['watashitachi'], 
    meanings: ['we'], 
    explanation: 'Plural form of "I" (私たち). Used to refer to a group including the speaker.',
    sentences: [
      { japanese: '私たちは学生です。', english: 'We are students.' },
      { japanese: '私たちは友達です。', english: 'We are friends.' }
    ]
  },
  { 
    id: 'nl1-v3', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'あなた', 
    readings: ['anata'], 
    meanings: ['you'], 
    explanation: 'Direct translation of "you" (貴方). In Japan, it is much more polite to use the person\'s name with "-san" instead of using this word.',
    sentences: [
      { japanese: 'あなたも学生ですか？', english: 'Are you a student too?' },
      { japanese: 'あなたは日本人ですか？', english: 'Are you Japanese?' }
    ]
  },
  { 
    id: 'nl1-v4', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'あのひと', 
    readings: ['ano hito'], 
    meanings: ['that person', 'he', 'she'], 
    explanation: 'Literally "that person" (あの人). A polite way to refer to someone at a distance.',
    sentences: [
      { japanese: 'あの人は誰ですか？', english: 'Who is that person?' },
      { japanese: 'あの人は田中さんです。', english: 'That person is Mr. Tanaka.' }
    ]
  },
  { 
    id: 'nl1-v13', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かいしゃいん', 
    readings: ['kaishain'], 
    meanings: ['company employee'], 
    explanation: 'General term for corporate workers (会社員). Defines someone who works for a company.',
    sentences: [
      { japanese: '父は会社員です。', english: 'My father is a company employee.' },
      { japanese: '私は会社員ではありません。', english: 'I am not a company employee.' }
    ]
  },
  { 
    id: 'nl1-v14', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'しゃいん', 
    readings: ['shain'], 
    meanings: ['employee of ～ company'], 
    explanation: 'Used when referring to an employee of a specific company (社員). Usually preceded by the company name.',
    sentences: [
      { japanese: 'IMCの社員です。', english: 'I am an employee of IMC.' },
      { japanese: '彼はAppleの社員です。', english: 'He is an employee of Apple.' }
    ]
  },
  { 
    id: 'nl1-v18', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'エンジニア', 
    readings: ['enjinia'], 
    meanings: ['engineer'], 
    explanation: 'Borrowed from English. High frequency in modern Japanese, especially in the tech sector.',
    sentences: [
      { japanese: '私はソフトウェアエンジニアです。', english: 'I am a software engineer.' },
      { japanese: 'サントスさんはエンジニアです。', english: 'Mr. Santos is an engineer.' }
    ]
  },
  { 
    id: 'nl1-v19', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'だいがく', 
    readings: ['daigaku'], 
    meanings: ['university'], 
    explanation: 'Higher educational institution (大学).',
    sentences: [
      { japanese: 'ここは大学です。', english: 'This is a university.' },
      { japanese: '大学の先生です。', english: 'I am a university teacher.' }
    ]
  },
  { 
    id: 'nl1-v31', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'はじめまして', 
    readings: ['hajimemashite'], 
    meanings: ['How do you do?'], 
    explanation: 'Initial greeting (初めまして) said when meeting someone for the first time. Literally means "we are starting [a relationship]."',
    sentences: [
      { japanese: 'はじめまして、デレジです。', english: 'How do you do? I am Dheeraj.' },
      { japanese: 'はじめまして。よろしく。', english: 'How do you do? Nice to meet you.' }
    ]
  },
  { 
    id: 'nl1-v32', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'どうぞよろしく', 
    readings: ['douzo yoroshiku'], 
    meanings: ['Pleased to meet you'], 
    explanation: 'Polite phrase used at the end of an introduction. Often paired with "onegai shimasu" for extra politeness.',
    sentences: [
      { japanese: 'どうぞよろしくお願いします。', english: 'Pleased to meet you (Please be kind to me).' },
      { japanese: 'こちらこそ、どうぞよろしく。', english: 'Same here, pleased to meet you.' }
    ]
  },

  // --- GRAMMAR ---
  {
    id: 'nl1-g1',
    lessonNumber: 1,
    type: 'grammar',
    level: 5,
    character: 'N1 は N2 です',
    readings: ['N1 wa N2 desu'],
    meanings: ['Noun 1 is Noun 2'],
    explanation: 'The foundation of Japanese sentences. The particle 「は」 (pronounced "wa") identifies N1 as the topic. 「です」 is a polite copula that functions similarly to "is/am/are".',
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
    level: 5,
    character: 'N1 は N2 じゃ ありません',
    readings: ['N1 wa N2 ja arimasen'],
    meanings: ['Noun 1 is not Noun 2'],
    explanation: 'The negative counterpart of 「です」. 「じゃ ありません」 is the standard polite negative form. In formal writing, 「では ありません」 is used instead.',
    sentences: [
      { 
        japanese: 'アアリンドさんは 医者じゃありません。', 
        english: 'Aalind is not a doctor.', 
        segments: [
          { text: 'アアリンドさん', reading: 'Aalind-san' }, { text: 'は', reading: null }, 
          { text: '医者', reading: 'いしゃ' }, { text: 'じゃありません。', reading: null }
        ] 
      },
      { 
        japanese: '私は日本人じゃありません。', 
        english: 'I am not Japanese.', 
        segments: [
          { text: '私', reading: 'わたし' }, { text: 'は', reading: null }, 
          { text: '日本人', reading: 'にほんじん' }, { text: 'じゃありません。', reading: null }
        ] 
      }
    ]
  },
];