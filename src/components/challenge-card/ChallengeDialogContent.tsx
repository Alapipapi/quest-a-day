
import { ExternalLink, Check, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { StepDetails, getStepsForChallenge } from "@/data/challengeSteps";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { toast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";

interface ChallengeDialogContentProps {
  id: number;
  title: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsCompleted: Dispatch<SetStateAction<boolean>>;
  setProgress: Dispatch<SetStateAction<number>>;
  isCompleted?: boolean;
  steps?: StepDetails[];
  onClose?: () => void;
  onViewDetails?: () => void;
  handleResourceClick?: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const ChallengeDialogContent = ({
  id,
  title,
  category,
  setIsOpen,
  setIsCompleted,
  setProgress,
  isCompleted: propIsCompleted,
  steps: propSteps,
  onClose,
  onViewDetails,
  handleResourceClick: propHandleResourceClick
}: ChallengeDialogContentProps) => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState<StepDetails[]>(propSteps || []);
  const [isCompleted, setIsCompletedLocal] = useState(propIsCompleted || false);

  useEffect(() => {
    // Check both ID and category-title formats for completion
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const completedById = !!completedChallenges[id];
    const key = `${category}-${encodeURIComponent(title)}`;
    const completedByKey = !!completedChallenges[key];
    
    // Set completed if either format indicates it's completed
    const completionStatus = completedById || completedByKey;
    console.log(`Dialog for ${title}: isCompleted=${completionStatus}, propIsCompleted=${propIsCompleted}`);
    
    setIsCompletedLocal(completionStatus);
    
    // Sync the parent state
    if (setIsCompleted && completionStatus !== propIsCompleted) {
      setIsCompleted(completionStatus);
    }

    // Load steps if not provided as props
    if (!propSteps) {
      const loadedSteps = getStepsForChallenge(category, title);
      setSteps(loadedSteps || []);
    }
  }, [id, category, title, propSteps, propIsCompleted, setIsCompleted]);

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails();
    } else {
      // Navigate to challenge details page
      const formattedTitle = encodeURIComponent(title);
      navigate(`/challenge/${category}/${formattedTitle}`);
      setIsOpen(false);
    }
  };

  const handleResourceClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (propHandleResourceClick) {
      propHandleResourceClick(e, url);
    } else {
      e.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setIsOpen(false);
    }
  };

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
                    {steps[0]?.instructions?.map((instruction, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{instruction}</li>
                    ))}
                  </ul>
                </div>

                {steps[0]?.resources && steps[0].resources.length > 0 && (
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

                {steps[0]?.verification && (
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
            onClick={handleClose}
          >
            Close
          </Button>
          <Button 
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default ChallengeDialogContent;
