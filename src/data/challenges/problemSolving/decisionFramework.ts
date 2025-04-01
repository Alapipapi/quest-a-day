
import { ProblemSolvingChallenge } from "../../types";

export const decisionFrameworkChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Decision-Making Framework",
  instructions: [
    "Identify a complex decision you need to make (or use a hypothetical one)",
    "List all available options and gather relevant information",
    "Define your decision criteria and weight their importance",
    "Create a decision matrix with options as rows and criteria as columns",
    "Score each option against each criterion (1-10 scale)",
    "Multiply scores by criteria weights",
    "Calculate total weighted scores for each option",
    "Reflect on the results and adjust if necessary",
    "Document your framework for future use"
  ],
  resources: [
    {
      title: "Decision Matrix Analysis Guide",
      url: "https://www.mindtools.com/pages/article/newTED_03.htm"
    },
    {
      title: "Effective Decision Making Processes",
      url: "https://hbr.org/2017/01/a-7-step-method-for-making-difficult-decisions"
    }
  ],
  verification: [
    "Created a comprehensive list of options and criteria",
    "Assigned appropriate weights to criteria",
    "Scored options objectively",
    "Framework produces clear, actionable results",
    "Process is documented for reuse"
  ]
};
