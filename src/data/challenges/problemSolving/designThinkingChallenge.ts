
import { ProblemSolvingChallenge } from "../../types";

export const designThinkingChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Design Thinking Process",
  instructions: [
    "Choose a real-world problem to solve (personal or community)",
    "Empathize: Research and interview people affected by the problem",
    "Define: Create a clear problem statement based on user needs",
    "Ideate: Brainstorm at least 10 possible solutions without judgment",
    "Select: Choose the most promising 2-3 ideas to develop further",
    "Prototype: Create simple sketches or mockups of your solutions",
    "Test: Get feedback from potential users on your prototypes",
    "Refine: Improve your solution based on feedback"
  ],
  resources: [
    {
      title: "Design Thinking Process Guide",
      url: "https://www.interaction-design.org/literature/article/what-is-design-thinking-and-why-is-it-so-popular"
    },
    {
      title: "Prototyping Methods",
      url: "https://www.nngroup.com/articles/paper-prototyping/"
    }
  ],
  verification: [
    "Clear documentation of the problem and affected users",
    "Well-defined problem statement focused on user needs",
    "Evidence of brainstorming multiple solutions",
    "Created at least one simple prototype",
    "Collected and incorporated user feedback",
    "Final solution addresses the core problem"
  ],
  examples: [
    "Improving a daily routine or workflow",
    "Addressing a community transportation issue",
    "Redesigning a confusing product or service experience"
  ]
};
