
import { CodingChallenge } from "../../types";

export const darkModeToggleChallenge: CodingChallenge = {
  category: "coding",
  title: "Build a Dark Mode Toggle",
  instructions: [
    "Create a new React component for a theme toggle",
    "Implement state management using localStorage",
    "Add smooth CSS transitions between modes",
    "Create a visually appealing toggle button",
    "Consider accessibility for keyboard navigation"
  ],
  resources: [
    {
      title: "CSS Variables for Theming",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
    },
    {
      title: "localStorage Guide",
      url: "https://blog.logrocket.com/using-localstorage-react-hooks/"
    }
  ],
  verification: [
    "Toggle works correctly",
    "Theme preference is saved between sessions",
    "Transitions are smooth and visually appealing",
    "Component is accessible via keyboard navigation",
    "Design matches both light and dark modes"
  ]
};
