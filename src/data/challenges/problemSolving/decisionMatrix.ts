
import { ProblemSolvingChallenge } from "../../types/problemSolving";

export const decisionMatrixChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Decision Matrix Analysis",
  instructions: [
    "Identify a complex decision you need to make with multiple options",
    "Determine the key factors or criteria that are important for this decision",
    "Create a decision matrix with options as rows and criteria as columns",
    "Assign weights to each criterion based on importance (1-10)",
    "Score each option against each criterion (1-10)",
    "Calculate weighted scores by multiplying each score by criterion weight",
    "Sum the weighted scores for each option to identify the best choice"
  ],
  resources: [
    {
      title: "Decision Matrix Analysis Explained",
      url: "https://www.mindtools.com/pages/article/newTED_03.htm"
    },
    {
      title: "Weighted Decision Matrix Template",
      url: "https://www.smartsheet.com/content/decision-matrix-templates"
    }
  ],
  verification: [
    "Matrix includes at least 3 viable options",
    "At least 5 relevant criteria with appropriate weights assigned",
    "Scoring is consistent and rational across all options",
    "Calculations are accurate and lead to a clear recommendation",
    "Analysis includes brief justification for the final decision"
  ],
  examples: [
    "Career path selection between multiple job offers",
    "Technology stack selection for a software project",
    "Location decision for a new business or residence",
    "Vendor selection for a major purchase"
  ]
};
