
import { ProblemSolvingChallenge } from "../../types";

export const brainTeaserSprintChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Brain Teaser Sprint",
  instructions: [
    "Set a timer for 15 minutes total",
    "Solve this riddle: 'What has keys but no locks, space but no room, you can enter but not go inside?'",
    "Work on this logic puzzle: If 5 cats catch 5 mice in 5 minutes, how long for 100 cats to catch 100 mice?",
    "Figure out this pattern: 2, 6, 12, 20, 30, ? (What comes next?)",
    "Solve: A man lives on the 20th floor but only takes the elevator to the 10th floor on sunny days. Why?",
    "Final challenge: You have 12 balls, one is heavier. Using a balance scale only 3 times, how do you find it?"
  ],
  resources: [
    {
      title: "Logic Puzzle Techniques",
      url: "https://daydreampuzzles.com/advanced-logic-puzzle-techniques/"
    },
    {
      title: "Brain Teaser Strategies",
      url: "https://www.braingle.com/brainteasers/"
    }
  ],
  verification: [
    "Solved at least 3 out of 5 puzzles",
    "Used logical reasoning process",
    "Completed within time limit",
    "Can explain solution methods"
  ],
  examples: [
    "Answer 1: A keyboard",
    "Answer 2: 5 minutes (same ratio)",
    "Answer 3: 42 (add consecutive even numbers)",
    "Answer 4: He's too short to reach higher buttons, uses umbrella on rainy days",
    "Answer 5: Divide into groups of 4, weigh groups to isolate the heavy ball"
  ]
};
