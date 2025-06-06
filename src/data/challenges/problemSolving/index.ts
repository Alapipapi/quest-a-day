
import { Challenge } from "../../types/challenge";

// Import challenge categories
import { logicAndPuzzleChallenges } from "./categories/logicAndPuzzleChallenges";
import { technicalChallenges } from "./categories/technicalChallenges";
import { optimizationChallenges } from "./categories/optimizationChallenges";
import { decisionMakingChallenges } from "./categories/decisionMakingChallenges";
import { analysisAndAssessmentChallenges } from "./categories/analysisAndAssessmentChallenges";
import { productivityAndManagementChallenges } from "./categories/productivityAndManagementChallenges";
import { quickProblemSolvingChallenges } from "./quickProblemSolvingChallenges";

// Add new challenge
const newProblemSolvingChallenges: Challenge[] = [
  {
    id: 187,
    title: "Product Launch Strategy",
    description: "Develop a comprehensive go-to-market strategy for a new product including research, positioning, and execution plan.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  }
];

// Combine all problem-solving challenges into one array
export const problemSolvingChallenges: Challenge[] = [
  ...logicAndPuzzleChallenges,
  ...technicalChallenges,
  ...optimizationChallenges,
  ...decisionMakingChallenges,
  ...analysisAndAssessmentChallenges,
  ...productivityAndManagementChallenges,
  ...quickProblemSolvingChallenges,
  ...newProblemSolvingChallenges
];
