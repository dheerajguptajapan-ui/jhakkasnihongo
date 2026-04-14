import { Item } from '../../types';

export const n2chapter10: Item[] = [
  {
    id: 'tr2-ch10-v1',
    lessonNumber: 10,
    type: 'vocabulary',
    level: 4,
    character: '気候変動',
    readings: ['kikou hendou'],
    meanings: ['climate change']
  },
  {
    id: 'tr2-ch10-v2',
    lessonNumber: 10,
    type: 'vocabulary',
    level: 4,
    character: '資源',
    readings: ['shigen'],
    meanings: ['resources']
  },
  {
    id: 'tr2-ch10-v3',
    lessonNumber: 10,
    type: 'vocabulary',
    level: 4,
    character: '保護',
    readings: ['hogo'],
    meanings: ['protection', 'conservation']
  },
  {
    id: 'tr2-ch10-g1',
    lessonNumber: 10,
    type: 'grammar',
    level: 4,
    character: '〜からといって (Just because)',
    readings: ['~kara to itte'],
    meanings: ['Just because... doesn\'t mean...'],
    explanation: 'Used to say that a particular reason is not sufficient to lead to a certain conclusion.',
    sentences: [
      { japanese: '日本人だからといって、誰もが 漢字が 得意な わけではない。', english: 'Just because someone is Japanese, it doesn\'t mean everyone is good at Kanji.', furigana: '日本人[にほんじん]だからといって、誰[だれ]もが漢字[かんじ]が得意[とくい]なわけではない。' }
    ]
  },
  {
    id: 'tr2-ch10-g2',
    lessonNumber: 10,
    type: 'grammar',
    level: 4,
    character: '〜ばかりか (Not only)',
    readings: ['~bakari ka'],
    meanings: ['Not only... but also... / As well as...'],
    explanation: 'Used when something happens in addition to what has already been mentioned, often something unexpected or more intense.',
    sentences: [
      { japanese: 'その 店は 味がいい ばかりか、サービスも 素晴らしい。', english: 'That store not only tastes good but the service is also wonderful.', furigana: 'その店[みせ]は味[あじ]がいいばかりか、サービスも素晴[すば]らしい。' }
    ]
  },
  {
    id: 'tr2-ch10-d1',
    lessonNumber: 10,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '地球環境の未来',
    meanings: ['Future of the Global Environment'],
    content: '地球温暖化は 進む ばかりか、気象災害も 増えています。便利だからといって 資源を 無駄に 使うのは やめるべきです。一人一人の 意識が 改善に 向けた 第一歩に なります。',
    translation: 'Not only is global warming progressing, but weather disasters are also increasing. Even if it is convenient, we should stop wasting resources. Each person\'s awareness will be the first step toward improvement.',
    questions: [
      {
        question: '環境問題に ついて 何が 言われていますか。',
        options: ['温暖化が 進む ばかりか 災害も 増えている', '何も 起きていない', '良くなっている', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
