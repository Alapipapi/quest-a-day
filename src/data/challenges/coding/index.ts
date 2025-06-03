
import { Challenge } from "../../types/challenge";
import { uiChallenges } from "./ui-challenges";
import { appDevelopmentChallenges } from "./app-development-challenges";
import { architectureChallenges } from "./architecture-challenges";
import { testingDevOpsChallenges } from "./testing-devops-challenges";
import { optimizationChallenges } from "./optimization-challenges";
import { quickCodingChallenges } from "./quickCodingChallenges";

// Combine all challenge categories into one array
export const codingChallenges: Challenge[] = [
  ...appDevelopmentChallenges,
  ...uiChallenges,
  ...architectureChallenges,
  ...testingDevOpsChallenges,
  ...optimizationChallenges,
  ...quickCodingChallenges
];
