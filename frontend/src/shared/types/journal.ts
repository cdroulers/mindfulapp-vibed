export type PrimaryMood = "Good" | "Neutral" | "Bad";

export type SecondaryMood = {
  Good: string[];
  Neutral: string[];
  Bad: string[];
};

export interface JournalEntry {
  id: string;
  date: string;
  primaryMood: PrimaryMood;
  secondaryMood: string;
  description: string;
  behavioralActivation: {
    text: string;
    timestamp: string;
    done: boolean;
  };
  createdAt: string;
  updatedAt: string;
}
