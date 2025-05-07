
import { ProblemSolvingChallenge } from "../../types/problemSolving";

export const dataAnalysisChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Data Analysis Challenge",
  instructions: [
    "Obtain a small dataset (CSV, Excel, or online source)",
    "Clean the data by handling missing values and outliers",
    "Create at least 3 different visualizations (charts, graphs)",
    "Identify 3-5 key insights from the data",
    "Prepare a short summary of your findings",
    "Optional: Make recommendations based on your analysis"
  ],
  resources: [
    {
      title: "Data Cleaning Guide",
      url: "https://towardsdatascience.com/the-ultimate-guide-to-data-cleaning-3969843991d4"
    },
    {
      title: "Data Visualization Best Practices",
      url: "https://www.tableau.com/learn/articles/data-visualization-tips"
    }
  ],
  verification: [
    "Dataset is properly cleaned and processed",
    "Visualizations effectively represent the data",
    "Insights are clearly articulated and data-driven",
    "Analysis demonstrates critical thinking",
    "Summary effectively communicates findings"
  ],
  examples: [
    "Analyze public health data to identify trends",
    "Explore customer purchasing patterns from sales data",
    "Investigate financial performance metrics",
    "Examine social media engagement statistics"
  ]
};
