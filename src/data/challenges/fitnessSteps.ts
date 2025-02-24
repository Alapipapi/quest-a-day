
import { FitnessChallenge } from "../types/fitness";
import { warmUpChallenge } from "./fitness/warmUp";
import { yogaFlowChallenge } from "./fitness/yogaFlow";
import { coreStrengthChallenge } from "./fitness/coreStrength";
import { enduranceRunningChallenge } from "./fitness/endurance";

export const fitnessSteps: FitnessChallenge[] = [
  warmUpChallenge,
  yogaFlowChallenge,
  coreStrengthChallenge,
  enduranceRunningChallenge
];
