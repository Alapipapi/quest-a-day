
import { FitnessChallenge } from "../../types/fitness";

export const pyramidStrengthTrainingChallenge: FitnessChallenge = {
  title: "Pyramid Strength Training",
  category: "fitness",
  instructions: [
    "Warm up properly with 5-10 minutes of light cardio and dynamic stretching",
    "Select 4-5 compound exercises (e.g., squats, push-ups, rows, lunges, planks)",
    "Start with a lower rep count (6 reps) and increase by 2 for each set until 12 reps",
    "After reaching peak reps, decrease by 2 reps per set back down to 6",
    "Rest 45-60 seconds between sets for optimal recovery",
    "Maintain proper form throughout all repetitions",
    "Focus on controlled eccentric (lowering) phase of each exercise",
    "Complete with 5 minutes of static stretching for recovery"
  ],
  resources: [
    {
      title: "Pyramid Training Principles",
      url: "https://www.verywellfit.com/pyramid-training-build-muscle-and-strength-3498547"
    },
    {
      title: "Proper Form for Compound Exercises",
      url: "https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/"
    }
  ],
  verification: [
    "Did you complete all pyramid sets with the correct rep scheme?",
    "Did you maintain proper form throughout the exercises?",
    "Were you appropriately challenged by the workout intensity?",
    "Did you include both pushing and pulling movements?",
    "Did you perform adequate warm-up and cool-down protocols?"
  ]
};
