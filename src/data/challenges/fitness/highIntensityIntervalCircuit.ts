
import { FitnessChallenge } from "../../types/fitness";

export const highIntensityIntervalCircuitChallenge: FitnessChallenge = {
  title: "High-Intensity Interval Circuit",
  instructions: [
    "Warm up for 5 minutes with dynamic stretching and light cardio",
    "Complete 4 rounds of the circuit with minimal rest between exercises",
    "Each round consists of: 45 seconds burpees, 45 seconds mountain climbers, 45 seconds jump squats, 45 seconds plank jacks",
    "Rest 60 seconds between each complete circuit round",
    "After completing all rounds, perform a 5-minute cool down with static stretching",
    "Focus on maintaining proper form throughout, even as fatigue increases"
  ],
  resources: [
    {
      title: "HIIT Workout Benefits",
      url: "https://www.acefitness.org/education-and-resources/professional/expert-articles/5008/8-benefits-of-high-intensity-interval-training-hiit/"
    },
    {
      title: "Proper Form for Circuit Exercises",
      url: "https://www.shape.com/fitness/tips/common-exercise-form-mistakes-fixed"
    }
  ],
  verification: [
    "Did you complete all 4 rounds of the circuit?",
    "Did you maintain proper form throughout the exercises?",
    "Did you stick to the prescribed work and rest intervals?",
    "Did you include both warm-up and cool-down periods?",
    "Were you able to push yourself to an appropriately challenging intensity?"
  ]
};
