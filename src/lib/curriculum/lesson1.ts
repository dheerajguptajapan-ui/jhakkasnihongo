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
    explanation: 'Standard personal pronoun (私). Used as the basic way to refer to oneself in formal and neutral contexts. In tech syncs or daily Tokyo life, it is the safest default.',
    sentences: [
      { japanese: '私はデレジです。', furigana: '[私:わたし]はデレジです。', english: 'I am Dheeraj.' },
      { japanese: '私はインドから来ました。', furigana: '[私:わたし]はインドから[来:き]ました。', english: 'I came from India.' },
      { japanese: '私はエンジニアです。', furigana: '[私:わたし]はエンジニアです。', english: 'I am an engineer.' }
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
    explanation: 'Plural form of "I" (私たち). Used to refer to a group including the speaker. Often used when representing a team at a company.',
    sentences: [
      { japanese: '私たちは学生です。', furigana: '[私:わたし]たちは[学生:がくせい]です。', english: 'We are students.' },
      { japanese: '私たちは同じチームです。', furigana: '[私:わたし]たちは[同:おな]じチームです。', english: 'We are on the same team.' }
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
    explanation: 'Direct translation of "you" (貴方). Usage Note: In Japan, it is much more polite to use the person\'s name with "-san" instead of using this word. Use it sparingly in professional settings.',
    sentences: [
      { japanese: 'あなたもエンジニアですか？', furigana: 'あなたもエンジニアですか？', english: 'Are you an engineer too?' },
      { japanese: 'あなたは日本人ですか？', furigana: 'あなたは[日本人:にほんじん]ですか？', english: 'Are you Japanese?' }
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
    explanation: 'Literally "that person" (あの人). A neutral way to refer to someone at a distance. The more formal version is "ano kata".',
    sentences: [
      { japanese: 'あの人は誰ですか？', furigana: 'あの[人:ひと]は[誰:だれ]ですか？', english: 'Who is that person?' },
      { japanese: 'あの人はリヤさんです。', furigana: 'あの[人:ひと]はリヤさんです。', english: 'That person is Riya.' }
    ]
  },
  { 
    id: 'nl1-v5', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'あのかた', 
    readings: ['ano kata'], 
    meanings: ['that person (polite)'], 
    explanation: 'The polite counterpart of "ano hito" (あの方). Recommended for use when referring to clients, seniors, or strangers in a formal environment.',
    sentences: [
      { japanese: 'あの方は先生です。', furigana: 'あの方[かた]は[先生:せんせい]です。', english: 'That person is a teacher.' },
      { japanese: 'あの方はどなたですか？', furigana: 'あの方[かた]はどなたですか？', english: 'Who is that person (polite)?' }
    ]
  },
  { 
    id: 'nl1-v6', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: '～さん', 
    readings: ['-san'], 
    meanings: ['Mr.', 'Ms.'], 
    explanation: 'The universal honorific (～さん). Always attach it to someone else\'s name in social or business contexts. NEVER use it for yourself.',
    sentences: [
      { japanese: 'アアリンドさんは医者です。', furigana: 'アアリンドさんは[医者:いしゃ]です。', english: 'Mr. Aalind is a doctor.' },
      { japanese: 'サントスさんはブラジル人です。', furigana: 'サントスさんはブラジル[人:じん]です。', english: 'Mr. Santos is Brazilian.' }
    ]
  },
  { 
    id: 'nl1-v10', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'せんせい', 
    readings: ['sensei'], 
    meanings: ['teacher', 'instructor'], 
    explanation: 'Used as a title and a profession (先生). In Japan, doctors and lawyers are also addressed as "sensei".',
    sentences: [
      { japanese: 'リヤさんは先生です。', furigana: 'リヤさんは[先生:せんせい]です。', english: 'Riya is a teacher.' },
      { japanese: '先生、おはようございます。', furigana: '[先生:せんせい]、おはようございます。', english: 'Teacher, good morning.' }
    ]
  },
  { 
    id: 'nl1-v12', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'がくせい', 
    readings: ['gakusei'], 
    meanings: ['student'], 
    explanation: 'A general term for students (学生). Usually refers to university students unless specified otherwise.',
    sentences: [
      { japanese: '私は学生です。', furigana: '[私:わたし]は[学生:がくせい]です。', english: 'I am a student.' },
      { japanese: 'ラジュさんは学生ではありません。', furigana: 'ラジュさんは[学生:がくせい]ではありません。', english: 'Raju is not a student.' },
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
    explanation: 'General term for corporate workers (会社員). Defines someone who works for a company. When stating your company, use "shain".',
    sentences: [
      { japanese: '父は会社員です。', furigana: '[父:ちち]は[会社員:かいしゃいん]です。', english: 'My father is a company employee.' },
      { japanese: 'デレジさんは会社員です。', furigana: 'デレジさんは[会社員:かいしゃいん]です。', english: 'Dheeraj is a company employee.' }
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
    explanation: 'Used when referring to an employee of a specific company (社員). Pattern: [Company Name] no shain.',
    sentences: [
      { japanese: 'Googleの社員です。', furigana: 'Googleの[社員:しゃいん]です。', english: 'I am an employee of Google.' },
      { japanese: '彼はSonyの社員です。', furigana: '[彼:かれ]はSonyの[社員:しゃいん]です。', english: 'He is an employee of Sony.' }
    ]
  },
  { 
    id: 'nl1-v16', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'いしゃ', 
    readings: ['isha'], 
    meanings: ['doctor'], 
    explanation: 'Medical doctor (医者). A prestigious and essential profession.',
    sentences: [
      { japanese: 'あの方は医者です。', furigana: 'あの方[かた]は[医者:いしゃ]です。', english: 'That person is a doctor.' },
      { japanese: '将来、医者になりたいです。', furigana: '[将来:しょうらい]、[医者:いしゃ]になりたいです。', english: 'In the future, I want to become a doctor.' }
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
    explanation: 'Borrowed from English. High frequency in modern Tokyo tech circles. Dheeraj is a prime example!',
    sentences: [
      { japanese: '私はソフトウェアエンジニアです。', furigana: '[私:わたし]はソフトウェアエンジニアです。', english: 'I am a software engineer.' },
      { japanese: 'サントスさんはエンジニアです。', furigana: 'サントスさんはエンジニアです。', english: 'Mr. Santos is an engineer.' }
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
    explanation: 'Higher educational institution (大学). Represented by the characters for "Big" and "Study".',
    sentences: [
      { japanese: 'ここは東京大学です。', furigana: 'ここは[東京大学:とうきょうだいがく]です。', english: 'This is the University of Tokyo.' },
      { japanese: '大学で勉強します。', furigana: "[大学:だいがく]で[勉強:べんきょう]します。", english: 'I will study at university.' }
    ]
  },
  { 
    id: 'nl1-v20', 
    lessonNumber: 1, 
    type: 'vocabulary', 
    level: 5, 
    character: 'びょういん', 
    readings: ['byouin'], 
    meanings: ['hospital'], 
    explanation: 'Where "Isha" (Doctors) work (病院). Not to be confused with "biyouin" (hair salon)!',
    sentences: [
      { japanese: '病院はあそこです。', furigana: '[病院:びょういん]はあそこです。', english: 'The hospital is over there.' },
      { japanese: '大きな病院ですね。', furigana: '[大:おお]きな[病院:びょういん]ですね。', english: 'It\'s a large hospital, isn\'t it?' }
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
    explanation: 'Initial greeting (初めまして) said when meeting someone for the first time. It literally means "it is a beginning."',
    sentences: [
      { japanese: 'はじめまして、デレジです。', furigana: 'はじめまして、デレジです。', english: 'How do you do? I am Dheeraj.' },
      { japanese: 'はじめまして。リヤです。よろしく。', furigana: 'はじめまして。リヤです。よろしく。', english: "How do you do? I'm Riya. Nice to meet you." }
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
    explanation: 'Polite phrase used at the end of an introduction (～お願いします). Essential for building rapport in Japan.',
    sentences: [
      { japanese: 'どうぞよろしくお願いします。', furigana: 'どうぞよろしくお願いします。', english: 'Pleased to meet you (Please treat me well).' },
      { japanese: 'こちらこそ、どうぞよろしく。', furigana: 'こちらこそ、どうぞよろしく。', english: 'Same here, pleased to meet you.' }
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
    explanation: 'The foundation of Japanese sentences. The particle 「は」 (pronounced "wa") identifies N1 as the topic. 「です」 is a polite copula that functions similarly to "is/am/are". Useful for introductions (I am Dheeraj).',
    sentences: [
      { 
        japanese: 'ディレジさんは エンジニアです。', 
        furigana: 'ディレジさんはエンジニアです。',
        english: 'Dheeraj is an engineer.', 
        segments: [
          { text: 'ディレジさん', reading: 'Dheeraj-san' }, { text: 'は', reading: null }, 
          { text: 'エンジニア', reading: null }, { text: 'です。', reading: null }
        ] 
      },
      { 
        japanese: 'リヤさんは 学生です。', 
        furigana: 'リヤさんは[学生:がくせい]です。',
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
    explanation: 'The negative counterpart of 「です」. 「じゃ ありません」 is the standard polite negative form. In formal writing or presentation, 「では ありません」 is often preferred.',
    sentences: [
      { 
        japanese: 'アアリンドさんは 医者じゃありません。', 
        furigana: 'アアリンドさんは[医者:いしゃ]じゃありません。',
        english: 'Aalind is not a doctor.', 
        segments: [
          { text: 'アアリンドさん', reading: 'Aalind-san' }, { text: 'は', reading: null }, 
          { text: '医者', reading: 'いしゃ' }, { text: 'じゃありません。', reading: null }
        ] 
      },
      { 
        japanese: '私は日本人じゃありません。', 
        furigana: '[私:わたし]は[日本人:にほんじん]じゃありません。',
        english: 'I am not Japanese.', 
        segments: [
          { text: '私', reading: 'わたし' }, { text: 'は', reading: null }, 
          { text: '日本人', reading: 'にほんじん' }, { text: 'じゃありません。', reading: null }
        ] 
      }
    ]
  },
  {
    id: 'nl1-g3',
    lessonNumber: 1,
    type: 'grammar',
    level: 5,
    character: 'S か',
    readings: ['S ka'],
    meanings: ['Question marker'],
    explanation: 'The particle 「か」 is placed at the end of a sentence to turn it into a question. Japanese does not traditionally use a question mark, but the 「か」 particle performs the same role.',
    sentences: [
      { 
        japanese: 'あなたはエンジニアですか。', 
        furigana: 'あなたはエンジニアですか。',
        english: 'Are you an engineer?', 
        segments: [
          { text: 'あなた', reading: null }, { text: 'は', reading: null }, 
          { text: 'エンジニア', reading: null }, { text: 'ですか', reading: null }, { text: '。', reading: null }
        ] 
      },
      { 
        japanese: 'リヤさんは先生ですか。', 
        furigana: 'リヤさんは[先生:せんせい]ですか。',
        english: 'Is Riya a teacher?', 
        segments: [
          { text: 'リヤさん', reading: 'Riya-san' }, { text: 'は', reading: null }, 
          { text: '先生', reading: 'せんせい' }, { text: 'ですか', reading: null }, { text: '。', reading: null }
        ] 
      }
    ]
  },
  {
    id: 'nl1-g4',
    lessonNumber: 1,
    type: 'grammar',
    level: 5,
    character: 'N も',
    readings: ['N mo'],
    meanings: ['Also', 'Too'],
    explanation: 'The particle 「も」 replaces 「は」 when the same thing applies to the new subject. It means "also" or "too".',
    sentences: [
      { 
        japanese: 'ラジュさんは日本人です。', 
        furigana: 'ラジュさんは[日本人:にほんじん]です。',
        english: 'Mr. Raju is Japanese.', 
        segments: [
          { text: 'ラジュさん', reading: null }, { text: 'は', reading: null }, 
          { text: '日本人', reading: 'にほんじん' }, { text: 'です', reading: null }, { text: '。', reading: null }
        ] 
      },
      { 
        japanese: 'サントスさんもエンジニアです。', 
        furigana: 'サントスさんもエンジニアです。',
        english: 'Mr. Santos is also an engineer.', 
        segments: [
          { text: 'サントスさん', reading: 'Santos-san' }, { text: 'も', reading: null }, 
          { text: 'エンジニア', reading: null }, { text: 'です', reading: null }, { text: '。', reading: null }
        ] 
      }
    ]
  },
];