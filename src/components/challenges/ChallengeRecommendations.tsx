
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
  const [completedChallenges, setCompletedChallenges] = useState<Set<number>>(new Set());

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

  // Helper function to check if challenge is completed
  const isChallengeCompleted = (challenge: Challenge) => {
    return completedChallenges.has(challenge.id);
  };

  useEffect(() => {
    // Get completed challenges
    const completedData = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    
    // Find completed challenge categories and IDs
    const completedCategories = new Set<string>();
    const completedIds = new Set<number>();
    
    Object.keys(completedData).forEach(key => {
      if (!key.includes("-progress") && !key.includes("-verification")) {
        const parts = key.split("-");
        if (parts.length >= 2) {
          completedCategories.add(parts[0]);
        }
        
        // Also check for ID-based completion
        const id = parseInt(key);
        if (!isNaN(id) && completedData[key] === true) {
          completedIds.add(id);
        }
      }
    });
    
    setCompletedChallenges(completedIds);
    
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

    // Listen for challenge updates
    const handleChallengeUpdate = () => {
      // Re-run the effect when challenges are updated
      const updatedCompletedData = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      const updatedCompletedIds = new Set<number>();
      
      Object.keys(updatedCompletedData).forEach(key => {
        const id = parseInt(key);
        if (!isNaN(id) && updatedCompletedData[key] === true) {
          updatedCompletedIds.add(id);
        }
      });
      
      setCompletedChallenges(updatedCompletedIds);
    };

    window.addEventListener("challengeUpdated", handleChallengeUpdate);
    
    return () => {
      window.removeEventListener("challengeUpdated", handleChallengeUpdate);
    };
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
        {recommendedChallenges.map((challenge) => (
          <Card 
            key={challenge.id} 
            className={`cursor-pointer hover:shadow-md transition-shadow relative ${
              isChallengeCompleted(challenge) ? 'bg-green-50 dark:bg-green-950/20' : ''
            }`}
            onClick={() => handleChallengeClick(challenge)}
          >
            <CardContent className="p-4">
              {isChallengeCompleted(challenge) && (
                <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
              )}
              <h3 className={`font-semibold ${
                isChallengeCompleted(challenge) ? 'text-green-700 dark:text-green-300' : ''
              }`}>
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
        ))}
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
