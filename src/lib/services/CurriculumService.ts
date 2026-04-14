import { allCurriculum, getAllItems, totalLessons, totalN4Chapters, totalN3Chapters, totalN2Chapters } from '../curriculum';
import { Item } from '../../types';

/**
 * Top 1% Sustainable Data Strategy:
 * Centralizing curriculum access ensures that internal level mappings (N5=1, N4=2, etc.)
 * and data filtering logic are consistent across the entire app.
 */

export const CurriculumService = {
  /**
   * Internal level mapping:
   * N5 = 1, N4 = 2, N3 = 3, N2 = 4
   */
  getLevelId(levelLabel: string): number {
    const mapping: Record<string, number> = {
      'n5': 1,
      'n4': 2,
      'n3': 3,
      'n2': 4
    };
    return mapping[levelLabel.toLowerCase()] || 1;
  },

  getChapterCount(levelId: number): number {
    if (levelId === 1) return totalLessons; // N5 (now includes expansion)
    if (levelId === 2) return totalN4Chapters;
    if (levelId === 3) return totalN3Chapters;
    if (levelId === 4) return totalN2Chapters;
    return 0;
  },

  getChapterItems(levelId: number, chapterId: number): Item[] {
    return allCurriculum[levelId]?.[chapterId] || [];
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
      4: 'TRY N2 Mastery'
    };
    return subtitles[levelId] || 'JLPT Preparation';
  }
};
