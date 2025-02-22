
import { StepDetails } from "./types";
import { codingSteps } from "./challenges/codingSteps";
import { fitnessSteps } from "./challenges/fitnessSteps";
import { creativitySteps } from "./challenges/creativitySteps";
import { problemSolvingSteps } from "./challenges/problemSolvingSteps";

export { StepDetails };

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
