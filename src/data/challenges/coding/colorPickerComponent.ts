
import { CodingChallenge } from "../../types";

export const colorPickerComponentChallenge: CodingChallenge = {
  category: "coding",
  title: "Color Picker Component",
  instructions: [
    "Create a new React component called ColorPicker",
    "Implement a visual color selection interface with a color wheel or palette",
    "Add input fields for hex, RGB, and HSL color values",
    "Ensure all three formats sync when any value changes",
    "Include a preview area showing the selected color",
    "Add copy-to-clipboard functionality for color values",
    "Make the component responsive and accessible",
    "Add proper TypeScript types for all props and state"
  ],
  tools: [
    "React with TypeScript",
    "CSS or styled-components for styling",
    "Color conversion utilities",
    "Clipboard API"
  ],
  resources: [
    {
      title: "Color Theory and Web Colors",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors"
    },
    {
      title: "React Color Library Documentation",
      url: "https://casesandberg.github.io/react-color/"
    },
    {
      title: "Color Conversion Algorithms",
      url: "https://www.rapidtables.com/convert/color/index.html"
    },
    {
      title: "Clipboard API Usage",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API"
    }
  ],
  verification: [
    "Component accepts and displays colors in hex, RGB, and HSL formats",
    "All color format inputs are synchronized",
    "Color preview updates in real-time",
    "Copy functionality works for all color formats",
    "Component is responsive on different screen sizes",
    "Proper accessibility attributes are implemented"
  ]
};
