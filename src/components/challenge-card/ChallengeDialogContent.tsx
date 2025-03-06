
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DialogContent } from "../ui/dialog";
import { StepDetails, getStepsForChallenge } from "@/data/challengeSteps";
import { toast } from "../ui/use-toast";

import ChallengeDialogHeader from "../challenge-dialog/ChallengeDialogHeader";
import ChallengeContentCard from "../challenge-dialog/ChallengeContentCard";
import ChallengeDialogFooter from "../challenge-dialog/ChallengeDialogFooter";
import { CHALLENGES } from "@/data/challengeData";

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
  const [difficulty, setDifficulty] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Find difficulty from challenges
    const challenge = CHALLENGES.find(c => c.id === id || c.title === title);
    if (challenge) {
      setDifficulty(challenge.difficulty);
    }

    // Check if this challenge is completed in both formats
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const keyByTitle = `${category}-${title}`;
    const completed = !!completedChallenges[id] || !!completedChallenges[keyByTitle];
    
    // Update local state
    setIsCompletedLocal(completed);
    
    // Also update parent state if needed
    if (completed !== propIsCompleted) {
      setIsCompleted(completed);
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
      <ChallengeDialogHeader 
        title={title} 
        category={category} 
        difficulty={difficulty}
      />
      
      <div className="mt-4">
        <ChallengeContentCard
          title={title}
          isCompleted={isCompleted}
          steps={steps}
          handleResourceClick={handleResourceClick}
        />
      </div>

      <ChallengeDialogFooter
        isCompleted={isCompleted}
        onClose={handleClose}
        onViewDetails={handleViewDetails}
      />
    </DialogContent>
  );
};

export default ChallengeDialogContent;
