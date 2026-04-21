import { Item } from '../../types';

export const lesson22: Item[] = [
  // --- VOCABULARY ---
  { 
    id: 'nl22-v1', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'きます', 
    readings: ['kimasu'], 
    meanings: ['wear (shirt, top, coat)'], 
    explanation: 'Polite form of 着る (Group 2). Used for clothes worn on the upper body.',
    sentences: [
      { japanese: 'シャツを着ます。', furigana: 'シャツを[着:き]ます。', english: 'I will put on a shirt.' },
      { japanese: 'コートを着ている人は誰ですか。', furigana: 'コートを[着:き]ている[人:ひと]は[誰:だれ]ですか。', english: 'Who is the person wearing a coat?' }
    ]
  },
  { 
    id: 'nl22-v2', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'はきます', 
    readings: ['hakimasu'], 
    meanings: ['wear (shoes, pants, skirt)'], 
    explanation: 'Polite form of 履く (Group 1). Used for clothes worn on the lower body.',
    sentences: [
      { japanese: '靴をはいてください。', furigana: '[靴:くつ]をはいてください。', english: 'Please put on your shoes.' },
      { japanese: 'ズボンをはいています。', furigana: 'ズボンをはいています。', english: 'I am wearing pants.' }
    ]
  },
  { 
    id: 'nl22-v3', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かぶります', 
    readings: ['kaburimasu'], 
    meanings: ['wear (hat, cap)'], 
    explanation: 'Polite form of 被る (Group 1). Specifically for things worn on the head.',
    sentences: [
      { japanese: '帽子をかぶります。', furigana: '[帽子:ぼうし]をかぶります。', english: 'I will put on a hat.' },
      { japanese: 'ヘルメットをかぶってください。', furigana: 'ヘルメットをかぶってください。', english: 'Please wear a helmet.' }
    ]
  },
  { 
    id: 'nl22-v4', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かけます', 
    readings: ['kakemasu'], 
    meanings: ['put on (glasses)'], 
    explanation: 'Polite form of 掛ける (Group 2). Specifically for 「眼鏡（めがね）」.',
    sentences: [
      { japanese: '眼鏡をかけています。', furigana: '[眼鏡:めがね]をかけています。', english: 'I am wearing glasses.' },
      { japanese: '眼鏡をかけなければなりません。', furigana: '[眼鏡:めがね]をかけなければなりません。', english: 'I must wear glasses.' }
    ]
  },
  { 
    id: 'nl22-v5', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'うまれます', 
    readings: ['umaremasu'], 
    meanings: ['be born'], 
    explanation: 'Polite form of 生まれる (Group 2). Rita was umaremasu in India.',
    sentences: [
      { japanese: '私はインドで生まれました。', furigana: '[私:わたし]はインドで[生:う]まれました。', english: 'I was born in India.' },
      { japanese: 'どこで生まれましたか。', furigana: 'どこで[生:う]まれましたか。', english: 'Where were you born?' }
    ]
  },
  { 
    id: 'nl22-v9', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ぼうし', 
    readings: ['boushi'], 
    meanings: ['hat', 'cap'], 
    explanation: 'Hat or cap (帽子). A red boushi is easy to find in a crowd!',
    sentences: [
      { japanese: '赤い帽子をかぶっている人はラジュさんです。', furigana: '[赤:あか]い[帽子:ぼうし]をかぶっている[人:ひと]はラジュさんです。', english: 'The person wearing a red hat is Raju.' }
    ]
  },
  { 
    id: 'nl22-v10', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'めがね', 
    readings: ['megane'], 
    meanings: ['glasses'], 
    explanation: 'Glasses (眼鏡). Dheeraj needs megane to see the computer screen.',
    sentences: [
      { japanese: '新しい眼鏡を買いました。', furigana: '[新:あたら]しい[眼鏡:めがね]を[買:か]いました。', english: 'I bought new glasses.' }
    ]
  },
  { 
    id: 'nl22-v19', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'アパート', 
    readings: ['apa-to'], 
    meanings: ['apartment'], 
    explanation: 'Apartment (usually wood/steel frame, 2-3 stories). Neeraj lives in a modern apa-to.',
    sentences: [
      { japanese: '駅から近いアパートに住んでいます。', furigana: '[駅:えき]から[近:ちか]いアパートに[住:す]んでいます。', english: 'I live in an apartment close to the station.' }
    ]
  },
  { 
    id: 'nl22-v20', 
    lessonNumber: 22, 
    type: 'vocabulary', 
    level: 5, 
    character: 'やくそく', 
    readings: ['yakusoku'], 
    meanings: ['promise', 'appointment'], 
    explanation: 'Promise or appointment (約束). Don\'t be late for your yakusoku in Tokyo!',
    sentences: [
      { japanese: '友達と約束があります。', furigana: '[友達:ともだち]と[約束:やくそく]があります。', english: 'I have an appointment with a friend.' },
      { japanese: '約束を忘れないでください。', furigana: '[約束:やくそく]を[忘:わす]れないでください。', english: 'Please do not forget your promise.' }
    ]
  },

  // --- GRAMMAR ---
  {
    id: 'nl22-g1',
    lessonNumber: 22,
    type: 'grammar',
    level: 5,
    character: 'Noun Modifying Clause (Relative Clause)',
    readings: ['Verb-Plain Form + Noun'],
    meanings: ['[Noun] that [Verb]'],
    explanation: 'A sentence can modify a noun. The verb in the modifying clause must always be in the plain form. The subject of the modifying clause is marked with 「が」.',
    sentences: [
      {
        japanese: 'これはデレジさんが住んでいた家です。',
        furigana: 'これはデレジさんが[住:す]んでいた[家:いえ]です。',
        english: 'This is the house where Mr. Dheeraj used to live.',
        segments: [
          { text: 'これは', reading: null }, { text: 'デレジさん', reading: null }, { text: 'が', reading: null }, { text: '住んでいた', reading: 'すんでいた' }, { text: '家', reading: 'いえ' }, { text: 'です', reading: 'です' }, { text: '。', reading: null }
        ]
      },
      {
        japanese: '昨日買った本を読みます。',
        furigana: '[昨日:きのう][買:か]った[本:ほん]を[読:よ]みます。',
        english: 'I will read the book I bought yesterday.',
        segments: [
          { text: '昨日', reading: 'きのう' }, { text: '買った', reading: 'かった' }, { text: '本', reading: 'ほん' }, { text: 'を', reading: null }, { text: '読みます', reading: 'よみます' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl22-g2',
    lessonNumber: 22,
    type: 'grammar',
    level: 5,
    character: '[Clause] Noun は Adj/V です',
    readings: ['[Plain Clause] Noun wa ...'],
    meanings: ['The [Noun] that [Clause] is...'],
    explanation: 'A modified noun can function as the subject or object of a main sentence.',
    sentences: [
      {
        japanese: '昨日見た映画はとても面白かったです。',
        furigana: '[昨日:きのう][見:み]た[映画:えいが]はとても[面白:おもしろ]かったです。',
        english: 'The movie I saw yesterday was very interesting.',
        segments: [
          { text: '昨日', reading: 'きのう' }, { text: '見た', reading: 'みた' }, { text: '映画', reading: 'えいが' }, { text: 'は', reading: null }, { text: 'とても', reading: null }, { text: '面白かったです', reading: 'おもしろかったです' }, { text: '。', reading: null }
        ]
      },
      {
        japanese: '眼鏡をかけている人はリヤさんです。',
        furigana: '[眼鏡:めがね]をかけている[人:ひと]はリヤさんです。',
        english: 'The person wearing glasses is Ms. Riya.',
        segments: [
          { text: '眼鏡', reading: 'めがね' }, { text: 'を', reading: null }, { text: 'かけている', reading: 'かけている' }, { text: '人', reading: 'ひと' }, { text: 'は', reading: null }, { text: 'リヤさん', reading: null }, { text: 'です', reading: 'です' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl22-g3',
    lessonNumber: 22,
    type: 'grammar',
    level: 5,
    character: 'V-jishokei jikan/yakusoku ga arimasu',
    readings: ['V-jishokei jikan/yakusoku ga arimasu'],
    meanings: ['I have time/an appointment to [Verb]'],
    explanation: 'Using a dictionary form verb to modify nouns like 「時間(jikan)」 or 「約束(yakusoku)」.',
    sentences: [
      {
        japanese: '私は本を読む時間がありません。',
        furigana: '[私:わたし]は[本:ほん]を[読:よ]む[時間:じかん]がありません。',
        english: 'I have no time to read books.',
        segments: [
          { text: '私', reading: 'わたし' }, { text: 'は', reading: null }, { text: '本', reading: 'ほん' }, { text: 'を', reading: null }, { text: '読む', reading: 'よむ' }, { text: '時間', reading: 'じかん' }, { text: 'が', reading: null }, { text: 'ありません', reading: 'ありません' }, { text: '。', reading: null }
        ]
      }
    ]
  }
];