
import { FitnessChallenge } from "../../types";

export const intervalTrainingChallenge: FitnessChallenge = {
  category: "fitness",
  title: "Progressive Interval Training",
  instructions: [
    "Warm up with 5 minutes of light cardio and dynamic stretches",
    "Set a timer for 30 seconds work and 30 seconds rest intervals",
    "Perform high-intensity exercises during work intervals",
    "Rest completely during rest intervals",
    "Complete 4 rounds in week 1, adding 1 round each week",
    "Progress by increasing work time or decreasing rest time",
    "Include a mix of cardio and bodyweight strength exercises",
    "Cool down with 5 minutes of light movement and stretching"
  ],
  resources: [
    {
      title: "Interval Training Science",
      url: "https://cw-x.com/blogs/news/the-science-of-interval-training-boost-endurance-and-speed?srsltid=AfmBOoqCWC_KeinmTE5cmxjWZl-MkFu8JE84yHTD4qbX7uW40n8pTcnQ"
    },
    {
      title: "Bodyweight Exercise Chart",
      url: "https://darebee.com/fitness/muscle-map.html"
    }
  ],
  verification: [
    "Completes full interval sets with proper form",
    "Progressively increases workout intensity over time",
    "Maintains appropriate work-to-rest ratio",
    "Records workout details for tracking progress",
    "Performs proper warm-up and cool-down"
  ],
  equipment: [
    "Timer or interval timer app",
    "Exercise mat (optional)",
    "Water bottle",
    "Comfortable workout clothes and shoes"
  ],
  warmUp: "5 minutes of light cardio (marching in place, light jogging) followed by dynamic stretches for major muscle groups",
  coolDown: "5 minutes of light walking followed by static stretches for worked muscle groups"
};
