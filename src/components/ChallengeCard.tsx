
import { motion } from "framer-motion";
import CategoryBadge from "./CategoryBadge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check, ChevronRight } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
}

const getStepsForChallenge = (category: string) => {
  switch (category) {
    case "coding":
      return [
        "Set up your development environment (VS Code, Git)",
        "Create a new project and initialize dependencies",
        "Build the basic UI components",
        "Implement core functionality",
        "Add data persistence",
        "Test and debug your application",
        "Deploy your project"
      ];
    case "fitness":
      return [
        "Find a clear space for exercise",
        "Do 5 minutes of warm-up stretches",
        "Complete 20 push-ups (modify as needed)",
        "Perform 30 bodyweight squats",
        "Hold plank position for 1 minute",
        "Do 20 jumping jacks",
        "Cool down with light stretching"
      ];
    case "creativity":
      return [
        "Gather your art supplies or digital tools",
        "Create a rough sketch or outline",
        "Develop the main elements of your piece",
        "Add details and refinements",
        "Apply color or finishing touches",
        "Review and make final adjustments",
        "Document your work"
      ];
    case "problem-solving":
      return [
        "Read and understand the problem statement",
        "Break down the problem into smaller parts",
        "Identify the key patterns or concepts",
        "Plan your solution approach",
        "Implement your solution step by step",
        "Test with different scenarios",
        "Optimize if needed"
      ];
    default:
      return [];
  }
};

const ChallengeCard = ({
  title,
  description,
  category,
  difficulty,
  timeEstimate,
}: ChallengeCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const steps = getStepsForChallenge(category);

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative overflow-hidden rounded-2xl bg-white/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative z-10">
          <CategoryBadge category={category} className="mb-4" />
          
          <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
          <p className="mb-4 text-gray-600">{description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
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
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
              Follow these steps to complete the challenge:
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggleStep(index)}
              >
                <div className={`h-6 w-6 rounded-full flex items-center justify-center border ${
                  completedSteps.includes(index) 
                    ? 'bg-primary border-primary' 
                    : 'border-gray-300'
                }`}>
                  {completedSteps.includes(index) ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </div>
                <span className={`flex-1 ${completedSteps.includes(index) ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <span className="text-sm text-gray-500">
              {completedSteps.length} of {steps.length} steps completed
            </span>
            <Button 
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChallengeCard;
