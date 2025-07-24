import { CodingChallenge } from "../../types";

export const quickCalculatorWidgetChallenge: CodingChallenge = {
  category: "coding",
  title: "Quick Calculator Widget",
  instructions: [
    "Create a clean calculator interface with number and operation buttons",
    "Implement basic arithmetic operations (add, subtract, multiply, divide)",
    "Add a display screen showing current number and operations",
    "Handle decimal point operations correctly",
    "Implement clear and clear-all functionality",
    "Add keyboard support for number and operation input",
    "Include error handling for division by zero",
    "Style with a modern, user-friendly design"
  ],
  tools: [
    "HTML5",
    "CSS3 for styling",
    "JavaScript for logic",
    "CSS Grid or Flexbox for layout"
  ],
  resources: [
    {
      title: "JavaScript Calculator Tutorial",
      url: "https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/"
    },
    {
      title: "CSS Grid Layout",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
    },
    {
      title: "Keyboard Event Handling",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent"
    }
  ],
  verification: [
    "All basic arithmetic operations work correctly",
    "Display shows appropriate numbers and operations",
    "Decimal calculations are accurate",
    "Keyboard input functions properly",
    "Error cases are handled gracefully",
    "Interface is intuitive and responsive"
  ]
};