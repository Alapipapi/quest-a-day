
import { CodingChallenge } from "../../types";

export const quickCalculatorWidgetChallenge: CodingChallenge = {
  category: "coding",
  title: "Quick Calculator Widget",
  instructions: [
    "Create a simple calculator component with number buttons (0-9)",
    "Add operation buttons (+, -, *, /, =, clear)",
    "Implement basic arithmetic functionality",
    "Display current calculation and result",
    "Handle edge cases (division by zero, invalid operations)",
    "Style with a clean, modern interface"
  ],
  resources: [
    {
      title: "JavaScript Math Operations",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"
    },
    {
      title: "React State Management",
      url: "https://react.dev/reference/react/useState"
    }
  ],
  verification: [
    "All basic arithmetic operations work correctly",
    "Calculator handles decimal numbers",
    "Clear button resets the calculator",
    "Interface is intuitive and responsive",
    "Error states are handled gracefully"
  ]
};
