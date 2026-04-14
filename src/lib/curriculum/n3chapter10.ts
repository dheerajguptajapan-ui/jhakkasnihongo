import { Item } from '../../types';

export const n3chapter10: Item[] = [
  {
    id: 'tr3-ch10-v1',
    lessonNumber: 10,
    type: 'vocabulary',
    level: 3,
    character: '選択',
    readings: ['sentaku'],
    meanings: ['selection', 'choice']
  },
  {
    id: 'tr3-ch10-v2',
    lessonNumber: 10,
    type: 'vocabulary',
    level: 3,
    character: '決定',
    readings: ['kettei'],
    meanings: ['decision']
  },
  {
    id: 'tr3-ch10-v3',
    lessonNumber: 10,
    type: 'vocabulary',
    level: 3,
    character: '悩む',
    readings: ['nayamu'],
    meanings: ['to be worried', 'to be troubled']
  },
  {
    id: 'tr3-ch10-g1',
    lessonNumber: 10,
    type: 'grammar',
    level: 3,
    character: '〜のみならず (Not only)',
    readings: ['~nomi narazu'],
    meanings: ['Not only... but also...'],
    explanation: 'A more formal version of ~dake de naku.',
    sentences: [
      { japanese: '日本のみならず、世界中で 人気があります。', english: 'It is popular not only in Japan but also all over the world.', furigana: '日本[にほん]のみならず、世界中[せかいじゅう]で人気[にんき]があります。' }
    ]
  },
  {
    id: 'tr3-ch10-g2',
    lessonNumber: 10,
    type: 'grammar',
    level: 3,
    character: '〜こそ (Emphasis)',
    readings: ['~koso'],
    meanings: ['Precisely / Especially / Very'],
    explanation: 'Used for strong emphasis on the preceding noun.',
    sentences: [
      { japanese: '今年こそ 合格したいです。', english: 'I definitely want to pass this year.', furigana: '今年[ことし]こそ合格[ごうかく]したいです。' }
    ]
  },
  {
    id: 'tr3-ch10-d1',
    lessonNumber: 10,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: 'ゆきの選択',
    meanings: ["Yuki's Choice"],
    content: 'ゆきさんは 将来について 悩んでいました。留学するか、就職するか。自分のみならず、家族の 幸せも 考えて 結論を 出しました。今こそ 新しい 道を 歩むときです。',
    translation: 'Yuki was troubled about her future. Should she study abroad or find a job? She consideration not only her own but also her family\'s happiness and reached a conclusion. Now is precisamente the time to walk a new path.',
    questions: [
      {
        question: 'ゆきさんは 何について 悩んでいましたか。',
        options: ['将来', '健康', '友達', '趣味'],
        answerIndex: 0
      }
    ]
  }
];
