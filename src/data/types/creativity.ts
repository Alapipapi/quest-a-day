
import { StepDetails } from "./common";

export interface CreativityChallenge extends StepDetails {
  category: "creativity";
  materials?: string[];
  inspiration?: string[];
}
