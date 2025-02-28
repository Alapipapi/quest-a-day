
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
      url: "https://www.tableau.com/learn/articles/data-visualization-basics"
    },
    {
      title: "Data Cleaning Tutorial",
      url: "https://towardsdatascience.com/data-cleaning-with-python-and-pandas-detecting-missing-values-3e9c6ebcf78b"
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
