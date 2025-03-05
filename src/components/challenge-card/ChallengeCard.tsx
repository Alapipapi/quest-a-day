
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

  useEffect(() => {
    // Check both ways - via id (old format) and via category-title (new format)
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const keyByTitle = `${category}-${title}`;
    
    // Check if this challenge is completed (either by id or by title)
    const completed = !!completedChallenges[id] || !!completedChallenges[keyByTitle];
    setIsCompleted(completed);
    
    // Get progress from either format
    const progressById = completedChallenges[`${id}-progress`] || 0;
    const progressByTitle = completedChallenges[`${keyByTitle}-progress`] || 0;
    setProgress(Math.max(progressById, progressByTitle));
    
    // Add event listener for challenge completion updates
    const handleChallengeUpdate = () => {
      const updatedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      const isNowCompleted = !!updatedChallenges[id] || !!updatedChallenges[keyByTitle];
      setIsCompleted(isNowCompleted);
      
      const updatedProgressById = updatedChallenges[`${id}-progress`] || 0;
      const updatedProgressByTitle = updatedChallenges[`${keyByTitle}-progress`] || 0;
      setProgress(Math.max(updatedProgressById, updatedProgressByTitle));
    };

    window.addEventListener("challengeUpdated", handleChallengeUpdate);
    return () => {
      window.removeEventListener("challengeUpdated", handleChallengeUpdate);
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
