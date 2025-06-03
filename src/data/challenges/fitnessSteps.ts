import { FitnessChallenge } from "../types/fitness";
import { hiitWorkoutChallenge } from "./fitness/hiitWorkout";
import { yogaFlowChallenge } from "./fitness/yogaFlow";
import { coreStrengthChallenge } from "./fitness/coreStrength";
import { enduranceChallenge } from "./fitness/endurance";
import { morningYogaChallenge } from "./fitness/morningYoga";
import { intervalSprintChallenge } from "./fitness/intervalSprint";
import { strengthTrainingChallenge } from "./fitness/strengthTraining";
import { warmUpChallenge } from "./fitness/warmUp";
import { pilatesCoreChallenge } from "./fitness/pilatesCore";
import { mobilityRoutineChallenge } from "./fitness/mobilityRoutine";
import { functionalTrainingChallenge } from "./fitness/functionalTraining";
import { bodyweightStrengthChallenge } from "./fitness/bodyweightStrength";
import { activeRecoveryChallenge } from "./fitness/activeRecovery";
import { balanceTrainingChallenge } from "./fitness/balanceTraining";
import { hiitCardioChallenge } from "./fitness/hiitCardio";
import { flexibilityImprovementChallenge } from "./fitness/flexibilityImprovement";
import { tabataWorkoutChallenge } from "./fitness/tabataWorkout";
import { stretchingRoutineChallenge } from "./fitness/stretchingRoutine";
import { lowImpactCardioChallenge } from "./fitness/lowImpactCardio";
import { strengthEnduranceWorkoutChallenge } from "./fitness/strengthEnduranceWorkout";
import { metabolicConditioningChallenge } from "./fitness/metabolicConditioning";
import { functionalMobilityWorkoutChallenge } from "./fitness/functionalMobilityWorkout";
import { pyramidStrengthTrainingChallenge } from "./fitness/pyramidStrengthTraining";
import { intervalCardioStrengthChallenge } from "./fitness/intervalCardioStrength";
import { jumpRopeChallenge } from "./fitness/jumpRope";
import { mindfulMovementChallenge } from "./fitness/mindfulMovement";
import { intervalTrainingChallenge } from "./fitness/intervalTraining";

// Add new quick fitness challenge steps
const fiveMinuteEnergyBoostSteps: StepDetails = {
  title: "5-Minute Energy Boost",
  instructions: [
    "Start with 30 seconds of light marching in place to warm up",
    "Perform 20 jumping jacks with full arm extension",
    "Complete 15 bodyweight squats focusing on proper form",
    "Do 10 arm circles forward and 10 backward",
    "Perform 15 high knees, bringing knees to hip level",
    "Complete 10 push-ups (modify on knees if needed)",
    "Finish with 30 seconds of deep breathing and stretching"
  ],
  verification: [
    "Completed all jumping jacks with good form",
    "Squats were performed with proper depth",
    "Arm circles were full range of motion",
    "High knees reached appropriate height",
    "Push-ups maintained straight body line",
    "Feel energized and ready for the day"
  ],
  equipment: ["None required"],
  warmUp: "Light marching in place for 30 seconds",
  coolDown: "Deep breathing and light stretching for 30 seconds"
};

const deskBreakStretchesSteps: StepDetails = {
  title: "Desk Break Stretches",
  instructions: [
    "Perform neck rolls - 5 slow circles in each direction",
    "Do shoulder shrugs - hold for 5 seconds, repeat 10 times",
    "Stretch your wrists by extending arms and flexing hands up and down",
    "Perform seated spinal twists - hold for 15 seconds each side",
    "Do seated figure-4 hip stretches for each leg",
    "Extend arms overhead and lean side to side for lateral stretches",
    "Stand and do a few calf raises to improve circulation"
  ],
  verification: [
    "Neck feels less tense after rolls",
    "Shoulders are relaxed after shrugs",
    "Wrists feel loose and flexible",
    "Spine feels more mobile after twists",
    "Hips are less tight after stretches",
    "Feel refreshed and less stiff overall"
  ],
  equipment: ["Chair", "Desk space"],
  warmUp: "Gentle head nods and shoulder movements",
  coolDown: "Take 5 deep breaths and return to work refreshed"
};

const powerWalkingChallengeSteps: StepDetails = {
  title: "Power Walking Challenge",
  instructions: [
    "Find a safe outdoor route or use a treadmill",
    "Start with 2 minutes of normal-paced walking to warm up",
    "Increase pace to brisk walking - you should feel slightly breathless",
    "Maintain proper posture: head up, shoulders back, arms swinging",
    "Focus on landing on your heel and rolling through to your toes",
    "Keep a steady, rhythmic breathing pattern",
    "Cool down with 2 minutes of slower walking"
  ],
  verification: [
    "Maintained brisk pace for the majority of walk",
    "Kept proper posture throughout",
    "Breathing was controlled and rhythmic",
    "Feel energized but not exhausted",
    "Completed the full 10-15 minute duration",
    "Heart rate is elevated but comfortable"
  ],
  equipment: ["Comfortable walking shoes", "Weather-appropriate clothing"],
  warmUp: "2 minutes of normal-paced walking",
  coolDown: "2 minutes of slow walking and light stretching"
};

// Update the main steps array to include new challenges
export const fitnessSteps: StepDetails[] = [
  hiitWorkoutChallenge,
  yogaFlowChallenge,
  coreStrengthChallenge,
  enduranceChallenge,
  morningYogaChallenge,
  intervalSprintChallenge,
  strengthTrainingChallenge,
  warmUpChallenge,
  pilatesCoreChallenge,
  mobilityRoutineChallenge,
  functionalTrainingChallenge,
  bodyweightStrengthChallenge,
  activeRecoveryChallenge,
  balanceTrainingChallenge,
  hiitCardioChallenge,
  flexibilityImprovementChallenge,
  tabataWorkoutChallenge,
  stretchingRoutineChallenge,
  lowImpactCardioChallenge,
  strengthEnduranceWorkoutChallenge,
  metabolicConditioningChallenge,
  functionalMobilityWorkoutChallenge,
  pyramidStrengthTrainingChallenge,
  intervalCardioStrengthChallenge,
  jumpRopeChallenge,
  mindfulMovementChallenge,
  intervalTrainingChallenge,
  fiveMinuteEnergyBoostSteps,
  deskBreakStretchesSteps,
  powerWalkingChallengeSteps
];
