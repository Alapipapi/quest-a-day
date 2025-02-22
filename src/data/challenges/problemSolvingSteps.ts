
import { StepDetails } from "../types";

export const problemSolvingSteps: StepDetails[] = [
  {
    title: "Analyze the problem",
    instructions: [
      "Read problem statement carefully",
      "Identify key information",
      "List constraints",
      "Define expected output",
      "Note special cases"
    ],
    resources: [
      {
        title: "Problem Analysis Framework",
        url: "https://www.mindtools.com/pages/article/newTMC_00.htm"
      },
      {
        title: "Problem-Solving Techniques",
        url: "https://asq.org/quality-resources/problem-solving"
      }
    ],
    verification: [
      "Problem understood",
      "Key info identified",
      "Constraints listed",
      "Output defined"
    ]
  },
  // New problem-solving challenges
  {
    title: "Solve Sudoku Puzzle",
    instructions: [
      "Understand Sudoku rules",
      "Scan for obvious numbers",
      "Use elimination technique",
      "Look for number patterns",
      "Verify solution validity"
    ],
    resources: [
      {
        title: "Sudoku Solving Techniques",
        url: "https://www.sudokudragon.com/sudokustrategy.htm"
      },
      {
        title: "Interactive Sudoku Tutorial",
        url: "https://www.learn-sudoku.com/basic-techniques.html"
      }
    ],
    verification: [
      "Rules understood",
      "Basic techniques applied",
      "Solution is valid"
    ]
  },
  {
    title: "Algorithm Challenge",
    instructions: [
      "Read problem requirements",
      "Plan solution approach",
      "Write pseudocode",
      "Implement solution",
      "Test with sample cases"
    ],
    resources: [
      {
        title: "Algorithm Design Guide",
        url: "https://www.geeksforgeeks.org/introduction-to-algorithms/"
      },
      {
        title: "Common Algorithm Patterns",
        url: "https://leetcode.com/discuss/study-guide/448285/List-of-questions-sorted-by-common-patterns"
      }
    ],
    verification: [
      "Solution works correctly",
      "Handles edge cases",
      "Optimized for performance"
    ]
  }
];
