import { Item } from '../../types';

export const lesson1: Item[] = [
  {
    id: 'mn1-v1',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'わたし',
    readings: ['watashi'],
    meanings: ['I'],
    explanation: 'Personal pronoun referring to oneself. (私 in Kanji).'
  },
  {
    id: 'mn1-v2',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'わたしたち',
    readings: ['watashitachi'],
    meanings: ['we'],
    explanation: 'Plural form of "watashi". (私たちは in Kanji).'
  },
  {
    id: 'mn1-v3',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'あなた',
    readings: ['anata'],
    meanings: ['you'],
    explanation: 'Note: Use name + san instead of "anata" when possible.'
  },
  {
    id: 'mn1-v4',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'あのひと',
    readings: ['ano hito'],
    meanings: ['that person', 'he', 'she'],
    explanation: 'あの人. Polite equivalent is あのかた.'
  },
  {
    id: 'mn1-v5',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'あのかた',
    readings: ['ano kata'],
    meanings: ['that person (polite)'],
    explanation: 'あの方. Polite equivalent of あのひと.'
  },
  {
    id: 'mn1-v6',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'みなさん',
    readings: ['minasan'],
    meanings: ['all of you', 'ladies and gentlemen'],
    explanation: '皆さん.'
  },
  {
    id: 'mn1-v7',
    lessonNumber: 1,
    type: 'vocabulary',
    character: '〜さん',
    readings: ['~san'],
    meanings: ['Mr.', 'Ms.'],
    explanation: 'Gender-neutral title of respect.'
  },
  {
    id: 'mn1-v8',
    lessonNumber: 1,
    type: 'vocabulary',
    character: '〜ちゃん',
    readings: ['~chan'],
    meanings: ['suffix for children'],
    explanation: 'Often added to child names instead of 〜さん.'
  },
  {
    id: 'mn1-v9',
    lessonNumber: 1,
    type: 'vocabulary',
    character: '〜くん',
    readings: ['~kun'],
    meanings: ['suffix for boys'],
    explanation: '〜君. Commonly used for boys.'
  },
  {
    id: 'mn1-v10',
    lessonNumber: 1,
    type: 'vocabulary',
    character: '〜じん',
    readings: ['~jin'],
    meanings: ['national of'],
    explanation: '〜人. Example: アメリカじん.'
  },
  {
    id: 'mn1-v11',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'せんせい',
    readings: ['sensei'],
    meanings: ['teacher', 'instructor'],
    explanation: '先生. Not used for one\'s own job.'
  },
  {
    id: 'mn1-v12',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'きょうし',
    readings: ['kyoushi'],
    meanings: ['teacher (occupation)'],
    explanation: '教師. Used for one\'s own job.'
  },
  {
    id: 'mn1-v13',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'がくせい',
    readings: ['gakusei'],
    meanings: ['student'],
    explanation: '学生.'
  },
  {
    id: 'mn1-v14',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'かいしゃいん',
    readings: ['kaishain'],
    meanings: ['company employee'],
    explanation: '会社員.'
  },
  {
    id: 'mn1-v15',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'しゃいん',
    readings: ['shain'],
    meanings: ['employee of ~ company'],
    explanation: '社員. e.g. IMCの しゃいん.'
  },
  {
    id: 'mn1-v16',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'ぎんこういん',
    readings: ['ginkouin'],
    meanings: ['bank employee'],
    explanation: '銀行員.'
  },
  {
    id: 'mn1-v17',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'いしゃ',
    readings: ['isha'],
    meanings: ['doctor'],
    explanation: '医者.'
  },
  {
    id: 'mn1-v18',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'けんきゅうしゃ',
    readings: ['kenkyuusha'],
    meanings: ['researcher', 'scholar'],
    explanation: '研究者.'
  },
  {
    id: 'mn1-v19',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'エンジニア',
    readings: ['enjinia'],
    meanings: ['engineer'],
    explanation: 'Engineer (Katakana).'
  },
  {
    id: 'mn1-v20',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'だいがく',
    readings: ['daigaku'],
    meanings: ['university'],
    explanation: '大学.'
  },
  {
    id: 'mn1-v21',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'びょういん',
    readings: ['byouin'],
    meanings: ['hospital'],
    explanation: '病院.'
  },
  {
    id: 'mn1-v22',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'でんき',
    readings: ['denki'],
    meanings: ['electricity', 'light'],
    explanation: '電気.'
  },
  {
    id: 'mn1-v23',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'だれ',
    readings: ['dare'],
    meanings: ['who'],
    explanation: '誰. Interrogative for "who". Donta is polite equivalent.'
  },
  {
    id: 'mn1-v24',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'どなた',
    readings: ['donata'],
    meanings: ['who (polite)'],
    explanation: 'Polite equivalent of だれ.'
  },
  {
    id: 'mn1-g1',
    lessonNumber: 1,
    type: 'grammar',
    character: '〜は 〜です',
    readings: ['wa ... desu'],
    meanings: ['Noun 1 is Noun 2'],
    explanation: 'The particle は indicates that the word before it is the topic of the sentence. です indicates judgement or assertion and shows respect toward the listener.',
    sentences: [
      { japanese: '私はマイク・ミラーです。', english: 'I am Mike Miller.', furigana: '私[わたし]はマイク・ミラーです。' }
    ]
  },
  {
    id: 'mn1-g2',
    lessonNumber: 1,
    type: 'grammar',
    character: '〜は 〜じゃ ありません',
    readings: ['wa ... ja arimasen'],
    meanings: ['Noun 1 is not Noun 2'],
    explanation: 'じゃ ありません is the negative form of です. In formal speech, では ありません is used.',
    sentences: [
      { japanese: 'サントスさんは学生じゃありません。', english: 'Mr. Santos is not a student.', furigana: 'サントスさんは学[がく]生[せい]じゃありません。' }
    ]
  },
  {
    id: 'mn1-g3',
    lessonNumber: 1,
    type: 'grammar',
    character: '〜か',
    readings: ['ka'],
    meanings: ['Question particle'],
    explanation: 'The particle か is added to the end of a sentence to turn it into a question. The sentence ends with a rising intonation.',
    sentences: [
      { japanese: 'ミラーさんはアメリカ人ですか。', english: 'Is Mr. Miller American?', furigana: 'ミラーさんはアメリカ人[じん]ですか。' }
    ]
  },
  {
    id: 'mn1-g4',
    lessonNumber: 1,
    type: 'grammar',
    character: '〜も',
    readings: ['mo'],
    meanings: ['also', 'too'],
    explanation: 'も is used when the same thing applies to the new topic. It replaces は.',
    sentences: [
      { japanese: 'ミラーさんも会社員です。', english: 'Mr. Miller is also a company employee.', furigana: 'ミラーさんも会[かい]社[しゃ]員[いん]です。' }
    ]
  },
  {
    id: 'mn1-g5',
    lessonNumber: 1,
    type: 'grammar',
    character: '〜の',
    readings: ['no'],
    meanings: ['possessive particle'],
    explanation: 'の connects two nouns. N1 modifies N2. It often indicates possession or belonging.',
    sentences: [
      { japanese: 'ミラーさんはIMCの社員です。', english: 'Mr. Miller is an employee of IMC.', furigana: 'ミラーさんはIMCの社[しゃ]員[いん]です。' }
    ]
  },
  {
    id: 'mn1-d1',
    lessonNumber: 1,
    type: 'dokkai',
    character: 'はじめまして',
    readings: ['Hajimemashite'],
    meanings: ['How do you do?'],
    content: '佐藤：おはようございます。\n山田：おはようございます。佐藤さん、こちらはミラーさんです。\nミラー：はじめまして。マイク・ミラーです。アメリカから来ました。どうぞよろしく。\n佐藤：佐藤けいこです。どうぞよろしく。',
    translation: 'Sato: Good morning.\nYamada: Good morning. Ms. Sato, this is Mr. Miller.\nMiller: How do you do? I am Mike Miller. I came from America. Nice to meet you.\nSato: I am Keiko Sato. Nice to meet you.',
    questions: [
      {
        question: 'ミラーさんはどこから来ましたか。',
        options: ['イギリス', 'アメリカ', 'インド', 'ブラジル'],
        answerIndex: 1
      },
      {
        question: '佐藤さんの名前は何ですか。',
        options: ['さとう まりこ', 'さとう けいこ', 'やまだ けいこ', 'ミラー けいこ'],
        answerIndex: 1
      }
    ]
  },
  {
    id: 'mn1-k1',
    lessonNumber: 1,
    type: 'kanji',
    character: '私',
    readings: ['し', 'わたし', 'わたくし'],
    meanings: ['I', 'Me', 'Private'],
    level: 1,
    radical: '禾',
    mnemonic: 'A person holding a grain stalk, representing their own private property.',
    combinations: [
      { word: '私立大学', reading: 'しりつだいがく', meaning: 'Private university' }
    ],
    sentences: [
      { japanese: '私は学生です。', english: 'I am a student.', furigana: '私[わたし]は学[がく]生[せい]です。' }
    ]
  },
  {
    id: 'mn1-k2',
    lessonNumber: 1,
    type: 'kanji',
    character: '人',
    readings: ['じん', 'にん', 'ひと'],
    meanings: ['Person'],
    level: 1,
    radical: '人',
    mnemonic: 'A person standing on two legs.',
    combinations: [
      { word: '日本人', reading: 'にほんじん', meaning: 'Japanese person' },
      { word: '一人', reading: 'ひとり', meaning: 'One person' }
    ],
    sentences: [
      { japanese: 'あの人は誰ですか。', english: 'Who is that person?', furigana: 'あの人[ひと]は誰[だれ]ですか。' }
    ]
  },
  {
    id: 'mn1-k3',
    lessonNumber: 1,
    type: 'kanji',
    character: '先',
    readings: ['せん', 'さき'],
    meanings: ['Before', 'Ahead', 'Previous'],
    level: 1,
    radical: '儿',
    mnemonic: 'A person walking forward, representing being ahead or before others.',
    combinations: [
      { word: '先生', reading: 'せんせい', meaning: 'Teacher' },
      { word: '先週', reading: 'せんしゅう', meaning: 'Last week' }
    ],
    sentences: [
      { japanese: '先生、おはようございます。', english: 'Teacher, good morning.', furigana: '先[せん]生[せい]、おはようございます。' }
    ]
  },
  {
    id: 'mn1-k4',
    lessonNumber: 1,
    type: 'kanji',
    character: '生',
    readings: ['せい', 'しょう', 'い', 'う', 'な', 'き'],
    meanings: ['Life', 'Birth'],
    level: 1,
    radical: '生',
    mnemonic: 'A plant growing out of the ground, representing life and growth.',
    combinations: [
      { word: '学生', reading: 'がくせい', meaning: 'Student' },
      { word: '先生', reading: 'せんせい', meaning: 'Teacher' }
    ],
    sentences: [
      { japanese: '学生です。', english: 'I am a student.', furigana: '学[がく]生[せい]です。' }
    ]
  },
  {
    id: 'mn1-k5',
    lessonNumber: 1,
    type: 'kanji',
    character: '学',
    readings: ['がく', 'まな'],
    meanings: ['Study', 'Learning'],
    level: 1,
    radical: '子',
    mnemonic: 'A child under a roof with three marks representing knowledge sparks.',
    combinations: [
      { word: '学校', reading: 'がっこう', meaning: 'School' },
      { word: '学生', reading: 'がくせい', meaning: 'Student' }
    ],
    sentences: [
      { japanese: '学校に行きます。', english: 'I go to school.', furigana: '学[がっ]校[こう]に行[い]きます。' }
    ]
  }
];
