import { Item } from '../../types';

export const n2chapter9: Item[] = [
  {
    id: 'tr2-ch9-v1',
    lessonNumber: 9,
    type: 'vocabulary',
    level: 4,
    character: '奨学金',
    readings: ['shougakukin'],
    meanings: ['scholarship']
  },
  {
    id: 'tr2-ch9-v2',
    lessonNumber: 9,
    type: 'vocabulary',
    level: 4,
    character: '講義',
    readings: ['kougi'],
    meanings: ['lecture']
  },
  {
    id: 'tr2-ch9-v3',
    lessonNumber: 9,
    type: 'vocabulary',
    level: 4,
    character: '専攻',
    readings: ['senkou'],
    meanings: ['major', 'specialization']
  },
  {
    id: 'tr2-ch9-g1',
    lessonNumber: 9,
    type: 'grammar',
    level: 4,
    character: '〜おかげで (Thanks to)',
    readings: ['~okage de'],
    meanings: ['Thanks to / Owing to (Positive result)'],
    explanation: 'Used to express gratitude for a favorable outcome caused by a certain factor.',
    sentences: [
      { japanese: '先生の おかげで、合格できました。', english: 'Thanks to the teacher, I was able to pass.', furigana: '先生[せんせい]のおかげで、合格[ごうかく]できました。' }
    ]
  },
  {
    id: 'tr2-ch9-g2',
    lessonNumber: 9,
    type: 'grammar',
    level: 4,
    character: '〜わりには (Despite / For... it is...)',
    readings: ['~wari ni wa'],
    meanings: ['For... / Considering that... (unexpected results)'],
    explanation: 'Used when the result or state is different from what one would typically expect from the circumstances.',
    sentences: [
      { japanese: '彼は 初心者の わりには、テニスが 上手だ。', english: 'For a beginner, he is good at tennis.', furigana: '彼[かれ]は初心者[しょしんしゃ]のわりには、テニスが上手[じょうず]だ。' }
    ]
  },
  {
    id: 'tr2-ch9-d1',
    lessonNumber: 9,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '大学での学び',
    meanings: ['Learning at University'],
    content: '奨学金の おかげで、私は 好きな 専攻を 勉強できています。大学の 講義は 難しい わりには、学生たちは 熱心に 聞いています。教育は 未来を 作る 鍵です。',
    translation: 'Thanks to the scholarship, I am able to study the major I like. For university lectures being difficult, the students are listening enthusiastically. Education is the key to creating the future.',
    questions: [
      {
        question: 'どうして 好きな 勉強が できていますか。',
        options: ['奨学金の おかげ', 'お金があるから', '暇だから', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
