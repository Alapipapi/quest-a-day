
import { FitnessChallenge } from "../../types";

export const hiitCardioChallenge: FitnessChallenge = {
  category: "fitness",
  title: "HIIT Cardio Challenge",
  instructions: [
    "Warm up with 5 minutes of light cardio",
    "Perform 30 seconds of jumping jacks at maximum intensity",
    "Rest for 15 seconds",
    "Perform 30 seconds of high knees at maximum intensity",
    "Rest for 15 seconds",
    "Perform 30 seconds of burpees at maximum intensity",
    "Rest for 15 seconds",
    "Perform 30 seconds of mountain climbers at maximum intensity",
    "Rest for 15 seconds",
    "Repeat the circuit 4 times",
    "Cool down with 5 minutes of stretching"
  ],
  resources: [
    {
      title: "HIIT Training Guide",
      url: "https://prodiadigital.com/en/articles/learn-more-about-hiit-cardio-workouts-and-their-examples"
    },
    {
      title: "Proper Form for HIIT Exercises",
      url: "https://www.youtube.com/results?search_query=proper+form+hiit+exercises"
    }
  ],
  verification: [
    "Completed all circuits",
    "Maintained maximum intensity during work periods",
    "Followed rest intervals",
    "Performed proper cool-down"
  ]
};
