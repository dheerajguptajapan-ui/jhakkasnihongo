import { Item } from '../../types';
import { lesson1 } from './lesson1';
import { lesson2 } from './lesson2';
import { lesson3 } from './lesson3';
import { lesson4 } from './lesson4';
import { lesson5 } from './lesson5';
import { lesson6 } from './lesson6';
import { lesson7 } from './lesson7';
import { lesson8 } from './lesson8';
import { lesson9 } from './lesson9';
import { lesson10 } from './lesson10';
import { lesson11 } from './lesson11';
import { lesson12 } from './lesson12';
import { lesson13 } from './lesson13';
import { lesson14 } from './lesson14';
import { lesson15 } from './lesson15';
import { lesson16 } from './lesson16';
import { lesson17 } from './lesson17';
import { lesson18 } from './lesson18';
import { lesson19 } from './lesson19';
import { lesson20 } from './lesson20';
import { lesson21 } from './lesson21';
import { lesson22 } from './lesson22';
import { lesson23 } from './lesson23';
import { lesson24 } from './lesson24';
import { lesson25 } from './lesson25';

// N4 Chapters
import { n4chapter1 } from './n4chapter1';
import { n4chapter2 } from './n4chapter2';
import { n4chapter3 } from './n4chapter3';
import { n4chapter4 } from './n4chapter4';
import { n4chapter5 } from './n4chapter5';
import { n4chapter6 } from './n4chapter6';
import { n4chapter7 } from './n4chapter7';
import { n4chapter8 } from './n4chapter8';
import { n4chapter9 } from './n4chapter9';
import { n4chapter10 } from './n4chapter10';
import { n4chapter11 } from './n4chapter11';

// N3 Chapters
import { n3chapter1 } from './n3chapter1';
import { n3chapter2 } from './n3chapter2';
import { n3chapter3 } from './n3chapter3';
import { n3chapter4 } from './n3chapter4';
import { n3chapter5 } from './n3chapter5';
import { n3chapter6 } from './n3chapter6';
import { n3chapter7 } from './n3chapter7';
import { n3chapter8 } from './n3chapter8';
import { n3chapter9 } from './n3chapter9';
import { n3chapter10 } from './n3chapter10';
import { n3chapter11 } from './n3chapter11';

// N2 Chapters
import { n2chapter1 } from './n2chapter1';
import { n2chapter2 } from './n2chapter2';
import { n2chapter3 } from './n2chapter3';
import { n2chapter4 } from './n2chapter4';
import { n2chapter5 } from './n2chapter5';
import { n2chapter6 } from './n2chapter6';
import { n2chapter7 } from './n2chapter7';
import { n2chapter8 } from './n2chapter8';
import { n2chapter9 } from './n2chapter9';
import { n2chapter10 } from './n2chapter10';
import { n2chapter11 } from './n2chapter11';
import { n2chapter12 } from './n2chapter12';
import { n2chapter13 } from './n2chapter13';
import { n2chapter14 } from './n2chapter14';

const n5Lessons: Record<number, Item[]> = {
  1: lesson1, 2: lesson2, 3: lesson3, 4: lesson4, 5: lesson5,
  6: lesson6, 7: lesson7, 8: lesson8, 9: lesson9, 10: lesson10,
  11: lesson11, 12: lesson12, 13: lesson13, 14: lesson14, 15: lesson15,
  16: lesson16, 17: lesson17, 18: lesson18, 19: lesson19, 20: lesson20,
  21: lesson21, 22: lesson22, 23: lesson23, 24: lesson24, 25: lesson25
};

const n4Lessons: Record<number, Item[]> = {
  1: n4chapter1,
  2: n4chapter2,
  3: n4chapter3,
  4: n4chapter4,
  5: n4chapter5,
  6: n4chapter6,
  7: n4chapter7,
  8: n4chapter8,
  9: n4chapter9,
  10: n4chapter10,
  11: n4chapter11,
};

const n3Lessons: Record<number, Item[]> = {
  1: n3chapter1,
  2: n3chapter2,
  3: n3chapter3,
  4: n3chapter4,
  5: n3chapter5,
  6: n3chapter6,
  7: n3chapter7,
  8: n3chapter8,
  9: n3chapter9,
  10: n3chapter10,
  11: n3chapter11,
};

const n2Lessons: Record<number, Item[]> = {
  1: n2chapter1,
  2: n2chapter2,
  3: n2chapter3,
  4: n2chapter4,
  5: n2chapter5,
  6: n2chapter6,
  7: n2chapter7,
  8: n2chapter8,
  9: n2chapter9,
  10: n2chapter10,
  11: n2chapter11,
  12: n2chapter12,
  13: n2chapter13,
  14: n2chapter14,
};

const allCurriculum: Record<number, Record<number, Item[]>> = {
  1: n5Lessons,
  2: n4Lessons,
  3: n3Lessons,
  4: n2Lessons
};

export const getAllItems = (): Item[] => {
  return [
    ...Object.values(n5Lessons).flat(),
    ...Object.values(n4Lessons).flat(),
    ...Object.values(n3Lessons).flat(),
    ...Object.values(n2Lessons).flat()
  ];
};

export const getLesson = (n: number, level: number = 1): Item[] => {
  return allCurriculum[level]?.[n] || [];
};

export const totalLessons = 25; // Default for N5
export const totalN4Chapters = 11;
