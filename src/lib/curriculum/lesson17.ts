import { Item } from '../../types';

export const lesson17: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl17-v1', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'おぼえます', readings: ['oboemasu'], meanings: ['remember', 'memorize'], explanation: '覚える.' },
  { id: 'nl17-v2', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'わすれます', readings: ['wasuremasu'], meanings: ['forget'], explanation: '忘れる.' },
  { id: 'nl17-v3', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'なくします', readings: ['nakushimasu'], meanings: ['lose'], explanation: '無くす.' },
  { id: 'nl17-v4', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'だします', readings: ['dashimasu'], meanings: ['hand in'], explanation: '出す.' },
  { id: 'nl17-v5', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'はらいます', readings: ['haraimasu'], meanings: ['pay'], explanation: '払う.' },
  { id: 'nl17-v6', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'かえします', readings: ['kaeshimasu'], meanings: ['give back', 'return'] },
  { id: 'nl17-v8', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'ぬぎます', readings: ['nugimasu'], meanings: ['take off (clothes)'] },
  { id: 'nl17-v11', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'しんぱいします', readings: ['shinpai shimasu'], meanings: ['worry'] },
  { id: 'nl17-v12', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'ざんぎょうします', readings: ['zangyou shimasu'], meanings: ['work overtime'] },
  { id: 'nl17-v16', lessonNumber: 17, type: 'vocabulary', level: 1, character: '大切な', readings: ['taisetsu na'], meanings: ['important'] },
  { id: 'nl17-v17', lessonNumber: 17, type: 'vocabulary', level: 1, character: '大丈夫', readings: ['daijoubu'], meanings: ['all right'] },
  { id: 'nl17-v18', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'あぶない', readings: ['abunai'], meanings: ['dangerous'] },
  { id: 'nl17-v19', lessonNumber: 17, type: 'vocabulary', level: 1, character: 'もんだい', readings: ['mondai'], meanings: ['problem', 'question'] },
  { id: 'nl17-v26', lessonNumber: 17, type: 'vocabulary', level: 1, character: '薬', readings: ['kusuri'], meanings: ['medicine'] },

  // --- GRAMMAR ---
  {
    id: 'nl17-g1',
    lessonNumber: 17,
    type: 'grammar',
    level: 1,
    character: 'V-ない で ください',
    readings: ['V-nai de kudasai'],
    meanings: ['Please do not [Verb]'],
    explanation: 'Negative request.',
    sentences: [
      {
        japanese: [
          { text: 'ここで', reading: null }, { text: '写真', reading: 'しゃしん' }, { text: 'を', reading: null }, { text: '撮らないで', reading: 'とらないで' }, { text: 'ください', reading: null }, { text: '。', reading: null }
        ],
        english: 'Please do not take photos here.'
      }
    ]
  },
  {
    id: 'nl17-g2',
    lessonNumber: 17,
    type: 'grammar',
    level: 1,
    character: 'V-なければ なりません',
    readings: ['V-nakereba narimasen'],
    meanings: ['Must [Verb]'],
    explanation: 'Obligation or necessity.',
    sentences: [
      {
        japanese: [
          { text: '薬', reading: 'くすり' }, { text: 'を', reading: null }, { text: '飲まなければ', reading: 'のまなきれれば' }, { text: 'なりません', reading: null }, { text: '。', reading: null }
        ],
        english: 'I must take medicine.'
      }
    ]
  },
];