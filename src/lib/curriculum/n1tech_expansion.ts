import { Item } from '../../types';

/**
 * N1 Tech & Future Intelligence Expansion
 * Specialized vocabulary and grammar focusing on high-tech, 
 * mission-critical, and future-ready linguistic nodes.
 */

export const n1tech_expansion: Item[] = [
  // --- TECHNICAL VOCABULARY ---
  { 
    id: 'n1-tech-v1', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '基盤[きばん]', 
    readings: ['kiban'], 
    meanings: ['infrastructure', 'foundation', 'base layer'],
    explanation: 'Core technical foundation for complex systems.'
  },
  { 
    id: 'n1-tech-v2', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '整合性[せいごうせい]', 
    readings: ['seigousei'], 
    meanings: ['integrity', 'consistency', 'cohesion'],
    explanation: 'Logical consistency within a data stream or protocol.'
  },
  { 
    id: 'n1-tech-v3', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '脆弱性[ぜいじゃくせい]', 
    readings: ['zeijakusei'], 
    meanings: ['vulnerability', 'fragility'],
    explanation: 'A point of weakness in a security architecture.'
  },
  { 
    id: 'n1-tech-v4', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '仮想化[かそうか]', 
    readings: ['kasouka'], 
    meanings: ['virtualization'],
    explanation: 'Simulating hardware platforms or resource layers.'
  },
  { 
    id: 'n1-tech-v5', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '双方向[そうほうこう]', 
    readings: ['souhoukou'], 
    meanings: ['bidirectional', 'interactive'],
    explanation: 'Information flowing in both directions simultaneously.'
  },
  { 
    id: 'n1-tech-v6', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '最適化[さいてきか]', 
    readings: ['saitekika'], 
    meanings: ['optimization'],
    explanation: 'Adjusting a system for maximum efficiency.'
  },
  { 
    id: 'n1-tech-v7', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '同期[どうき]', 
    readings: ['douki'], 
    meanings: ['synchronization', 'sync'],
    explanation: 'Aligning multiple nodes to the same temporal state.'
  },
  { 
    id: 'n1-tech-v8', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '暗号化[あんごうか]', 
    readings: ['angouka'], 
    meanings: ['encryption'],
    explanation: 'Encoding data for secure transmission over non-secure nodes.'
  },
  { 
    id: 'n1-tech-v9', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '耐性[たいせい]', 
    readings: ['taisei'], 
    meanings: ['resistance', 'tolerance'],
    explanation: 'The ability of a system to withstand external stress.'
  },
  { 
    id: 'n1-tech-v10', 
    lessonNumber: 15, 
    type: 'vocabulary', 
    level: 1, 
    character: '冗長性[じょうちょうせい]', 
    readings: ['jouchousei'], 
    meanings: ['redundancy'],
    explanation: 'Duplicate infrastructure to ensure mission continuity.'
  },

  // --- MISSION CRITICAL GRAMMAR ---
  {
    id: 'n1-tech-g1',
    lessonNumber: 15,
    type: 'grammar',
    level: 1,
    character: '〜を余儀なくされる (to be forced to...)',
    readings: ['~o yogi naku sareru'],
    meanings: ['to be forced to', 'to have no choice but to'],
    explanation: 'Formal N1 grammar used when an outcome is unavoidable due to external factors.',
    sentences: [
      { japanese: 'システム 障害により、全ミッションの 中断を 余儀なくされた。', english: 'Due to a system failure, we were forced to suspend all missions.', furigana: 'システム障[しょう]害[がい]により、全[ぜん]ミッションの中断[ちゅうだん]を余儀[よぎ]なくされた。' }
    ]
  },
  {
    id: 'n1-tech-g2',
    lessonNumber: 15,
    type: 'grammar',
    level: 1,
    character: '〜以外のなにものでもない (strong emphasis)',
    readings: ['~ igai no nanimono demo nai'],
    meanings: ['nothing other than', 'it is truly...'],
    explanation: 'Used for absolute confirmation of a technical status.',
    sentences: [
      { japanese: 'この 整合性 エラーは、外部からの 干渉 以外の なにものでもない。', english: 'This integrity error is nothing other than external interference.', furigana: 'この整合性[せいごうせい]エラーは、外部[がいぶ]からの干渉[かんしょう]以外[いがい]のなにものでもない。' }
    ]
  }
];
