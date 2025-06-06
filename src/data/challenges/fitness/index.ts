
import { Challenge } from "../../types/challenge";
import { cardioFitnessChallenges } from "./cardio-challenges";
import { strengthFitnessChallenges } from "./strength-challenges";
import { flexibilityFitnessChallenges } from "./flexibility-challenges";
import { conditioningFitnessChallenges } from "./conditioning-challenges";
import { recoveryFitnessChallenges } from "./recovery-challenges";
import { quickFitnessChallenges } from "./quickFitnessChallenges";

// Add new challenge
const newFitnessChallenges: Challenge[] = [
  {
    id: 186,
    title: "Functional Fitness Workout",
    description: "Design and perform a comprehensive functional fitness routine targeting real-world movement patterns.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "45-60 minutes",
  }
];

// Combine all challenge categories into one array
export const fitnessChallenges: Challenge[] = [
  ...cardioFitnessChallenges,
  ...strengthFitnessChallenges,
  ...flexibilityFitnessChallenges,
  ...conditioningFitnessChallenges,
  ...recoveryFitnessChallenges,
  ...quickFitnessChallenges,
  ...newFitnessChallenges
];
