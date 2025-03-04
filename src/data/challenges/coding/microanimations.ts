
import { CodingChallenge } from "../../types";

export const microanimationsChallenge: CodingChallenge = {
  category: "coding",
  title: "UI Microanimations",
  instructions: [
    "Study principles of effective UI animations",
    "Create a simple component with hover state animations",
    "Implement loading state animations",
    "Add transition animations between component states",
    "Ensure animations enhance rather than distract from UX"
  ],
  resources: [
    {
      title: "Microanimation Principles",
      url: "https://hike.one/insights/why-use-micro-animations-in-your-design"
    },
    {
      title: "Framer Motion Documentation",
      url: "https://framermotion.framer.website/"
    }
  ],
  verification: [
    "Animations are smooth with appropriate timing",
    "Interactions feel natural and intuitive",
    "Code is well-organized with reusable animation components",
    "Animations work across different browsers",
    "Performance is optimized (no jank)",
    "Accessibility considerations addressed"
  ]
};
