
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Circle, Check } from "lucide-react";
import { CHALLENGES } from "@/data/challengeData";
import { Challenge } from "@/data/types/challenge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ChallengeDialogContent from "../challenge-card/ChallengeDialogContent";
import CategoryBadge from "../CategoryBadge";

const ChallengeOfTheDay = () => {
  const [dailyChallenge, setDailyChallenge] = useState<Challenge | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Use the current date to generate a consistent "random" number for the day
    // But use a different formula than Featured Challenge
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Add an offset to get a different challenge than featured challenge
    const offset = 7; // Offset by a week
    const challengeIndex = (dayOfYear + offset) % CHALLENGES.length;
    
    const todaysChallenge = CHALLENGES[challengeIndex];
    setDailyChallenge(todaysChallenge);
    
    // Check if this challenge is completed
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${todaysChallenge.category}-${todaysChallenge.title}`;
    const completed = !!completedChallenges[todaysChallenge.id] || !!completedChallenges[key];
    setIsCompleted(completed);
    
    // Get progress if available
    const progressKey = `${key}-progress`;
    if (completedChallenges[progressKey]) {
      setProgress(completedChallenges[progressKey]);
    }
  }, []);

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

  if (!dailyChallenge) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8"
    >
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Star className="h-5 w-5 mr-2 text-yellow-500" />
        Challenge of the Day
      </h2>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card className={`cursor-pointer hover:shadow-md transition-shadow border-2 relative ${
            isCompleted 
              ? 'border-green-500/50 bg-green-50/50 dark:bg-green-900/10' 
              : 'border-yellow-500/20'
          }`}>
            {isCompleted && (
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                  <Check className="h-3 w-3" />
                  Completed
                </div>
              </div>
            )}
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-semibold">{dailyChallenge.title}</h3>
                  <p className="text-muted-foreground mt-1 mb-3">{dailyChallenge.description}</p>
                  
                  {/* Add horizontal divider line */}
                  <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-3"></div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <Badge variant={isCompleted ? "default" : "outline"} className="flex items-center gap-1">
                      <Circle className={`h-2 w-2 fill-current ${getDifficultyColor(dailyChallenge.difficulty)}`} />
                      {dailyChallenge.difficulty}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {dailyChallenge.timeEstimate}
                    </span>
                    
                    {/* Category badge moved to be in line with difficulty and time estimate */}
                    <div className="ml-auto">
                      <CategoryBadge category={dailyChallenge.category} />
                    </div>
                  </div>
                </div>
                
                <Button size="sm" className="flex items-center gap-1 shrink-0">
                  <span>View</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        
        <ChallengeDialogContent
          id={dailyChallenge.id}
          title={dailyChallenge.title}
          category={dailyChallenge.category}
          setIsOpen={setIsOpen}
          setIsCompleted={setIsCompleted}
          setProgress={setProgress}
        />
      </Dialog>
    </motion.div>
  );
};

export default ChallengeOfTheDay;
