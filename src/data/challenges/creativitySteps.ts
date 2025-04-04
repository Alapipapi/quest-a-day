
import { CreativityChallenge } from "../types/creativity";
import { dailySketchChallenge } from "./creativity/dailySketch";
import { digitalArtChallenge } from "./creativity/digitalArt";
import { watercolorChallenge } from "./creativity/watercolor";
import { abstractArtChallenge } from "./creativity/abstractArt";
import { mobileAppUIChallenge } from "./creativity/mobileAppUI";
import { naturePhotographyChallenge } from "./creativity/naturePhotography";
import { photoStoryChallenge } from "./creativity/photoStory";
import { storyboardCreationChallenge } from "./creativity/storyboardCreation";
import { musicCoverChallenge } from "./creativity/musicCoverReinterpretation";

export const creativitySteps: CreativityChallenge[] = [
  dailySketchChallenge,
  digitalArtChallenge,
  watercolorChallenge,
  abstractArtChallenge,
  mobileAppUIChallenge,
  naturePhotographyChallenge,
  photoStoryChallenge,
  storyboardCreationChallenge,
  musicCoverChallenge
];
