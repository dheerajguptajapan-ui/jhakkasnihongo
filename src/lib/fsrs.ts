
/**
 * FSRS v4.5 (Free Spaced Repetition Scheduler) Implementation
 * Simplified for TypeScript usage.
 */

export enum Rating {
  Again = 1,
  Hard = 2,
  Good = 3,
  Easy = 4,
}

export enum State {
  New = 0,
  Learning = 1,
  Review = 2,
  Relearning = 3,
}

export interface FSRSCard {
  due: Date;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  reps: number;
  lapses: number;
  state: State;
  last_review?: Date;
}

// Default parameters for FSRS v4.5
const PARAMS = [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61];

export const createEmptyCard = (now: Date = new Date()): FSRSCard => ({
  due: now,
  stability: 0,
  difficulty: 0,
  elapsed_days: 0,
  scheduled_days: 0,
  reps: 0,
  lapses: 0,
  state: State.New,
});

export class FSRS {
  private p = PARAMS;
  private request_retention = 0.9;

  calculateNextReview(card: FSRSCard, rating: Rating, now: Date): FSRSCard {
    const nextCard = { ...card };
    nextCard.last_review = now;
    
    // Calculate elapsed days
    const interval = card.last_review ? Math.floor((now.getTime() - card.last_review.getTime()) / (1000 * 60 * 60 * 24)) : 0;
    nextCard.elapsed_days = interval;
    nextCard.reps += 1;

    if (card.state === State.New) {
      this.initStep(nextCard, rating);
    } else if (card.state === State.Learning || card.state === State.Relearning) {
      this.learningStep(nextCard, rating);
    } else {
      this.reviewStep(nextCard, rating, interval);
    }

    // Schedule next review
    if (nextCard.state === State.Review) {
      const scheduled_days = Math.max(1, Math.round(nextCard.stability * (Math.pow(this.request_retention, -1 / 0.9) - 1) / (Math.pow(0.9, -1 / 0.9) - 1)));
      nextCard.scheduled_days = scheduled_days;
      nextCard.due = new Date(now.getTime() + scheduled_days * 24 * 60 * 60 * 1000);
    } else {
      // Short term learning: 1m, 10m, etc.
      const minutes = rating === Rating.Again ? 1 : rating === Rating.Hard ? 5 : rating === Rating.Good ? 10 : 20;
      nextCard.due = new Date(now.getTime() + minutes * 60 * 1000);
    }

    return nextCard;
  }

  private initStep(card: FSRSCard, rating: Rating) {
    card.difficulty = this.p[4] - this.p[5] * (rating - 3);
    card.stability = this.p[rating - 1];
    card.state = rating === Rating.Easy ? State.Review : State.Learning;
  }

  private learningStep(card: FSRSCard, rating: Rating) {
    if (rating === Rating.Again) {
      card.stability = Math.min(card.stability, this.p[0]); // Reset stability somewhat
    } else if (rating === Rating.Easy) {
      card.state = State.Review;
      card.stability = this.p[rating - 1];
    } else {
      card.state = State.Review; // Graduate to review for Good/Hard in this simplified version
    }
  }

  private reviewStep(card: FSRSCard, rating: Rating, interval: number) {
    const retrievability = Math.pow(1 + 0.1 * interval / card.stability, -1);
    
    if (rating === Rating.Again) {
      card.lapses += 1;
      card.state = State.Relearning;
      // Stability reduction on failure
      card.stability = this.p[11] * Math.pow(card.difficulty, -this.p[12]) * (Math.pow(card.stability + 1, this.p[13]) - 1) * Math.exp(this.p[14] * (1 - retrievability));
    } else {
      // Difficulty update
      card.difficulty = Math.max(1, Math.min(10, card.difficulty - this.p[6] * (rating - 3)));
      // Stability update
      const bonus = rating === Rating.Hard ? this.p[15] : rating === Rating.Easy ? this.p[16] : 1;
      card.stability = card.stability * (1 + Math.exp(this.p[8]) * (11 - card.difficulty) * Math.pow(card.stability, -this.p[9]) * (Math.exp(this.p[10] * (1 - retrievability)) - 1) * bonus);
    }
  }
}

export const fsrsScheduler = new FSRS();
