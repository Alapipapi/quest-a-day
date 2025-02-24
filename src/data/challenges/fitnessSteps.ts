
import { StepDetails } from "../types";
import { warmUpChallenge } from "./fitness/warmUp";
import { yogaFlowChallenge } from "./fitness/yogaFlow";
import { coreStrengthChallenge } from "./fitness/coreStrength";
import { enduranceRunningChallenge } from "./fitness/endurance";

export const fitnessSteps: StepDetails[] = [
  warmUpChallenge,
  yogaFlowChallenge,
  coreStrengthChallenge,
  enduranceRunningChallenge
];
