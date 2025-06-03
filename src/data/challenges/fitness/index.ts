
import { Challenge } from "../../types/challenge";
import { cardioFitnessChallenges } from "./cardio-challenges";
import { strengthFitnessChallenges } from "./strength-challenges";
import { flexibilityFitnessChallenges } from "./flexibility-challenges";
import { conditioningFitnessChallenges } from "./conditioning-challenges";
import { recoveryFitnessChallenges } from "./recovery-challenges";
import { quickFitnessChallenges } from "./quickFitnessChallenges";

// Combine all challenge categories into one array
export const fitnessChallenges: Challenge[] = [
  ...cardioFitnessChallenges,
  ...strengthFitnessChallenges,
  ...flexibilityFitnessChallenges,
  ...conditioningFitnessChallenges,
  ...recoveryFitnessChallenges,
  ...quickFitnessChallenges
];
