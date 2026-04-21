import { Item } from '../../types';

export const lesson25: Item[] = [
  // --- VOCABULARY ---
  { 
    id: 'nl25-v1', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かんがえます', 
    readings: ['kangaemasu'], 
    meanings: ['think', 'consider'], 
    explanation: 'Polite form of 考える (Group 2). To think deeply about something or consider a problem. Neeraj is kangaemasu about his future.',
    sentences: [
      { japanese: '将来（しょうらい）のことを考えます。', furigana: '[将来:しょうらい]のことを[考:かんが]えます。', english: 'I will think about the future.' },
      { japanese: 'よく考えてください。', furigana: 'よく[考:かんが]えてください。', english: 'Please think carefully.' }
    ]
  },
  { 
    id: 'nl25-v2', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'つきます', 
    readings: ['tsukimasu'], 
    meanings: ['arrive'], 
    explanation: 'Polite form of 着く (Group 1). To reach a destination. Mention the destination with 「に」.',
    sentences: [
      { japanese: '駅に着きました。', furigana: '[駅:えき]に[着:つ]きました。', english: 'I arrived at the station.' },
      { japanese: '何時に着きますか。', furigana: '[何時:なんじ]に[着:つ]きますか。', english: 'What time will you arrive?' }
    ]
  },
  { 
    id: 'nl25-v3', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'りゅうがくします', 
    readings: ['ryuugaku shimasu'], 
    meanings: ['study abroad'], 
    explanation: 'To study abroad (留学する). Himanshu ryuugaku shimasu in Tokyo to study AI.',
    sentences: [
      { japanese: '日本へ留学します。', furigana: '[日本:にほん]へ[留学:りゅうがく]します。', english: 'I will study abroad in Japan.' },
      { japanese: '大学で留学の準備（じゅんび）をしています。', furigana: '[大学:だいがく]で[留学:りゅうがく]の[準備:じゅんび]をしています。', english: 'I am preparing to study abroad at university.' }
    ]
  },
  { 
    id: 'nl25-v5', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'いなか', 
    readings: ['inaka'], 
    meanings: ['countryside', 'hometown'], 
    explanation: 'Countryside or hometown (田舎). Dheeraj\'s inaka is very quiet and beautiful.',
    sentences: [
      { japanese: '私の田舎は静（しず）かです。', furigana: '[私:わたし]の[田舎:いなか]は[静:しず]かです。', english: 'My hometown/countryside is quiet.' }
    ]
  },
  { 
    id: 'nl25-v6', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'たいしかん', 
    readings: ['taishikan'], 
    meanings: ['embassy'], 
    explanation: 'Embassy (大使館). Necessary for visa matters!',
    sentences: [
      { japanese: '大使館へ行かなければなりません。', furigana: '[大使館:たいしかん]へ[行:い]かなければなりません。', english: 'I must go to the embassy.' }
    ]
  },
  { 
    id: 'nl25-v10', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'もし', 
    readings: ['moshi'], 
    meanings: ['if'], 
    explanation: 'Adverb used to emphasize a conditional sentence (usually paired with ~tara).',
    sentences: [
      { japanese: 'もし一億円（いちおくえん）あったら、何（なに）をしますか。', furigana: 'もし[一億円:いちおくえん]あったら、[何:なに]をしますか。', english: 'If you had 100 million yen, what would you do?' }
    ]
  },
  { 
    id: 'nl25-v14', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'おせわになりました', 
    readings: ['osewa ni narimashita'], 
    meanings: ['Thank you for everything / Thank you for your kindness'], 
    explanation: 'Set phrase used when leaving a job, school, or host family to express gratitude for past help.',
    sentences: [
      { japanese: '先生、今までお世話になりました。', furigana: '[先生:せんせい]、今までお[世話:せわ]になりました。', english: 'Teacher, thank you for everything you\'ve done for me until now.' }
    ]
  },
  { 
    id: 'nl25-v15', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'がんばります', 
    readings: ['ganbarimasu'], 
    meanings: ["do one's best", 'persevere'], 
    explanation: 'To do one\'s best (頑張る). Keep ganbarimasu with your Japanese studies!',
    sentences: [
      { japanese: '明日も頑張ります。', furigana: '[明日:あした]も[頑張:がんば]ります。', english: 'I will do my best tomorrow as well.' }
    ]
  },
  { 
    id: 'nl25-v16', 
    lessonNumber: 25, 
    type: 'vocabulary', 
    level: 5, 
    character: 'おげんきで', 
    readings: ['ogenki de'], 
    meanings: ['Best of luck / Take care of yourself'], 
    explanation: 'Set phrase used when saying a long-term goodbye.',
    sentences: [
      { japanese: 'どうぞ、お元気で。', furigana: 'どうぞ、お[元気:げんき]で。', english: 'Please take care / Best of luck.' }
    ]
  },

  // --- GRAMMAR ---
  {
    id: 'nl25-g1',
    lessonNumber: 25,
    type: 'grammar',
    level: 5,
    character: 'V-たら、[Main Sentence]',
    readings: ['V-tara'],
    meanings: ['If [Verb] / When [Verb]'],
    explanation: 'The common conditional form. FORM: Take the 「た-form」 and add 「ら」. It can express both a hypothetical "if" or a certain "when it happens in the future".',
    sentences: [
      {
        japanese: '雨が降ったら、出かけません。',
        furigana: '[雨:あめ]が[降:ふ]ったら、[出:で]かけません。',
        english: 'If it rains, I will not go out.',
        segments: [
          { text: '雨', reading: 'あめ' }, { text: 'が', reading: null }, { text: '降ったら', reading: 'ふったら' }, { text: '、', reading: null }, { text: '出かけません', reading: 'でかけません' }, { text: '。', reading: null }
        ]
      },
      {
        japanese: '駅に着いたら、電話をしてください。',
        furigana: '[駅:えき]に[着:つ]いたら、[電話:でんわ]をしてください。',
        english: 'When you arrive at the station, please call me.',
        segments: [
          { text: '駅', reading: 'えき' }, { text: 'に', reading: null }, { text: '着いたら', reading: 'ついたら' }, { text: '、', reading: null }, { text: '電話', reading: 'でんわ' }, { text: 'をしてください', reading: 'をしてください' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl25-g2',
    lessonNumber: 25,
    type: 'grammar',
    level: 5,
    character: 'Adj / N かったら / だったら',
    readings: ['I-adj (~kattara) / Na-adj/N (~dattara)'],
    meanings: ['If it is [Adj/Noun]'],
    explanation: 'Conditional for adjectives and nouns.\n- I-adj: drop 「い」 -> 「かったら」.\n- Na-adj/Noun: add 「だったら」.',
    sentences: [
      {
        japanese: '安かったら、買います。',
        furigana: '[安:やす]かったら、[買:か]います。',
        english: 'If it is cheap, I will buy it.',
        segments: [
          { text: '安かったら', reading: 'やすかったら' }, { text: '、', reading: null }, { text: '買います', reading: 'かいます' }, { text: '。', reading: null }
        ]
      },
      {
        japanese: '暇（ひま）だったら、遊びに来てください。',
        furigana: '[暇:ひま]だったら、[遊:あそ]びに[来:く]てください。',
        english: 'If you are free, please come over and visit.',
        segments: [
          { text: '暇だったら', reading: 'ひまだったら' }, { text: '、', reading: null }, { text: '遊び', reading: 'あそび' }, { text: 'に', reading: null }, { text: '来てください', reading: 'きてください' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl25-g3',
    lessonNumber: 25,
    type: 'grammar',
    level: 5,
    character: 'V-て も、[Main Sentence]',
    readings: ['V-te mo'],
    meanings: ['Even if [Verb] / Although [Verb]'],
    explanation: 'Used when the second action happens despite the condition of the first action. FORM: Take the 「て-form」 and add 「も」.',
    sentences: [
      {
        japanese: '雨が降っても、洗濯します。',
        furigana: '[雨:あめ]が[降:ふ]っても、[洗濯:せんたく]します。',
        english: 'Even if it rains, I will do laundry.',
        segments: [
          { text: '雨', reading: 'あめ' }, { text: 'が', reading: null }, { text: '降っても', reading: 'ふっても' }, { text: '、', reading: null }, { text: '洗濯', reading: 'せんたく' }, { text: 'します', reading: 'します' }, { text: '。', reading: null }
        ]
      },
      {
        japanese: '高くても、買いたい帽子があります。',
        furigana: '[高:たか]くても、[買:か]いたい[帽子:ぼうし]があります。',
        english: 'Even if it is expensive, there is a hat I want to buy.',
        segments: [
          { text: '高くても', reading: 'たかくても' }, { text: '、', reading: null }, { text: '買いたい', reading: 'かいたい' }, { text: '帽子', reading: 'ぼうし' }, { text: 'が', reading: null }, { text: 'あります', reading: 'あります' }, { text: '。', reading: null }
        ]
      }
    ]
  }
];