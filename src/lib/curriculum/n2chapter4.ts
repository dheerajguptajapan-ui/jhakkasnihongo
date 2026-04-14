import { Item } from '../../types';

export const n2chapter4: Item[] = [
  {
    id: 'tr2-ch4-v1',
    lessonNumber: 4,
    type: 'vocabulary',
    level: 4,
    character: '少子高齢化',
    readings: ['shoushi koureika'],
    meanings: ['declining birthrate and aging population']
  },
  {
    id: 'tr2-ch4-v2',
    lessonNumber: 4,
    type: 'vocabulary',
    level: 4,
    character: '福祉',
    readings: ['fukushi'],
    meanings: ['welfare', 'well-being']
  },
  {
    id: 'tr2-ch4-v3',
    lessonNumber: 4,
    type: 'vocabulary',
    level: 4,
    character: '負担',
    readings: ['futan'],
    meanings: ['burden', 'load']
  },
  {
    id: 'tr2-ch4-g1',
    lessonNumber: 4,
    type: 'grammar',
    level: 4,
    character: '〜に際して (On the occasion of)',
    readings: ['~ni saishite'],
    meanings: ['On the occasion of / At the time of doing'],
    explanation: 'Used for important or formal events to indicate the time or occurrence of something.',
    sentences: [
      { japanese: '帰国に 際して、お世話になった 人に 挨拶をした。', english: 'On the occasion of returning to my country, I greeted those who helped me.', furigana: '帰国[きこく]に際[さい]して、お世話[せわ]になった人[ひと]に挨拶[あいさつ]をした。' }
    ]
  },
  {
    id: 'tr2-ch4-g2',
    lessonNumber: 4,
    type: 'grammar',
    level: 4,
    character: '〜にわたって (Over / Throughout)',
    readings: ['~ni watatte'],
    meanings: ['Over a period of / Throughout a range of'],
    explanation: 'Expresses that something occurs across a specific span of time, space, or scope.',
    sentences: [
      { japanese: '会議は ３日間に わたって 行われた。', english: 'The meeting was held over three days.', furigana: '会議[かいぎ]は３日間[みっかかん]にわたって行[おこな]われた。' }
    ]
  },
  {
    id: 'tr2-ch4-d1',
    lessonNumber: 4,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '少子高齢化社会の課題',
    meanings: ['Challenges of an Aging Society'],
    content: '現在、日本に おいて 少子高齢化は 深刻な 問題です。この 問題の 解決に 際して、若者の 負担を 減らす 工夫が 必要です。議論は 数十年に わたって 続いて いますが、決定的な 解決策は まだありません。',
    translation: 'Currently, the declining birthrate and aging population is a serious problem in Japan. On the occasion of solving this problem, ingenuity to reduce the burden on young people is necessary. Discussions have continued over decades, but there is still no definitive solution.',
    questions: [
      {
        question: '問題の 解決のために 何が 必要だと言っていますか。',
        options: ['若者の 負担を 減らす 工夫', 'もっと 働くこと', '何もしないこと', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
