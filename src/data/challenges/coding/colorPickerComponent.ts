
import { CodingChallenge } from "../../types";

export const colorPickerComponentChallenge: CodingChallenge = {
  category: "coding",
  title: "Color Picker Component",
  instructions: [
    "Create a reusable color picker component with multiple input formats",
    "Support HEX, RGB, and HSL color formats with live conversion",
    "Include a visual color palette with common colors",
    "Add a color wheel or gradient selector for custom colors",
    "Implement real-time preview of selected colors",
    "Add copy-to-clipboard functionality for color values",
    "Ensure the component is accessible with keyboard navigation"
  ],
  resources: [
    {
      title: "HTML5 Color Input Documentation",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color"
    },
    {
      title: "Color Conversion Algorithms",
      url: "https://css-tricks.com/converting-color-spaces-in-javascript/"
    },
    {
      title: "React Color Picker Libraries",
      url: "https://www.npmjs.com/package/react-colorful"
    }
  ],
  verification: [
    "Component supports HEX, RGB, and HSL formats",
    "Color values convert accurately between formats",
    "Visual palette displays correctly",
    "Copy functionality works in different browsers",
    "Component is keyboard accessible",
    "Real-time preview updates smoothly"
  ]
};
