
import { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";
import ChallengeCardContainer from "./ChallengeCardContainer";
import ChallengeCardBadges from "./ChallengeCardBadges";
import ChallengeCardInfo from "./ChallengeCardInfo";
import ChallengeDialogContent from "./ChallengeDialogContent";
import { Challenge } from "@/data/challengeData";

const ChallengeCard = ({ 
  id, 
  title, 
  description, 
  category, 
  difficulty, 
  timeEstimate 
}: Challenge) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  // This function checks both formats of completion tracking
  const checkCompletionStatus = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    
    // Check by ID (old format)
    const completedById = !!completedChallenges[id];
    
    // Check by category-title (new format)
    const key = `${category}-${encodeURIComponent(title)}`;
    const completedByKey = !!completedChallenges[key];
    
    // Use either format
    const isCompleted = completedById || completedByKey;
    setIsCompleted(isCompleted);
    
    // Get progress from either format
    const progressById = completedChallenges[`${id}-progress`] || 0;
    const progressByKey = completedChallenges[`${key}-progress`] || 0;
    setProgress(Math.max(progressById, progressByKey));
  };

  useEffect(() => {
    // Call the function to check completion status
    checkCompletionStatus();
    
    // Set up event listener for storage changes
    const handleStorageChange = () => {
      checkCompletionStatus();
    };
    
    window.addEventListener('storage', handleStorageChange);
    // Also listen for a custom event that we'll dispatch when completion status changes
    window.addEventListener('challengeStatusChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('challengeStatusChanged', handleStorageChange);
    };
  }, [id, category, title]);

  return (
    <>
      <ChallengeCardContainer 
        onClick={() => setIsOpen(true)} 
        isCompleted={isCompleted}
        progress={progress}
      >
        <ChallengeCardBadges category={category} isCompleted={isCompleted} />
        <ChallengeCardInfo 
          title={title}
          description={description}
          difficulty={difficulty}
          timeEstimate={timeEstimate}
        />
      </ChallengeCardContainer>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <ChallengeDialogContent
          id={id}
          title={title}
          category={category}
          setIsOpen={setIsOpen}
          setIsCompleted={setIsCompleted}
          setProgress={setProgress}
          isCompleted={isCompleted}
        />
      </Dialog>
    </>
  );
};

export default ChallengeCard;
