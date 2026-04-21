import { Item } from '../../types';

export const lesson23: Item[] = [
  // --- VOCABULARY ---
  { 
    id: 'nl23-v1', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'あるきます', 
    readings: ['arukimasu'], 
    meanings: ['walk'], 
    explanation: 'Polite form of 歩く (Group 1). Walking along a street or path. Use particle 「を」 for the place where you walk.',
    sentences: [
      { japanese: '道を歩きます。', furigana: '[道:みち]を[歩:ある]きます。', english: 'I will walk along the road.' },
      { japanese: '公園（こうえん）を歩くのが好きです。', furigana: '[公園:こうえん]を[歩:ある]くのが[好:す]きです。', english: 'I like walking in the park.' }
    ]
  },
  { 
    id: 'nl23-v2', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ひきます', 
    readings: ['hikimasu'], 
    meanings: ['pull', 'look up (dictionary)'], 
    explanation: 'Polite form of 引く (Group 1). Can mean drawing a line, pulling a door, or looking up a word.',
    sentences: [
      { japanese: '辞書を引いてください。', furigana: '[辞書:じしょ]を[引:ひ]いてください。', english: 'Please look it up in the dictionary.' },
      { japanese: 'ドアを引きます。', furigana: 'ドアを[引:ひ]きます。', english: 'I will pull the door.' }
    ]
  },
  { 
    id: 'nl23-v3', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かえます', 
    readings: ['kaemasu'], 
    meanings: ['change'], 
    explanation: 'Polite form of 変える (Group 2). To change something from one state to another.',
    sentences: [
      { japanese: '予定（よてい）を変えます。', furigana: '[予定:よてい]を[変:か]えます。', english: 'I will change the schedule.' },
      { japanese: '暗（くら）いから、明るく変えましょう。', furigana: '[暗:くら]いから、[明:あか]るく[変:か]えましょう。', english: "It's dark, so let's change it to be brighter." }
    ]
  },
  { 
    id: 'nl23-v4', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'さわります', 
    readings: ['sawarimasu'], 
    meanings: ['touch'], 
    explanation: 'Polite form of 触る (Group 1). Touching a machine or object. Mark the object with 「に」.',
    sentences: [
      { japanese: '機械に触らないでください。', furigana: '[機械:きかい]に[触:さわ]らないでください。', english: 'Please do not touch the machine.' }
    ]
  },
  { 
    id: 'nl23-v7', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'わたります', 
    readings: ['watarimasu'], 
    meanings: ['cross'], 
    explanation: 'Polite form of 渡る (Group 1). Crossing a bridge or a road. Use particle 「を」 for the bridge/road.',
    sentences: [
      { japanese: '橋を渡ります。', furigana: '[橋:はし]を[渡:わた]ります。', english: 'I will cross the bridge.' },
      { japanese: '道を渡る時、気をつけてください。', furigana: '[道:みち]を[渡:わた]る[時:とき]、[気:き]をつけてください。', english: 'Please be careful when crossing the road.' }
    ]
  },
  { 
    id: 'nl23-v8', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'きをつけます', 
    readings: ['ki o tsukemasu'], 
    meanings: ['take care', 'be careful'], 
    explanation: 'To pay attention or be careful (気をつける). Common warning on trains!',
    sentences: [
      { japanese: '足元（あしもと）に気をつけてください。', furigana: '[足元:あしもと]に[気:き]をつけてください。', english: 'Please watch your step.' }
    ]
  },
  { 
    id: 'nl23-v14', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'きかい', 
    readings: ['kikai'], 
    meanings: ['machine'], 
    explanation: 'Machine (機械). Tokyo is full of vending kikai!',
    sentences: [
      { japanese: 'この機械の使い方が分かりません。', furigana: 'この[機械:きかい]の[使:つか]い[方:かた]が[分:わ]かりません。', english: "I don't know how to use this machine." }
    ]
  },
  { 
    id: 'nl23-v19', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'しんごう', 
    readings: ['shingou'], 
    meanings: ['traffic light'], 
    explanation: 'Traffic light (信号). Wait for the ao-shingou (green light) to cross.',
    sentences: [
      { japanese: '信号を右（みぎ）へ曲（ま）がってください。', furigana: '[信号:しんごう]を[右:みぎ]へ[曲:ま]がってください。', english: 'Please turn right at the traffic lights.' }
    ]
  },
  { 
    id: 'nl23-v21', 
    lessonNumber: 23, 
    type: 'vocabulary', 
    level: 5, 
    character: 'はし', 
    readings: ['hashi'], 
    meanings: ['bridge'], 
    explanation: 'Bridge (橋). The Rainbow Bridge in Tokyo is very famous.',
    sentences: [
      { japanese: 'あの橋は長いです。', furigana: 'あの[橋:はし]は[長:なが]いです。', english: 'That bridge is long.' }
    ]
  },

  // --- GRAMMAR ---
  {
    id: 'nl23-g1',
    lessonNumber: 23,
    type: 'grammar',
    level: 5,
    character: 'Sentence (Plain Form) とき、Main Sentence',
    readings: ['... toki'],
    meanings: ['When [Sentence], [Main Sentence]'],
    explanation: 'Used to indicate the time when a certain state or action occurs. \nVerb Dictionary form: Before/during the action.\nVerb Ta-form: After the action finished.',
    sentences: [
      {
        japanese: '分からないとき、辞書を引きます。',
        furigana: '[分:わ]からないとき、[辞書:じしょ]を[引:ひ]きます。',
        english: 'When I do not understand, I look it up in a dictionary.',
        segments: [
          { text: '分からない', reading: 'わからない' }, { text: 'とき', reading: null }, { text: '、', reading: null }, { text: '辞書', reading: 'じしょ' }, { text: 'を', reading: null }, { text: '引きます', reading: 'ひきます' }, { text: '。', reading: null }
        ]
      },
      {
        japanese: '寝る時、「おやすみなさい」と言います。',
        furigana: '[寝:ね]る[時:とき]、「おやすみなさい」と[言:い]います。',
        english: 'When I go to bed, I say "Good night."',
        segments: [
          { text: '（名詞）', reading: '（めいし）' }, { text: '寝る時', reading: 'ねるとき' }, { text: '、', reading: null }, { text: '「', reading: null }, { text: 'おやすみなさい', reading: null }, { text: '」', reading: null }, { text: 'と', reading: null }, { text: '言います', reading: 'いきます' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl23-g2',
    lessonNumber: 23,
    type: 'grammar',
    level: 5,
    character: 'V-jishokei と、[Result]',
    readings: ['V-jishokei to'],
    meanings: ['If/When [Verb], then [Result] happens naturally'],
    explanation: 'Used for natural consequences, machine operations, or giving directions. The result happens automatically.',
    sentences: [
      {
        japanese: 'このボタンを押すと、お釣りが出ます。',
        furigana: 'このボタンを[押:お]すと、お[釣:つ]りが[出:だ]ます。',
        english: 'If you press this button, change will come out.',
        segments: [
          { text: 'この', reading: null }, { text: 'ボタンを', reading: null }, { text: '押すと', reading: 'おすと' }, { text: '、', reading: null }, { text: 'お釣り', reading: 'おつり' }, { text: 'が', reading: null }, { text: '出ます', reading: 'でます' }, { text: '。', reading: null }
        ]
      },
      {
        japanese: 'まっすぐ行くと、右に銀行があります。',
        furigana: 'まっすぐ[行:い]くと、[右:みぎ]に[銀行:ぎんこう]があります。',
        english: 'If you go straight, there is a bank on the right.',
        segments: [
          { text: 'まっすぐ', reading: null }, { text: '行くと', reading: 'いくと' }, { text: '、', reading: null }, { text: '右', reading: 'みぎ' }, { text: 'に', reading: null }, { text: '銀行', reading: 'ぎんこう' }, { text: 'が', reading: null }, { text: 'あります', reading: 'あります' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl23-g3',
    lessonNumber: 23,
    type: 'grammar',
    level: 5,
    character: 'Place (Road, Bridge) を Verb (Movement)',
    readings: ['Place wo Verb'],
    meanings: ['Moving along/across [Place]'],
    explanation: 'The particle 「を」 indicates the place that a person or vehicle moves through or across.',
    sentences: [
      {
        japanese: '道を渡ります。',
        furigana: '[道:みち]を[渡:わた]ります。',
        english: 'I cross the road.',
        segments: [
          { text: '道', reading: 'みち' }, { text: 'を', reading: null }, { text: '渡ります', reading: 'わたります' }, { text: '。', reading: null }
        ]
      }
    ]
  }
];