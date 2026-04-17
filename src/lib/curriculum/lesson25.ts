import { Item } from '../../types';

export const lesson25: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl25-v1', lessonNumber: 25, type: 'vocabulary', level: 5, character: '考えます', readings: ['kangaemasu'], meanings: ['think', 'consider'], explanation: '考える.' },
  { id: 'nl25-v2', lessonNumber: 25, type: 'vocabulary', level: 5, character: '着きます', readings: ['tsukimasu'], meanings: ['arrive'], explanation: '着く.' },
  { id: 'nl25-v3', lessonNumber: 25, type: 'vocabulary', level: 5, character: '留学します', readings: ['ryuugaku shimasu'], meanings: ['study abroad'] },
  { id: 'nl25-v5', lessonNumber: 25, type: 'vocabulary', level: 5, character: '田舎', readings: ['inaka'], meanings: ['countryside', 'hometown'] },
  { id: 'nl25-v6', lessonNumber: 25, type: 'vocabulary', level: 5, character: '大使館', readings: ['taishikan'], meanings: ['embassy'] },
  { id: 'nl25-v10', lessonNumber: 25, type: 'vocabulary', level: 5, character: 'もし', readings: ['moshi'], meanings: ['if (with -tara)'] },
  { id: 'nl25-v11', lessonNumber: 25, type: 'vocabulary', level: 5, character: 'いくら', readings: ['ikura'], meanings: ['however much (with -temo)'] },
  { id: 'nl25-v13', lessonNumber: 25, type: 'vocabulary', level: 5, character: '事', readings: ['koto'], meanings: ['thing', 'matter'] },
  { id: 'nl25-v14', lessonNumber: 25, type: 'vocabulary', level: 5, character: 'お世話になりました', readings: ['osewa ni narimashita'], meanings: ['Thank you for everything.'] },
  { id: 'nl25-v15', lessonNumber: 25, type: 'vocabulary', level: 5, character: '頑張ります', readings: ['ganbarimasu'], meanings: ["do one's best"] },
  { id: 'nl25-v16', lessonNumber: 25, type: 'vocabulary', level: 5, character: 'どうぞ お元気で', readings: ['douzo ogenki de'], meanings: ['Best of luck.'] },

  // --- GRAMMAR ---
  {
    id: 'nl25-g1',
    lessonNumber: 25,
    type: 'grammar',
    level: 5,
    character: 'V-たら、[Result]',
    readings: ['V-tara, ...'],
    meanings: ['If/When [Verb], [Result]'],
    explanation: 'Conditional form.',
    sentences: [
      {
        japanese: [
          { text: 'お金', reading: 'おかね' }, { text: 'が', reading: null }, { text: 'あったら', reading: null }, { text: '、', reading: null }, { text: '旅行', reading: 'りょこう' }, { text: 'します', reading: null }, { text: '。', reading: null }
        ],
        english: 'If I have money, I will travel.'
      }
    ]
  },
  {
    id: 'nl25-g2',
    lessonNumber: 25,
    type: 'grammar',
    level: 5,
    character: 'V-て も、[Result]',
    readings: ['V-te mo, ...'],
    meanings: ['Even if [Verb], [Result]'],
    explanation: 'Contrary to expectation.',
    sentences: [
      {
        japanese: [
          { text: '雨', reading: 'あめ' }, { text: 'が', reading: null }, { text: '降っても', reading: 'ふっても' }, { text: '、', reading: null }, { text: '洗濯', reading: 'せんたく' }, { text: 'します', reading: null }, { text: '。', reading: null }
        ],
        english: 'Even if it rains, I will do laundry.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl25-d1',
    lessonNumber: 25,
    type: 'dokkai',
    level: 5,
    character: 'お世話に なりました',
    meanings: ['Thank You for Everything'],
    content: [
      { text: 'Dheerajさん、長い', reading: 'ながい' }, { text: '間', reading: 'あいだ' }, { text: 'お世話に', reading: 'おせわに' }, { text: 'なりました。', reading: null },
      { text: '\n', reading: null },
      { text: '来月', reading: 'らいげつ' }, { text: 'インドへ 帰ります', reading: 'kaerimasu' }, { text: '。', reading: null },
      { text: '\n', reading: null },
      { text: '帰っても', reading: 'kaettemo' }, { text: '、時々', reading: 'tokidoki' }, { text: '日本語を', reading: null }, { text: '勉強', reading: 'べんきょう' }, { text: 'します。どうぞ お元気で。', reading: null }
    ],
    translation: 'Dheeraj, thank you for everything over this long time. I will return to India next month. Even after I return, I will study Japanese from time to time. Best of luck.',
    questions: [
      {
        question: 'この人は 来月 何を しますか。',
        options: ['インドへ 帰る', '日本に 来る', '引っ越しする', '仕事を 辞める'],
        answerIndex: 0
      }
    ]
  }
];
