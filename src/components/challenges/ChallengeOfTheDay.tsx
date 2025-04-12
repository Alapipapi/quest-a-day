
import { useState, useEffect } from "react";
import { Calendar, Award, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CHALLENGES } from "@/data/challengeData";
import { Challenge } from "@/data/types/challenge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ChallengeDialogContent from "../challenge-card/ChallengeDialogContent";

const ChallengeOfTheDay = () => {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Get today's date and use it to select a challenge
    const today = new Date();
    const todayFormatted = format(today, "yyyy-MM-dd");
    
    // Check if we already have a stored challenge for today
    const storedChallenge = localStorage.getItem(`challengeOfTheDay-${todayFormatted}`);

    if (storedChallenge) {
      // Use the stored challenge
      const parsedChallenge = JSON.parse(storedChallenge);
      setChallenge(parsedChallenge);
      
      // Check if this challenge is completed
      const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      const key = `${parsedChallenge.category}-${parsedChallenge.title}`;
      setIsCompleted(!!completedChallenges[key]);
      setProgress(completedChallenges[`${key}-progress`] || 0);
    } else {
      // Generate a new challenge for today
      // Use a combination of date components to generate a consistent index for the day
      const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      const seed = dayOfYear + today.getFullYear();
      const index = seed % CHALLENGES.length;
      
      const todaysChallenge = CHALLENGES[index];
      setChallenge(todaysChallenge);
      
      // Store today's challenge
      localStorage.setItem(`challengeOfTheDay-${todayFormatted}`, JSON.stringify(todaysChallenge));
      
      // Check if this challenge is completed
      const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      const key = `${todaysChallenge.category}-${todaysChallenge.title}`;
      setIsCompleted(!!completedChallenges[key]);
      setProgress(completedChallenges[`${key}-progress`] || 0);
    }
  }, []);

  // Listen for challenge completion
  useEffect(() => {
    const handleChallengeUpdate = () => {
      if (challenge) {
        const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
        const key = `${challenge.category}-${challenge.title}`;
        setIsCompleted(!!completedChallenges[key]);
        setProgress(completedChallenges[`${key}-progress`] || 0);
      }
    };
    
    window.addEventListener("challengeUpdated", handleChallengeUpdate);
    
    return () => {
      window.removeEventListener("challengeUpdated", handleChallengeUpdate);
    };
  }, [challenge]);

  if (!challenge) return null;

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "coding": return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/30";
      case "fitness": return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800/30";
      case "creativity": return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800/30";
      case "problem-solving": return "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/30";
      default: return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mb-8"
    >
      <div className="flex items-center mb-4">
        <Calendar className="h-5 w-5 mr-2 text-primary" />
        <h2 className="text-xl font-bold">Challenge of the Day</h2>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card className="cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300 border-2 border-primary/20">
            <div className={`h-2 ${getCategoryColor(challenge.category)}`} />
            
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant="outline" 
                      className={getCategoryColor(challenge.category)}
                    >
                      {challenge.category.charAt(0).toUpperCase() + challenge.category.slice(1)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(), "MMMM d, yyyy")}
                    </span>
                  </div>
                
                  <h3 className="text-lg font-semibold">{challenge.title}</h3>
                  <p className="text-muted-foreground mt-1 mb-3">{challenge.description}</p>
                  
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1 text-amber-500" />
                      <span className="text-xs">{challenge.difficulty}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-blue-500" />
                      <span className="text-xs">{challenge.timeEstimate}</span>
                    </div>
                    {isCompleted && (
                      <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                        Completed
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Button size="sm" className="flex items-center gap-1 self-start sm:self-center mt-2 sm:mt-0">
                  <span>View Challenge</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        
        <ChallengeDialogContent
          id={challenge.id}
          title={challenge.title}
          category={challenge.category}
          setIsOpen={setIsOpen}
          setIsCompleted={setIsCompleted}
          setProgress={setProgress}
        />
      </Dialog>
    </motion.div>
  );
};

export default ChallengeOfTheDay;
