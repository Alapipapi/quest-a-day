
import { ProblemSolvingChallenge } from "../../types/problemSolving";

export const prioritizationFrameworkChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Prioritization Framework",
  instructions: [
    "List all your current tasks and responsibilities",
    "Create a 2x2 matrix with urgency and importance as axes",
    "Place each task in the appropriate quadrant",
    "Develop decision rules for handling tasks in each quadrant",
    "Test your framework with a week's worth of tasks",
    "Refine your approach based on real-world results"
  ],
  resources: [
    {
      title: "Eisenhower Matrix Explanation",
      url: "https://todoist.com/productivity-methods/eisenhower-matrix"
    },
    {
      title: "Task Prioritization Techniques",
      url: "https://zapier.com/blog/how-to-prioritize/"
    }
  ],
  verification: [
    "Framework clearly differentiates between urgency and importance",
    "Decision rules are specific and actionable",
    "System can handle new tasks as they arise",
    "Framework reduces decision fatigue",
    "Results in more important tasks being completed"
  ],
  examples: [
    "Personal task management system",
    "Team project prioritization framework",
    "Decision-making process for competing deadlines"
  ]
};
