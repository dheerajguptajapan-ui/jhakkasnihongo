import { Item } from '../../types';

export const lesson20: Item[] = [
  // Vocabulary
  {
    id: 'mn20-v1',
    lessonNumber: 20,
    type: 'vocabulary',
    character: 'ことば',
    readings: ['kotoba'],
    meanings: ['word', 'language'],
    explanation: '言葉.'
  },
  {
    id: 'mn20-v2',
    lessonNumber: 20,
    type: 'vocabulary',
    character: 'メール',
    readings: ['meeru'],
    meanings: ['e-mail']
  },

  // Grammar
  {
    id: 'mn20-g1',
    lessonNumber: 20,
    type: 'grammar',
    character: 'Informal Style',
    readings: ['Casual speech'],
    meanings: ['Informal speaking style'],
    explanation: 'Using dictionary form, nai-form, and ta-form with friends and family.',
    sentences: [{ japanese: 'あした どこか 行く？', english: 'Going somewhere tomorrow? (Casual)', furigana: 'あしたどこか行[い]く？' }]
  },

  // Kanji (Unit 15 - Part 2)
  {
    id: 'mn20-k1',
    lessonNumber: 20,
    type: 'kanji',
    character: '料',
    readings: ['りょう'],
    meanings: ['Fee', 'Materials', 'Ingredient', 'Tax'],
    level: 1,
    radical: '斗',
    mnemonic: 'Measuring rice (米) into cups (斗) for materials/fees.',
    combinations: [{ word: '料金', reading: 'ryoukin', meaning: 'Fee' }]
  },
  {
    id: 'mn20-k2',
    lessonNumber: 20,
    type: 'kanji',
    character: '理',
    readings: ['り'],
    meanings: ['Reason', 'Logic', 'Principle'],
    level: 1,
    radical: '玉',
    mnemonic: 'Polishing a jewel (玉) to see the logic/truth inside.',
    combinations: [{ word: '料理', reading: 'ryouri', meaning: 'Cooking' }]
  },
  {
    id: 'mn20-k3',
    lessonNumber: 20,
    type: 'kanji',
    character: '口',
    readings: ['こう', 'く', 'くち', 'ぐち'],
    meanings: ['Mouth', 'Opening', 'Entrance'],
    level: 1,
    radical: '口',
    mnemonic: 'A square representing an open mouth.',
    combinations: [{ word: '出口', reading: 'deguchi', meaning: 'Exit' }]
  },
  {
    id: 'mn20-k4',
    lessonNumber: 20,
    type: 'kanji',
    character: '目',
    readings: ['もく', 'ぼく', 'め'],
    meanings: ['Eye', 'Item', 'Occasion'],
    level: 1,
    radical: '目',
    mnemonic: 'An eye stylized as a box with two pupils.',
    combinations: [{ word: '目的', reading: 'mokuteki', meaning: 'Purpose' }]
  },
  {
    id: 'mn20-k5',
    lessonNumber: 20,
    type: 'kanji',
    character: '足',
    readings: ['そく', 'あし', 'た'],
    meanings: ['Leg', 'Foot', 'Be sufficient'],
    level: 1,
    radical: '足',
    mnemonic: 'A leg with a foot at the bottom.',
    combinations: [{ word: '遠足', reading: 'ensoku', meaning: 'Excursion' }]
  },
  {
    id: 'mn20-k6',
    lessonNumber: 20,
    type: 'kanji',
    character: '曜',
    readings: ['よう'],
    meanings: ['Weekday', 'Day of the week'],
    level: 1,
    radical: '日',
    mnemonic: 'The sun (日) and a bird (representing cycles) for weekdays.',
    combinations: [{ word: '月曜日', reading: 'getsuyoubi', meaning: 'Monday' }]
  }
];
