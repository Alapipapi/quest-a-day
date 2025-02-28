
import { FitnessChallenge } from "../../types";

export const hiitWorkoutChallenge: FitnessChallenge = {
  category: "fitness",
  title: "30-Minute HIIT Workout",
  instructions: [
    "5-minute dynamic stretching warm-up",
    "Perform 30 seconds of high-intensity exercise",
    "Rest for 15 seconds",
    "Repeat with different exercise",
    "Complete 4 rounds of 5 exercises",
    "End with 5-minute cool down"
  ],
  resources: [
    {
      title: "Beginner HIIT Guide",
      url: "https://www.thebodycoach.com/blog/a-beginners-guide-to-hiit/"
    },
    {
      title: "HIIT Workout Examples",
      url: "https://www.healthline.com/health/best-hiit-exercises"
    }
  ],
  verification: [
    "Completed all rounds",
    "Maintained proper form",
    "Kept within time limits",
    "Achieved elevated heart rate",
    "Performed cool-down"
  ]
};
