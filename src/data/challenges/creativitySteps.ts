
import { CreativityChallenge } from "../types/creativity";
import { dailySketchChallenge } from "./creativity/dailySketch";
import { digitalArtChallenge } from "./creativity/digitalArt";
import { watercolorChallenge } from "./creativity/watercolor";

export const creativitySteps: CreativityChallenge[] = [
  dailySketchChallenge,
  digitalArtChallenge,
  watercolorChallenge
];
