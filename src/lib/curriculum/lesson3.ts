import { Item } from '../../types';

export const lesson3: Item[] = [
  {
    id: 'mn3-v1',
    lessonNumber: 3,
    type: 'vocabulary',
    character: 'ここ',
    readings: ['koko'],
    meanings: ['here'],
    explanation: 'Place near the speaker.',
    sentences: [{ japanese: 'ここは 教室です。', english: 'This is a classroom.' }]
  },
  {
    id: 'mn3-v2',
    lessonNumber: 3,
    type: 'vocabulary',
    character: 'そこ',
    readings: ['soko'],
    meanings: ['there'],
    explanation: 'Place near the listener.',
    sentences: [{ japanese: 'そこは 事務所です。', english: 'That is an office.' }]
  },
  {
    id: 'mn3-v3',
    lessonNumber: 3,
    type: 'vocabulary',
    character: 'あそこ',
    readings: ['asoko'],
    meanings: ['over there'],
    explanation: 'Place far from both.',
    sentences: [{ japanese: 'あそこは 食堂です。', english: 'Over there is the cafeteria.' }]
  },
  {
    id: 'mn3-d1',
    lessonNumber: 3,
    type: 'dokkai',
    character: 'これをください',
    readings: ['Kore o kudasai'],
    meanings: ['Give me this, please'],
    content: '店員：いらっしゃいませ。\nマリア：すみません。そのワインを見せてください。\n店員：はい、どうぞ。\nマリア：これはフランスのワインですか。\n店員：いいえ、イタリアのです。\nマリア：いくらですか。\n店員：２,５００円です。\nマリア：じゃ、これをください。',
    translation: 'Clerk: Welcome.\nMaria: Excuse me. Please show me that wine.\nClerk: Yes, here you go.\nMaria: Is this French wine?\nClerk: No, it\'s Italian.\nMaria: How much is it?\nClerk: It\'s 2,500 yen.\nMaria: Well then, I\'ll take this, please.',
    questions: [
      {
        question: 'マリアさんはどこのワインを買いましたか。',
        options: ['フランス', 'イタリア', '日本', 'スペイン'],
        answerIndex: 1
      },
      {
        question: 'ワインはいくらですか。',
        options: ['１,５００円', '２,０００円', '２,５００円', '３,５００円'],
        answerIndex: 2
      }
    ]
  }
];

export const lesson4: Item[] = [
  {
    id: 'mn4-v1',
    lessonNumber: 4,
    type: 'vocabulary',
    character: 'おきます',
    readings: ['okimasu'],
    meanings: ['get up', 'wake up'],
    explanation: '起きます.',
    sentences: [{ japanese: '６時に 起きます。', english: 'I get up at 6.' }]
  },
  {
    id: 'mn4-v2',
    lessonNumber: 4,
    type: 'vocabulary',
    character: 'ねます',
    readings: ['nemasu'],
    meanings: ['sleep', 'go to bed'],
    explanation: '寝ます.',
    sentences: [{ japanese: '１１時に 寝ます。', english: 'I go to bed at 11.' }]
  },
  {
    id: 'mn4-g1',
    lessonNumber: 4,
    type: 'grammar',
    character: '〜ます / 〜ません',
    readings: ['~masu / ~masen'],
    meanings: ['Verb forms'],
    explanation: 'ます is the polite present affirmative. ません is negative.',
    sentences: [{ japanese: '働きます。', english: 'I work.' }, { japanese: '働きません。', english: 'I don\'t work.' }]
  },
  {
    id: 'mn4-d1',
    lessonNumber: 4,
    type: 'dokkai',
    character: 'そちらは何時までですか',
    readings: ['Sochira wa nanji made desu ka'],
    meanings: ['Until what time are you open?'],
    content: '番号案内：はい、１０４の石田です。\nカリナ：大和美術館の電話番号をお願いします。\n番号案内：大和美術館ですね。かしこまりました。\n（テープ）：０７９７ー３８ー２１５１です。\n***\nカリナ：すみません。そちらは何時から何時までですか。\n美術館員：９時から４時までです。\nカリナ：休みは何曜日ですか。\n美術館員：月曜日です。\nカリナ：どうもありがとうございました。',
    translation: 'Directory: Yes, Ishida from 104.\nKarina: The phone number for the Yamato Museum, please.\nDirectory: Yamato Museum. Understood.\n(Tape): 0797-38-2151.\n***\nKarina: Excuse me. From what time to what time are you open?\nMuseum: From 9:00 to 4:00.\nKarina: What is the holiday?\nMuseum: Monday.\nKarina: Thank you very much.',
    questions: [
      {
        question: '美術館は何時に終わりますか。',
        options: ['４時', '５時', '９時', '１０時'],
        answerIndex: 0
      },
      {
        question: '休みは何曜日ですか。',
        options: ['日曜日', '月曜日', '火曜日', '水曜日'],
        answerIndex: 1
      }
    ]
  },
  {
    id: 'mn4-k1',
    lessonNumber: 4,
    level: 1,
    type: 'kanji',
    character: '日',
    readings: ['にち', 'び', 'ひ'],
    meanings: ['Sun', 'Day'],
    radical: '日',
    mnemonic: 'A window looking at the sun.',
    combinations: [{ word: '日曜日', reading: 'にちようび', meaning: 'Sunday' }]
  },
  {
    id: 'mn4-k2',
    lessonNumber: 4,
    level: 1,
    type: 'kanji',
    character: '月',
    readings: ['げつ', 'がつ', 'つき'],
    meanings: ['Moon', 'Month'],
    radical: '月',
    mnemonic: 'Crescent moon.',
    combinations: [{ word: '月曜日', reading: 'げつようび', meaning: 'Monday' }]
  }
];

export const lesson5: Item[] = [
  {
    id: 'mn5-v1',
    lessonNumber: 5,
    type: 'vocabulary',
    character: 'いきます',
    readings: ['ikimasu'],
    meanings: ['go'],
    explanation: '行きます.',
    sentences: [{ japanese: 'スーパーへ 行きます。', english: 'I go to the supermarket.' }]
  },
  {
    id: 'mn5-v2',
    lessonNumber: 5,
    type: 'vocabulary',
    character: 'きます',
    readings: ['kimasu'],
    meanings: ['come'],
    explanation: '来ます.',
    sentences: [{ japanese: '日本へ 来ました。', english: 'I came to Japan.' }]
  },
  {
    id: 'mn5-d1',
    lessonNumber: 5,
    type: 'dokkai',
    character: 'この電車は甲子園へ行きますか',
    readings: ['Kono densha wa Koushien e ikimasu ka'],
    meanings: ['Does this train go to Koshien?'],
    content: 'サントス：すみません。甲子園までいくらですか。\n駅員：３５０円です。\nサントス：３５０円ですね。ありがとうございました。\nサントス：すみません。甲子園は、何番線ですか。\n駅員：３番線です。\nサントス：どうも。\nサントス：あの、この電車は甲子園へ行きますか。\n乗客：いいえ、次の「普通」ですよ。\nサントス：そうですか。どうも。',
    translation: 'Santos: Excuse me. How much to Koshien?\nStaff: 350 yen.\nSantos: 350 yen. Thank you.\nSantos: Excuse me. Which platform for Koshien?\nStaff: Platform 3.\nSantos: Thanks.\nSantos: Um, does this train go to Koshien?\nPassenger: No, it\'s the next Local train.\nSantos: I see. Thanks.',
    questions: [
      {
        question: '甲子園までいくらですか。',
        options: ['３００円', '３５０円', '４００円', '４５０円'],
        answerIndex: 1
      },
      {
        question: '何番線ですか。',
        options: ['１番線', '２番線', '３番線', '４番線'],
        answerIndex: 2
      }
    ]
  }
];
