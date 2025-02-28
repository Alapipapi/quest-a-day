
import { FitnessChallenge } from "../../types";

export const strengthTrainingChallenge: FitnessChallenge = {
  category: "fitness",
  title: "Full Body Strength Training",
  instructions: [
    "Warm up with 5 minutes of light cardio",
    "Perform 3 sets of 8-12 squats",
    "Complete 3 sets of 8-12 push-ups",
    "Execute 3 sets of 8-12 lunges per leg",
    "Do 3 sets of 8-12 rows or pull-ups",
    "Finish with 5 minutes of stretching"
  ],
  resources: [
    {
      title: "Proper Form Guide",
      url: "https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/"
    },
    {
      title: "Progressive Overload Principles",
      url: "https://www.healthline.com/health/progressive-overload"
    }
  ],
  verification: [
    "Completed all sets with proper form",
    "Maintained appropriate rest between sets",
    "Achieved muscle fatigue by final set",
    "Performed full range of motion",
    "Completed cool-down stretches"
  ]
};
