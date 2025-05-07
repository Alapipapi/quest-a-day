
import { Challenge } from "../../types/challenge";

// Import challenge categories
import { logicAndPuzzleChallenges } from "./categories/logicAndPuzzleChallenges";
import { technicalChallenges } from "./categories/technicalChallenges";
import { optimizationChallenges } from "./categories/optimizationChallenges";
import { decisionMakingChallenges } from "./categories/decisionMakingChallenges";
import { analysisAndAssessmentChallenges } from "./categories/analysisAndAssessmentChallenges";
import { productivityAndManagementChallenges } from "./categories/productivityAndManagementChallenges";

// Combine all problem-solving challenges into one array
export const problemSolvingChallenges: Challenge[] = [
  ...logicAndPuzzleChallenges,
  ...technicalChallenges,
  ...optimizationChallenges,
  ...decisionMakingChallenges,
  ...analysisAndAssessmentChallenges,
  ...productivityAndManagementChallenges
];
