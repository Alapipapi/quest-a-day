
import { CreativityChallenge } from "../types";
import { StepDetails } from "../types/common";
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
import { urbanSketchingChallenge } from "./creativity/urbanSketching";
import { animationCreationChallenge } from "./creativity/animationCreation";
import { podcastProductionChallenge } from "./creativity/podcastProduction";
import { photoStoryChallenge } from "./creativity/photoStory";
import { storyboardCreationChallenge } from "./creativity/storyboardCreation";
import { musicCoverReinterpretationChallenge } from "./creativity/musicCoverReinterpretation";
import { minimalistPhotographyChallenge } from "./creativity/minimalistPhotography";
import { comicStripCreationChallenge } from "./creativity/comicStripCreation";
import { shortFilmStoryboardingChallenge } from "./creativity/shortFilmStoryboarding";
import { mixedMediaArtChallenge } from "./creativity/mixedMediaArt";
import { songwritingChallenge } from "./creativity/songwritingChallenge";
import { digitalStorytellingProjectChallenge } from "./creativity/digitalStorytellingProject";
import { colorTheoryArtChallenge } from "./creativity/colorTheoryArt";
import { soundDesignWorkshopChallenge } from "./creativity/soundDesignWorkshop";
import { mixedMediaCollageChallenge } from "./creativity/mixedMediaCollage";
import { penAndInkChallenge } from "./creativity/penAndInk";
import { creativeWritingPromptChallenge } from "./creativity/creativeWritingPrompt";
import { foundObjectSculptureChallenge } from "./creativity/foundObjectSculpture";
import { botanicalDrawingChallenge } from "./creativity/botanicalDrawing";
import { storyboardAnimationChallenge } from "./creativity/storyboardAnimation";

// Add new quick creativity challenge steps
const speedSketchChallengeSteps: StepDetails = {
  title: "Speed Sketch Challenge",
  instructions: [
    "Set a timer for exactly 5 minutes",
    "Look around and choose the first object you see",
    "Start sketching immediately, focusing on basic shapes first",
    "Capture the overall proportions before adding details",
    "Use quick, confident strokes rather than tentative lines",
    "Don't worry about perfection - focus on capturing the essence",
    "When time is up, step back and evaluate your work"
  ],
  verification: [
    "Completed the sketch within the 5-minute time limit",
    "Basic proportions of the object are recognizable",
    "Used confident, decisive strokes",
    "Captured the overall shape and form",
    "Didn't get caught up in unnecessary details",
    "Feel satisfied with the quick capture exercise"
  ],
  materials: ["Paper", "Pencil or pen", "Timer"],
  inspiration: [
    "Everyday objects like a coffee mug or plant",
    "Furniture pieces with interesting shapes",
    "Fruit or vegetables with varying textures",
    "Electronic devices with geometric forms"
  ]
};

const colorPaletteCreationSteps: StepDetails = {
  title: "Color Palette Creation",
  instructions: [
    "Choose your inspiration source (nature, emotions, or seasons)",
    "Open a digital color tool like Adobe Color or Coolors.co",
    "Select a base color that represents your main inspiration",
    "Create a monochromatic palette using different shades of your base color",
    "Create a complementary palette using colors opposite on the color wheel",
    "Design an analogous palette using colors next to each other",
    "Export or save each palette with color codes for future use"
  ],
  verification: [
    "Created three distinct color palettes",
    "Each palette has 4-5 harmonious colors",
    "Palettes clearly reflect the chosen inspiration",
    "Colors work well together visually",
    "Saved color codes for future reference",
    "Understanding of color relationships improved"
  ],
  materials: ["Computer or tablet", "Internet access", "Color picker tool"],
  inspiration: [
    "Sunrise or sunset colors from nature",
    "Ocean waves and beach tones",
    "Autumn leaves and forest colors",
    "Emotions like calm, energetic, or mysterious"
  ]
};

const microPoetryWritingSteps: StepDetails = {
  title: "Micro Poetry Writing",
  instructions: [
    "Find a quiet space and observe your current surroundings",
    "Identify your current mood or emotional state",
    "Write your first haiku following the 5-7-5 syllable pattern",
    "Create a second poem using only 25 words or less",
    "Write a third micro-poem that captures a single moment or feeling",
    "Focus on vivid imagery and sensory details",
    "Read each poem aloud to check the rhythm and flow"
  ],
  verification: [
    "Wrote three complete micro-poems",
    "Haiku follows the correct syllable pattern",
    "Each poem captures a clear image or emotion",
    "Language is concise and impactful",
    "Poems reflect personal observation or feeling",
    "Feel satisfied with the creative expression"
  ],
  materials: ["Paper and pen", "Quiet writing space"],
  inspiration: [
    "Current weather or lighting in the room",
    "Sounds you can hear right now",
    "A memory that surfaced today",
    "An object that holds personal meaning"
  ]
};

// Update the main steps array to include new challenges
export const creativitySteps: StepDetails[] = [
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
  diyCraftChallenge,
  urbanSketchingChallenge,
  animationCreationChallenge,
  podcastProductionChallenge,
  photoStoryChallenge,
  storyboardCreationChallenge,
  musicCoverReinterpretationChallenge,
  minimalistPhotographyChallenge,
  comicStripCreationChallenge,
  shortFilmStoryboardingChallenge,
  mixedMediaArtChallenge,
  songwritingChallenge,
  digitalStorytellingProjectChallenge,
  colorTheoryArtChallenge,
  soundDesignWorkshopChallenge,
  mixedMediaCollageChallenge,
  penAndInkChallenge,
  creativeWritingPromptChallenge,
  foundObjectSculptureChallenge,
  botanicalDrawingChallenge,
  storyboardAnimationChallenge,
  speedSketchChallengeSteps,
  colorPaletteCreationSteps,
  microPoetryWritingSteps
];
