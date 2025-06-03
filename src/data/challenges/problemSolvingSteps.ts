
import { ProblemSolvingChallenge } from "../types";
import { StepDetails } from "../types/common";
import { logicPuzzleChallenge } from "./problemSolving/logicPuzzle";
import { sudokuChallenge } from "./problemSolving/sudoku";
import { algorithmChallenge } from "./problemSolving/algorithm";
import { chessPuzzleChallenge } from "./problemSolving/chessPuzzle";
import { logicGridChallenge } from "./problemSolving/logicGrid";
import { dataStructuresChallenge } from "./problemSolving/dataStructures";
import { analysisChallenge } from "./problemSolving/analysis";
import { blockPuzzleChallenge } from "./problemSolving/blockPuzzle";
import { cryptographyChallenge } from "./problemSolving/cryptography";
import { memoryTechniquesChallenge } from "./problemSolving/memoryTechniques";
import { patternRecognitionChallenge } from "./problemSolving/patternRecognition";
import { optimizationProblemChallenge } from "./problemSolving/optimizationProblem";
import { escapeRoomChallenge } from "./problemSolving/escapeRoom";
import { systemsThinkingChallenge } from "./problemSolving/systemsThinking";
import { decisionFrameworkChallenge } from "./problemSolving/decisionFramework";
import { graphTheoryChallenge } from "./problemSolving/graphTheory";
import { lateralThinkingChallenge } from "./problemSolving/lateralThinking";
import { financialOptimizationChallenge } from "./problemSolving/financialOptimization";
import { negotiationScenarioChallenge } from "./problemSolving/negotiationScenario";
import { ethicalDilemmaChallenge } from "./problemSolving/ethicalDilemma";
import { strategicPlanningChallenge } from "./problemSolving/strategicPlanning";
import { timeManagementChallenge } from "./problemSolving/timeManagement";
import { designThinkingChallenge } from "./problemSolving/designThinkingChallenge";
import { resourceOptimizationChallenge } from "./problemSolving/resourceOptimization";
import { rootCauseAnalysisChallenge } from "./problemSolving/rootCauseAnalysis";
import { riskAssessmentFrameworkChallenge } from "./problemSolving/riskAssessmentFramework";
import { prioritizationFrameworkChallenge } from "./problemSolving/prioritizationFramework";
import { decisionMatrixChallenge } from "./problemSolving/decisionMatrix";
import { insightExplorerChallenge } from "./problemSolving/insightExplorer";
import { systemOptimizationChallenge } from "./problemSolving/systemOptimization";

// Add new quick problem-solving challenge steps
const brainTeaserSprintSteps: StepDetails = {
  title: "Brain Teaser Sprint",
  instructions: [
    "Find 5 different types of brain teasers or riddles online",
    "Set a timer for 2-3 minutes per puzzle maximum",
    "Start with a logic puzzle that requires deductive reasoning",
    "Solve a mathematical brain teaser or number sequence",
    "Work on a word puzzle or lateral thinking riddle",
    "Attempt a visual/spatial reasoning challenge",
    "Finish with a classic riddle that requires creative thinking"
  ],
  verification: [
    "Attempted all 5 different types of puzzles",
    "Stayed within the time limit for each puzzle",
    "Solved at least 3 out of 5 puzzles correctly",
    "Used logical reasoning for problem-solving",
    "Feel mentally stimulated and alert",
    "Identified which types of puzzles you excel at"
  ],
  resources: [
    { title: "Brain Teasers Collection", url: "https://www.braingle.com/" },
    { title: "Logic Puzzles", url: "https://www.puzzle-riddles.com/" }
  ]
};

// Update the main steps array to include new challenges
export const problemSolvingSteps: StepDetails[] = [
  logicPuzzleChallenge,
  sudokuChallenge,
  algorithmChallenge,
  chessPuzzleChallenge,
  logicGridChallenge,
  dataStructuresChallenge,
  analysisChallenge,
  blockPuzzleChallenge,
  cryptographyChallenge,
  memoryTechniquesChallenge,
  patternRecognitionChallenge,
  optimizationProblemChallenge,
  escapeRoomChallenge,
  systemsThinkingChallenge,
  decisionFrameworkChallenge,
  graphTheoryChallenge,
  lateralThinkingChallenge,
  financialOptimizationChallenge,
  negotiationScenarioChallenge,
  ethicalDilemmaChallenge,
  strategicPlanningChallenge,
  timeManagementChallenge,
  designThinkingChallenge,
  resourceOptimizationChallenge,
  rootCauseAnalysisChallenge,
  riskAssessmentFrameworkChallenge,
  prioritizationFrameworkChallenge,
  decisionMatrixChallenge,
  insightExplorerChallenge,
  systemOptimizationChallenge,
  brainTeaserSprintSteps
];
