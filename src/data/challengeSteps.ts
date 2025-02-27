
import { StepDetails } from "./types/common";
import { codingSteps } from "./challenges/codingSteps";
import { fitnessSteps } from "./challenges/fitnessSteps";
import { creativitySteps } from "./challenges/creativitySteps";
import { problemSolvingSteps } from "./challenges/problemSolvingSteps";

export type { StepDetails };

export const getStepsForChallenge = (category: string, title: string): StepDetails[] => {
  let categorySteps;
  switch (category) {
    case "coding":
      categorySteps = codingSteps;
      break;
    case "fitness":
      categorySteps = fitnessSteps;
      break;
    case "creativity":
      categorySteps = creativitySteps;
      break;
    case "problem-solving":
      categorySteps = problemSolvingSteps;
      break;
    default:
      return [];
  }

  const matchedStep = categorySteps.find(step => step.title === title);
  return matchedStep ? [matchedStep] : [];
};
