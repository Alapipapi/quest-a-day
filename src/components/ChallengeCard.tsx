
import { motion } from "framer-motion";
import CategoryBadge from "./CategoryBadge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Check, ChevronRight, ExternalLink, Trophy } from "lucide-react";
import { StepDetails, getStepsForChallenge } from "../data/challengeSteps";
import { useNavigate } from "react-router-dom";

interface ChallengeCardProps {
  id: number;
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
}

const ChallengeCard = ({
  id,
  title,
  description,
  category,
  difficulty,
  timeEstimate,
}: ChallengeCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const steps = getStepsForChallenge(category, title);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for completion status
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const key = `${category}-${title}`;
    setIsCompleted(!!completedChallenges[key]);
  }, [category, title]);

  const handleViewDetails = () => {
    navigate(`/challenge/${category}/${encodeURIComponent(title)}`);
  };

  const handleResourceClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative overflow-hidden rounded-2xl bg-white/40 dark:bg-gray-800/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-700/50 dark:to-gray-700/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative z-10">
          <div className="flex justify-between">
            <CategoryBadge category={category} className="mb-4" />
            {isCompleted && (
              <div className="flex items-center completed-badge px-2 py-1 rounded-full">
                <Trophy className="h-3 w-3 mr-1" />
                <span className="text-xs font-medium">Completed</span>
              </div>
            )}
          </div>
          
          <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full" style={{
                backgroundColor: 
                  difficulty === "Easy" ? "#4FD1C5" :
                  difficulty === "Medium" ? "#F6AD55" : "#FC8181"
              }} />
              {difficulty}
            </span>
            <span>{timeEstimate}</span>
          </div>
        </div>
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
              Complete the challenge
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            {steps.length > 0 ? (
              <div className="border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800">
                  <div 
                    className={`h-6 w-6 rounded-full flex items-center justify-center border ${
                      isCompleted 
                        ? 'bg-[hsl(var(--completed-bg))] border-[hsl(var(--completed-text))]' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="h-4 w-4 text-[hsl(var(--completed-text))]" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <span className={`flex-1 font-medium ${
                    isCompleted ? 'text-[hsl(var(--completed-text))]' : 'text-gray-700 dark:text-gray-200'
                  }`}>
                    {title}
                  </span>
                </div>
                
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Instructions:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {steps[0].instructions.map((instruction, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300">{instruction}</li>
                        ))}
                      </ul>
                    </div>

                    {steps[0].resources && steps[0].resources.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Helpful Resources:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {steps[0].resources.map((resource, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <a 
                                onClick={(e) => handleResourceClick(e, resource.url)}
                                className="text-primary hover:text-primary/80 hover:underline cursor-pointer flex items-center gap-1"
                              >
                                {resource.title}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {steps[0].verification && (
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Verification Checklist:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {steps[0].verification.map((item, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500 dark:text-gray-400">Instructions not available for this challenge yet.</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isCompleted ? "Challenge completed" : "Challenge in progress"}
            </span>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </Button>
              <Button 
                onClick={handleViewDetails}
              >
                View Details
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChallengeCard;
