
import { useState, useEffect } from "react";
import { Dialog } from "../ui/dialog";
import { useNavigate } from "react-router-dom";
import { getStepsForChallenge } from "../../data/challengeSteps";

import ChallengeCardBadges from "./ChallengeCardBadges";
import ChallengeCardInfo from "./ChallengeCardInfo";
import ChallengeCardContainer from "./ChallengeCardContainer";
import ChallengeDialogContent from "./ChallengeDialogContent";

interface ChallengeCardProps {
  id: number;
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
}

const ChallengeCard = ({
  id,
  title,
  description,
  category,
  difficulty,
  timeEstimate,
}: ChallengeCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const steps = getStepsForChallenge(category, title);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for completion status
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${category}-${title}`;
    setIsCompleted(!!completedChallenges[key]);
  }, [category, title]);

  const handleViewDetails = () => {
    navigate(`/challenge/${category}/${encodeURIComponent(title)}`);
  };

  const handleResourceClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <ChallengeCardContainer onClick={() => setIsDialogOpen(true)}>
        <ChallengeCardBadges 
          category={category} 
          isCompleted={isCompleted} 
        />
        <ChallengeCardInfo 
          title={title}
          description={description}
          difficulty={difficulty}
          timeEstimate={timeEstimate}
        />
      </ChallengeCardContainer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <ChallengeDialogContent
          title={title}
          isCompleted={isCompleted}
          steps={steps}
          onClose={() => setIsDialogOpen(false)}
          onViewDetails={handleViewDetails}
          handleResourceClick={handleResourceClick}
        />
      </Dialog>
    </>
  );
};

export default ChallengeCard;
