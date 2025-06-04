import { Challenge } from "../../../types/challenge";
import { drawingFundamentalsChallenge } from "../drawingFundamentals";
import { colorPaletteChallenge } from "../colorPalette";
import { perspectiveDrawingChallenge } from "../perspectiveDrawing";
import { characterDesignChallenge } from "../characterDesign";
import { abstractArtChallenge } from "../abstractArt";
import { digitalPaintingChallenge } from "../digitalPainting";
import { landscapePaintingChallenge } from "../landscapePainting";
import { portraitDrawingChallenge } from "../portraitDrawing";
import { stillLifeChallenge } from "../stillLife";
import { surrealArtChallenge } from "../surrealArt";
import { mixedMediaChallenge } from "../mixedMedia";
import { collageArtChallenge } from "../collageArt";
import { graffitiArtChallenge } from "../graffitiArt";
import { inkDrawingChallenge } from "../inkDrawing";
import { watercolorPaintingChallenge } from "../watercolorPainting";
import { dailySketchChallengeDetails } from "../dailySketch";
import { digitalPortraitStudyChallenge } from "../digitalPortraitStudy";

export const artChallenges: Challenge[] = [
  {
    id: 401,
    title: "Daily Sketch Challenge",
    description: "Create a detailed sketch using traditional or digital medium in 30 minutes.",
    category: "creativity",
    difficulty: "Easy",
    timeEstimate: "30-45 minutes"
  },
  {
    id: 402,
    title: "Drawing Fundamentals",
    description: "Master basic drawing techniques like shading, linework, and composition.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "2-3 hours"
  },
  {
    id: 403,
    title: "Color Palette Challenge",
    description: "Create a painting or digital artwork using a limited color palette.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours"
  },
  {
    id: 404,
    title: "Perspective Drawing",
    description: "Learn and apply one, two, and three-point perspective in your drawings.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours"
  },
  {
    id: 405,
    title: "Character Design",
    description: "Design a unique character with a detailed backstory and visual representation.",
    category: "creativity",
    difficulty: "Hard",
    timeEstimate: "4-6 hours"
  },
  {
    id: 406,
    title: "Abstract Art",
    description: "Create an abstract artwork that conveys emotion or concept through non-representational forms.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours"
  },
  {
    id: 407,
    title: "Digital Painting",
    description: "Create a digital painting using layers, brushes, and blending modes.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "4-6 hours"
  },
  {
    id: 408,
    title: "Landscape Painting",
    description: "Paint a landscape scene focusing on composition, color, and atmosphere.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "4-6 hours"
  },
  {
    id: 409,
    title: "Portrait Drawing",
    description: "Draw a portrait of a person focusing on likeness and expression.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "4-6 hours"
  },
  {
    id: 410,
    title: "Still Life Challenge",
    description: "Create a still life drawing or painting focusing on form, light, and texture.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours"
  },
   {
    id: 411,
    title: "Surreal Art",
    description: "Create a surreal artwork that combines unexpected elements and dreamlike imagery.",
    category: "creativity",
    difficulty: "Hard",
    timeEstimate: "4-6 hours"
  },
  {
    id: 412,
    title: "Mixed Media",
    description: "Experiment with combining different art materials and techniques in one artwork.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours"
  },
  {
    id: 413,
    title: "Collage Art",
    description: "Create a collage using paper, fabric, and other materials to form a new image.",
    category: "creativity",
    difficulty: "Easy",
    timeEstimate: "2-3 hours"
  },
  {
    id: 414,
    title: "Graffiti Art",
    description: "Create a graffiti-style artwork using spray paint or digital tools.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours"
  },
  {
    id: 415,
    title: "Ink Drawing",
    description: "Create a detailed drawing using ink pens or brushes.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours"
  },
  {
    id: 416,
    title: "Watercolor Painting",
    description: "Create a watercolor painting focusing on transparency and layering.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours"
  },
  {
    id: 451,
    title: "Digital Portrait Study",
    description: "Create a detailed digital portrait study focusing on realistic proportions and lighting.",
    category: "creativity",
    difficulty: "Hard",
    timeEstimate: "3-4 hours"
  }
];
