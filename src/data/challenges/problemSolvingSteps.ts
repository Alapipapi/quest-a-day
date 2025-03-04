
import { ProblemSolvingChallenge } from "../types/problemSolving";
import { sudokuChallenge } from "./problemSolving/sudoku";
import { algorithmChallenge } from "./problemSolving/algorithm";
import { analysisChallenge } from "./problemSolving/analysis";
import { chessPuzzleChallenge } from "./problemSolving/chessPuzzle";
import { logicGridChallenge } from "./problemSolving/logicGrid";
import { logicPuzzleChallenge } from "./problemSolving/logicPuzzle";
import { dataStructuresChallenge } from "./problemSolving/dataStructures";
import { blockPuzzleChallenge } from "./problemSolving/blockPuzzle";
import { cryptographyChallenge } from "./problemSolving/cryptography";
import { memoryTechniquesChallenge } from "./problemSolving/memoryTechniques";
import { patternRecognitionChallenge } from "./problemSolving/patternRecognition";

export const problemSolvingSteps: ProblemSolvingChallenge[] = [
  sudokuChallenge,
  algorithmChallenge,
  analysisChallenge,
  chessPuzzleChallenge,
  logicGridChallenge,
  logicPuzzleChallenge,
  dataStructuresChallenge,
  blockPuzzleChallenge,
  cryptographyChallenge,
  memoryTechniquesChallenge,
  patternRecognitionChallenge
];
