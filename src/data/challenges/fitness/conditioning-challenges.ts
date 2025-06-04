import { Challenge } from "../../types/challenge";
import { metabolicConditioningChallenge } from "./metabolicConditioning";
import { functionalMobilityWorkoutChallenge } from "./functionalMobilityWorkout";
import { pyramidStrengthTrainingChallenge } from "./pyramidStrengthTraining";
import { intervalCardioStrengthChallenge } from "./intervalCardioStrength";
import { hiitTabataCircuitChallenge } from "./hiitTabataCircuit";

export const conditioningFitnessChallenges: Challenge[] = [
  {
    id: 301,
    title: "HIIT Workout Circuit",
    description: "High-intensity interval training combining cardio and strength exercises.",
    category: "fitness",
    difficulty: "Hard",
    timeEstimate: "30-45 minutes"
  },
  {
    id: 302,
    title: "Metabolic Conditioning",
    description: "Full-body workout to maximize calorie burn and improve metabolic rate.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "40-50 minutes"
  },
  {
    id: 303,
    title: "Functional Mobility Workout",
    description: "Enhance overall mobility and stability with functional exercises.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "35-45 minutes"
  },
  {
    id: 304,
    title: "Pyramid Strength Training",
    description: "Strength training with increasing and decreasing reps to build endurance and strength.",
    category: "fitness",
    difficulty: "Hard",
    timeEstimate: "45-60 minutes"
  },
  {
    id: 305,
    title: "Interval Cardio & Strength",
    description: "Alternating cardio and strength intervals for a full-body conditioning effect.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "40-50 minutes"
  },
  metabolicConditioningChallenge,
  functionalMobilityWorkoutChallenge,
  pyramidStrengthTrainingChallenge,
  intervalCardioStrengthChallenge,
  hiitTabataCircuitChallenge
];
