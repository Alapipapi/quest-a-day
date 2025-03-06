
import { CreativityChallenge } from "../types/creativity";
import { dailySketchChallenge } from "./creativity/dailySketch";
import { digitalArtChallenge } from "./creativity/digitalArt";
import { watercolorChallenge } from "./creativity/watercolor";
import { abstractArtChallenge } from "./creativity/abstractArt";
import { mobileAppUIChallenge } from "./creativity/mobileAppUI";
import { naturePhotographyChallenge } from "./creativity/naturePhotography";
import { musicCreationChallenge } from "./creativity/musicCreation";
import { foodPhotographyChallenge } from "./creativity/foodPhotography";
import { storyWritingChallenge } from "./creativity/storyWriting";
import { voiceActingChallenge } from "./creativity/voiceActing";
import { visualStorytellingChallenge } from "./creativity/visualStorytelling";
import { characterDesignChallenge } from "./creativity/characterDesign";
import { poetryWritingChallenge } from "./creativity/poetryWriting";
import { diyCraftChallenge } from "./creativity/diyCraft";

export const creativitySteps: CreativityChallenge[] = [
  dailySketchChallenge,
  digitalArtChallenge,
  watercolorChallenge,
  abstractArtChallenge,
  mobileAppUIChallenge,
  naturePhotographyChallenge,
  musicCreationChallenge,
  foodPhotographyChallenge,
  storyWritingChallenge,
  voiceActingChallenge,
  visualStorytellingChallenge,
  characterDesignChallenge,
  poetryWritingChallenge,
  diyCraftChallenge
];
