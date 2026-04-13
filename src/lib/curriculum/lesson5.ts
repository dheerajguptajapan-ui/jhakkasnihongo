import { Item } from '../../types';

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
