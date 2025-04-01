
import { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ChallengeCardContainer from "./ChallengeCardContainer";
import ChallengeCardInfo from "./ChallengeCardInfo";
import ChallengeCardBadges from "./ChallengeCardBadges";
import ChallengeDialogContent from "./ChallengeDialogContent";
import { Challenge } from "@/data/types/challenge";

interface ChallengeCardProps extends Challenge {
  onComplete?: () => void;
}

const ChallengeCard = ({
  id,
  title,
  description,
  category,
  difficulty,
  timeEstimate,
  onComplete,
}: ChallengeCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleCardClick = () => {
    // This can be empty as it's just for the DialogTrigger
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <ChallengeCardContainer 
            isCompleted={isCompleted}
            onClick={handleCardClick}
            progress={progress}
          >
            <ChallengeCardBadges 
              category={category} 
              isCompleted={isCompleted} 
            />
            <ChallengeCardInfo
              title={title}
              description={description}
              category={category}
              difficulty={difficulty}
              timeEstimate={timeEstimate}
              progress={progress}
            />
          </ChallengeCardContainer>
        </div>
      </DialogTrigger>

      <ChallengeDialogContent
        id={id}
        title={title}
        category={category}
        setIsOpen={setIsOpen}
        setIsCompleted={setIsCompleted}
        setProgress={setProgress}
      />
    </Dialog>
  );
};

export default ChallengeCard;
