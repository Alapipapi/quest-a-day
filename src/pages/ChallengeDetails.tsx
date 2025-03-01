
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStepsForChallenge } from "@/data/challengeSteps";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ExternalLink, Trophy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const ChallengeDetails = () => {
  const { category, title } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [steps, setSteps] = useState<any[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (category && title) {
      const decodedTitle = decodeURIComponent(title);
      const challengeSteps = getStepsForChallenge(category, decodedTitle);
      setSteps(challengeSteps);
      
      // Check localStorage for completion status
      const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      const key = `${category}-${decodedTitle}`;
      setIsCompleted(!!completedChallenges[key]);
      setProgress(completedChallenges[`${key}-progress`] || 0);
    }
  }, [category, title]);

  const handleBack = () => {
    navigate("/");
  };

  const handleResourceClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleCompletion = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    
    // Save to localStorage
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${category}-${decodeURIComponent(title || "")}`;
    
    if (newStatus) {
      completedChallenges[key] = true;
      completedChallenges[`${key}-progress`] = 100;
      setProgress(100);
      toast({
        title: "Challenge Completed!",
        description: "Great job on completing this challenge!",
        duration: 3000,
      });
    } else {
      delete completedChallenges[key];
      completedChallenges[`${key}-progress`] = 0;
      setProgress(0);
    }
    
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
  };

  const updateProgress = (value: number) => {
    setProgress(value);
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${category}-${decodeURIComponent(title || "")}`;
    completedChallenges[`${key}-progress`] = value;
    
    if (value === 100 && !isCompleted) {
      setIsCompleted(true);
      completedChallenges[key] = true;
      toast({
        title: "Challenge Completed!",
        description: "Great job on completing this challenge!",
        duration: 3000,
      });
    } else if (value < 100 && isCompleted) {
      setIsCompleted(false);
      delete completedChallenges[key];
    }
    
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
  };

  if (steps.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button variant="outline" onClick={handleBack} className="mb-6">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back to Challenges
        </Button>
        <div className="text-center py-16">
          <p className="text-muted-foreground">Challenge details not found.</p>
        </div>
      </div>
    );
  }

  const challenge = steps[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <Button variant="outline" onClick={handleBack} className="mb-6">
        <ChevronLeft className="h-4 w-4 mr-2" /> Back to Challenges
      </Button>

      <div className="bg-card/80 backdrop-blur-sm dark:bg-card/60 rounded-2xl shadow-xl overflow-hidden border border-border">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/0 p-6 sm:p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{challenge.title}</h1>
            {isCompleted && (
              <div className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">
                <Trophy className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Completed</span>
              </div>
            )}
          </div>
          <p className="mt-2 text-muted-foreground capitalize">{category} Challenge</p>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Your Progress</h2>
            <div className="w-full bg-muted rounded-full h-4">
              <div 
                className="bg-primary h-4 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress} 
                onChange={(e) => updateProgress(parseInt(e.target.value))}
                className="w-full h-2 accent-primary"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Instructions</h2>
            <div className="space-y-2">
              {challenge.instructions.map((instruction: string, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="mt-0.5 min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{instruction}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {challenge.resources && challenge.resources.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Helpful Resources</h2>
              <div className="space-y-3">
                {challenge.resources.map((resource: { title: string, url: string }, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary/80 hover:bg-primary/10 p-2 flex items-center gap-2"
                      onClick={() => handleResourceClick(resource.url)}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {resource.title}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {challenge.verification && challenge.verification.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Verification Checklist</h2>
              <div className="space-y-2">
                {challenge.verification.map((item: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <div 
                      className={`mt-0.5 min-w-5 h-5 rounded-full flex items-center justify-center ${
                        progress >= (index + 1) * (100 / challenge.verification.length)
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {progress >= (index + 1) * (100 / challenge.verification.length) ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="h-4 w-4 mr-2" /> Back
            </Button>
            <Button
              onClick={toggleCompletion}
              className={isCompleted ? "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800" : ""}
            >
              {isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeDetails;
