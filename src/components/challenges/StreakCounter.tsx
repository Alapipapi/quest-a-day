
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, Calendar, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const StreakCounter = () => {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [weeklyProgress, setWeeklyProgress] = useState(0);

  useEffect(() => {
    calculateStreaks();
    
    const handleChallengeUpdate = () => {
      calculateStreaks();
    };
    
    window.addEventListener("challengeUpdated", handleChallengeUpdate);
    return () => window.removeEventListener("challengeUpdated", handleChallengeUpdate);
  }, []);

  const calculateStreaks = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const streakData = JSON.parse(localStorage.getItem("challengeStreaks") || "{}");
    
    // Get today's date
    const today = new Date();
    const todayStr = today.toDateString();
    
    // Check if user completed any challenges today
    const todayCompletions = Object.keys(completedChallenges).filter(key => {
      const completionDate = streakData[key];
      return completionDate && new Date(completionDate).toDateString() === todayStr;
    });

    // Calculate current streak
    let streak = 0;
    let checkDate = new Date(today);
    
    while (true) {
      const dateStr = checkDate.toDateString();
      const hasCompletionOnDate = Object.keys(completedChallenges).some(key => {
        const completionDate = streakData[key];
        return completionDate && new Date(completionDate).toDateString() === dateStr;
      });
      
      if (hasCompletionOnDate) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    // Calculate weekly progress (last 7 days)
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const weeklyCompletions = Object.keys(completedChallenges).filter(key => {
      const completionDate = streakData[key];
      if (!completionDate) return false;
      const date = new Date(completionDate);
      return date >= weekAgo && date <= today;
    }).length;

    setCurrentStreak(streak);
    setWeeklyProgress(weeklyCompletions);
    
    // Update longest streak if current is higher
    const storedLongest = parseInt(localStorage.getItem("longestStreak") || "0");
    if (streak > storedLongest) {
      localStorage.setItem("longestStreak", streak.toString());
      setLongestStreak(streak);
    } else {
      setLongestStreak(storedLongest);
    }
  };

  const getStreakIcon = () => {
    if (currentStreak >= 7) return <Flame className="h-5 w-5 text-orange-500" />;
    if (currentStreak >= 3) return <Trophy className="h-5 w-5 text-yellow-500" />;
    return <Calendar className="h-5 w-5 text-blue-500" />;
  };

  const getStreakColor = () => {
    if (currentStreak >= 7) return "text-orange-600 dark:text-orange-400";
    if (currentStreak >= 3) return "text-yellow-600 dark:text-yellow-400";
    return "text-blue-600 dark:text-blue-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            {getStreakIcon()}
            Current Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${getStreakColor()}`}>
            {currentStreak}
            <span className="text-sm font-normal text-muted-foreground ml-1">
              {currentStreak === 1 ? "day" : "days"}
            </span>
          </div>
          {currentStreak >= 3 && (
            <Badge variant="secondary" className="mt-2 text-xs">
              🔥 On Fire!
            </Badge>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200 dark:border-yellow-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Best Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {longestStreak}
            <span className="text-sm font-normal text-muted-foreground ml-1">
              {longestStreak === 1 ? "day" : "days"}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            This Week
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {weeklyProgress}
            <span className="text-sm font-normal text-muted-foreground ml-1">
              completed
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StreakCounter;
