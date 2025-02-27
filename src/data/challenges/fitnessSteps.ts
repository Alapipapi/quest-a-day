
import { FitnessChallenge } from "../types/fitness";
import { yogaFlowChallenge } from "./fitness/yogaFlow";
import { warmUpChallenge } from "./fitness/warmUp";
import { coreStrengthChallenge } from "./fitness/coreStrength";
import { enduranceChallenge } from "./fitness/endurance";
import { intervalSprintChallenge } from "./fitness/intervalSprint";
import { morningYogaChallenge } from "./fitness/morningYoga";

export const fitnessSteps: FitnessChallenge[] = [
  yogaFlowChallenge,
  warmUpChallenge,
  coreStrengthChallenge,
  enduranceChallenge,
  intervalSprintChallenge,
  morningYogaChallenge
];
