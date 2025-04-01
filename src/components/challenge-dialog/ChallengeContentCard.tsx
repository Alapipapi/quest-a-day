
import { StepDetails } from "@/data/challengeSteps";
import ChallengeStatusIndicator from "./ChallengeStatusIndicator";
import ChallengeInstructionsList from "./ChallengeInstructionsList";
import ChallengeResourcesList from "./ChallengeResourcesList";
import ChallengeVerificationList from "./ChallengeVerificationList";

interface ChallengeContentCardProps {
  title: string;
  isCompleted: boolean;
  steps: StepDetails[];
  handleResourceClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const ChallengeContentCard = ({ 
  title, 
  isCompleted, 
  steps, 
  handleResourceClick 
}: ChallengeContentCardProps) => {
  if (steps.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500 dark:text-gray-400">Instructions not available for this challenge yet.</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <ChallengeStatusIndicator isCompleted={isCompleted} title={title} />
      
      <div className="p-4">
        <div className="space-y-4">
          <ChallengeInstructionsList 
            instructions={steps[0]?.instructions} 
            examples={steps[0]?.examples}
          />
          <ChallengeResourcesList 
            resources={steps[0]?.resources} 
            handleResourceClick={handleResourceClick} 
          />
          <ChallengeVerificationList verification={steps[0]?.verification} />
        </div>
      </div>
    </div>
  );
};

export default ChallengeContentCard;
