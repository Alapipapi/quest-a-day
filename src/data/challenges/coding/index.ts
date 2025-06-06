
import { Challenge } from "../../types/challenge";
import { uiChallenges } from "./ui-challenges";
import { appDevelopmentChallenges } from "./app-development-challenges";
import { architectureChallenges } from "./architecture-challenges";
import { testingDevOpsChallenges } from "./testing-devops-challenges";
import { optimizationChallenges } from "./optimization-challenges";
import { quickCodingChallenges } from "./quickCodingChallenges";

// Add new challenge
const newCodingChallenges: Challenge[] = [
  {
    id: 183,
    title: "Task Manager App",
    description: "Build a feature-rich task management application with categories, priorities, search, and drag-and-drop functionality.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  }
];

// Combine all challenge categories into one array
export const codingChallenges: Challenge[] = [
  ...appDevelopmentChallenges,
  ...uiChallenges,
  ...architectureChallenges,
  ...testingDevOpsChallenges,
  ...optimizationChallenges,
  ...quickCodingChallenges,
  ...newCodingChallenges
];
