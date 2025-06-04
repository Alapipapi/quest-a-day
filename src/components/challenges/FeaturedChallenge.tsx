
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Circle, Check } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CHALLENGES } from "@/data/challengeData";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ChallengeDialogContent from "../challenge-card/ChallengeDialogContent";
import CategoryBadge from "../CategoryBadge";

const FeaturedChallenge = () => {
  const [featuredChallenge, setFeaturedChallenge] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Select a semi-random featured challenge based on the day
    // Using the exact same calculation as ChallengeOfTheDay 
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const challengeIndex = dayOfYear % CHALLENGES.length;
    const challenge = CHALLENGES[challengeIndex];
    
    if (challenge) {
      // Check if this challenge is completed
      const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      const key = `${challenge.category}-${challenge.title}`;
      const completed = !!completedChallenges[challenge.id] || !!completedChallenges[key];
      
      setFeaturedChallenge(challenge);
      setIsCompleted(completed);
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

  if (!featuredChallenge) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mb-8"
    >
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
        Featured Challenge
      </h2>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
         <DialogTrigger asChild>
           <Card className={`cursor-pointer overflow-hidden hover:shadow-md transition-shadow border-2 relative ${
             isCompleted 
               ? 'border-green-500/50 bg-green-50/50 dark:bg-green-900/10' 
               : 'border-primary/20'
           }`}>
            <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500" />
            
            {isCompleted && (
              <div className="absolute bottom-4 right-4 z-10">
                <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                  <Check className="h-3 w-3" />
                  Completed
                </div>
              </div>
            )}
            
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-semibold">{featuredChallenge.title}</h3>
                  <p className="text-muted-foreground mt-1 mb-3">{featuredChallenge.description}</p>
                  
                  {/* Add horizontal divider line */}
                  <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-3"></div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <Badge variant={"outline"} className="flex items-center gap-1">
                      <Circle className={`h-2 w-2 fill-current ${getDifficultyColor(featuredChallenge.difficulty)}`} />
                      {featuredChallenge.difficulty}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {featuredChallenge.timeEstimate}
                    </span>
                    
                    {/* Category badge moved to be in line with difficulty and time estimate */}
                    <div className="ml-auto">
                      <CategoryBadge category={featuredChallenge.category} />
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
          id={featuredChallenge.id}
          title={featuredChallenge.title}
          category={featuredChallenge.category}
          setIsOpen={setIsOpen}
          setIsCompleted={setIsCompleted}
          setProgress={setProgress}
        />
      </Dialog>
    </motion.div>
  );
};

export default FeaturedChallenge;
