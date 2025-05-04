
import { CreativityChallenge } from "../../types/creativity";

export const creativeWritingPromptChallenge: CreativityChallenge = {
  category: "creativity",
  title: "Creative Writing Prompt",
  instructions: [
    "Visit a random first line generator website",
    "Select one first line that inspires you",
    "Spend 10 minutes brainstorming character and plot ideas",
    "Write a short story (500-1000 words) starting with your chosen line",
    "Include at least one unexpected twist",
    "Edit your story for clarity and impact"
  ],
  materials: ["Writing tool of choice (paper, computer, tablet)", "Timer"],
  resources: [
    {
      title: "Random First Line Generator",
      url: "https://www.writingexercises.co.uk/firstlinegenerator.php"
    },
    {
      title: "Elements of Short Story Writing",
      url: "https://www.masterclass.com/articles/how-to-write-a-short-story"
    }
  ],
  inspiration: [
    "Personal experiences transformed into fiction",
    "Current events viewed through a unique lens",
    "What-if scenarios taken to their logical conclusion"
  ],
  verification: [
    "Story follows logically from the first line",
    "Character motivations are clear",
    "Plot has a beginning, middle, and end",
    "Contains at least one unexpected element",
    "Language is precise and engaging"
  ]
};
