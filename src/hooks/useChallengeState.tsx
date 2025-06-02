
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { StepDetails } from "@/data/challengeSteps";

interface UseChallengeStateProps {
  category: string | undefined;
  title: string | undefined;
  steps: StepDetails[];
}

export const useChallengeState = ({ category, title, steps }: UseChallengeStateProps) => {
  const { toast } = useToast();
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<boolean[]>([]);
  
  useEffect(() => {
    if (category && title && steps.length > 0) {
      const decodedTitle = decodeURIComponent(title);
      
      // Check localStorage for completion status
      const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      const key = `${category}-${decodedTitle}`;
      setIsCompleted(!!completedChallenges[key]);
      setProgress(completedChallenges[`${key}-progress`] || 0);
      
      // Initialize verification status array if available, otherwise create a new one
      if (steps.length > 0 && steps[0].verification) {
        const savedStatus = completedChallenges[`${key}-verification`] || 
          Array(steps[0].verification.length).fill(false);
        setVerificationStatus(savedStatus);
      }
    }
  }, [category, title, steps]);

  const toggleCompletion = () => {
    if (!category || !title) return;
    
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    
    // Save to localStorage
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const streakData = JSON.parse(localStorage.getItem("challengeStreaks") || "{}");
    const key = `${category}-${decodeURIComponent(title)}`;
    
    if (newStatus) {
      completedChallenges[key] = true;
      completedChallenges[`${key}-progress`] = 100;
      setProgress(100);
      
      // Track completion date for streaks
      streakData[key] = new Date().toISOString();
      
      // Update all verification items to checked when marking as complete
      if (steps.length > 0 && steps[0].verification) {
        const newVerificationStatus = Array(steps[0].verification.length).fill(true);
        setVerificationStatus(newVerificationStatus);
        completedChallenges[`${key}-verification`] = newVerificationStatus;
      }
      
      toast({
        title: "Challenge Completed!",
        description: "Great job on completing this challenge!",
        duration: 3000,
      });
      
      // Dispatch a custom event for streak tracking
      window.dispatchEvent(new CustomEvent("challengeCompleted", { 
        detail: { category, title: decodeURIComponent(title) }
      }));
    } else {
      delete completedChallenges[key];
      completedChallenges[`${key}-progress`] = 0;
      setProgress(0);
      // Remove completion date
      delete streakData[key];
      // Also reset verification status
      if (steps.length > 0 && steps[0].verification) {
        const newVerificationStatus = Array(steps[0].verification.length).fill(false);
        setVerificationStatus(newVerificationStatus);
        completedChallenges[`${key}-verification`] = newVerificationStatus;
      }
    }
    
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
    localStorage.setItem("challengeStreaks", JSON.stringify(streakData));
    
    // Dispatch a general update event
    window.dispatchEvent(new Event("challengeUpdated"));
  };

  // This function is now only used internally by toggleVerificationItem
  const updateProgress = (value: number) => {
    if (!category || !title) return;
    
    setProgress(value);
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const streakData = JSON.parse(localStorage.getItem("challengeStreaks") || "{}");
    const key = `${category}-${decodeURIComponent(title)}`;
    completedChallenges[`${key}-progress`] = value;
    
    if (value === 100 && !isCompleted) {
      setIsCompleted(true);
      completedChallenges[key] = true;
      // Track completion date for streaks
      streakData[key] = new Date().toISOString();
      toast({
        title: "Challenge Completed!",
        description: "Great job on completing this challenge!",
        duration: 3000,
      });
      
      // Dispatch a custom event for streak tracking
      window.dispatchEvent(new CustomEvent("challengeCompleted", { 
        detail: { category, title: decodeURIComponent(title) }
      }));
    } else if (value < 100 && isCompleted) {
      setIsCompleted(false);
      delete completedChallenges[key];
      delete streakData[key];
    }
    
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
    localStorage.setItem("challengeStreaks", JSON.stringify(streakData));
    
    // Dispatch a general update event
    window.dispatchEvent(new Event("challengeUpdated"));
  };

  const toggleVerificationItem = (index: number) => {
    if (!category || !title || !steps.length || !steps[0].verification) return;
    
    const newVerificationStatus = [...verificationStatus];
    newVerificationStatus[index] = !newVerificationStatus[index];
    setVerificationStatus(newVerificationStatus);
    
    // Count completed verification items
    const completedItems = newVerificationStatus.filter(item => item).length;
    const totalItems = steps[0].verification.length;
    
    // Update progress based on verification items
    const newProgress = Math.round((completedItems / totalItems) * 100);
    updateProgress(newProgress);
    
    // Save to localStorage
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${category}-${decodeURIComponent(title)}`;
    completedChallenges[`${key}-verification`] = newVerificationStatus;
    
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
  };

  return {
    isCompleted,
    progress,
    verificationStatus,
    toggleCompletion,
    updateProgress, // We still export this to maintain API compatibility
    toggleVerificationItem
  };
};
