
import { StepDetails } from "@/data/challengeSteps";
import ChallengeStatusIndicator from "./ChallengeStatusIndicator";
import ChallengeInstructionsList from "./ChallengeInstructionsList";
import ChallengeResourcesList from "./ChallengeResourcesList";
import ChallengeVerificationList from "./ChallengeVerificationList";
import { CreativityChallenge } from "@/data/types/creativity";
import { FitnessChallenge } from "@/data/types/fitness";
import { CodingChallenge } from "@/data/types/coding";

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

  const step = steps[0];
  const isCreativityChallenge = 'materials' in step || 'inspiration' in step;
  const isFitnessChallenge = 'equipment' in step || 'warmUp' in step || 'coolDown' in step;
  const isCodingChallenge = 'tools' in step;

  return (
    <div className="border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <ChallengeStatusIndicator isCompleted={isCompleted} title={title} />
      
      <div className="p-4">
        <div className="space-y-4">
          <ChallengeInstructionsList 
            instructions={step?.instructions} 
            examples={step?.examples}
          />
          
          {/* Coding Challenge Specific Details */}
          {isCodingChallenge && (step as CodingChallenge).tools && (
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Recommended Tools:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {(step as CodingChallenge).tools?.map((tool, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">{tool}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Creativity Challenge Specific Details */}
          {isCreativityChallenge && (
            <>
              {(step as CreativityChallenge).materials && (
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Materials Needed:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {(step as CreativityChallenge).materials?.map((material, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{material}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {(step as CreativityChallenge).inspiration && (
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Inspiration Ideas:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {(step as CreativityChallenge).inspiration?.map((idea, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{idea}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
          
          {/* Fitness Challenge Specific Details */}
          {isFitnessChallenge && (
            <>
              {(step as FitnessChallenge).equipment && (
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Equipment Needed:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {(step as FitnessChallenge).equipment?.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {(step as FitnessChallenge).warmUp && (
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Warm-Up:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{(step as FitnessChallenge).warmUp}</p>
                </div>
              )}
              
              {(step as FitnessChallenge).coolDown && (
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Cool-Down:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{(step as FitnessChallenge).coolDown}</p>
                </div>
              )}
            </>
          )}
          
          <ChallengeResourcesList 
            resources={step?.resources} 
            handleResourceClick={handleResourceClick} 
          />
          
          <ChallengeVerificationList verification={step?.verification} />
        </div>
      </div>
    </div>
  );
};

export default ChallengeContentCard;
