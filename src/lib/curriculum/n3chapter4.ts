import { Item } from '../../types';

export const n3chapter4: Item[] = [
  {
    id: 'tr3-ch4-v1',
    lessonNumber: 4,
    type: 'vocabulary',
    level: 3,
    character: '水泳',
    readings: ['suiyei'],
    meanings: ['swimming']
  },
  {
    id: 'tr3-ch4-v2',
    lessonNumber: 4,
    type: 'vocabulary',
    level: 3,
    character: '大会',
    readings: ['taikai'],
    meanings: ['convention', 'tournament']
  },
  {
    id: 'tr3-ch4-v3',
    lessonNumber: 4,
    type: 'vocabulary',
    level: 3,
    character: '選手',
    readings: ['senshu'],
    meanings: ['athlete', 'player']
  },
  {
    id: 'tr3-ch4-v4',
    lessonNumber: 4,
    type: 'vocabulary',
    level: 3,
    character: '応援',
    readings: ['ouen'],
    meanings: ['support', 'cheering']
  },
  {
    id: 'tr3-ch4-g1',
    lessonNumber: 4,
    type: 'grammar',
    level: 3,
    character: '〜ついでに (While you are at it)',
    readings: ['~tsuide ni'],
    meanings: ['While doing A, also do B / Taking the opportunity'],
    explanation: 'Used when you do something extra while performing a primary action.',
    sentences: [
      { japanese: '買い物に 行く ついでに、手紙を 出してきて。', english: 'While you go shopping, please go and send this letter.', furigana: '買[か]い物[もの]に行[い]くついでに、手紙[てがみ]を出[だ]してきて。' }
    ]
  },
  {
    id: 'tr3-ch4-g2',
    lessonNumber: 4,
    type: 'grammar',
    level: 3,
    character: '〜ほど〜ない',
    readings: ['~hodo ~nai'],
    meanings: ['Not as... as...'],
    explanation: 'Used for comparison, indicating that something is not as intense as the benchmark.',
    sentences: [
      { japanese: '今日は 昨日ほど 暑くないです。', english: 'Today is not as hot as yesterday.', furigana: '今日[きょう]は昨日[きのう]ほど暑[あつ]くないです。' }
    ]
  },
  {
    id: 'tr3-ch4-d1',
    lessonNumber: 4,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: '水泳大会',
    meanings: ['Swimming Tournament'],
    content: '今日は 弟の 水泳大会に 行きました。弟は 選手として 頑張っていました。応援に 行く ついでに、プールの 近くの カフェで 休憩しました。',
    translation: "Today I went to my younger brother's swimming tournament. My brother was doing his best as an athlete. While going to cheer him on, I took a break at a cafe near the pool.",
    questions: [
      {
        question: '応援に 行く ついでに 何を しましたか。',
        options: ['カフェで 休憩した', '泳いだ', '買い物をした', '宿題をした'],
        answerIndex: 0
      }
    ]
  }
];
