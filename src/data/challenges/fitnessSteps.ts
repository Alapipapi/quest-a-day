
import { FitnessChallenge } from "../types/fitness";
import { yogaFlowChallenge } from "./fitness/yogaFlow";
import { warmUpChallenge } from "./fitness/warmUp";
import { coreStrengthChallenge } from "./fitness/coreStrength";
import { enduranceChallenge } from "./fitness/endurance";
import { intervalSprintChallenge } from "./fitness/intervalSprint";
import { morningYogaChallenge } from "./fitness/morningYoga";
import { hiitWorkoutChallenge } from "./fitness/hiitWorkout";
import { strengthTrainingChallenge } from "./fitness/strengthTraining";
import { pilatesCoreChallenge } from "./fitness/pilatesCore";
import { mobilityRoutineChallenge } from "./fitness/mobilityRoutine";
import { functionalTrainingChallenge } from "./fitness/functionalTraining";

export const fitnessSteps: FitnessChallenge[] = [
  yogaFlowChallenge,
  warmUpChallenge,
  coreStrengthChallenge,
  enduranceChallenge,
  intervalSprintChallenge,
  morningYogaChallenge,
  hiitWorkoutChallenge,
  strengthTrainingChallenge,
  pilatesCoreChallenge,
  mobilityRoutineChallenge,
  functionalTrainingChallenge
];
