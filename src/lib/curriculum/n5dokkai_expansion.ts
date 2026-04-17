import { Item } from '../../types';

export const n5dokkai_expansion: Item[] = [
  {
    id: 'n5-d-x1',
    lessonNumber: 27,
    type: 'dokkai',
    level: 5,
    character: '週末の 予定',
    meanings: ['Weekend Plans'],
    content: [
      { text: 'Aalind: ', reading: null }, { text: '週末、何を しますか。', reading: 'shuumatsu, nani o shimasu ka' },
      { text: '\n', reading: null },
      { text: 'Riya: ', reading: null }, { text: '家族と 大阪へ 行きます。', reading: 'kazoku to oosaka e ikimasu' },
      { text: '\n', reading: null },
      { text: 'Aalind: ', reading: null }, { text: 'いいですね。車で 行きますか。', reading: 'kuruma de ikimasu ka' },
      { text: '\n', reading: null },
      { text: 'Riya: ', reading: null }, { text: 'いいえ、電車で 行きます。', reading: 'densha de ikimasu' }
    ],
    translation: 'Aalind: What are you doing this weekend? Riya: I am going to Osaka with my family. Aalind: That\'s nice. Are you going by car? Riya: No, we are going by train.',
    questions: [
      {
        question: 'Riyaさんは どうやって 大阪へ 行きますか。',
        options: ['車', '電車', 'バス', '飛行機'],
        answerIndex: 1
      }
    ]
  },
  {
    id: 'n5-d-x2',
    lessonNumber: 27,
    type: 'dokkai',
    level: 5,
    character: '私の 趣味',
    meanings: ['My Hobby'],
    content: [
      { text: '私の', reading: 'わたしの' }, { text: '趣味', reading: 'しゅみ' }, { text: 'は', reading: null }, { text: '映画', reading: 'えいが' }, { text: 'を', reading: null }, { text: '見る', reading: 'みる' }, { text: 'こと', reading: null }, { text: 'です。', reading: null },
      { text: '\n', reading: null },
      { text: '特に', reading: 'とくに' }, { text: 'アクション映画', reading: null }, { text: 'が', reading: null }, { text: '大好きです。', reading: 'だいすきです' },
      { text: '\n', reading: null },
      { text: '週末、時々', reading: 'shuumatsu, tokidoki' }, { text: '友達', reading: 'ともだち' }, { text: 'と', reading: null }, { text: '一緒に', reading: 'いっしょに' }, { text: '映画館', reading: 'えいがかん' }, { text: 'へ', reading: null }, { text: '行きます。', reading: null }
    ],
    translation: 'My hobby is watching movies. I especially love action movies. On weekends, I sometimes go to the movie theater with my friends.',
    questions: [
      {
        question: 'この人は どんな 映画が 好きですか。',
        options: ['ホラー映画', '恋愛映画', 'アクション映画', 'アニメ'],
        answerIndex: 2
      }
    ]
  },
  {
    id: 'n5-d-x3',
    lessonNumber: 27,
    type: 'dokkai',
    level: 5,
    character: '新しい パソコン',
    meanings: ['New Computer'],
    content: [
      { text: 'Dheerajさんは', reading: 'Dheeraj-san wa' }, { text: '昨日', reading: 'きのう' }, { text: '新しい', reading: 'あたらしい' }, { text: 'パソコンを', reading: null }, { text: '買いました。', reading: 'かいました' },
      { text: '\n', reading: null },
      { text: 'とても', reading: null }, { text: '速くて、軽いです。', reading: 'hayakute, karui desu' },
      { text: '\n', reading: null },
      { text: '毎日', reading: 'mainichi' }, { text: 'これ', reading: null }, { text: 'で', reading: null }, { text: '日本語の', reading: 'nihongo no' }, { text: '勉強', reading: 'べんきょう' }, { text: 'を', reading: null }, { text: 'します。', reading: null }
    ],
    translation: 'Dheeraj bought a new computer yesterday. It is very fast and light. He uses it to study Japanese every day.',
    questions: [
      {
        question: 'Dheerajさんの パソコンは どうですか。',
        options: ['重くて、遅い', '速くて、軽い', '安くて、古い', '高くて、難しい'],
        answerIndex: 1
      }
    ]
  },
  {
    id: 'n5-d-x4',
    lessonNumber: 27,
    type: 'dokkai',
    level: 5,
    character: '東京の 生活',
    meanings: ['Life in Tokyo'],
    content: [
      { text: '東京', reading: 'とうきょう' }, { text: 'は', reading: null }, { text: 'とても', reading: null }, { text: '賑やか', reading: 'にぎやか' }, { text: 'な', reading: null }, { text: '街', reading: 'まち' }, { text: 'です。', reading: null },
      { text: '\n', reading: null },
      { text: '電車', reading: 'でんしゃ' }, { text: 'は', reading: null }, { text: '便利', reading: 'べんり' }, { text: 'ですが、', reading: null }, { text: 'いつも', reading: null }, { text: '人が', reading: null }, { text: 'たくさん', reading: null }, { text: 'います。', reading: null },
      { text: '\n', reading: null },
      { text: '食べ物', reading: 'たべもの' }, { text: 'は', reading: null }, { text: '美味しい', reading: 'おいしい' }, { text: '店', reading: 'みせ' }, { text: 'が', reading: null }, { text: '多い', reading: 'おおい' }, { text: 'です。', reading: null }
    ],
    translation: 'Tokyo is a very lively city. The trains are convenient, but there are always many people. As for food, there are many delicious restaurants.',
    questions: [
      {
        question: '東京の 電車は どうですか。',
        options: ['不便', '便利だけど、人が多い', '静か', '遅い'],
        answerIndex: 1
      }
    ]
  }
];
