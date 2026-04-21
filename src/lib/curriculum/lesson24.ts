import { Item } from '../../types';

export const lesson24: Item[] = [
  // --- VOCABULARY ---
  { 
    id: 'nl24-v1', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'くれます', 
    readings: ['kuremasu'], 
    meanings: ['give [to me]'], 
    explanation: 'Polite form of くれる (Group 2). Used when someone gives something to the speaker or the speaker\'s inner circle. Raju kuremashita me a present!',
    sentences: [
      { japanese: 'リヤさんが私にお菓子をくれました。', furigana: 'リヤさんが[私:わたし]にお[菓子:かし]をくれました。', english: 'Ms. Riya gave me some sweets.' },
      { japanese: '誕生日に時計をくれました。', furigana: '[誕生日:たんじょうび]に[時計:とけい]をくれました。', english: 'They gave me a watch for my birthday.' }
    ]
  },
  { 
    id: 'nl24-v2', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'つれていきます', 
    readings: ['tsurete ikimasu'], 
    meanings: ['take [someone]'], 
    explanation: 'To take someone to a place (連れて行く). Used for people or animals. Dheeraj took Raju to a cricket match.',
    sentences: [
      { japanese: '子供を公園へ連れて行きます。', furigana: '[子供:こども]を[公園:こうえん]へ[連:つ]れて[行:い]きます。', english: 'I will take my child to the park.' }
    ]
  },
  { 
    id: 'nl24-v3', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'つれてきます', 
    readings: ['tsurete kimasu'], 
    meanings: ['bring [someone]'], 
    explanation: 'To bring someone to the speaker\'s location (連れて来る).',
    sentences: [
      { japanese: '友達を私の家へ連れて来ました。', furigana: '[友達:ともだち]を[私:わたし]の[家:うち]へ[連:つ]れて[来:き]ました。', english: 'I brought a friend to my house.' }
    ]
  },
  { 
    id: 'nl24-v5', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'しょうかいします', 
    readings: ['shoukai shimasu'], 
    meanings: ['introduce'], 
    explanation: 'To introduce (紹介する). Aarti introduced Neeraj to her family.',
    sentences: [
      { japanese: '友達を家族に紹介しました。', furigana: '[友達:ともだち]を[家族:かぞく]に[紹介:しょうかい]しました。', english: 'I introduced my friend to my family.' },
      { japanese: 'いい先生を紹介してください。', furigana: 'いい[先生:せんせい]を[紹介:しょうかい]してください。', english: 'Please introduce a good teacher to me.' }
    ]
  },
  { 
    id: 'nl24-v6', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'あんないします', 
    readings: ['annai shimasu'], 
    meanings: ['show around', 'guide'], 
    explanation: 'To show around or guide (案内する). Pankaj showed the new students around the campus.',
    sentences: [
      { japanese: '東京を案内します。', furigana: '[東京:とうきょう]を[案内:あんない]します。', english: 'I will show you around Tokyo.' },
      { japanese: '会社を案内しましょうか。', furigana: '[会社:かいしゃ]を[案内:あんない]しましょうか。', english: 'Shall I show you around the company?' }
    ]
  },
  { 
    id: 'nl24-v7', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'せつめいします', 
    readings: ['setsumei shimasu'], 
    meanings: ['explain'], 
    explanation: 'To explain (説明する). The teacher explained the meaning of the word.',
    sentences: [
      { japanese: '言葉の意味を説明します。', furigana: '[言葉:ことば]の[意味:いみ]を[説明:せつめい]します。', english: 'I will explain the meaning of the word.' },
      { japanese: '使い方を説明してください。', furigana: '[使:つか]い[方:かた]を[説明:せつめい]してください。', english: 'Please explain how to use it.' }
    ]
  },
  { 
    id: 'nl24-v11', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'おかし', 
    readings: ['okashi'], 
    meanings: ['sweets', 'snacks'], 
    explanation: 'Sweets, candies, or snacks (お菓子). Rita loves Japanese okashi.',
    sentences: [
      { japanese: 'お菓子を食べましょう。', furigana: 'お[菓子:かし]を[食:た]べましょう。', english: "Let's eat some sweets." }
    ]
  },
  { 
    id: 'nl24-v15', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'おべんとう', 
    readings: ['obentou'], 
    meanings: ['boxed lunch'], 
    explanation: 'Japanese lunch box (お弁当). Pankaj made a delicious obentou.',
    sentences: [
      { japanese: 'お弁当を作りました。', furigana: 'お[弁当:べんとう]を[作:つく]りました。', english: 'I made a boxed lunch.' }
    ]
  },
  { 
    id: 'nl24-v20', 
    lessonNumber: 24, 
    type: 'vocabulary', 
    level: 5, 
    character: 'じゅんび', 
    readings: ['junbi'], 
    meanings: ['preparation'], 
    explanation: 'Preparation (準備). Junbi for the trip is almost finished!',
    sentences: [
      { japanese: '旅行の準備をします。', furigana: '[旅行:りょこう]の[準備:じゅんび]をします。', english: 'I will prepare for the trip.' }
    ]
  },

  // --- GRAMMAR ---
  {
    id: 'nl24-g1',
    lessonNumber: 24,
    type: 'grammar',
    level: 5,
    character: 'V-て あげます / もらいます / くれます',
    readings: ['te-agemasu / te-moraimasu / te-kuremasu'],
    meanings: ['Giving and receiving favors (Actions)'],
    explanation: 'Expresses that a certain action is done as a favor.\n- te-agemasu: Person A does something for Person B (speaker as A).\n- te-moraimasu: Person A receives the benefit of an action from Person B.\n- te-kuremasu: Person B does something for the speaker as a favor.',
    sentences: [
      {
        japanese: '私はリヤさんに日本語を教えてあげました。',
        furigana: '[私:わたし]はリヤさんに[日本語:にほんご]を[教:おし]えてあげました。',
        english: 'I taught Japanese to Ms. Riya.',
        segments: [
          { text: '私', reading: 'わたし' }, { text: 'は', reading: null }, { text: 'リヤさんに', reading: null }, { text: '日本語', reading: 'にほんご' }, { text: 'を', reading: null }, { text: '教えてあげました', reading: 'おしえてあげました' }, { text: '。', reading: null }
        ]
      },
      {
        japanese: 'デレジさんは私に東京を案内してくれました。',
        furigana: 'デレジさんは[私:わたし]に[東京:とうきょう]を[案内:あんない]してくれました。',
        english: 'Mr. Dheeraj showed me around Tokyo (as a favor).',
        segments: [
          { text: 'デレジさん', reading: null }, { text: 'は', reading: null }, { text: '私', reading: 'わたし' }, { text: 'に', reading: null }, { text: '東京', reading: 'とうきょう' }, { text: 'を', reading: null }, { text: '案内してくれました', reading: 'あんないしてくれました' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl24-g2',
    lessonNumber: 24,
    type: 'grammar',
    level: 5,
    character: 'Person が V-て くれます',
    readings: ['Person ga te-kuremasu'],
    meanings: ['[Person] does [Verb] for me'],
    explanation: 'Emphasizes that someone did something for the speaker. The subject is marked with 「が」.',
    sentences: [
      {
        japanese: 'パンカジさんがお弁当を作ってくれました。',
        furigana: 'パンカジさんがお[弁当:べんとう]を[作:つく]ってくれました。',
        english: 'Mr. Pankaj made a boxed lunch for me.',
        segments: [
          { text: 'パンカジさん', reading: null }, { text: 'が', reading: null }, { text: 'お弁当', reading: 'おべんとう' }, { text: 'を', reading: null }, { text: '作ってくれました', reading: 'つくってくれました' }, { text: '。', reading: null }
        ]
      }
    ]
  }
];