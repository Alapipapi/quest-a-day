
import { FitnessChallenge } from "../../types";

export const enduranceRunningChallenge: FitnessChallenge = {
  category: "fitness",
  title: "Endurance Running",
  instructions: [
    "Complete a 20-minute endurance run with proper pacing and form"
  ],
  resources: [
    {
      title: "Running Form Guide",
      url: "https://www.runnersworld.com/beginner/a20811257/proper-running-form-0/"
    },
    {
      title: "Interval Training Basics",
      url: "https://www.healthline.com/health/interval-running-for-beginners"
    }
  ],
  verification: [
    "Maintained consistent pace",
    "Used proper breathing technique",
    "Completed full duration"
  ]
};
