
import { Challenge } from "../../types/challenge";

// Import challenge categories
import { artChallenges } from "./categories/artChallenges";
import { designChallenges } from "./categories/designChallenges";
import { photographyChallenges } from "./categories/photographyChallenges";
import { writingChallenges } from "./categories/writingChallenges";
import { musicChallenges } from "./categories/musicChallenges";
import { mediaChallenges } from "./categories/mediaChallenges";

// Combine all creativity challenges into one array
export const creativityChallenges: Challenge[] = [
  ...artChallenges,
  ...designChallenges,
  ...photographyChallenges,
  ...writingChallenges,
  ...musicChallenges,
  ...mediaChallenges
];
