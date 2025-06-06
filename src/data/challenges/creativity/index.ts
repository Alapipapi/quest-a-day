
import { Challenge } from "../../types/challenge";

// Import challenge categories
import { artChallenges } from "./categories/artChallenges";
import { designChallenges } from "./categories/designChallenges";
import { photographyChallenges } from "./categories/photographyChallenges";
import { writingChallenges } from "./categories/writingChallenges";
import { musicChallenges } from "./categories/musicChallenges";
import { mediaChallenges } from "./categories/mediaChallenges";
import { quickCreativityChallenges } from "./quickCreativityChallenges";

// Add new challenges
const newCreativityChallenges: Challenge[] = [
  {
    id: 184,
    title: "Personal Brand Design",
    description: "Create a comprehensive personal brand identity including logo, color palette, and marketing materials.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 185,
    title: "Podcast Series Creation",
    description: "Plan, record, and produce a complete podcast series with professional audio quality and branding.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours",
  }
];

// Combine all creativity challenges into one array
export const creativityChallenges: Challenge[] = [
  ...artChallenges,
  ...designChallenges,
  ...photographyChallenges,
  ...writingChallenges,
  ...musicChallenges,
  ...mediaChallenges,
  ...quickCreativityChallenges,
  ...newCreativityChallenges
];
