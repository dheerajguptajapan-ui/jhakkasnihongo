import { Item } from '../../types';

export const n3chapter2: Item[] = [
  // --- VOCABULARY ---
  {
    id: 'tr3-ch2-v1',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 3,
    character: '飼う',
    readings: ['kau'],
    meanings: ['to keep (a pet)']
  },
  {
    id: 'tr3-ch2-v2',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 3,
    character: 'エサ',
    readings: ['esa'],
    meanings: ['pet food', 'bait']
  },
  {
    id: 'tr3-ch2-v3',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 3,
    character: '散歩',
    readings: ['sanpo'],
    meanings: ['walk', 'stroll']
  },
  {
    id: 'tr3-ch2-v4',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 3,
    character: '吠える',
    readings: ['hoeru'],
    meanings: ['to bark']
  },
  {
    id: 'tr3-ch2-v5',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 3,
    character: '尻尾',
    readings: ['shippo'],
    meanings: ['tail']
  },

  // --- GRAMMAR ---
  {
    id: 'tr3-ch2-g1',
    lessonNumber: 2,
    type: 'grammar',
    level: 3,
    character: '〜うちに (While)',
    readings: ['~uchi ni'],
    meanings: ['While / Before a state changes'],
    explanation: 'Used when doing something while a certain condition exists.',
    sentences: [
      { japanese: '独身の うちに、たくさん 旅行したいです。', english: 'While I am single, I want to travel a lot.', furigana: '独身[どくしん]のうちに、たくさん旅行[りょこう]したいです。' }
    ]
  },
  {
    id: 'tr3-ch2-g2',
    lessonNumber: 2,
    type: 'grammar',
    level: 3,
    character: '〜最中に (In the middle of)',
    readings: ['~saichuu ni'],
    meanings: ['In the middle of / Just when'],
    explanation: 'Indicates that something happens exactly while an action is ongoing.',
    sentences: [
      { japanese: '食事の 最中に 電話が かかってきました。', english: 'The phone rang in the middle of the meal.', furigana: '食事[しょくじ]の最中[さいちゅう]に電話[でんわ]がかかってきました。' }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'tr3-ch2-d1',
    lessonNumber: 2,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: 'ぼくの犬、クロ',
    meanings: ['My Dog, Kuro'],
    content: 'ぼくは 黒い 犬を 飼っています。名前は クロです。クロは 散歩が 大好きで、リードを 見ると 嬉しそうに 吠えます。元気な うちに たくさん 遊びたいです。',
    translation: 'I keep a black dog. His name is Kuro. Kuro loves walks, and when he sees the leash, he barks happily. I want to play with him a lot while he is healthy.',
    questions: [
      {
        question: 'クロは いつ 吠えますか。',
        options: ['リードを 見たとき', 'エサを 食べたとき', '寝るとき', '怒ったとき'],
        answerIndex: 0
      }
    ]
  }
];
