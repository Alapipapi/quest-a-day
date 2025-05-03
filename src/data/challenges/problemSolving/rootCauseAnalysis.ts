
import { ProblemSolvingChallenge } from "../../types/problemSolving";

export const rootCauseAnalysisChallenge: ProblemSolvingChallenge = {
  title: "Root Cause Analysis",
  category: "problem-solving",
  instructions: [
    "Select a complex problem scenario from your work or personal experience",
    "Use the 5 Whys technique to dig beyond symptoms to underlying causes",
    "Create a cause-and-effect (fishbone) diagram to identify possible causal factors",
    "Collect and analyze available data to verify likely root causes",
    "Apply the Pareto Principle to identify the vital few causes (vs. the trivial many)",
    "Develop specific, actionable solutions addressing the identified root causes",
    "Create an implementation plan with clear success metrics"
  ],
  resources: [
    {
      title: "5 Whys Method Guide",
      url: "https://www.mindtools.com/pages/article/newTMC_5W.htm"
    },
    {
      title: "Fishbone Diagram Tutorial",
      url: "https://asq.org/quality-resources/fishbone"
    },
    {
      title: "Comprehensive Root Cause Analysis Guide",
      url: "https://www.process.st/root-cause-analysis/"
    }
  ],
  verification: [
    "Did you apply at least two different root cause analysis techniques?",
    "Have you distinguished between symptoms and actual root causes?",
    "Is your analysis backed by data and evidence?",
    "Are your proposed solutions directly addressing identified root causes?",
    "Have you developed specific metrics to measure solution effectiveness?"
  ],
  examples: [
    "A software company experiencing recurring bugs in production releases",
    "A manufacturing process with increasing defect rates",
    "A team consistently missing project deadlines",
    "A business experiencing declining customer satisfaction scores"
  ]
};
