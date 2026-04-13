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

const lessons: Record<number, Item[]> = {
  1: lesson1, 2: lesson2, 3: lesson3, 4: lesson4, 5: lesson5,
  6: lesson6, 7: lesson7, 8: lesson8, 9: lesson9, 10: lesson10,
  11: lesson11, 12: lesson12, 13: lesson13, 14: lesson14, 15: lesson15,
  16: lesson16, 17: lesson17, 18: lesson18, 19: lesson19, 20: lesson20,
  21: lesson21, 22: lesson22, 23: lesson23, 24: lesson24, 25: lesson25
};

export const getAllItems = (): Item[] => {
  return Object.values(lessons).flat();
};

export const getLesson = (n: number): Item[] => {
  return lessons[n] || [];
};

export const totalLessons = 25;
