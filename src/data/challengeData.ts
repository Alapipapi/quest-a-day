
import { Challenge } from "./types/challenge";

// Import the challenges from individual category files
import { codingChallenges } from "./challenges/coding";
import { fitnessChallenges } from "./challenges/fitness";
import { creativityChallenges } from "./challenges/creativity";
import { problemSolvingChallenges } from "./challenges/problemSolving";

// Function to ensure unique IDs across all challenges
const assignUniqueIds = (challenges: Challenge[]): Challenge[] => {
  return challenges.map((challenge, index) => ({
    ...challenge,
    id: index + 1
  }));
};

// Combine all challenges and ensure unique IDs
const allChallenges = [
  ...codingChallenges,
  ...fitnessChallenges,
  ...creativityChallenges,
  ...problemSolvingChallenges
];

// Remove duplicates based on category and title, then assign unique IDs
const uniqueChallenges = allChallenges.filter((challenge, index, array) => {
  return array.findIndex(c => c.category === challenge.category && c.title === challenge.title) === index;
});

export const CHALLENGES: Challenge[] = assignUniqueIds(uniqueChallenges);

// Export Challenge interface
export type { Challenge };
