
import { motion } from "framer-motion";
import { Dumbbell, Pencil, Brush, Code } from "lucide-react";
import { Challenge } from "@/data/types/challenge";
import { StepDetails } from "@/data/challengeSteps";
import ProgressBar from "@/components/challenges/ProgressBar";
import ChallengeDifficulty from "@/components/challenges/ChallengeDifficulty";
import ChallengeTimer from "@/components/challenges/ChallengeTimer";
import ChallengeInstructions from "@/components/challenges/ChallengeInstructions";
import ChallengeResources from "@/components/challenges/ChallengeResources";
import VerificationChecklist from "@/components/challenges/VerificationChecklist";
import ChallengeHeader from "@/components/challenges/ChallengeHeader";
import { Button } from "@/components/ui/button";
import { CreativityChallenge } from "@/data/types/creativity";
import { FitnessChallenge } from "@/data/types/fitness";
import { CodingChallenge } from "@/data/types/coding";

interface ChallengeContentProps {
  challenge: StepDetails;
  challengeInfo: Challenge | null;
  category: string | undefined;
  isCompleted: boolean;
  progress: number;
  verificationStatus: boolean[];
  toggleCompletion: () => void;
  updateProgress: (value: number) => void;
  toggleVerificationItem: (index: number) => void;
  handleResourceClick: (url: string) => void;
}

const ChallengeContent = ({
  challenge,
  challengeInfo,
  category,
  isCompleted,
  progress,
  verificationStatus,
  toggleCompletion,
  updateProgress,
  toggleVerificationItem,
  handleResourceClick
}: ChallengeContentProps) => {
  const isCreativityChallenge = category === "creativity";
  const isFitnessChallenge = category === "fitness";
  const isCodingChallenge = category === "coding";
  
  // Type assertion based on category
  const creativityChallenge = isCreativityChallenge ? challenge as CreativityChallenge : null;
  const fitnessChallenge = isFitnessChallenge ? challenge as FitnessChallenge : null;
  const codingChallenge = isCodingChallenge ? challenge as CodingChallenge : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-card/80 backdrop-blur-sm dark:bg-card/60 rounded-2xl shadow-xl overflow-hidden border border-border"
    >
      <ChallengeHeader
        title={challenge.title}
        category={category}
        isCompleted={isCompleted}
      />

      <div className="p-6 sm:p-8 space-y-8">
        <ProgressBar
          progress={progress}
          updateProgress={updateProgress}
        />

        {challengeInfo && challengeInfo.difficulty && challengeInfo.timeEstimate && (
          <ChallengeDifficulty
            difficulty={challengeInfo.difficulty}
            timeEstimate={challengeInfo.timeEstimate}
          />
        )}

        {challengeInfo && (
          <ChallengeTimer challengeId={challengeInfo.id} />
        )}

        <ChallengeInstructions
          instructions={challenge.instructions}
        />

        {/* Coding Challenge specific content */}
        {isCodingChallenge && codingChallenge?.tools && codingChallenge.tools.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Recommended Tools
            </h2>
            <ul className="space-y-2 pl-5 list-disc">
              {codingChallenge.tools.map((tool, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-muted-foreground"
                >
                  {tool}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Creativity Challenge specific content */}
        {isCreativityChallenge && creativityChallenge?.materials && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Brush className="mr-2 h-5 w-5" />
              Materials Needed
            </h2>
            <ul className="space-y-2 pl-5 list-disc">
              {creativityChallenge.materials.map((material, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-muted-foreground"
                >
                  {material}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {isCreativityChallenge && creativityChallenge?.inspiration && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Pencil className="mr-2 h-5 w-5" />
              Inspiration Ideas
            </h2>
            <ul className="space-y-2 pl-5 list-disc">
              {creativityChallenge.inspiration.map((idea, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-muted-foreground"
                >
                  {idea}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Fitness Challenge specific content */}
        {isFitnessChallenge && fitnessChallenge?.equipment && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Dumbbell className="mr-2 h-5 w-5" />
              Equipment Needed
            </h2>
            <ul className="space-y-2 pl-5 list-disc">
              {fitnessChallenge.equipment.map((equipment, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-muted-foreground"
                >
                  {equipment}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {isFitnessChallenge && fitnessChallenge?.warmUp && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Warm Up</h2>
            <p className="text-muted-foreground">{fitnessChallenge.warmUp}</p>
          </div>
        )}

        {isFitnessChallenge && fitnessChallenge?.coolDown && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Cool Down</h2>
            <p className="text-muted-foreground">{fitnessChallenge.coolDown}</p>
          </div>
        )}

        {challenge.examples && challenge.examples.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Example Exercises</h2>
            <ul className="space-y-2 pl-5 list-disc">
              {challenge.examples.map((example, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-muted-foreground"
                >
                  {example}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {challenge.resources && challenge.resources.length > 0 && (
          <ChallengeResources
            resources={challenge.resources}
            handleResourceClick={handleResourceClick}
          />
        )}

        {challenge.verification && challenge.verification.length > 0 && (
          <VerificationChecklist
            verificationItems={challenge.verification}
            verificationStatus={verificationStatus}
            toggleVerificationItem={toggleVerificationItem}
          />
        )}

        <div className="pt-4 flex justify-end">
          <Button
            onClick={toggleCompletion}
            className={isCompleted ? "completed-badge hover:bg-[hsl(var(--completed-bg))]" : ""}
          >
            {isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeContent;
