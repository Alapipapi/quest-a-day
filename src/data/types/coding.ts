
import { StepDetails } from "./common";

export interface CodingChallenge extends StepDetails {
  category: "coding";
  tools?: string[];
}
