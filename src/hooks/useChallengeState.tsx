
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
  const [verificationStatus, setVerificationStatus] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    if (category && title && steps.length > 0) {
      const decodedTitle = decodeURIComponent(title);
      
      // Check localStorage for completion status
      const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      const key = `${category}-${decodedTitle}`;
      setIsCompleted(!!completedChallenges[key]);
      setProgress(completedChallenges[`${key}-progress`] || 0);
      
      // Initialize verification status object if available, otherwise create a new one
      if (steps.length > 0 && steps[0].verification) {
        const savedStatus = completedChallenges[`${key}-verification`];
        if (savedStatus && Array.isArray(savedStatus)) {
          // Convert array to Record<string, boolean>
          const statusObject: Record<string, boolean> = {};
          savedStatus.forEach((status, index) => {
            statusObject[index.toString()] = status;
          });
          setVerificationStatus(statusObject);
        } else {
          // Create new status object
          const statusObject: Record<string, boolean> = {};
          steps[0].verification.forEach((_, index) => {
            statusObject[index.toString()] = false;
          });
          setVerificationStatus(statusObject);
        }
      }
    }
  }, [category, title, steps]);

  const toggleCompletion = () => {
    if (!category || !title) return;
    
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    
    // Save to localStorage
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${category}-${decodeURIComponent(title)}`;
    
    if (newStatus) {
      completedChallenges[key] = true;
      completedChallenges[`${key}-progress`] = 100;
      setProgress(100);
      
      // Update all verification items to checked when marking as complete
      if (steps.length > 0 && steps[0].verification) {
        const newVerificationStatus: Record<string, boolean> = {};
        steps[0].verification.forEach((_, index) => {
          newVerificationStatus[index.toString()] = true;
        });
        setVerificationStatus(newVerificationStatus);
        // Convert to array for localStorage
        const statusArray = steps[0].verification.map((_, index) => newVerificationStatus[index.toString()]);
        completedChallenges[`${key}-verification`] = statusArray;
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
      // Also reset verification status
      if (steps.length > 0 && steps[0].verification) {
        const newVerificationStatus: Record<string, boolean> = {};
        steps[0].verification.forEach((_, index) => {
          newVerificationStatus[index.toString()] = false;
        });
        setVerificationStatus(newVerificationStatus);
        // Convert to array for localStorage
        const statusArray = steps[0].verification.map((_, index) => newVerificationStatus[index.toString()]);
        completedChallenges[`${key}-verification`] = statusArray;
      }
    }
    
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
    
    // Dispatch a general update event
    window.dispatchEvent(new Event("challengeUpdated"));
  };

  // This function is now only used internally by toggleVerificationItem
  const updateProgress = (value: number) => {
    if (!category || !title) return;
    
    setProgress(value);
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${category}-${decodeURIComponent(title)}`;
    completedChallenges[`${key}-progress`] = value;
    
    if (value === 100 && !isCompleted) {
      setIsCompleted(true);
      completedChallenges[key] = true;
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
    }
    
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
    
    // Dispatch a general update event
    window.dispatchEvent(new Event("challengeUpdated"));
  };

  const toggleVerificationItem = (index: number) => {
    if (!category || !title || !steps.length || !steps[0].verification) return;
    
    const newVerificationStatus = { ...verificationStatus };
    newVerificationStatus[index.toString()] = !newVerificationStatus[index.toString()];
    setVerificationStatus(newVerificationStatus);
    
    // Count completed verification items
    const completedItems = Object.values(newVerificationStatus).filter(item => item).length;
    const totalItems = steps[0].verification.length;
    
    // Update progress based on verification items
    const newProgress = Math.round((completedItems / totalItems) * 100);
    updateProgress(newProgress);
    
    // Save to localStorage
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${category}-${decodeURIComponent(title)}`;
    // Convert to array for localStorage
    const statusArray = steps[0].verification.map((_, i) => newVerificationStatus[i.toString()] || false);
    completedChallenges[`${key}-verification`] = statusArray;
    
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
