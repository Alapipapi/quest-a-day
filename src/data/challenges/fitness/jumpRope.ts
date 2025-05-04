
import { FitnessChallenge } from "../../types/fitness";

export const jumpRopeChallenge: FitnessChallenge = {
  category: "fitness",
  title: "Jump Rope Challenge",
  instructions: [
    "Get a jump rope appropriate for your height",
    "Begin with 1 minute of basic jumps to warm up",
    "Practice 3 sets of 1-minute alternating foot jumps with 30-second rests",
    "Learn and attempt 5 double-unders (rope passes twice during one jump)",
    "Finish with 1-minute cool down of basic jumps at slower pace"
  ],
  equipment: ["Jump rope"],
  warmUp: "5 minutes of light cardio (marching in place or jumping jacks)",
  coolDown: "Calf and shoulder stretches for 3-5 minutes",
  resources: [
    {
      title: "Jump Rope Techniques for Beginners",
      url: "https://www.youtube.com/watch?v=FJmRQ5iTXKE"
    },
    {
      title: "Benefits of Jump Rope Training",
      url: "https://www.crossrope.com/blogs/blog/jump-rope-benefits/"
    }
  ],
  verification: [
    "Can maintain continuous jumping for at least 60 seconds",
    "Correctly performs alternating foot jumps",
    "Successfully attempts double-unders",
    "Completes the entire workout with proper form",
    "Heart rate elevated but able to recover during rest periods"
  ]
};
