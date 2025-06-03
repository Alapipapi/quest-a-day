import { motion } from "framer-motion";
import { useState } from "react";
import { Shuffle, Star, Clock, Target, BookOpen, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { CHALLENGES } from "@/data/challengeData";

const QuickActionsPanel = () => {
  const navigate = useNavigate();
  const [isRandomizing, setIsRandomizing] = useState(false);

  const getRandomChallenge = () => {
    setIsRandomizing(true);
    setTimeout(() => {
      const randomChallenge = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
      navigate(`/challenge/${randomChallenge.category}/${encodeURIComponent(randomChallenge.title)}`);
      setIsRandomizing(false);
    }, 800);
  };

  const getEasyChallenge = () => {
    const easyChallenges = CHALLENGES.filter(c => c.difficulty === "Easy");
    if (easyChallenges.length > 0) {
      const challenge = easyChallenges[Math.floor(Math.random() * easyChallenges.length)];
      navigate(`/challenge/${challenge.category}/${encodeURIComponent(challenge.title)}`);
    }
  };

  const getQuickChallenge = () => {
    const quickChallenges = CHALLENGES.filter(c => 
      c.timeEstimate.includes("5-10") || 
      c.timeEstimate.includes("10-15") ||
      c.timeEstimate.includes("5 minutes") ||
      c.timeEstimate.includes("10 minutes")
    );
    if (quickChallenges.length > 0) {
      const challenge = quickChallenges[Math.floor(Math.random() * quickChallenges.length)];
      navigate(`/challenge/${challenge.category}/${encodeURIComponent(challenge.title)}`);
    }
  };

  const actions = [
    {
      icon: <Shuffle className="h-5 w-5" />,
      title: "Random Challenge",
      description: "Get a surprise challenge",
      action: getRandomChallenge,
      color: "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300",
      loading: isRandomizing
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Quick Win",
      description: "5-15 minute challenge",
      action: getQuickChallenge,
      color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Easy Start",
      description: "Beginner-friendly challenge",
      action: getEasyChallenge,
      color: "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Favorites",
      description: "Your bookmarked challenges",
      action: () => navigate("/favorites"),
      color: "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300"
    }
  ];

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="ghost"
                onClick={action.action}
                disabled={action.loading}
                className={`w-full h-auto p-4 flex flex-col items-center gap-2 ${action.color} transition-all duration-200`}
              >
                <motion.div
                  animate={action.loading ? { rotate: 360 } : {}}
                  transition={action.loading ? { duration: 0.8, repeat: Infinity, ease: "linear" } : {}}
                >
                  {action.icon}
                </motion.div>
                <div className="text-center">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs opacity-70">{action.description}</div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionsPanel;
