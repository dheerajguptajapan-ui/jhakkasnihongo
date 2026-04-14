import { Item } from '../../types';

export const n3chapter3: Item[] = [
  // --- VOCABULARY ---
  {
    id: 'tr3-ch3-v1',
    lessonNumber: 3,
    type: 'vocabulary',
    level: 3,
    character: '募集',
    readings: ['boshuu'],
    meanings: ['recruitment', 'taking applications']
  },
  {
    id: 'tr3-ch3-v2',
    lessonNumber: 3,
    type: 'vocabulary',
    level: 3,
    character: '農園',
    readings: ['nouen'],
    meanings: ['farm', 'plantation']
  },
  {
    id: 'tr3-ch3-v3',
    lessonNumber: 3,
    type: 'vocabulary',
    level: 3,
    character: '市民',
    readings: ['shimin'],
    meanings: ['citizen']
  },
  {
    id: 'tr3-ch3-v4',
    lessonNumber: 3,
    type: 'vocabulary',
    level: 3,
    character: '利用',
    readings: ['riyou'],
    meanings: ['use', 'utilization']
  },

  // --- GRAMMAR ---
  {
    id: 'tr3-ch3-g1',
    lessonNumber: 3,
    type: 'grammar',
    level: 3,
    character: '〜ば〜ほど',
    readings: ['~ba ~hodo'],
    meanings: ['The more... the more...'],
    explanation: 'Expresses that as one condition increases, so does another.',
    sentences: [
      { japanese: '日本語は 勉強すれば するほど 面白くなります。', english: 'The more you study Japanese, the more interesting it becomes.', furigana: '日本語[にほんご]は勉強[べんきょう]すればするほど面白[おもしろ]くなります。' }
    ]
  },
  {
    id: 'tr3-ch3-g2',
    lessonNumber: 3,
    type: 'grammar',
    level: 3,
    character: '〜たび (Every time)',
    readings: ['~tabi'],
    meanings: ['Whenever / Every time'],
    explanation: 'Used when something happens every time a certain action is performed.',
    sentences: [
      { japanese: 'この 曲を 聞く たびに、家族を 思い出します。', english: 'Every time I hear this song, I remember my family.', furigana: 'この曲[きょく]を聞[き]くたびに、家族[かぞく]を思[おも]い出[だ]します。' }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'tr3-ch3-d1',
    lessonNumber: 3,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: '市民農園の 募集',
    meanings: ['Civic Farm Recruitment'],
    content: '市役所では 市民農園の 利用者を 募集して います。自分で 野菜を 作れば 作るほど、健康的になれます。利用を 希望する 方は、来月までに 申し込んで ください。',
    translation: 'The city hall is recruiting users for the civic farm. The more you grow your own vegetables, the healthier you can become. Those who wish to use it, please apply by next month.',
    questions: [
      {
        question: 'いつまでに 申し込まなければ なりませんか。',
        options: ['来月まで', '今週まで', '明日まで', '来年まで'],
        answerIndex: 0
      }
    ]
  }
];
