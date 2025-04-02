
import { useState, useEffect } from "react";
import { CalendarDays, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const StreakTracker = () => {
  const [streak, setStreak] = useState(0);
  const [lastCompletionDate, setLastCompletionDate] = useState<string | null>(null);
  
  // Load streak data from localStorage on component mount
  useEffect(() => {
    const storedStreak = localStorage.getItem("challengeStreak");
    const storedLastCompletionDate = localStorage.getItem("lastChallengeCompletionDate");
    
    if (storedStreak) setStreak(parseInt(storedStreak));
    if (storedLastCompletionDate) setLastCompletionDate(storedLastCompletionDate);
    
    // Check if streak should be reset (no activity for more than 1 day)
    if (storedLastCompletionDate) {
      const lastDate = new Date(storedLastCompletionDate);
      const currentDate = new Date();
      
      // Reset streak if last completion was more than 1 day ago
      if ((currentDate.getTime() - lastDate.getTime()) > 2 * 24 * 60 * 60 * 1000) {
        setStreak(0);
        localStorage.setItem("challengeStreak", "0");
      }
    }
    
    // Listen for challenge completion events
    const handleChallengeCompleted = () => {
      updateStreak();
    };
    
    window.addEventListener("challengeCompleted", handleChallengeCompleted);
    
    return () => {
      window.removeEventListener("challengeCompleted", handleChallengeCompleted);
    };
  }, []);
  
  // Update streak when a challenge is completed
  const updateStreak = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Only update streak if challenge wasn't already completed today
    if (currentDate !== lastCompletionDate) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setLastCompletionDate(currentDate);
      
      localStorage.setItem("challengeStreak", newStreak.toString());
      localStorage.setItem("lastChallengeCompletionDate", currentDate);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Card className="p-4 flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Flame className="h-8 w-8 text-orange-500" />
            {streak > 0 && (
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                {streak}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold">Your Challenge Streak</h3>
            <p className="text-sm text-muted-foreground">
              {streak === 0 
                ? "Complete a challenge to start your streak!" 
                : `You've completed challenges for ${streak} day${streak === 1 ? '' : 's'} in a row!`}
            </p>
          </div>
        </div>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span className="text-xs">History</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Challenge history coming soon!</p>
          </TooltipContent>
        </Tooltip>
      </Card>
    </motion.div>
  );
};

export default StreakTracker;
