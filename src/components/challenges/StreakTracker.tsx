
import { useState, useEffect } from "react";
import { CalendarDays, Flame, ChevronRight, History } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Calendar } from "../ui/calendar";

const StreakTracker = () => {
  const [streak, setStreak] = useState(0);
  const [lastCompletionDate, setLastCompletionDate] = useState<string | null>(null);
  const [completionHistory, setCompletionHistory] = useState<Record<string, boolean>>({});
  const [showHistory, setShowHistory] = useState(false);
  
  // Load streak data from localStorage on component mount
  useEffect(() => {
    const storedStreak = localStorage.getItem("challengeStreak");
    const storedLastCompletionDate = localStorage.getItem("lastChallengeCompletionDate");
    const storedHistory = localStorage.getItem("challengeCompletionHistory");
    
    if (storedStreak) setStreak(parseInt(storedStreak));
    if (storedLastCompletionDate) setLastCompletionDate(storedLastCompletionDate);
    if (storedHistory) setCompletionHistory(JSON.parse(storedHistory));
    
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
      
      // Update completion history
      const newHistory = { ...completionHistory };
      newHistory[currentDate] = true;
      setCompletionHistory(newHistory);
      
      localStorage.setItem("challengeStreak", newStreak.toString());
      localStorage.setItem("lastChallengeCompletionDate", currentDate);
      localStorage.setItem("challengeCompletionHistory", JSON.stringify(newHistory));
    }
  };

  // Generate calendar dates with completion history
  const getCalendarHighlightDates = () => {
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);
    
    const highlightedDates = Object.keys(completionHistory)
      .map(dateStr => new Date(dateStr))
      .filter(date => date >= sixMonthsAgo && date <= today);
      
    return highlightedDates;
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
        
        <Dialog open={showHistory} onOpenChange={setShowHistory}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <History className="h-4 w-4 mr-1" />
              <span className="text-xs">History</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Challenge Completion History</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <Calendar 
                mode="multiple"
                selected={getCalendarHighlightDates()}
                disabled={{ after: new Date() }}
                className="rounded-md border mx-auto"
              />
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Days with completed challenges</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  You've completed challenges on {Object.keys(completionHistory).length} days.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Card>
    </motion.div>
  );
};

export default StreakTracker;
