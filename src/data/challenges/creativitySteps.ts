
import { StepDetails } from "../types/challenges";
import { dailySketchChallenge } from "./creativity/dailySketch";
import { digitalArtChallenge } from "./creativity/digitalArt";
import { watercolorChallenge } from "./creativity/watercolor";

export const creativitySteps: StepDetails[] = [
  dailySketchChallenge,
  digitalArtChallenge,
  watercolorChallenge
];
