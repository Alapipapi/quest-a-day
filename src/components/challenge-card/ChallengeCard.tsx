
import { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";
import { motion } from "framer-motion";
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
    // Check if this challenge is completed
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    setIsCompleted(!!completedChallenges[id]);
    
    // Get progress if any
    const progressVal = completedChallenges[`${id}-progress`] || 0;
    setProgress(progressVal);
  }, [id]);

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
        />
      </Dialog>
    </>
  );
};

export default ChallengeCard;
