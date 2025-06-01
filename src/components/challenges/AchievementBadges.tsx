
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Zap, Star, Award, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  condition: (stats: any) => boolean;
  earned: boolean;
}

const AchievementBadges = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [stats, setStats] = useState({
    totalCompleted: 0,
    streak: 0,
    categoriesCompleted: 0,
    hardChallengesCompleted: 0,
  });

  const achievementDefinitions: Achievement[] = [
    {
      id: "first-step",
      title: "First Steps",
      description: "Complete your first challenge",
      icon: Target,
      condition: (s) => s.totalCompleted >= 1,
      earned: false,
    },
    {
      id: "milestone-5",
      title: "Getting Started",
      description: "Complete 5 challenges",
      icon: Star,
      condition: (s) => s.totalCompleted >= 5,
      earned: false,
    },
    {
      id: "milestone-10",
      title: "Challenge Seeker",
      description: "Complete 10 challenges",
      icon: Award,
      condition: (s) => s.totalCompleted >= 10,
      earned: false,
    },
    {
      id: "streak-3",
      title: "On Fire",
      description: "Complete challenges 3 days in a row",
      icon: Zap,
      condition: (s) => s.streak >= 3,
      earned: false,
    },
    {
      id: "hard-mode",
      title: "Hard Mode",
      description: "Complete 3 hard challenges",
      icon: Trophy,
      condition: (s) => s.hardChallengesCompleted >= 3,
      earned: false,
    },
    {
      id: "category-master",
      title: "Category Master",
      description: "Complete challenges in all 4 categories",
      icon: Crown,
      condition: (s) => s.categoriesCompleted >= 4,
      earned: false,
    },
  ];

  useEffect(() => {
    updateStats();
  }, []);

  const updateStats = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const completedKeys = Object.keys(completedChallenges).filter(
      key => !key.includes("-progress") && !key.includes("-verification")
    );

    const categories = new Set();
    let hardCount = 0;

    // This would need access to CHALLENGES data to properly count categories and difficulty
    // For now, we'll use a simplified version

    const newStats = {
      totalCompleted: completedKeys.length,
      streak: calculateStreak(),
      categoriesCompleted: categories.size,
      hardChallengesCompleted: hardCount,
    };

    setStats(newStats);

    // Check achievements
    const updatedAchievements = achievementDefinitions.map(achievement => ({
      ...achievement,
      earned: achievement.condition(newStats)
    }));

    setAchievements(updatedAchievements);
  };

  const calculateStreak = () => {
    // Simplified streak calculation
    return 0; // Would need more complex logic with dates
  };

  const earnedAchievements = achievements.filter(a => a.earned);
  const totalAchievements = achievements.length;

  if (earnedAchievements.length === 0) {
    return null;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Achievements ({earnedAchievements.length}/{totalAchievements})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {earnedAchievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Badge variant="secondary" className="p-2 flex items-center gap-1">
                  <IconComponent className="h-4 w-4" />
                  {achievement.title}
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementBadges;
