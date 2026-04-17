import { allCurriculum, getAllItems, totalLessons, totalN4Chapters, totalN3Chapters, totalN2Chapters, totalN1Chapters } from '../curriculum';
import { Item } from '../../types';
import { PersistenceService } from './PersistenceService';

const patchStorage: Record<number, Record<number, Item[]>> = {};

/**
 * Top 1% Sustainable Data Strategy:
 * Centralizing curriculum access ensures that internal level mappings (N5=1, N4=2, etc.)
 * and data filtering logic are consistent across the entire app.
 */

export const CurriculumService = {
  /**
   * Loads any remote patches from local storage into memory.
   */
  async initialize(): Promise<void> {
    const patchItems = await PersistenceService.getRemotePatch();
    patchItems.forEach(item => {
      const levelId = item.level;
      const chapterId = item.lessonNumber;
      if (!patchStorage[levelId]) patchStorage[levelId] = {};
      if (!patchStorage[levelId][chapterId]) patchStorage[levelId][chapterId] = [];
      patchStorage[levelId][chapterId].push(item);
    });
  },

  /**
   * Internal level mapping:
   * N1 = 1, N2 = 2, N3 = 3, N4 = 4, N5 = 5
   */
  getLevelId(levelLabel: string): number {
    const mapping: Record<string, number> = {
      'n5': 5,
      'n4': 4,
      'n3': 3,
      'n2': 2,
      'n1': 1
    };
    return mapping[levelLabel.toLowerCase()] || 5;
  },

  getChapterCount(levelId: number): number {
    if (levelId === 5) return totalLessons; // N5
    if (levelId === 4) return totalN4Chapters;
    if (levelId === 3) return totalN3Chapters;
    if (levelId === 2) return totalN2Chapters;
    if (levelId === 1) return totalN1Chapters;
    return 0;
  },

  getChapterItems(levelId: number, chapterId: number): Item[] {
    const staticItems = allCurriculum[levelId]?.[chapterId] || [];
    const dynamicItems = patchStorage[levelId]?.[chapterId] || [];
    
    // Merge: In case of ID collisions, dynamic (patch) takes priority
    const itemMap = new Map();
    staticItems.forEach(item => {
      const normalized = this.normalizeItem(item);
      itemMap.set(normalized.id, normalized);
    });
    dynamicItems.forEach(item => {
      const normalized = this.normalizeItem(item);
      itemMap.set(normalized.id, normalized);
    });
    
    return Array.from(itemMap.values());
  },

  /**
   * Retrieves all items for a specific level, useful for global progress tracking.
   */
  getLevelItems(levelId: number): Item[] {
    const chapters = allCurriculum[levelId] || {};
    return (Object.values(chapters).flat() as Item[]).map(item => this.normalizeItem(item));
  },

  /**
   * Returns a flat list of ALL curriculum items across all levels.
   */
  getTotalSystemItems(): Item[] {
    return getAllItems().map(item => this.normalizeItem(item));
  },

  getChapterLabel(levelId: number): string {
    return levelId === 1 ? 'Lesson' : 'Chapter';
  },

  getLevelSubtitle(levelId: number): string {
    const subtitles: Record<number, string> = {
      1: 'N5 Lexical Foundation',
      2: 'N4 Syntactic Core',
      3: 'N3 Relational Logic',
      4: 'N2 Advanced Nuance',
      5: 'N1 Master Synthesis'
    };
    return subtitles[levelId] || 'JLPT Preparation';
  },

  /**
   * Top 1% Normalization:
   * Ensures every item has the 'segments' property for native Furigana rendering,
   * even if loaded from legacy JSON files.
   */
  normalizeItem(item: Item): Item {
    if (item.segments) return item;
    
    // Check if vocabulary type uses old structure
    if (item.type === 'vocabulary' && item.character && !item.segments) {
      return {
        ...item,
        segments: [{ text: item.character, reading: item.readings?.[0] || null }]
      };
    }
    
    // Check grammar sentences
    if (item.sentences) {
      item.sentences = item.sentences.map(s => ({
        ...s,
        segments: Array.isArray(s.japanese) ? s.japanese : [{ text: s.japanese, reading: s.furigana || null }]
      }));
    }

    return item;
  }
};
