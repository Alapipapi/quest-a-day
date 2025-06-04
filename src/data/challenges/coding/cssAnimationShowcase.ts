
import { CodingChallenge } from "../../types";

export const cssAnimationShowcaseChallenge: CodingChallenge = {
  category: "coding",
  title: "CSS Animation Showcase",
  instructions: [
    "Create a new HTML file with different UI elements (buttons, cards, loading spinners)",
    "Add smooth hover animations to buttons using CSS transitions",
    "Create a card flip animation using CSS transforms",
    "Build a loading spinner with keyframe animations",
    "Add entrance animations for elements using CSS animations",
    "Ensure animations are smooth and performant (60fps)"
  ],
  resources: [
    {
      title: "CSS Animations Guide",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"
    },
    {
      title: "CSS Transitions Documentation",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions"
    }
  ],
  verification: [
    "Buttons have smooth hover effects",
    "Card animations work without janky movements",
    "Loading spinner rotates smoothly",
    "Animations enhance user experience",
    "All animations are GPU-accelerated"
  ]
};
