import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Zap, Star, Award, Crown, Lock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  condition: (stats: any) => boolean;
  earned: boolean;
  points: number;
  rarity: "common" | "rare" | "epic" | "legendary";
  progress?: number;
  maxProgress?: number;
}

const AchievementBadges = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [stats, setStats] = useState({
    totalCompleted: 0,
    dailyCompleted: 0,
    categoriesCompleted: 0,
    hardChallengesCompleted: 0,
  });
  const [totalPoints, setTotalPoints] = useState(0);

  const achievementDefinitions: Achievement[] = [
    {
      id: "first-step",
      title: "First Steps",
      description: "Complete your first challenge",
      icon: Target,
      condition: (s) => s.totalCompleted >= 1,
      earned: false,
      points: 50,
      rarity: "common",
      progress: 0,
      maxProgress: 1,
    },
    {
      id: "milestone-5",
      title: "Getting Started",
      description: "Complete 5 challenges",
      icon: Star,
      condition: (s) => s.totalCompleted >= 5,
      earned: false,
      points: 100,
      rarity: "common",
      progress: 0,
      maxProgress: 5,
    },
    {
      id: "milestone-10",
      title: "Challenge Seeker",
      description: "Complete 10 challenges",
      icon: Award,
      condition: (s) => s.totalCompleted >= 10,
      earned: false,
      points: 200,
      rarity: "rare",
      progress: 0,
      maxProgress: 10,
    },
    {
      id: "daily-champion",
      title: "Daily Champion",
      description: "Complete 3 challenges in one day",
      icon: Zap,
      condition: (s) => s.dailyCompleted >= 3,
      earned: false,
      points: 150,
      rarity: "rare",
      progress: 0,
      maxProgress: 3,
    },
    {
      id: "hard-mode",
      title: "Hard Mode",
      description: "Complete 3 hard challenges",
      icon: Trophy,
      condition: (s) => s.hardChallengesCompleted >= 3,
      earned: false,
      points: 300,
      rarity: "epic",
      progress: 0,
      maxProgress: 3,
    },
    {
      id: "category-master",
      title: "Category Master",
      description: "Complete challenges in all 4 categories",
      icon: Crown,
      condition: (s) => s.categoriesCompleted >= 4,
      earned: false,
      points: 500,
      rarity: "legendary",
      progress: 0,
      maxProgress: 4,
    },
  ];

  const getRarityStyles = (rarity: string, isLocked: boolean) => {
    if (isLocked) {
      return {
        cardClass: "bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700",
        badgeClass: "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400",
        iconClass: "text-gray-400"
      };
    }

    switch (rarity) {
      case "common":
        return {
          cardClass: "bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600",
          badgeClass: "bg-gray-600 text-white dark:bg-gray-500 dark:text-white",
          iconClass: "text-gray-600 dark:text-gray-400"
        };
      case "rare":
        return {
          cardClass: "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-600",
          badgeClass: "bg-blue-600 text-white dark:bg-blue-500 dark:text-white",
          iconClass: "text-blue-600 dark:text-blue-400"
        };
      case "epic":
        return {
          cardClass: "bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-600",
          badgeClass: "bg-purple-600 text-white dark:bg-purple-500 dark:text-white",
          iconClass: "text-purple-600 dark:text-purple-400"
        };
      case "legendary":
        return {
          cardClass: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-600",
          badgeClass: "bg-yellow-600 text-white dark:bg-yellow-500 dark:text-white",
          iconClass: "text-yellow-600 dark:text-yellow-400"
        };
      default:
        return {
          cardClass: "bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600",
          badgeClass: "bg-gray-600 text-white dark:bg-gray-500 dark:text-white",
          iconClass: "text-gray-600 dark:text-gray-400"
        };
    }
  };

  useEffect(() => {
    updateStats();
    
    // Listen for challenge completion events to update achievements
    const handleChallengeCompleted = () => {
      updateStats();
    };
    
    const handleChallengeUpdate = () => {
      updateStats();
    };
    
    window.addEventListener("challengeCompleted", handleChallengeCompleted);
    window.addEventListener("challengeUpdated", handleChallengeUpdate);
    
    return () => {
      window.removeEventListener("challengeCompleted", handleChallengeCompleted);
      window.removeEventListener("challengeUpdated", handleChallengeUpdate);
    };
  }, []);

  const updateStats = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const completedKeys = Object.keys(completedChallenges).filter(
      key => !key.includes("-progress") && !key.includes("-verification")
    );

    const dailyCompleted = calculateDailyCompleted();

    const newStats = {
      totalCompleted: completedKeys.length,
      dailyCompleted: dailyCompleted,
      categoriesCompleted: calculateCategoriesCompleted(completedKeys),
      hardChallengesCompleted: 0, // Would need challenge data to calculate properly
    };

    console.log("Achievement stats updated:", newStats);
    setStats(newStats);

    // Update achievements with progress
    const updatedAchievements = achievementDefinitions.map(achievement => {
      let progress = 0;
      
      switch (achievement.id) {
        case "first-step":
          progress = Math.min(newStats.totalCompleted, 1);
          break;
        case "milestone-5":
          progress = Math.min(newStats.totalCompleted, 5);
          break;
        case "milestone-10":
          progress = Math.min(newStats.totalCompleted, 10);
          break;
        case "daily-champion":
          progress = Math.min(newStats.dailyCompleted, 3);
          break;
        case "hard-mode":
          progress = Math.min(newStats.hardChallengesCompleted, 3);
          break;
        case "category-master":
          progress = Math.min(newStats.categoriesCompleted, 4);
          break;
      }

      return {
        ...achievement,
        earned: achievement.condition(newStats),
        progress
      };
    });

    setAchievements(updatedAchievements);
    
    // Calculate total points
    const points = updatedAchievements
      .filter(a => a.earned)
      .reduce((sum, a) => sum + a.points, 0);
    setTotalPoints(points);
  };

  const calculateDailyCompleted = () => {
    const storedHistory = localStorage.getItem("challengeCompletionHistory");
    
    if (!storedHistory) {
      return 0;
    }

    const completionHistory = JSON.parse(storedHistory);
    const today = new Date().toISOString().split('T')[0];
    
    // Count completions for today
    const todayCompletions = completionHistory[today] || 0;
    
    console.log("Daily completions for", today, ":", todayCompletions);
    return todayCompletions;
  };

  const calculateCategoriesCompleted = (completedKeys: string[]) => {
    const categories = new Set();
    completedKeys.forEach(key => {
      const category = key.split('-')[0];
      if (category) categories.add(category);
    });
    return categories.size;
  };

  const earnedCount = achievements.filter(a => a.earned).length;
  const totalCount = achievements.length;

  if (achievements.length === 0) {
    return null;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Achievements
          </CardTitle>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-sm">
              {earnedCount}/{totalCount} Unlocked
            </Badge>
            <Badge variant="outline" className="text-sm">
              {totalPoints} Points
            </Badge>
          </div>
        </div>
        <Progress value={(earnedCount / totalCount) * 100} className="mt-2" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            const isLocked = !achievement.earned;
            const progressPercentage = achievement.maxProgress 
              ? (achievement.progress! / achievement.maxProgress) * 100 
              : 0;
            const styles = getRarityStyles(achievement.rarity, isLocked);

            return (
              <motion.div
                key={achievement.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${styles.cardClass} ${
                  isLocked ? "opacity-60" : "hover:shadow-lg hover:scale-105"
                }`}
              >
                {/* Achievement Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-full ${
                    isLocked 
                      ? "bg-gray-200 dark:bg-gray-700" 
                      : "bg-white dark:bg-gray-800 shadow-md"
                  }`}>
                    {isLocked ? (
                      <Lock className="h-6 w-6 text-gray-400" />
                    ) : (
                      <IconComponent className={`h-6 w-6 ${styles.iconClass}`} />
                    )}
                  </div>
                  {!isLocked && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>

                {/* Achievement Info */}
                <div className="mb-3">
                  <h3 className={`font-semibold mb-1 ${
                    isLocked ? "text-gray-500 dark:text-gray-400" : "text-foreground"
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${
                    isLocked ? "text-gray-400 dark:text-gray-500" : "text-muted-foreground"
                  }`}>
                    {achievement.description}
                  </p>
                </div>

                {/* Progress Bar */}
                {achievement.maxProgress && (
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-muted-foreground">
                        Progress
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                )}

                {/* Points and Rarity */}
                <div className="flex justify-between items-center">
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${styles.badgeClass}`}>
                    {achievement.rarity.toUpperCase()}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {achievement.points} pts
                  </Badge>
                </div>

                {/* Earned Effect */}
                {!isLocked && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1"
                  >
                    <CheckCircle className="h-4 w-4" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementBadges;
