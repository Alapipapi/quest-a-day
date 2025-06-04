import { Challenge } from "../../../types/challenge";

// Import existing challenges
import { algorithmChallenge } from "../algorithm";
import { dataStructuresChallenge } from "../dataStructures";
import { cryptographyChallenge } from "../cryptography";
import { optimizationProblemChallenge } from "../optimizationProblem";

import { systemDesignChallenge } from "../systemDesignChallenge";

export const technicalChallenges: Challenge[] = [
  {
    id: 501,
    title: "Algorithm Optimization",
    description: "Optimize a given algorithm for better time and space complexity.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "2-3 hours"
  },
  algorithmChallenge,
  dataStructuresChallenge,
  cryptographyChallenge,
  optimizationProblemChallenge,
  {
    id: 551,
    title: "System Design Challenge",
    description: "Design a scalable system architecture for a real-world application with millions of users.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "2-3 hours"
  }
];
