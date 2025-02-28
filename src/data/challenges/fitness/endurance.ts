
import { FitnessChallenge } from "../../types";

export const enduranceChallenge: FitnessChallenge = {
  category: "fitness",
  title: "Endurance Running",
  instructions: [
    "5-minute walking warm-up",
    "20 minutes of steady-state running",
    "Interval: 1 minute fast, 2 minutes moderate",
    "Repeat intervals 5 times",
    "5-minute cool-down walk"
  ],
  resources: [
    {
      title: "Running Form Guide",
      url: "https://www.runnersworld.com/beginner/a20811257/proper-running-form-0/"
    },
    {
      title: "Interval Training Basics",
      url: "https://www.runnersworld.com/uk/training/a773582/interval-training-how-it-works/"
    }
  ],
  verification: [
    "Maintains consistent pace",
    "Completes all intervals",
    "Proper breathing technique",
    "Cool-down completed"
  ]
};
