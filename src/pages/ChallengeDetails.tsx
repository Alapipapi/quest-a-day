
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStepsForChallenge } from "@/data/challengeSteps";
import { motion } from "framer-motion";
import { CHALLENGES } from "@/data/challengeData";
import ScheduleDialog from "@/components/challenges/ScheduleDialog";
import { useChallengeState } from "@/hooks/useChallengeState";
import { 
  BackButton,
  ChallengeActions,
  ChallengeContent
} from "@/components/challenge-details";

const ChallengeDetails = () => {
  const { category, title } = useParams();
  const navigate = useNavigate();
  const [steps, setSteps] = useState<any[]>([]);
  const [challengeInfo, setChallengeInfo] = useState<any>(null);
  const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);
  
  useEffect(() => {
    if (category && title) {
      const decodedTitle = decodeURIComponent(title);
      const challengeSteps = getStepsForChallenge(category, decodedTitle);
      setSteps(challengeSteps);
      
      const challenge = CHALLENGES.find(c => 
        c.category === category && c.title === decodedTitle);
        
      if (challenge) {
        setChallengeInfo(challenge);
      }
      
      if (challengeSteps.length === 0) {
        console.error(`No steps found for challenge: ${category}/${decodedTitle}`);
      }
    }
  }, [category, title]);

  const {
    isCompleted,
    progress,
    verificationStatus,
    toggleCompletion,
    updateProgress,
    toggleVerificationItem
  } = useChallengeState({ category, title, steps });

  const handleBack = () => {
    navigate(-1);
  };

  const handleResourceClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSchedule = () => {
    setScheduleDialogOpen(true);
  };

  if (steps.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <BackButton onClick={handleBack} />
        <div className="text-center py-16">
          <p className="text-muted-foreground">Challenge details not found. Please try another challenge.</p>
        </div>
      </div>
    );
  }

  const challenge = steps[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex justify-between items-center mb-6">
        <BackButton onClick={handleBack} />
        <ChallengeActions 
          onSchedule={handleSchedule}
          title={title}
        />
      </div>

      <ChallengeContent
        challenge={challenge}
        challengeInfo={challengeInfo}
        category={category}
        isCompleted={isCompleted}
        progress={progress}
        verificationStatus={verificationStatus}
        toggleCompletion={toggleCompletion}
        updateProgress={updateProgress}
        toggleVerificationItem={toggleVerificationItem}
        handleResourceClick={handleResourceClick}
      />

      {title && category && (
        <ScheduleDialog 
          challengeId={challengeInfo?.id}
          challengeTitle={title}
          challengeCategory={category}
          isOpen={scheduleDialogOpen}
          setIsOpen={setScheduleDialogOpen}
        />
      )}
    </motion.div>
  );
};

export default ChallengeDetails;
