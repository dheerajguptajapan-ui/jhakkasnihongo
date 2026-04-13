import { Item } from '../../types';

export const lesson14: Item[] = [
  {
    id: 'mn14-v1',
    lessonNumber: 14,
    type: 'vocabulary',
    character: 'つけます',
    readings: ['tsukemasu'],
    meanings: ['turn on'],
    explanation: '点けます.',
    sentences: [{ japanese: '電気を 点けます。', english: 'I turn on the light.' }]
  },
  {
    id: 'mn14-d1',
    lessonNumber: 14,
    type: 'dokkai',
    character: '梅田まで行ってください',
    readings: ['Umeda made itte kudasai'],
    meanings: ['Please go to Umeda'],
    content: 'ミラー：梅田まで行ってください。\n運転手：はい。\nミラー：あの、信号の所で右へ曲がってください。\n運転手：右ですね。\nミラー：あ、あそこの喫茶店の前で止めてください。\n運転手：はい、わかりました。',
    translation: 'Miller: Please go to Umeda.\nDriver: Yes.\nMiller: Um, please turn right at the traffic light.\nDriver: Right, okay.\nMiller: Oh, please stop in front of that coffee shop over there.\nDriver: Yes, understood.',
    questions: [
      {
        question: 'ミラーさんはどこで降りましたか。',
        options: ['信号の所', '喫茶店の前', '駅の前', '銀行の前'],
        answerIndex: 1
      }
    ]
  }
];

export const lesson15: Item[] = [
  {
    id: 'mn15-v1',
    lessonNumber: 15,
    type: 'vocabulary',
    character: 'たちます',
    readings: ['tachimasu'],
    meanings: ['stand up'],
    explanation: '立ちます.',
    sentences: [{ japanese: '立ってください。', english: 'Please stand up.' }]
  },
  {
    id: 'mn15-d1',
    lessonNumber: 15,
    type: 'dokkai',
    character: 'ご家族は？',
    readings: ['Go-kazoku wa?'],
    meanings: ['And your family?'],
    content: '佐藤：ミラーさん、ご家族は？\nミラー：両親と姉が一人います。\n佐藤：どちらにいらっしゃいますか。\nミラー：ニューヨークに住んでいます。',
    translation: 'Sato: Miller, how about your family?\nMiller: I have my parents and one older sister.\nSato: Where are they?\nMiller: They live in New York.',
    questions: [
       {
        question: 'ミラーさんの家族は何人ですか。',
        options: ['３人', '４人', '５人', '２人'],
        answerIndex: 1
      }
    ]
  }
];

export const lesson16: Item[] = [
  {
    id: 'mn16-v1',
    lessonNumber: 16,
    type: 'vocabulary',
    character: 'のります',
    readings: ['norimasu'],
    meanings: ['ride', 'get on'],
    explanation: '乗ります.',
    sentences: [{ japanese: '電車に 乗ります。', english: 'I get on the train.' }]
  }
];

export const lesson17: Item[] = [
  {
    id: 'mn17-v1',
    lessonNumber: 17,
    type: 'vocabulary',
    character: 'おぼえます',
    readings: ['oboemasu'],
    meanings: ['remember'],
    explanation: '覚えます.',
    sentences: [{ japanese: '漢字を 覚えます。', english: 'I remember Kanji.' }]
  }
];

export const lesson18: Item[] = [
  {
    id: 'mn18-v1',
    lessonNumber: 18,
    type: 'vocabulary',
    character: 'できます',
    readings: ['dekimasu'],
    meanings: ['be able to', 'can'],
    explanation: 'Used for potential/ability.',
    sentences: [{ japanese: '日本語が できます。', english: 'I can speak Japanese.' }]
  }
];

export const lesson19: Item[] = [
  {
    id: 'mn19-v1',
    lessonNumber: 19,
    type: 'vocabulary',
    character: 'のぼります',
    readings: ['noborimasu'],
    meanings: ['climb'],
    explanation: '登ります.',
    sentences: [{ japanese: '山に 登ります。', english: 'I climb a mountain.' }]
  }
];

export const lesson20: Item[] = [
  {
    id: 'mn20-v1',
    lessonNumber: 20,
    type: 'vocabulary',
    character: 'いります',
    readings: ['irimasu'],
    meanings: ['need'],
    explanation: '要ります [ビザが〜].',
    sentences: [{ japanese: 'ビザが 要ります。', english: 'I need a visa.' }]
  }
];
