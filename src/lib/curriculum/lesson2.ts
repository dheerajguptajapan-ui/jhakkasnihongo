import { Item } from '../../types';

export const lesson2: Item[] = [
  {
    id: 'mn2-v1',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'これ',
    readings: ['kore'],
    meanings: ['this (thing here)'],
    explanation: 'A demonstrative pronoun referring to a thing near the speaker.',
    sentences: [{ japanese: 'これは 辞書です。', english: 'This is a dictionary.' }]
  },
  {
    id: 'mn2-v2',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'それ',
    readings: ['sore'],
    meanings: ['that (thing near you)'],
    explanation: 'A demonstrative pronoun referring to a thing near the listener.',
    sentences: [{ japanese: 'それは わたしの 傘です。', english: 'That is my umbrella.' }]
  },
  {
    id: 'mn2-v3',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'あれ',
    readings: ['are'],
    meanings: ['that (thing over there)'],
    explanation: 'A demonstrative pronoun referring to a thing far from both speaker and listener.',
    sentences: [{ japanese: 'あれは わたしの かばんです。', english: 'That over there is my bag.' }]
  },
  {
    id: 'mn2-v4',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'この〜',
    readings: ['kono'],
    meanings: ['this ~'],
    explanation: 'A demonstrative adjective modifying a noun near the speaker.',
    sentences: [{ japanese: 'この 本は わたしのです。', english: 'This book is mine.' }]
  },
  {
    id: 'mn2-v5',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'ほん',
    readings: ['hon'],
    meanings: ['book'],
    explanation: '本.'
  },
  {
    id: 'mn2-g1',
    lessonNumber: 2,
    type: 'grammar',
    character: 'これ/それ/あれ',
    readings: ['kore/sore/are'],
    meanings: ['Demonstrative Nouns'],
    explanation: 'これ (near speaker), それ (near listener), あれ (far from both) function as nouns.',
    sentences: [{ japanese: 'それは 何ですか。', english: 'What is that?', furigana: 'それは何[なん]ですか。' }]
  },
  {
    id: 'mn2-d1',
    lessonNumber: 2,
    type: 'dokkai',
    character: 'ほんのきもちです',
    readings: ['Hon no kimochi desu'],
    meanings: ['It\'s just a token of my gratitude'],
    content: '山田：はい、どなたですか。\nサントス：４０８のサントスです。\nサントス：こんにちは。サントスです。これからお世話になります。どうぞよろしくお願いします。\n山田：こちらこそよろしく。\nサントス：あの、これ、ほんの気持ちです。\n山田：あ、どうも・・・何ですか。\nサントス：コーヒーです。どうぞ。\n山田：どうもありがとうございます。',
    translation: 'Yamada: Yes, who is it?\nSantos: It\'s Santos from 408.\nSantos: Hello, I\'m Santos. I\'ll be in your care from now on. Pleased to meet you.\nYamada: Likewise.\nSantos: Um, this is just a token of my gratitude.\nYamada: Oh, thank you... what is it?\nSantos: It\'s coffee. Please take it.\nYamada: Thank you very much.',
    questions: [
      {
        question: 'サントスさんは何番の部屋に住んでいますか。',
        options: ['４０１', '４０８', '３０８', '５０８'],
        answerIndex: 1
      },
      {
        question: 'サントスさんは何をあげましたか。',
        options: ['お茶', 'コーヒー', 'チョコレート', '本'],
        answerIndex: 1
      }
    ]
  },
  {
    id: 'mn2-k1',
    lessonNumber: 2,
    type: 'kanji',
    character: '本',
    readings: ['ほん', 'もと'],
    meanings: ['Book', 'Origin'],
    level: 1,
    radical: '木',
    mnemonic: 'A tree with a mark showing its roots.',
    combinations: [{ word: '日本語', reading: 'にほんご', meaning: 'Japanese language' }],
    sentences: [{ japanese: '本を読みます。', english: 'I read a book.', furigana: '本[ほん]を読[よ]みます。' }]
  }
];
