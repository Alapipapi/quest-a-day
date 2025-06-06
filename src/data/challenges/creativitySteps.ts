
import { CreativityChallenge } from "../types";
import { dailySketchChallenge } from "./creativity/dailySketch";
import { digitalArtChallenge } from "./creativity/digitalArt";
import { watercolorChallenge } from "./creativity/watercolor";
import { speedSketchChallenge } from "./creativity/speedSketch";
import { storyWritingChallenge } from "./creativity/storyWriting";
import { poetryWritingChallenge } from "./creativity/poetryWriting";
import { storyboardCreationChallenge } from "./creativity/storyboardCreation";
import { musicCreationChallenge } from "./creativity/musicCreation";
import { mobileAppUIChallenge } from "./creativity/mobileAppUI";
import { brandIdentityPackageChallenge } from "./creativity/brandIdentityPackage";
import { naturePhotographyChallenge } from "./creativity/naturePhotography";
import { personalBrandDesignChallenge } from "./creativity/personalBrandDesign";
import { podcastSeriesCreationChallenge } from "./creativity/podcastSeriesCreation";

export const creativitySteps: CreativityChallenge[] = [
  dailySketchChallenge,
  digitalArtChallenge,
  watercolorChallenge,
  speedSketchChallenge,
  storyWritingChallenge,
  poetryWritingChallenge,
  storyboardCreationChallenge,
  musicCreationChallenge,
  mobileAppUIChallenge,
  brandIdentityPackageChallenge,
  naturePhotographyChallenge,
  personalBrandDesignChallenge,
  podcastSeriesCreationChallenge
];
