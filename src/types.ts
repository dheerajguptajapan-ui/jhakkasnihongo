export type ItemType = 'radical' | 'kanji' | 'vocabulary' | 'grammar' | 'dokkai';

export interface TextSegment {
  text: string;
  reading: string | null;
}

export interface Sentence {
  japanese: string | TextSegment[];
  english: string;
  furigana?: string;
  segments?: TextSegment[];
}

export interface GrammarPoint {
  id: string;
  title: string;
  meaning: string;
  explanation: string;
  examples: Sentence[];
  level: number;
}

export interface DokkaiPassage {
  id: string;
  title: string;
  content: string | TextSegment[];
  translation: string;
  questions: {
    question: string;
    options: string[];
    answerIndex: number;
  }[];
  level: number;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  level: number;
  xp: number;
  isPremium?: boolean;
  synapticStability: number;
  linkQuality: number;
  dailyGoal: number;
  enrolledLevels: number[]; // List of JLPT levels (1-5) currently tracked
  joinedAt: string;
  dailySyncHistory: {
    [date: string]: {
      lessons: number;
      reviews: number;
    }
  };
  role?: 'user' | 'admin';
  photoURL?: string;
}

export interface Item {
  id: string;
  type: ItemType;
  character: string;
  meanings: string[];
  readings?: string[];
  kunReadings?: string[];
  onReadings?: string[];
  level: number;
  mnemonic?: string;
  radical?: string;
  sentences?: Sentence[];
  combinations?: { word: string; reading: string; meaning: string }[];
  jukugo?: { word: string; reading: string; meaning: string }[];
  dayToDayUses?: string[];
  // For Grammar/Dokkai specific fields
  explanation?: string;
  content?: string | TextSegment[];
  translation?: string;
  questions?: any[];
  lessonNumber?: number;
  segments?: TextSegment[];
}

export interface UserItem {
  uid: string;
  itemId: string;
  srsStage: number;
  nextReviewAt?: any;
  lastReviewedAt?: any;
  streak: number;
  // SM-2 Algorithm metrics
  easinessFactor: number;
  interval: number;
  repetitions: number;
}

export const SRS_INTERVALS = [
  0, // Lesson (not started)
  4 * 60 * 60 * 1000,
  8 * 60 * 60 * 1000,
  23 * 60 * 60 * 1000,
  47 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  14 * 24 * 60 * 60 * 1000,
  30 * 24 * 60 * 60 * 1000,
  120 * 24 * 60 * 60 * 1000,
  -1,
];

export const SRS_STAGE_NAMES = [
  "New",
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

export interface UserFeedback {
  id: string;
  userId: string;
  userName: string;
  text: string;
  rating: number; // 1-5
  category: 'bug' | 'feature' | 'praise' | 'other';
  appVersion: string;
  currentLevel: number;
  timestamp: string;
  isResolved: boolean;
}

export interface UserAccount {
  uid: string;
  email: string;
  passwordHash: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
  lastLoginAt: string;
}

export interface UserSession {
  uid: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  sealedAt: string;
}
