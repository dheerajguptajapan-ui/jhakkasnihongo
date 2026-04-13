import { Item } from '../../types';

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
