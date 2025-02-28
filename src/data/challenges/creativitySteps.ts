
import { CreativityChallenge } from "../types/creativity";
import { dailySketchChallenge } from "./creativity/dailySketch";
import { digitalArtChallenge } from "./creativity/digitalArt";
import { watercolorChallenge } from "./creativity/watercolor";
import { abstractArtChallenge } from "./creativity/abstractArt";
import { mobileAppUIChallenge } from "./creativity/mobileAppUI";
import { naturePhotographyChallenge } from "./creativity/naturePhotography";
import { musicCreationChallenge } from "./creativity/musicCreation";

export const creativitySteps: CreativityChallenge[] = [
  dailySketchChallenge,
  digitalArtChallenge,
  watercolorChallenge,
  abstractArtChallenge,
  mobileAppUIChallenge,
  naturePhotographyChallenge,
  musicCreationChallenge
];
