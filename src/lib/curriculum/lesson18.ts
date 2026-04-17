import { Item } from '../../types';

export const lesson18: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl18-v1', lessonNumber: 18, type: 'vocabulary', level: 1, character: 'できます', readings: ['dekimasu'], meanings: ['can (do)', 'be able to'], explanation: '出来る.' },
  { id: 'nl18-v2', lessonNumber: 18, type: 'vocabulary', level: 1, character: '洗います', readings: ['araimasu'], meanings: ['wash'] },
  { id: 'nl18-v3', lessonNumber: 18, type: 'vocabulary', level: 1, character: '弾きます', readings: ['hikimasu'], meanings: ['play (instrument)'] },
  { id: 'nl18-v4', lessonNumber: 18, type: 'vocabulary', level: 1, character: '歌います', readings: ['utaimasu'], meanings: ['sing'] },
  { id: 'nl18-v5', lessonNumber: 18, type: 'vocabulary', level: 1, character: '集めます', readings: ['atsumemasu'], meanings: ['collect', 'gather'] },
  { id: 'nl18-v8', lessonNumber: 18, type: 'vocabulary', level: 1, character: '予約します', readings: ['yoyaku shimasu'], meanings: ['reserve', 'book'] },
  { id: 'nl18-v10', lessonNumber: 18, type: 'vocabulary', level: 1, character: 'ピアノ', readings: ['piano'], meanings: ['piano'] },
  { id: 'nl18-v12', lessonNumber: 18, type: 'vocabulary', level: 1, character: '現金', readings: ['genkin'], meanings: ['cash'] },
  { id: 'nl18-v13', lessonNumber: 18, type: 'vocabulary', level: 1, character: 'お祈り', readings: ['oinori'], meanings: ['prayer'] },
  { id: 'nl18-v16', lessonNumber: 18, type: 'vocabulary', level: 1, character: '動物', readings: ['doubutsu'], meanings: ['animal'] },
  { id: 'nl18-v18', lessonNumber: 18, type: 'vocabulary', level: 1, character: 'インターネット', readings: ['inta-netto'], meanings: ['internet'] },
  { id: 'nl18-v19', lessonNumber: 18, type: 'vocabulary', level: 1, character: 'なかなか', readings: ['nakanaka'], meanings: ['not easily (with negative)'] },
  { id: 'nl18-v20', lessonNumber: 18, type: 'vocabulary', level: 1, character: 'ぜひ', readings: ['zehi'], meanings: ['definitely', 'by all means'] },

  // --- GRAMMAR ---
  {
    id: 'nl18-g1',
    lessonNumber: 18,
    type: 'grammar',
    level: 1,
    character: 'V-辞書形 こと が できます',
    readings: ['V-jishokei koto ga dekimasu'],
    meanings: ['Can [Verb]'],
    explanation: 'Potential/ability.',
    sentences: [
      {
        japanese: [
          { text: '私は', reading: 'わたしは' }, { text: '日本語', reading: 'にほんご' }, { text: 'を', reading: null }, { text: '話す', reading: 'はなす' }, { text: 'こと', reading: null }, { text: 'が', reading: null }, { text: 'できます', reading: null }, { text: '。', reading: null }
        ],
        english: 'I can speak Japanese.'
      }
    ]
  },
  {
    id: 'nl18-g2',
    lessonNumber: 18,
    type: 'grammar',
    level: 1,
    character: '私の 趣味は V-辞書形 ことです',
    readings: ['Watashi no shumi wa V-jishokei koto desu'],
    meanings: ['My hobby is [Verb]-ing'],
    explanation: 'Stating hobbies.',
    sentences: [
      {
        japanese: [
          { text: '私の', reading: 'わたしの' }, { text: '趣味', reading: 'しゅみ' }, { text: 'は', reading: null }, { text: '映画', reading: 'えいが' }, { text: 'を', reading: null }, { text: '見る', reading: 'みる' }, { text: 'こと', reading: null }, { text: 'です', reading: null }, { text: '。', reading: null }
        ],
        english: 'My hobby is watching movies.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl18-d1',
    lessonNumber: 18,
    type: 'dokkai',
    level: 1,
    character: 'Riyaさんの趣味',
    meanings: ['Riya\'s Hobby'],
    content: [
      { text: '私の', reading: 'わたしの' }, { text: '趣味', reading: 'しゅみ' }, { text: 'は', reading: null }, { text: 'ピアノを', reading: null }, { text: '弾く', reading: 'ひく' }, { text: 'こと', reading: null }, { text: 'です。', reading: null },
      { text: '\n', reading: null },
      { text: 'クラシックも', reading: null }, { text: 'ジャズも', reading: null }, { text: '弾く', reading: 'ひく' }, { text: 'こと', reading: null }, { text: 'が', reading: null }, { text: 'できます。', reading: null }
    ],
    translation: 'My hobby is playing the piano. I can play both classical and jazz.',
    questions: [
      {
        question: 'Riyaさんは 何を 弾くことが できますか。',
        options: ['ピアノ', 'ギター', 'ドラム', 'バイオリン'],
        answerIndex: 0
      }
    ]
  }
];
