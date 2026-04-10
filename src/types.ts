export type ItemType = 'radical' | 'kanji' | 'vocabulary' | 'grammar' | 'dokkai';

export interface Sentence {
  japanese: string;
  english: string;
  furigana?: string; // Format: "漢字[かんじ]"
}

export interface GrammarPoint {
  id: string;
  title: string;
  meaning: string;
  explanation: string;
  examples: Sentence[];
  level: number; // 1 for N5, 2 for N4, etc.
}

export interface DokkaiPassage {
  id: string;
  title: string;
  content: string; // Furigana format supported
  translation: string;
  questions: {
    question: string;
    options: string[];
    answerIndex: number;
  }[];
  level: number;
}

export interface Item {
  id: string;
  type: ItemType;
  character: string;
  meanings: string[];
  readings: string[];
  level: number;
  mnemonic?: string;
  radical?: string;
  sentences?: Sentence[];
  combinations?: { word: string; reading: string; meaning: string }[];
  dayToDayUses?: string[];
  // For Grammar/Dokkai specific fields if we use the same Item interface
  explanation?: string;
  content?: string;
  translation?: string;
  questions?: any[];
  lessonNumber?: number;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  level: number;
  xp: number;
  joinedAt?: any;
  role?: 'user' | 'admin';
}

export interface UserItem {
  uid: string;
  itemId: string;
  srsStage: number;
  nextReviewAt?: any;
  lastReviewedAt?: any;
  streak: number;
}

export const SRS_INTERVALS = [
  0, // Lesson (not started)
  4 * 60 * 60 * 1000, // Apprentice 1: 4 hours
  8 * 60 * 60 * 1000, // Apprentice 2: 8 hours
  23 * 60 * 60 * 1000, // Apprentice 3: 23 hours
  47 * 60 * 60 * 1000, // Apprentice 4: 47 hours
  7 * 24 * 60 * 60 * 1000, // Guru 1: 1 week
  14 * 24 * 60 * 60 * 1000, // Guru 2: 2 weeks
  30 * 24 * 60 * 60 * 1000, // Master: 1 month
  120 * 24 * 60 * 60 * 1000, // Enlightened: 4 months
  -1, // Burned
];

export const SRS_STAGES_NAMES = [
  "Lesson",
  "Apprentice I",
  "Apprentice II",
  "Apprentice III",
  "Apprentice IV",
  "Guru I",
  "Guru II",
  "Master",
  "Enlightened",
  "Burned"
];
