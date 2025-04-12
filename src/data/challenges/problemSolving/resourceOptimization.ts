
import { ProblemSolvingChallenge } from "../../types";

export const resourceOptimizationChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Resource Optimization Challenge",
  instructions: [
    "Analyze a resource allocation scenario with multiple constraints",
    "Identify all available resources and their limitations",
    "List all tasks that require resources and their priorities",
    "Create a mathematical model of the allocation problem",
    "Use linear programming or another optimization technique",
    "Solve for the optimal resource allocation",
    "Verify your solution meets all constraints",
    "Document your approach and reasoning"
  ],
  resources: [
    {
      title: "Introduction to Linear Programming",
      url: "https://www.analyticsvidhya.com/blog/2017/02/lintroductory-guide-on-linear-programming-explained-in-simple-english/"
    },
    {
      title: "Resource Allocation Techniques",
      url: "https://www.projectmanager.com/blog/resource-allocation"
    }
  ],
  verification: [
    "Mathematical model correctly represents the problem",
    "Solution optimally allocates resources within constraints",
    "All high-priority tasks are addressed",
    "Approach is clearly documented and explained",
    "Alternative approaches were considered"
  ],
  examples: [
    "Optimizing worker schedules across multiple projects with deadline constraints",
    "Allocating manufacturing resources to maximize production while minimizing costs",
    "Distributing limited budget across marketing channels for maximum ROI"
  ]
};
