
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStepsForChallenge } from "@/data/challengeSteps";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

// Import the new components
import ChallengeHeader from "@/components/challenges/ChallengeHeader";
import ProgressBar from "@/components/challenges/ProgressBar";
import ChallengeInstructions from "@/components/challenges/ChallengeInstructions";
import ChallengeResources from "@/components/challenges/ChallengeResources";
import VerificationChecklist from "@/components/challenges/VerificationChecklist";
import { useChallengeState } from "@/hooks/useChallengeState";

const ChallengeDetails = () => {
  const { category, title } = useParams();
  const navigate = useNavigate();
  const [steps, setSteps] = useState<any[]>([]);
  
  useEffect(() => {
    if (category && title) {
      const decodedTitle = decodeURIComponent(title);
      const challengeSteps = getStepsForChallenge(category, decodedTitle);
      setSteps(challengeSteps);
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
    // Use browser history to go back instead of navigating to a specific route
    navigate(-1);
  };

  const handleResourceClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (steps.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button variant="outline" onClick={handleBack} className="mb-6">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back to Challenges
        </Button>
        <div className="text-center py-16">
          <p className="text-muted-foreground">Challenge details not found.</p>
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
      <Button variant="outline" onClick={handleBack} className="mb-6">
        <ChevronLeft className="h-4 w-4 mr-2" /> Back to Challenges
      </Button>

      <div className="bg-card/80 backdrop-blur-sm dark:bg-card/60 rounded-2xl shadow-xl overflow-hidden border border-border">
        <ChallengeHeader 
          title={challenge.title} 
          category={category} 
          isCompleted={isCompleted} 
        />

        <div className="p-6 sm:p-8 space-y-8">
          <ProgressBar 
            progress={progress} 
            updateProgress={updateProgress} 
          />

          <ChallengeInstructions 
            instructions={challenge.instructions} 
          />

          {challenge.resources && challenge.resources.length > 0 && (
            <ChallengeResources 
              resources={challenge.resources} 
              handleResourceClick={handleResourceClick} 
            />
          )}

          {challenge.verification && challenge.verification.length > 0 && (
            <VerificationChecklist 
              verificationItems={challenge.verification} 
              verificationStatus={verificationStatus} 
              toggleVerificationItem={toggleVerificationItem} 
            />
          )}

          <div className="pt-4 flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="h-4 w-4 mr-2" /> Back
            </Button>
            <Button
              onClick={toggleCompletion}
              className={isCompleted ? "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800" : ""}
            >
              {isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeDetails;
