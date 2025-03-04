
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
      url: "https://uxdesign.cc/micro-interactions-why-when-and-how-9cd6e2f1e93c"
    },
    {
      title: "Framer Motion Documentation",
      url: "https://www.framer.com/motion/"
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
