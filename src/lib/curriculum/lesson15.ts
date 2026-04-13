import { Item } from '../../types';

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
