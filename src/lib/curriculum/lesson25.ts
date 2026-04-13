import { Item } from '../../types';

export const lesson25: Item[] = [
  // --- VOCABULARY (~50 Items) ---
  {
    id: 'mn25-v1',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'かんがえます',
    readings: ['kangaemasu'],
    meanings: ['think', 'consider'],
    explanation: '考える.'
  },
  {
    id: 'mn25-v2',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'つきます',
    readings: ['tukimasu'],
    meanings: ['arrive [at the station]'],
    explanation: '着く. [えきに〜]'
  },
  {
    id: 'mn25-v3',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'りゅうがくします',
    readings: ['ryuugakushimasu'],
    meanings: ['study abroad'],
    explanation: '留学します.'
  },
  {
    id: 'mn25-v4',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'とります',
    readings: ['torimasu'],
    meanings: ['grow old', 'take [age]'],
    explanation: '取る. [としを〜]'
  },
  {
    id: 'mn25-v5',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'いなか',
    readings: ['inaka'],
    meanings: ['countryside', 'hometown'],
    explanation: '田舎.'
  },
  {
    id: 'mn25-v6',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'たいしかん',
    readings: ['taishikan'],
    meanings: ['embassy'],
    explanation: '大使館.'
  },
  {
    id: 'mn25-v7',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'グループ',
    readings: ['guru-pu'],
    meanings: ['group']
  },
  {
    id: 'mn25-v8',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'チャンス',
    readings: ['chansu'],
    meanings: ['chance']
  },
  {
    id: 'mn25-v9',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'おく',
    readings: ['oku'],
    meanings: ['hundred million'],
    explanation: '億.'
  },
  {
    id: 'mn25-v10',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'もし',
    readings: ['moshi'],
    meanings: ['if (used with -tara form)']
  },
  {
    id: 'mn25-v11',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'いくら',
    readings: ['ikura'],
    meanings: ['however much (used with -temo form)']
  },
  {
    id: 'mn25-v12',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'てんきん',
    readings: ['tenkin'],
    meanings: ['transfer to another office. [〜します: transfer]'],
    explanation: '転勤.'
  },
  {
    id: 'mn25-v13',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'こと',
    readings: ['koto'],
    meanings: ['thing', 'matter'],
    explanation: '事.'
  },
  {
    id: 'mn25-v14',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'おせわに なりました',
    readings: ['osewa ni narimashita'],
    meanings: ['Thank you for everything you have done for me.']
  },
  {
    id: 'mn25-v15',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'がんばります',
    readings: ['ganbarimasu'],
    meanings: ["do one's best"],
    explanation: '頑張ります.'
  },
  {
    id: 'mn25-v16',
    lessonNumber: 25,
    type: 'vocabulary',
    level: 1,
    character: 'どうぞ おげんきで',
    readings: ['douzo ogenki de'],
    meanings: ['Best of luck. / All the best. (said when parting for a long time)']
  },

  // --- GRAMMAR (~4 Points) ---
  {
    id: 'mn25-g1',
    lessonNumber: 25,
    type: 'grammar',
    level: 1,
    character: 'V-たら、[Result]',
    readings: ['V-tara, [Result]'],
    meanings: ['If/When [Verb], [Result]'],
    explanation: 'The conditional form used when the occurrence of S1 is followed by S2.',
    sentences: [
      { japanese: 'お金が あったら、旅行します。', english: 'If I have money, I will travel.', furigana: 'お金[かね]があったら、旅[りょ]行[こう]します。' },
      { japanese: '１０時に なったら、出かけましょう。', english: "When it becomes 10 o'clock, let's go out.", furigana: '１０時[じ]になったら、出[で]かけましょう。' }
    ]
  },
  {
    id: 'mn25-g2',
    lessonNumber: 25,
    type: 'grammar',
    level: 1,
    character: 'V-て も、[Result]',
    readings: ['V-te mo, [Result]'],
    meanings: ['Even if [Verb], [Result]'],
    explanation: 'Used for actions that result in something contrary to expectations.',
    sentences: [
      { japanese: '雨が 降っても、洗濯します。', english: 'Even if it rains, I will do the laundry.', furigana: '雨[あめ]が降[ふ]っても、洗[せん]濯[たく]します。' }
    ]
  },
  {
    id: 'mn25-g3',
    lessonNumber: 25,
    type: 'grammar',
    level: 1,
    character: 'もし / いくら',
    readings: ['moshi / ikura'],
    meanings: ['If / No matter how much'],
    explanation: 'Moshi is used to emphasize a condition with -tara. Ikura is used with -temo.',
    sentences: [
      { japanese: 'もし １億円 あったら、何を しますか。', english: 'If you had 100 million yen, what would you do?', furigana: 'もし１億[おく]円[えん]あったら、何を[なに]をしますか。' },
      { japanese: 'いくら 考えても、分かりません。', english: "No matter how much I think, I don't understand.", furigana: 'いくら考[かんが]えても、分[わ]かりません。' }
    ]
  },
  {
    id: 'mn25-g4',
    lessonNumber: 25,
    type: 'grammar',
    level: 1,
    character: 'N でも',
    readings: ['N demo'],
    meanings: ['Even if it is [Noun]'],
    explanation: 'Conditional for nouns.',
    sentences: [
      { japanese: '日曜日でも 働きます。', english: 'Even if it is Sunday, I work.', furigana: '日[にち]曜[よう]日[び]でも働[はたら]きます。' }
    ]
  },

  // --- DOKKAI (3 Sections) ---
  {
    id: 'mn25-d1',
    lessonNumber: 25,
    type: 'dokkai',
    level: 1,
    character: 'もし １億円 あったら',
    meanings: ['If I Had 100 Million Yen'],
    content: 'もし １億円 あったら、何を しますか。私は 世界を 旅行したいです。色々な 国へ 行って、色々な 人に 会いたいです。それから、田舎に 大きい 家を 買いたいです。',
    translation: 'If I had 100 million yen, what would I do? I want to travel the world. I want to go to various countries and meet various people. And then, I want to buy a big house in the countryside.',
    questions: [
      {
        question: 'この人は １おくえん あったら 何を したいですか。',
        options: ['せかいを りょこうしたい', 'しごとを したい', 'くるまを かいたい', 'なにも したくない'],
        answerIndex: 0
      }
    ]
  },
  {
    id: 'mn25-d2',
    lessonNumber: 25,
    type: 'dokkai',
    level: 1,
    character: '雨が 降っても',
    meanings: ['Even if it Rains'],
    content: '明日は 公園で パーティーが あります。もし 雨が 降っても、パーティーを します。屋根が ありますから、大丈夫です。ぜひ 来て ください。',
    translation: "Tomorrow there is a party in the park. Even if it rains, we will have the party. There is a roof, so it's okay. Please definitely come.",
    questions: [
      {
        question: 'あした 雨が ふったら、どうしますか。',
        options: ['パーティーを します', 'パーティーを 休みます', 'いえで 寝ます', 'わかりません'],
        answerIndex: 0
      }
    ]
  },
  {
    id: 'mn25-d3',
    lessonNumber: 25,
    type: 'dokkai',
    level: 1,
    character: 'お世話に なりました',
    meanings: ['Thank You for Everything'],
    content: 'ミラーさん、長い 間 お世話に なりました。来月 アメリカへ 帰ります。アメリカへ 帰っても、時々 日本語を 勉強します。どうぞ お元気で。',
    translation: 'Mr. Miller, thank you for everything over this long time. I will return to America next month. Even after I return to America, I will study Japanese from time to time. All the best.',
    questions: [
      {
        question: 'この人は らいげつ 何を しますか。',
        options: ['アメリカへ かえります', '日本へ きます', 'ひっこしします', '仕事を やめます'],
        answerIndex: 0
      }
    ]
  },

  // --- KANJI (Unit 25 - Preserved/Updated) ---
  {
    id: 'mn25-k1',
    lessonNumber: 25,
    type: 'kanji',
    character: '部',
    readings: ['ぶ'],
    meanings: ['Section', 'Department', 'Part', 'Portion', 'Member'],
    level: 1,
    radical: '邑',
    mnemonic: 'Dividing into sections.',
    combinations: [{ word: '部屋', reading: 'heya', meaning: 'Room' }]
  },
  {
    id: 'mn25-k2',
    lessonNumber: 25,
    type: 'kanji',
    character: '屋',
    readings: ['おく', 'や'],
    meanings: ['Roof', 'Shop', 'House', 'Seller'],
    level: 1,
    radical: '尸',
    mnemonic: 'A person (尸) under a roof staying in a shop or house.',
    combinations: [{ word: '部屋', reading: 'heya', meaning: 'Room' }]
  },
  {
    id: 'mn25-k3',
    lessonNumber: 25,
    type: 'kanji',
    character: '室',
    readings: ['しつ'],
    meanings: ['Room', 'Apartment', 'Chamber', 'Greenhouse'],
    level: 1,
    radical: '宀',
    mnemonic: 'A room with a roof (宀).',
    combinations: [{ word: '会議室', reading: 'kaigishitsu', meaning: 'Meeting room' }]
  },
  {
    id: 'mn25-k4',
    lessonNumber: 25,
    type: 'kanji',
    character: '窓',
    readings: ['そう', 'まど'],
    meanings: ['Window', 'Pane'],
    level: 1,
    radical: '穴',
    mnemonic: 'A hole (穴) in the roof (宀) to let in light.',
    combinations: [{ word: '窓口', reading: 'madoguchi', meaning: 'Counter/Window' }]
  },
  {
    id: 'mn25-k5',
    lessonNumber: 25,
    type: 'kanji',
    character: '開',
    readings: ['かい', 'あ', 'ひら'],
    meanings: ['Open', 'Unfold', 'Unseal'],
    level: 1,
    radical: '門',
    mnemonic: 'Opening the gates (門).',
    combinations: [{ word: '開始', reading: 'kaishi', meaning: 'Start/Opening' }]
  },
  {
    id: 'mn25-k6',
    lessonNumber: 25,
    type: 'kanji',
    character: '閉',
    readings: ['へい', 'し', 'と'],
    meanings: ['Close', 'Shut'],
    level: 1,
    radical: '門',
    mnemonic: 'Closing the gates (門).',
    combinations: [{ word: '閉店', reading: 'heiten', meaning: 'Closing shop' }]
  },
  {
    id: 'mn25-k7',
    lessonNumber: 25,
    type: 'kanji',
    character: '歌',
    readings: ['か', 'うた'],
    meanings: ['Song', 'Sing'],
    level: 1,
    radical: '欠',
    mnemonic: 'A person opening their mouth (欠) to sing over strings.',
    combinations: [{ word: '歌手', reading: 'kashu', meaning: 'Singer' }]
  },
  {
    id: 'mn25-k8',
    lessonNumber: 25,
    type: 'kanji',
    character: '意',
    readings: ['い'],
    meanings: ['Idea', 'Mind', 'Heart', 'Taste', 'Thought'],
    level: 1,
    radical: '心',
    mnemonic: 'Sound (音) in the heart (心) representing an idea.',
    combinations: [{ word: '意味', reading: 'imi', meaning: 'Meaning' }]
  },
  {
    id: 'mn25-k9',
    lessonNumber: 25,
    type: 'kanji',
    character: '味',
    readings: ['み', 'あじ'],
    meanings: ['Flavor', 'Taste', 'Experience'],
    level: 1,
    radical: '口',
    mnemonic: 'A mouth (口) tasting fruit that is not yet (未) ripe.',
    combinations: [{ word: '意味', reading: 'imi', meaning: 'Meaning' }]
  },
  {
    id: 'mn25-k10',
    lessonNumber: 25,
    type: 'kanji',
    character: '考',
    readings: ['こう', 'かんが'],
    meanings: ['Consider', 'Think', 'Idea'],
    level: 1,
    radical: '耂',
    mnemonic: 'An elder (耂) considering something carefully.',
    combinations: [{ word: '考える', reading: 'kangaeru', meaning: 'To think' }]
  },
  {
    id: 'mn25-k11',
    lessonNumber: 25,
    type: 'kanji',
    character: '天',
    readings: ['てん', 'あま', 'あめ'],
    meanings: ['Heavens', 'Sky', 'Imperial'],
    level: 1,
    radical: '大',
    mnemonic: 'A big person (大) with the vast sky (top line) above them.',
    combinations: [{ word: '天気', reading: 'tenki', meaning: 'Weather' }]
  }
];
