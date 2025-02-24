
import { StepDetails } from "./types/common";
import { codingSteps } from "./challenges/codingSteps";
import { fitnessSteps } from "./challenges/fitnessSteps";
import { creativitySteps } from "./challenges/creativitySteps";
import { problemSolvingSteps } from "./challenges/problemSolvingSteps";

export type { StepDetails };

export const getStepsForChallenge = (category: string): StepDetails[] => {
  switch (category) {
    case "coding":
      return codingSteps;
    case "fitness":
      return fitnessSteps;
    case "creativity":
      return creativitySteps;
    case "problem-solving":
      return problemSolvingSteps;
    default:
      return [];
  }
};
