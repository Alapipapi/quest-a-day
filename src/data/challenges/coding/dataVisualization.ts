
import { CodingChallenge } from "../../types";

export const dataVisualizationChallenge: CodingChallenge = {
  category: "coding",
  title: "Data Visualization Dashboard",
  instructions: [
    "Set up a React project with Recharts library",
    "Create a dashboard layout with multiple chart components",
    "Implement at least three different chart types (e.g., line, bar, pie)",
    "Add interactive features like tooltips and zooming",
    "Style the dashboard for readability and visual appeal",
    "Ensure the dashboard is responsive"
  ],
  resources: [
    {
      title: "Recharts Documentation",
      url: "https://recharts.org/en-US/guide"
    },
    {
      title: "Sample Data Sources",
      url: "https://github.com/jdorfman/awesome-json-datasets"
    }
  ],
  verification: [
    "Dashboard contains multiple charts",
    "Charts display data correctly",
    "Interactive features work as expected",
    "Dashboard is visually appealing and responsive"
  ]
};
