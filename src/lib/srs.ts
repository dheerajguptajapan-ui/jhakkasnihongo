import { UserItem } from '../types';

/**
 * SuperMemo-2 (SM-2) Algorithm Implementation
 * Reference: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
 */

export interface SM2Result {
  interval: number;
  easinessFactor: number;
  repetitions: number;
  nextReviewAt: Date;
}

export const calculateSM2 = (
  quality: number, // 0-5
  previousEF: number = 2.5,
  previousInterval: number = 0,
  previousRepetitions: number = 0
): SM2Result => {
  let interval: number;
  let easinessFactor: number;
  let repetitions: number;

  // quality: 0-5
  // 5: perfect response
  // 4: correct response after a hesitation
  // 3: correct response recalled with serious difficulty
  // 2: incorrect response; where the correct one seemed easy to recall
  // 1: incorrect response; the correct one remembered
  // 0: complete blackout.

  if (quality >= 3) {
    // Correct response
    if (previousRepetitions === 0) {
      interval = 1;
    } else if (previousRepetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(previousInterval * previousEF);
    }

    repetitions = previousRepetitions + 1;
    easinessFactor = previousEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  } else {
    // Incorrect response
    repetitions = 0;
    interval = 1;
    easinessFactor = previousEF;
  }

  // Ensure EF doesn't drop below 1.3
  if (easinessFactor < 1.3) {
    easinessFactor = 1.3;
  }

  const nextReviewAt = new Date();
  nextReviewAt.setDate(nextReviewAt.getDate() + interval);

  return {
    interval,
    easinessFactor,
    repetitions,
    nextReviewAt
  };
};

/**
 * Convenience helper for binary (Correct/Incorrect) results
 */
export const processReviewResult = (
  isCorrect: boolean,
  item: UserItem
): SM2Result => {
  // Map binary result to SM-2 quality scores
  // Correct -> 5 (Perfect)
  // Incorrect -> 0 (Blackout)
  const quality = isCorrect ? 5 : 0;
  
  return calculateSM2(
    quality,
    item.easinessFactor || 2.5,
    item.interval || 0,
    item.repetitions || 0
  );
};
