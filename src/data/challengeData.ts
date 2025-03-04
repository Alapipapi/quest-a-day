
import { Challenge } from "./types/challenge";

// Import the challenges from individual category files
import { codingChallenges } from "./challenges/coding";
import { fitnessChallenges } from "./challenges/fitness";
import { creativityChallenges } from "./challenges/creativity";
import { problemSolvingChallenges } from "./challenges/problemSolving";

// Import steps files for detailed challenge information
import { codingSteps } from "./challenges/codingSteps";
import { fitnessSteps } from "./challenges/fitnessSteps";
import { creativitySteps } from "./challenges/creativitySteps";
import { problemSolvingSteps } from "./challenges/problemSolvingSteps";

// Combine all challenges into one array
export const CHALLENGES: Challenge[] = [
  ...codingChallenges,
  ...fitnessChallenges,
  ...creativityChallenges,
  ...problemSolvingChallenges
];

// Export Challenge interface
export type { Challenge };
