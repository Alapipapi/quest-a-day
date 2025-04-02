
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CHALLENGES } from "@/data/challengeData";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ChallengeDialogContent from "../challenge-card/ChallengeDialogContent";

const FeaturedChallenge = () => {
  const [featuredChallenge, setFeaturedChallenge] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Select a semi-random featured challenge based on the day
    const date = new Date();
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
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
          <Card className="cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300 border-2 border-primary/20">
            <div className="absolute top-0 right-0">
              <Badge variant="secondary" className="m-2 bg-primary/10">
                Featured
              </Badge>
            </div>
            
            <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500" />
            
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{featuredChallenge.title}</h3>
                  <p className="text-muted-foreground mt-1 mb-3">{featuredChallenge.description}</p>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <Badge variant={isCompleted ? "default" : "outline"}>
                      {featuredChallenge.difficulty}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {featuredChallenge.timeEstimate}
                    </span>
                  </div>
                </div>
                
                <Button size="sm" className="flex items-center gap-1">
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
