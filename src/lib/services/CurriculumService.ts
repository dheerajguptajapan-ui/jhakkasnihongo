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
   * N5 = 1, N4 = 2, N3 = 3, N2 = 4
   */
  getLevelId(levelLabel: string): number {
    const mapping: Record<string, number> = {
      'n5': 1,
      'n4': 2,
      'n3': 3,
      'n2': 4,
      'n1': 5
    };
    return mapping[levelLabel.toLowerCase()] || 1;
  },

  getChapterCount(levelId: number): number {
    if (levelId === 1) return totalLessons; // N5 (now includes expansion)
    if (levelId === 2) return totalN4Chapters;
    if (levelId === 3) return totalN3Chapters;
    if (levelId === 4) return totalN2Chapters;
    if (levelId === 5) return totalN1Chapters;
    return 0;
  },

  getChapterItems(levelId: number, chapterId: number): Item[] {
    const staticItems = allCurriculum[levelId]?.[chapterId] || [];
    const dynamicItems = patchStorage[levelId]?.[chapterId] || [];
    
    // Merge: In case of ID collisions, dynamic (patch) takes priority
    const itemMap = new Map();
    staticItems.forEach(item => itemMap.set(item.id, item));
    dynamicItems.forEach(item => itemMap.set(item.id, item));
    
    return Array.from(itemMap.values());
  },

  /**
   * Retrieves all items for a specific level, useful for global progress tracking.
   */
  getLevelItems(levelId: number): Item[] {
    const chapters = allCurriculum[levelId] || {};
    return Object.values(chapters).flat() as Item[];
  },

  /**
   * Returns a flat list of ALL curriculum items across all levels.
   */
  getTotalSystemItems(): Item[] {
    return getAllItems();
  },

  getChapterLabel(levelId: number): string {
    return levelId === 1 ? 'Lesson' : 'Chapter';
  },

  getLevelSubtitle(levelId: number): string {
    const subtitles: Record<number, string> = {
      1: 'Minna no Nihongo Lessons 1–25',
      2: 'TRY N4 Grammar Master',
      3: 'TRY N3 Grammar Hub',
      4: 'TRY N2 Mastery',
      5: 'N1 Advanced Synthesis'
    };
    return subtitles[levelId] || 'JLPT Preparation';
  }
};
