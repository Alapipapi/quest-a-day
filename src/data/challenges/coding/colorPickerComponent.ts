import { CodingChallenge } from "../../types";

export const colorPickerComponentChallenge: CodingChallenge = {
  category: "coding",
  title: "Color Picker Component",
  instructions: [
    "Create a color picker interface with visual color selection",
    "Implement support for HEX, RGB, and HSL color formats",
    "Add a color palette with predefined colors",
    "Include sliders for RGB and HSL value adjustment",
    "Display live preview of selected color",
    "Add input fields for manual color value entry",
    "Implement color format conversion between HEX, RGB, and HSL",
    "Include copy-to-clipboard functionality for color codes"
  ],
  tools: [
    "HTML5 (including input type='color')",
    "CSS3 for styling",
    "JavaScript for color conversion logic",
    "Canvas API for custom color picker"
  ],
  resources: [
    {
      title: "Color Theory and Conversion",
      url: "https://en.wikipedia.org/wiki/HSL_and_HSV"
    },
    {
      title: "HTML Color Input",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color"
    },
    {
      title: "JavaScript Color Conversion",
      url: "https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb"
    }
  ],
  verification: [
    "Color picker accurately displays and selects colors",
    "All color format conversions work correctly",
    "Manual input fields update the color picker",
    "Copy functionality works for all color formats",
    "Color preview updates in real-time",
    "Component is accessible and user-friendly"
  ]
};