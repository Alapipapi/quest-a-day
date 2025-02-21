import { motion } from "framer-motion";
import CategoryBadge from "./CategoryBadge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check, ChevronRight, ArrowRight } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
}

interface StepDetails {
  title: string;
  instructions: string[];
  resources?: string[];
  verification?: string[];
}

const getStepsForChallenge = (category: string): StepDetails[] => {
  switch (category) {
    case "coding":
      return [
        {
          title: "Set up your development environment",
          instructions: [
            "Install Visual Studio Code from https://code.visualstudio.com",
            "Install Git from https://git-scm.com",
            "Create a new folder for your project",
            "Open the folder in VS Code"
          ],
          resources: [
            "VS Code documentation",
            "Git basic commands cheatsheet"
          ],
          verification: [
            "VS Code is installed and running",
            "Git is installed (run 'git --version' in terminal)",
            "Project folder is created and open in VS Code"
          ]
        },
        {
          title: "Create a new project and initialize dependencies",
          instructions: [
            "Open terminal in VS Code (Ctrl+`)",
            "Run 'npm create vite@latest'",
            "Choose React + TypeScript template",
            "Navigate to project directory",
            "Run 'npm install'"
          ],
          resources: [
            "Vite documentation",
            "npm basics guide"
          ],
          verification: [
            "package.json exists in your project",
            "node_modules folder is created",
            "Project runs with 'npm run dev'"
          ]
        },
        // ... Other coding steps
      ];
    case "fitness":
      return [
        {
          title: "Warm-up routine",
          instructions: [
            "Find an open space (at least 6x6 feet)",
            "Perform arm circles (10 forward, 10 backward)",
            "Do 20 jumping jacks",
            "March in place for 1 minute",
            "Do 10 leg swings each side"
          ],
          resources: [
            "Video: Proper warm-up technique",
            "Stretching guide PDF"
          ],
          verification: [
            "No muscle strain felt",
            "Light sweat",
            "Increased heart rate",
            "Feeling warmed up and ready"
          ]
        },
        {
          title: "Push-up set",
          instructions: [
            "Find a clear floor space",
            "Get into plank position",
            "Lower chest to ground with proper form",
            "Push back up",
            "Repeat 20 times (or modify as needed)"
          ],
          resources: [
            "Push-up form guide",
            "Modified push-up variations"
          ],
          verification: [
            "Maintained proper form",
            "Completed required repetitions",
            "Feel chest/arm muscle engagement"
          ]
        },
        // ... Other fitness steps
      ];
    case "creativity":
      return [
        {
          title: "Prepare your workspace",
          instructions: [
            "Clear your desk/workspace",
            "Gather required materials (paper, pencils, etc.)",
            "Ensure good lighting",
            "Have reference materials ready",
            "Set up your digital tools if needed"
          ],
          resources: [
            "Workspace organization guide",
            "Art supplies checklist"
          ],
          verification: [
            "Workspace is clean and organized",
            "All materials are within reach",
            "Lighting is adequate",
            "You feel comfortable and ready"
          ]
        },
        {
          title: "Initial sketching",
          instructions: [
            "Start with basic shapes",
            "Use light pencil strokes",
            "Focus on proportions",
            "Add basic guidelines",
            "Keep your strokes loose and fluid"
          ],
          resources: [
            "Basic sketching techniques",
            "Understanding proportions"
          ],
          verification: [
            "Basic shapes are established",
            "Guidelines are visible but light",
            "Overall composition looks balanced"
          ]
        },
        // ... Other creativity steps
      ];
    case "problem-solving":
      return [
        {
          title: "Problem Analysis",
          instructions: [
            "Read the problem statement carefully",
            "Write down key information",
            "Identify given constraints",
            "List expected outputs",
            "Note any special conditions"
          ],
          resources: [
            "Problem analysis framework",
            "Note-taking templates"
          ],
          verification: [
            "All important information is noted",
            "Constraints are clearly listed",
            "Expected outputs are defined",
            "You can explain the problem to others"
          ]
        },
        {
          title: "Solution Planning",
          instructions: [
            "Break down the problem into smaller parts",
            "Draw diagrams if helpful",
            "List possible approaches",
            "Consider edge cases",
            "Estimate time needed for each part"
          ],
          resources: [
            "Problem decomposition techniques",
            "Solution planning templates"
          ],
          verification: [
            "Problem is broken into manageable parts",
            "Multiple approaches considered",
            "Edge cases identified",
            "Clear plan of action exists"
          ]
        },
        // ... Other problem-solving steps
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
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const steps = getStepsForChallenge(category);

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const handleStepClick = (index: number) => {
    setSelectedStep(selectedStep === index ? null : index);
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
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
              Complete each step to finish the challenge:
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div 
                  className="flex items-center gap-3 p-4 bg-gray-50 cursor-pointer"
                  onClick={() => handleStepClick(index)}
                >
                  <div 
                    className={`h-6 w-6 rounded-full flex items-center justify-center border ${
                      completedSteps.includes(index) 
                        ? 'bg-primary border-primary' 
                        : 'border-gray-300'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(index);
                    }}
                  >
                    {completedSteps.includes(index) ? (
                      <Check className="h-4 w-4 text-white" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <span className={`flex-1 font-medium ${
                    completedSteps.includes(index) ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                    {step.title}
                  </span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${
                    selectedStep === index ? 'rotate-90' : ''
                  }`} />
                </div>
                
                {selectedStep === index && (
                  <div className="p-4 bg-white">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Instructions:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {step.instructions.map((instruction, i) => (
                            <li key={i} className="text-gray-600">{instruction}</li>
                          ))}
                        </ul>
                      </div>

                      {step.resources && (
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Helpful Resources:</h4>
                          <ul className="list-disc pl-5 space-y-2">
                            {step.resources.map((resource, i) => (
                              <li key={i} className="text-blue-600 hover:underline cursor-pointer">
                                {resource}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {step.verification && (
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Verification Checklist:</h4>
                          <ul className="list-disc pl-5 space-y-2">
                            {step.verification.map((item, i) => (
                              <li key={i} className="text-gray-600">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
