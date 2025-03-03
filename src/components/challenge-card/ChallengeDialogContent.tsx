
import { ExternalLink, Check, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { StepDetails } from "@/data/challengeSteps";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

interface ChallengeDialogContentProps {
  title: string;
  isCompleted: boolean;
  steps: StepDetails[];
  onClose: () => void;
  onViewDetails: () => void;
  handleResourceClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const ChallengeDialogContent = ({
  title,
  isCompleted,
  steps,
  onClose,
  onViewDetails,
  handleResourceClick
}: ChallengeDialogContentProps) => {
  return (
    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        <DialogDescription className="text-base mt-2">
          Complete the challenge
        </DialogDescription>
      </DialogHeader>
      
      <div className="mt-4">
        {steps.length > 0 ? (
          <div className="border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800">
              <div 
                className={`h-6 w-6 rounded-full flex items-center justify-center border ${
                  isCompleted 
                    ? 'bg-[hsl(var(--completed-bg))] border-[hsl(var(--completed-text))]' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4 text-[hsl(var(--completed-text))]" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                )}
              </div>
              <span className={`flex-1 font-medium ${
                isCompleted ? 'text-[hsl(var(--completed-text))]' : 'text-gray-700 dark:text-gray-200'
              }`}>
                {title}
              </span>
            </div>
            
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Instructions:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {steps[0].instructions.map((instruction, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{instruction}</li>
                    ))}
                  </ul>
                </div>

                {steps[0].resources && steps[0].resources.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Helpful Resources:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {steps[0].resources.map((resource, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <a 
                            onClick={(e) => handleResourceClick(e, resource.url)}
                            className="text-primary hover:text-primary/80 hover:underline cursor-pointer flex items-center gap-1"
                          >
                            {resource.title}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {steps[0].verification && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Verification Checklist:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {steps[0].verification.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-500 dark:text-gray-400">Instructions not available for this challenge yet.</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {isCompleted ? "Challenge completed" : "Challenge in progress"}
        </span>
        <div className="flex gap-2">
          <Button 
            variant="outline"
            onClick={onClose}
          >
            Close
          </Button>
          <Button 
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default ChallengeDialogContent;
