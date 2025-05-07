
import { ProblemSolvingChallenge } from "../../types/problemSolving";

export const insightExplorerChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Insight Explorer",
  instructions: [
    "Choose a publicly available dataset (CSV, Excel, or from an API)",
    "Perform initial exploration to understand data structure and quality",
    "Clean the dataset by addressing missing data, duplicates, or anomalies",
    "Generate at least three insightful visualizations that highlight patterns or trends",
    "Write a brief analysis explaining 3–5 meaningful insights you discovered",
    "Optionally, suggest decisions or actions based on your findings"
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
    "Dataset is clearly understood and appropriately cleaned",
    "Visualizations are relevant, accurate, and enhance interpretation",
    "Insights are logical, data-supported, and non-obvious",
    "Analysis shows thoughtful reasoning and understanding",
    "Summary effectively communicates the value of the findings"
  ],
  examples: [
    "Investigate climate data to spot regional anomalies",
    "Analyze customer churn in a subscription-based business",
    "Explore traffic patterns using city transportation data",
    "Break down user activity trends in an online platform"
  ]
};
