
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CHALLENGES } from "@/data/challengeData";
import { Challenge } from "@/data/types/challenge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChallengeDialogContent from "../challenge-card/ChallengeDialogContent";
import CategoryBadge from "../CategoryBadge";
import { Circle, Check } from "lucide-react";

const ChallengeRecommendations = () => {
  const [recommendedChallenges, setRecommendedChallenges] = useState<Challenge[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<{[key: string]: boolean}>({});

  // Helper function to capitalize first letter only
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Helper function to get the difficulty dot color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-500";
      case "Medium":
        return "text-yellow-500";
      case "Hard":
        return "text-red-500";
      default:
        return "text-blue-500";
    }
  };

  // Helper function to check if a challenge is completed
  const isChallengeCompleted = (challenge: Challenge) => {
    const keyById = challenge.id.toString();
    const keyByTitle = `${challenge.category}-${challenge.title}`;
    return completedChallenges[keyById] || completedChallenges[keyByTitle];
  };

  useEffect(() => {
    // Get completed challenges
    const completedChallengesData = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    setCompletedChallenges(completedChallengesData);
    
    // Find completed challenge categories
    const completedCategories = new Set<string>();
    Object.keys(completedChallengesData).forEach(key => {
      if (!key.includes("-progress") && !key.includes("-verification")) {
        const parts = key.split("-");
        if (parts.length >= 2) {
          completedCategories.add(parts[0]);
        }
      }
    });
    
    // Get challenge IDs that are already completed
    const completedIds = new Set(
      Object.keys(completedChallengesData)
        .filter(key => !key.includes("-progress") && !key.includes("-verification"))
        .map(key => {
          const id = parseInt(key);
          return isNaN(id) ? -1 : id;
        })
        .filter(id => id > 0)
    );
    
    // Recommendation strategy:
    // 1. Prioritize categories user has already completed challenges in
    // 2. Recommend challenges of similar or slightly higher difficulty
    
    let recommendations: Challenge[] = [];
    
    // From each completed category, find a challenge that isn't completed
    Array.from(completedCategories).forEach(category => {
      const categoryChallenges = CHALLENGES
        .filter(c => c.category === category && !completedIds.has(c.id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 1);
      
      recommendations = [...recommendations, ...categoryChallenges];
    });
    
    // If we don't have 3 recommendations yet, add random challenges from other categories
    if (recommendations.length < 3) {
      const otherChallenges = CHALLENGES
        .filter(c => !completedIds.has(c.id) && !recommendations.some(rc => rc.id === c.id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3 - recommendations.length);
      
      recommendations = [...recommendations, ...otherChallenges];
    }
    
    setRecommendedChallenges(recommendations.slice(0, 3));
  }, []);

  // Listen for challenge updates
  useEffect(() => {
    const handleChallengeUpdate = () => {
      const completedChallengesData = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      setCompletedChallenges(completedChallengesData);
    };

    window.addEventListener("challengeUpdated", handleChallengeUpdate);
    return () => window.removeEventListener("challengeUpdated", handleChallengeUpdate);
  }, []);

  const handleChallengeClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setIsOpen(true);
  };

  if (recommendedChallenges.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-8"
    >
      <h2 className="text-xl font-bold mb-4">Recommended For You</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recommendedChallenges.map((challenge) => {
          const isCompleted = isChallengeCompleted(challenge);
          return (
            <Card 
              key={challenge.id} 
              className={`cursor-pointer hover:shadow-md transition-all relative ${
                isCompleted ? 'ring-2 ring-green-200 bg-green-50/50 dark:bg-green-900/10 dark:ring-green-800' : ''
              }`}
              onClick={() => handleChallengeClick(challenge)}
            >
              <CardContent className="p-4">
                {isCompleted && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                    <Check className="h-3 w-3" />
                  </div>
                )}
                <h3 className={`font-semibold ${isCompleted ? 'text-green-700 dark:text-green-300' : ''}`}>
                  {challenge.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{challenge.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <CategoryBadge 
                    category={challenge.category as "coding" | "fitness" | "creativity" | "problem-solving"} 
                  />
                  <span className="flex items-center gap-1">
                    <Circle className={`h-2 w-2 fill-current ${getDifficultyColor(challenge.difficulty)}`} />
                    {challenge.difficulty}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selectedChallenge && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <span></span>
          </DialogTrigger>
          <ChallengeDialogContent
            id={selectedChallenge.id}
            title={selectedChallenge.title}
            category={selectedChallenge.category}
            setIsOpen={setIsOpen}
            setIsCompleted={setIsCompleted}
            setProgress={setProgress}
          />
        </Dialog>
      )}
    </motion.div>
  );
};

export default ChallengeRecommendations;
