
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, PieChart, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CHALLENGES } from "@/data/challengeData";

interface CategoryStats {
  coding: number;
  fitness: number;
  creativity: number;
  "problem-solving": number;
}

const ProgressAnalytics = () => {
  const [completedStats, setCompletedStats] = useState<CategoryStats>({
    coding: 0,
    fitness: 0,
    creativity: 0,
    "problem-solving": 0
  });
  const [weeklyActivity, setWeeklyActivity] = useState<number[]>([]);
  const [totalCompleted, setTotalCompleted] = useState(0);

  useEffect(() => {
    calculateStats();
    
    const handleUpdate = () => calculateStats();
    window.addEventListener("challengeUpdated", handleUpdate);
    return () => window.removeEventListener("challengeUpdated", handleUpdate);
  }, []);

  const calculateStats = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const streakData = JSON.parse(localStorage.getItem("challengeStreaks") || "{}");
    
    // Filter out progress and verification keys
    const completedKeys = Object.keys(completedChallenges).filter(
      key => !key.includes("-progress") && !key.includes("-verification") && completedChallenges[key] === true
    );
    
    setTotalCompleted(completedKeys.length);

    // Calculate category stats
    const stats: CategoryStats = {
      coding: 0,
      fitness: 0,
      creativity: 0,
      "problem-solving": 0
    };

    completedKeys.forEach(key => {
      const [category] = key.split("-");
      if (category in stats) {
        stats[category as keyof CategoryStats]++;
      }
    });

    setCompletedStats(stats);

    // Calculate weekly activity (last 7 days)
    const activity: number[] = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toDateString();
      
      const dailyCount = completedKeys.filter(key => {
        const completionDate = streakData[key];
        return completionDate && new Date(completionDate).toDateString() === dateStr;
      }).length;
      
      activity.push(dailyCount);
    }
    
    setWeeklyActivity(activity);
  };

  const categoryColors = {
    coding: "bg-blue-500",
    fitness: "bg-green-500",
    creativity: "bg-purple-500",
    "problem-solving": "bg-orange-500"
  };

  const categoryLabels = {
    coding: "Coding",
    fitness: "Fitness",
    creativity: "Creativity",
    "problem-solving": "Problem Solving"
  };

  const maxActivity = Math.max(...weeklyActivity, 1);
  const completionRate = Math.round((totalCompleted / CHALLENGES.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Category Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(completedStats).map(([category, count]) => (
                <div key={category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${categoryColors[category as keyof CategoryStats]}`}></div>
                    <span className="text-sm font-medium">{categoryLabels[category as keyof CategoryStats]}</span>
                  </div>
                  <span className="text-lg font-bold">{count}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-lg font-bold text-primary">{completionRate}%</span>
              </div>
              <div className="w-full bg-background rounded-full h-2 mt-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {totalCompleted} of {CHALLENGES.length} challenges completed
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Weekly Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-32 gap-2">
              {weeklyActivity.map((count, index) => {
                const date = new Date();
                date.setDate(date.getDate() - (6 - index));
                const dayName = date.toLocaleDateString('en', { weekday: 'short' });
                
                return (
                  <div key={index} className="flex flex-col items-center gap-2 flex-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(count / maxActivity) * 100}%` }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-primary rounded-t-sm w-full min-h-[4px] flex items-end justify-center"
                    >
                      {count > 0 && (
                        <span className="text-xs text-white font-medium mb-1">
                          {count}
                        </span>
                      )}
                    </motion.div>
                    <span className="text-xs text-muted-foreground">{dayName}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span>
                {weeklyActivity.reduce((a, b) => a + b, 0)} challenges completed this week
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProgressAnalytics;
