
import { StepDetails } from "./common";

export interface CodingChallenge extends StepDetails {
  category: "coding";
  difficulty?: "Easy" | "Medium" | "Hard";
  estimatedTime?: string;
  tools?: string[];
}
