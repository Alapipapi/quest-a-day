
import { FitnessChallenge } from "../../types/fitness";

export const intervalCardioStrengthChallenge: FitnessChallenge = {
  title: "Interval Cardio-Strength Circuit",
  category: "fitness",
  instructions: [
    "Begin with a 5-minute dynamic warm-up focusing on mobility of major joints",
    "Perform 8 rounds of the following circuit with minimal rest between exercises:",
    "30 seconds of high-knee running or jumping jacks",
    "15 push-ups (modify as needed by doing them on knees)",
    "30 seconds of mountain climbers",
    "15 bodyweight squats or lunges",
    "30 seconds of burpees (modify by stepping back instead of jumping if needed)",
    "15 dumbbell or kettlebell rows per side (or doorway rows)",
    "Rest 1-2 minutes between complete circuit rounds",
    "Finish with a 5-minute cool-down and static stretching routine"
  ],
  resources: [
    {
      title: "Proper High-Intensity Interval Training Techniques",
      url: "https://www.acefitness.org/education-and-resources/professional/expert-articles/5008/8-things-to-know-about-aerobic-capacity-and-vo2-max/"
    },
    {
      title: "Bodyweight Exercise Form Guide",
      url: "https://www.nerdfitness.com/blog/the-42-best-bodyweight-exercises-work-out-anywhere/"
    }
  ],
  verification: [
    "Were you able to complete all 8 rounds of the circuit?",
    "Did you maintain proper form throughout all exercises?",
    "Did you modify exercises appropriately based on your fitness level?",
    "Was your heart rate elevated throughout the majority of the workout?",
    "Did you perform the complete warm-up and cool-down segments?"
  ]
};
