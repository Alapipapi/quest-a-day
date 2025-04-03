
import { ProblemSolvingChallenge } from "../../types";

export const analysisChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Data Analysis Challenge",
  instructions: [
    "Download the provided dataset CSV file",
    "Clean the data to handle missing values",
    "Create at least three visualizations (charts/graphs)",
    "Identify patterns or insights in the data",
    "Write a brief summary of your findings"
  ],
  resources: [
    {
      title: "Public Datasets Repository",
      url: "https://www.kaggle.com/datasets"
    },
    {
      title: "Data Visualization Guide",
      url: "https://www.smashingmagazine.com/2023/01/guide-getting-data-visualization-right/"
    },
    {
      title: "Data Cleaning Tutorial",
      url: "https://www.datacamp.com/tutorial/tutorial-data-cleaning-tutorial"
    }
  ],
  verification: [
    "All missing data handled appropriately",
    "Visualizations clearly convey information",
    "Analysis identifies meaningful patterns",
    "Summary effectively communicates insights",
    "Approach demonstrates logical thinking"
  ]
};
