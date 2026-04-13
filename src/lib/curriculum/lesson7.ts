import { Item } from '../../types';

export const lesson7: Item[] = [
  {
    id: 'mn7-v1',
    lessonNumber: 7,
    type: 'vocabulary',
    character: 'きります',
    readings: ['kirimasu'],
    meanings: ['cut'],
    explanation: '切ります.',
    sentences: [{ japanese: '紙を 切ります。', english: 'I cut the paper.' }]
  },
  {
    id: 'mn7-d1',
    lessonNumber: 7,
    type: 'dokkai',
    character: 'ごめんください',
    readings: ['Gomen kudasai'],
    meanings: ['Excuse me/Anybody home?'],
    content: '山田：あ、ワットさん。いらっしゃい。どうぞお上がりください。\nワット：失礼します。\n山田：コーヒーは、いかがですか。\nワット：ありがとうございます。\n山田：どうぞ。\nワット：いただきます。・・・このスプーン、すてきですね。\n山田：ええ。メキシコで もらいました。',
    translation: 'Yamada: Oh, Mr. Watt. Welcome. Please come in.\nWatt: Thank you / Excuse me.\nYamada: Would you like some coffee?\nWatt: Thank you.\nYamada: Here you go.\nWatt: (receiving) ... This spoon is lovely.\nYamada: Yes, I received it in Mexico.',
    questions: [
      {
        question: 'ワットさんは何を飲みましたか。',
        options: ['お茶', 'コーヒー', '水', '紅茶'],
        answerIndex: 1
      },
      {
        question: '山田さんはどこでスプーンをもらいましたか。',
        options: ['アメリカ', 'メキシコ', '日本', 'イギリス'],
        answerIndex: 1
      }
    ]
  }
];
