import { CodingChallenge } from "../../types";

export const cssAnimationShowcaseChallenge: CodingChallenge = {
  category: "coding",
  title: "CSS Animation Showcase",
  instructions: [
    "Create an HTML page with multiple UI elements to animate",
    "Design smooth hover animations for buttons with scale and color transitions",
    "Build a card component with subtle entrance animations",
    "Create a loading spinner using pure CSS keyframes",
    "Add bounce or pulse effects to interactive elements",
    "Implement slide-in animations for navigation menus",
    "Use CSS transforms for smooth position changes",
    "Apply easing functions for natural motion feel"
  ],
  tools: [
    "HTML5",
    "CSS3 (keyframes, transforms, transitions)",
    "Code editor (VS Code, CodePen)",
    "Browser developer tools"
  ],
  resources: [
    {
      title: "CSS Animation Basics",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"
    },
    {
      title: "CSS Transform Property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
    },
    {
      title: "Animation Timing Functions",
      url: "https://easings.net/"
    }
  ],
  verification: [
    "All animations run smoothly at 60fps",
    "Hover effects provide clear visual feedback",
    "Loading spinner rotates continuously without jerks",
    "Animations enhance user experience without being distracting",
    "Code uses efficient CSS properties for performance"
  ]
};