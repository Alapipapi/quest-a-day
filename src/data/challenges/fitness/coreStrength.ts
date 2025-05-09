import { FitnessChallenge } from "../../types";

export const coreStrengthChallenge: FitnessChallenge = {
  category: "fitness",
  title: "Core Strength Workout",
  instructions: [
    "30 seconds plank hold",
    "20 bicycle crunches",
    "15 russian twists each side",
    "20 mountain climbers",
    "15 leg raises"
  ],
  resources: [
    {
      title: "Proper Core Exercise Form",
      url: "https://www.youtube.com/results?search_query=proper+core+exercise+form"
    },
    {
      title: "Core Workout Guide",
      url: "https://www.rei.com/learn/expert-advice/best-core-workouts.html"
    }
  ],
  verification: [
    "Core muscles engaged throughout",
    "Maintains proper form",
    "Completes all repetitions",
    "No lower back strain"
  ]
};
