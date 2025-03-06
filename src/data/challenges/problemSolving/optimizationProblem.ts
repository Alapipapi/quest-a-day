
import { ProblemSolvingChallenge } from "../../types";

export const optimizationProblemChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Optimization Problem",
  instructions: [
    "Understand the resource allocation scenario",
    "Identify constraints and optimization goals",
    "Map out the variables and their relationships",
    "Apply appropriate optimization techniques",
    "Create a mathematical model if applicable",
    "Test your solution with different inputs",
    "Evaluate the efficiency of your solution"
  ],
  resources: [
    {
      title: "Linear Programming Introduction",
      url: "https://www.analyticsvidhya.com/blog/2017/02/lintroductory-guide-on-linear-programming-explained-in-simple-english/"
    },
    {
      title: "Resource Allocation Methods",
      url: "https://www.d-tools.com/resource-center/operations-management/resource-allocation-project-management"
    }
  ],
  verification: [
    "Solution satisfies all constraints",
    "Resources are allocated efficiently",
    "Method is adaptable to changing inputs",
    "Solution can be verified mathematically",
    "Approach is systematic and documented"
  ],
  examples: [
    "Factory planning: Determine how to assign machines to tasks to maximize output",
    "Budget allocation: Distribute limited funds across projects for maximum return",
    "Scheduling problem: Assign limited staff to tasks with different priorities"
  ]
};
