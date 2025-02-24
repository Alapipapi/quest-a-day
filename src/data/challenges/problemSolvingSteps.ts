
import { StepDetails } from "../types/challenges";
import { problemAnalysisChallenge } from "./problemSolving/analysis";
import { sudokuChallenge } from "./problemSolving/sudoku";
import { algorithmChallenge } from "./problemSolving/algorithm";

export const problemSolvingSteps: StepDetails[] = [
  problemAnalysisChallenge,
  sudokuChallenge,
  algorithmChallenge
];
