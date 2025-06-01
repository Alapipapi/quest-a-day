import { motion } from "framer-motion";
import { Clock, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import ChallengeInstructions from "@/components/challenges/ChallengeInstructions";
import ChallengeResources from "@/components/challenges/ChallengeResources";
import VerificationChecklist from "@/components/challenges/VerificationChecklist";
import ChallengeNotes from "@/components/challenges/ChallengeNotes";
import ChallengeDifficulty from "@/components/challenges/ChallengeDifficulty";

interface ChallengeContentProps {
  challenge: any;
  challengeInfo: any;
  category?: string;
  isCompleted: boolean;
  progress: number;
  verificationStatus: Record<string, boolean>;
  toggleCompletion: () => void;
  updateProgress: (progress: number) => void;
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
  handleResourceClick,
}: ChallengeContentProps) => {
  // Convert Record<string, boolean> to boolean[] for VerificationChecklist
  const verificationArray = challenge.verification 
    ? challenge.verification.map((_: any, index: number) => verificationStatus[index.toString()] || false)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-8"
    >
      {/* Challenge Header */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {challenge.title}
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge 
                variant="secondary" 
                className={`category-${category} text-white font-medium`}
              >
                {category?.replace('-', ' ').toUpperCase()}
              </Badge>
              {challengeInfo?.difficulty && (
                <ChallengeDifficulty difficulty={challengeInfo.difficulty} />
              )}
              {challengeInfo?.timeEstimate && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {challengeInfo.timeEstimate}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Progress</div>
              <div className="text-2xl font-bold text-primary">{progress}%</div>
            </div>
            <Progress value={progress} className="w-24" />
          </div>
        </div>

        <Button
          onClick={toggleCompletion}
          className={`w-full sm:w-auto ${
            isCompleted 
              ? "bg-green-600 hover:bg-green-700 text-white" 
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          <Target className="h-4 w-4 mr-2" />
          {isCompleted ? "Completed!" : "Mark as Complete"}
        </Button>
      </div>

      {/* Challenge Instructions */}
      {challenge.instructions && (
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <ChallengeInstructions instructions={challenge.instructions} />
        </div>
      )}

      {/* Challenge Resources */}
      {challenge.resources && challenge.resources.length > 0 && (
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <ChallengeResources 
            resources={challenge.resources} 
            handleResourceClick={handleResourceClick} 
          />
        </div>
      )}

      {/* Verification Checklist */}
      {challenge.verification && challenge.verification.length > 0 && (
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <VerificationChecklist
            verificationItems={challenge.verification}
            verificationStatus={verificationArray}
            toggleVerificationItem={toggleVerificationItem}
          />
        </div>
      )}

      {/* Challenge Notes */}
      {challengeInfo?.id && (
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
          <ChallengeNotes 
            challengeId={challengeInfo.id}
            challengeTitle={challenge.title}
          />
        </div>
      )}

      {/* Tips Section */}
      <div className="bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 dark:border-blue-800/50">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Pro Tips
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Take your time and read through all instructions carefully</li>
              <li>• Use the verification checklist to track your progress</li>
              <li>• Don't hesitate to explore the provided resources</li>
              <li>• Add notes to remember what you learned or struggled with</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeContent;
