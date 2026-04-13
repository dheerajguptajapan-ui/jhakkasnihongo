import { Item } from '../../types';

export const lesson8: Item[] = [
  {
    id: 'mn8-v1',
    lessonNumber: 8,
    type: 'vocabulary',
    character: 'ハンサム [な]',
    readings: ['hansamu [na]'],
    meanings: ['handsome'],
    explanation: 'Na-adjective for "handsome".',
    sentences: [{ japanese: '彼は ハンサムです。', english: 'He is handsome.' }]
  },
  {
    id: 'mn8-v2',
    lessonNumber: 8,
    type: 'vocabulary',
    character: 'きれい [な]',
    readings: ['kirei [na]'],
    meanings: ['beautiful', 'clean'],
    explanation: 'Na-adjective. Often used for people and places.',
    sentences: [{ japanese: '富士山は きれいです。', english: 'Mt. Fuji is beautiful.' }]
  },
  {
    id: 'mn8-v3',
    lessonNumber: 8,
    type: 'vocabulary',
    character: 'しずか [な]',
    readings: ['shizuka [na]'],
    meanings: ['quiet'],
    explanation: 'Na-adjective.',
    sentences: [{ japanese: 'この図書室は しずかです。', english: 'This library is quiet.' }]
  },
  {
    id: 'mn8-d1',
    lessonNumber: 8,
    type: 'dokkai',
    character: 'そろそろ失礼します',
    readings: ['Sorosoro shitsurei shimasu'],
    meanings: ['It\'s time I should be leaving'],
    content: 'サントス：マリアさん、日本の生活はどうですか。\nマリア：とても楽しいです。毎日、忙しいですが、おもしろいです。\nサントス：そうですか。マリアさん、お茶をもう一杯いかがですか。\nマリア：いいえ、結構です。あ、もう８時ですね。そろそろ失礼します。\nサントス：そうですか。',
    translation: 'Santos: Maria, how is your life in Japan?\nMaria: It\'s very fun. Every day is busy but interesting.\nSantos: I see. Maria, would you like another cup of tea?\nMaria: No, thank you. Oh, it\'s 8 o\'clock already. I should be leaving soon.\nSantos: I see.',
    questions: [
      {
        question: 'マリアさんの生活はどうですか。',
        options: ['暇ですが楽しいです', '忙しいですがおもしろいです', '大変でおもしろくないです', 'とても難しいです'],
        answerIndex: 1
      },
      {
        question: '今、何時ですか。',
        options: ['７時', '８時', '９時', '１０時'],
        answerIndex: 1
      }
    ]
  }
];
