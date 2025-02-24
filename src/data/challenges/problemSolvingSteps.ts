
import { ProblemSolvingChallenge } from "../types/problemSolving";
import { problemAnalysisChallenge } from "./problemSolving/analysis";
import { sudokuChallenge } from "./problemSolving/sudoku";
import { algorithmChallenge } from "./problemSolving/algorithm";

export const problemSolvingSteps: ProblemSolvingChallenge[] = [
  problemAnalysisChallenge,
  sudokuChallenge,
  algorithmChallenge
];
