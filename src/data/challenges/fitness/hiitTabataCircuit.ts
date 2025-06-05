
import { FitnessChallenge } from "../../types";

export const hiitTabataCircuitChallenge: FitnessChallenge = {
  category: "fitness",
  title: "HIIT Tabata Circuit",
  instructions: [
    "Warm up with 5 minutes of dynamic movements and light cardio",
    "Set up 4 exercise stations: burpees, mountain climbers, jump squats, and high knees",
    "Follow Tabata protocol: 20 seconds maximum effort, 10 seconds rest",
    "Complete 8 rounds (4 minutes total) at each station",
    "Rest 1 minute between stations",
    "Maintain proper form even at high intensity",
    "Track your reps for each round to monitor progress",
    "Cool down with 5 minutes of stretching and breathing exercises"
  ],
  equipment: [
    "Timer or Tabata app",
    "Exercise mat (optional)",
    "Water bottle",
    "Towel"
  ],
  warmUp: "5 minutes of arm circles, leg swings, light jogging in place, and dynamic stretches",
  coolDown: "5 minutes of static stretching focusing on major muscle groups and deep breathing",
  resources: [
    {
      title: "Tabata Training Science and Benefits",
      url: "https://www.healthline.com/health/fitness-exercise/tabata-training"
    },
    {
      title: "HIIT Workout Form Guide",
      url: "https://www.acefitness.org/education-and-resources/lifestyle/blog/6503/high-intensity-interval-training-hiit-what-you-need-to-know/"
    }
  ],
  verification: [
    "Completed all 4 stations with proper Tabata timing",
    "Maintained maximum effort during work intervals",
    "Performed exercises with correct form throughout",
    "Heart rate significantly elevated during work periods",
    "Successfully completed full 30-35 minute session including warm-up and cool-down"
  ]
};
