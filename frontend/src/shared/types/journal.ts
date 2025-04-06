export type PrimaryMood = "good" | "neutral" | "bad";

export interface JournalEntry {
  id: string;
  date: string;
  primaryMood: PrimaryMood;
  secondaryMoods: string[];
  description: string;
  behavioralActivation: {
    text: string;
    timestamp: string;
    done: boolean;
  };
  createdAt: string;
  updatedAt: string;
}
