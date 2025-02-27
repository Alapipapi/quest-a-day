
import { ProblemSolvingChallenge } from "../types/problemSolving";
import { sudokuChallenge } from "./problemSolving/sudoku";
import { algorithmChallenge } from "./problemSolving/algorithm";
import { analysisChallenge } from "./problemSolving/analysis";
import { chessPuzzleChallenge } from "./problemSolving/chessPuzzle";
import { logicGridChallenge } from "./problemSolving/logicGrid";

export const problemSolvingSteps: ProblemSolvingChallenge[] = [
  sudokuChallenge,
  algorithmChallenge,
  analysisChallenge,
  chessPuzzleChallenge,
  logicGridChallenge
];
