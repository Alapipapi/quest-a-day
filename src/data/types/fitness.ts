
import { StepDetails } from "./common";

export interface FitnessChallenge extends StepDetails {
  category: "fitness";
  equipment?: string[];
  warmUp?: string;
  coolDown?: string;
}
