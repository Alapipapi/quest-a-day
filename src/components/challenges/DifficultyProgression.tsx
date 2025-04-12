import { useState, useEffect } from "react";
import { Trophy, ArrowUp, TrendingUp, Lock, Unlock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CHALLENGES } from "@/data/challengeData";

type SkillLevel = {
  level: number;
  title: string;
  minPoints: number;
  maxPoints: number;
  color: string;
  description: string;
};

const skillLevels: Record<string, SkillLevel[]> = {
  "coding": [
    { level: 1, title: "Novice Coder", minPoints: 0, maxPoints: 100, color: "bg-blue-200", description: "Beginner level coding skills" },
    { level: 2, title: "Script Apprentice", minPoints: 100, maxPoints: 300, color: "bg-blue-300", description: "Building foundational programming knowledge" },
    { level: 3, title: "Code Crafter", minPoints: 300, maxPoints: 600, color: "bg-blue-400", description: "Comfortable with common programming concepts" },
    { level: 4, title: "Dev Artisan", minPoints: 600, maxPoints: 1000, color: "bg-blue-500", description: "Advanced coding techniques and practices" },
    { level: 5, title: "Software Architect", minPoints: 1000, maxPoints: 1500, color: "bg-blue-600", description: "Expert-level programming skills" },
  ],
  "fitness": [
    { level: 1, title: "Wellness Starter", minPoints: 0, maxPoints: 100, color: "bg-green-200", description: "Beginning your fitness journey" },
    { level: 2, title: "Active Participant", minPoints: 100, maxPoints: 300, color: "bg-green-300", description: "Building consistent exercise habits" },
    { level: 3, title: "Fitness Enthusiast", minPoints: 300, maxPoints: 600, color: "bg-green-400", description: "Regular workout routines and improved strength" },
    { level: 4, title: "Athletic Performer", minPoints: 600, maxPoints: 1000, color: "bg-green-500", description: "Advanced fitness techniques and abilities" },
    { level: 5, title: "Elite Trainer", minPoints: 1000, maxPoints: 1500, color: "bg-green-600", description: "High-level physical performance and knowledge" },
  ],
  "creativity": [
    { level: 1, title: "Creative Explorer", minPoints: 0, maxPoints: 100, color: "bg-purple-200", description: "Exploring creative possibilities" },
    { level: 2, title: "Artistic Adventurer", minPoints: 100, maxPoints: 300, color: "bg-purple-300", description: "Developing creative skills and techniques" },
    { level: 3, title: "Creative Practitioner", minPoints: 300, maxPoints: 600, color: "bg-purple-400", description: "Regular creative output and improved skills" },
    { level: 4, title: "Imagination Virtuoso", minPoints: 600, maxPoints: 1000, color: "bg-purple-500", description: "Advanced creative techniques and expression" },
    { level: 5, title: "Creative Maestro", minPoints: 1000, maxPoints: 1500, color: "bg-purple-600", description: "Master-level artistic and creative abilities" },
  ],
  "problem-solving": [
    { level: 1, title: "Puzzle Beginner", minPoints: 0, maxPoints: 100, color: "bg-amber-200", description: "Developing basic problem-solving skills" },
    { level: 2, title: "Logic Learner", minPoints: 100, maxPoints: 300, color: "bg-amber-300", description: "Building analytical thinking techniques" },
    { level: 3, title: "Problem Tackler", minPoints: 300, maxPoints: 600, color: "bg-amber-400", description: "Confident in solving varied challenges" },
    { level: 4, title: "Solution Strategist", minPoints: 600, maxPoints: 1000, color: "bg-amber-500", description: "Advanced problem-solving methods" },
    { level: 5, title: "Master Analyst", minPoints: 1000, maxPoints: 1500, color: "bg-amber-600", description: "Expert-level analytical and critical thinking" },
  ],
};

const pointValues = {
  "Easy": 10,
  "Medium": 20,
  "Hard": 30,
};

const getCategoryColor = (category: string) => {
  switch(category) {
    case "coding": return "text-blue-600 dark:text-blue-400";
    case "fitness": return "text-green-600 dark:text-green-400";
    case "creativity": return "text-purple-600 dark:text-purple-400";
    case "problem-solving": return "text-amber-600 dark:text-amber-400";
    default: return "";
  }
};

const DifficultyProgression = () => {
  const [userLevels, setUserLevels] = useState<Record<string, { points: number, level: number }>>({
    "coding": { points: 0, level: 1 },
    "fitness": { points: 0, level: 1 },
    "creativity": { points: 0, level: 1 },
    "problem-solving": { points: 0, level: 1 },
  });
  
  const [selectedCategory, setSelectedCategory] = useState<string>("coding");
  const [showingDetails, setShowingDetails] = useState(false);
  
  // Calculate initial levels from completed challenges
  useEffect(() => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    
    const completedChallengeKeys = Object.keys(completedChallenges).filter(
      key => !key.includes("-progress") && !key.includes("-verification")
    );
    
    // Initialize points per category
    const points: Record<string, number> = {
      "coding": 0,
      "fitness": 0,
      "creativity": 0,
      "problem-solving": 0,
    };
    
    // Calculate points for each completed challenge
    completedChallengeKeys.forEach(key => {
      // Extract category from key (format: "category-title")
      const [category] = key.split('-');
      
      if (points[category] !== undefined) {
        // Find the challenge to determine its difficulty
        const challengeTitle = key.substring(category.length + 1);
        const challenge = CHALLENGES.find(c => c.title === challengeTitle && c.category === category);
        
        if (challenge && challenge.difficulty) {
          points[category] += pointValues[challenge.difficulty as keyof typeof pointValues] || 0;
        }
      }
    });
    
    // Determine level for each category
    const levels: Record<string, { points: number, level: number }> = {};
    
    Object.keys(points).forEach(category => {
      const categoryPoints = points[category];
      const categoryLevels = skillLevels[category] || [];
      
      // Find current level based on points
      let currentLevel = 1;
      for (let i = categoryLevels.length - 1; i >= 0; i--) {
        if (categoryPoints >= categoryLevels[i].minPoints) {
          currentLevel = categoryLevels[i].level;
          break;
        }
      }
      
      levels[category] = {
        points: categoryPoints,
        level: currentLevel
      };
    });
    
    // Add tracking to localStorage if it doesn't exist
    const storedLevels = localStorage.getItem("userSkillLevels");
    if (!storedLevels) {
      localStorage.setItem("userSkillLevels", JSON.stringify(levels));
    } else {
      // Use stored levels but update with any new points
      const parsedLevels = JSON.parse(storedLevels);
      Object.keys(levels).forEach(category => {
        if (parsedLevels[category] && levels[category].points > parsedLevels[category].points) {
          parsedLevels[category] = levels[category];
        } else if (!parsedLevels[category]) {
          parsedLevels[category] = levels[category];
        }
      });
      localStorage.setItem("userSkillLevels", JSON.stringify(parsedLevels));
      setUserLevels(parsedLevels);
    }
    
    setUserLevels(storedLevels ? JSON.parse(storedLevels) : levels);
    
    // Listen for challenge completion to update levels
    const handleChallengeComplete = () => {
      const updatedLevels = JSON.parse(localStorage.getItem("userSkillLevels") || "{}");
      setUserLevels(updatedLevels);
    };
    
    window.addEventListener("challengeCompleted", handleChallengeComplete);
    window.addEventListener("challengeUpdated", handleChallengeComplete);
    
    return () => {
      window.removeEventListener("challengeCompleted", handleChallengeComplete);
      window.removeEventListener("challengeUpdated", handleChallengeComplete);
    };
  }, []);
  
  useEffect(() => {
    // Listen for challenge completion to update levels
    const handleChallengeComplete = (e: CustomEvent) => {
      const { category, title } = e.detail;
      if (category && title) {
        const challenge = CHALLENGES.find(c => c.title === title && c.category === category);
        
        if (challenge && challenge.difficulty) {
          const pointValue = pointValues[challenge.difficulty as keyof typeof pointValues] || 0;
          
          // Update user level for this category
          const updatedLevels = { ...userLevels };
          updatedLevels[category].points += pointValue;
          
          // Update level if needed
          const categoryLevels = skillLevels[category] || [];
          for (let i = categoryLevels.length - 1; i >= 0; i--) {
            if (updatedLevels[category].points >= categoryLevels[i].minPoints) {
              if (updatedLevels[category].level < categoryLevels[i].level) {
                // Level up!
                updatedLevels[category].level = categoryLevels[i].level;
                
                // Show level up toast
                // This would use the toast component, but we're keeping it simple
              }
              break;
            }
          }
          
          // Save updated levels
          localStorage.setItem("userSkillLevels", JSON.stringify(updatedLevels));
          setUserLevels(updatedLevels);
        }
      }
    };
    
    // Use type assertion for custom event
    window.addEventListener("challengeCompleted", handleChallengeComplete as EventListener);
    
    return () => {
      window.removeEventListener("challengeCompleted", handleChallengeComplete as EventListener);
    };
  }, [userLevels]);
  
  // Get current level info for selected category
  const currentUserLevel = userLevels[selectedCategory] || { points: 0, level: 1 };
  const categoryLevels = skillLevels[selectedCategory] || [];
  const currentLevelInfo = categoryLevels.find(l => l.level === currentUserLevel.level) || categoryLevels[0];
  const nextLevelInfo = categoryLevels.find(l => l.level === currentUserLevel.level + 1);
  
  // Calculate progress to next level
  let progressToNextLevel = 100; // Default to 100% if at max level
  let pointsToNextLevel = 0;
  
  if (nextLevelInfo) {
    const pointsInCurrentLevel = currentUserLevel.points - currentLevelInfo.minPoints;
    const totalPointsForLevel = nextLevelInfo.minPoints - currentLevelInfo.minPoints;
    progressToNextLevel = Math.min(Math.round((pointsInCurrentLevel / totalPointsForLevel) * 100), 100);
    pointsToNextLevel = nextLevelInfo.minPoints - currentUserLevel.points;
  }
  
  // Get recommended challenges for current level
  const getRecommendedChallenges = () => {
    const difficultyForLevel = currentUserLevel.level === 1 ? "Easy" : 
                              currentUserLevel.level === 2 ? "Easy" :
                              currentUserLevel.level === 3 ? "Medium" :
                              currentUserLevel.level === 4 ? "Medium" : "Hard";
    
    return CHALLENGES.filter(c => 
      c.category === selectedCategory && 
      c.difficulty === difficultyForLevel
    ).slice(0, 3);
  };
  
  const recommendedChallenges = getRecommendedChallenges();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mb-8"
    >
      <div className="flex items-center mb-4">
        <Trophy className="h-5 w-5 mr-2 text-primary" />
        <h2 className="text-xl font-bold">Skill Progression</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto"
          onClick={() => setShowingDetails(!showingDetails)}
        >
          {showingDetails ? "Hide Details" : "Show Details"}
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Your Skill Levels</CardTitle>
            <div className="flex gap-2">
              {Object.keys(userLevels).map(category => (
                <Button 
                  key={category}
                  size="sm"
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${selectedCategory === category ? "" : "hover:bg-accent"}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-end gap-4 mb-4">
                <h3 className={`text-2xl font-bold ${getCategoryColor(selectedCategory)}`}>
                  Level {currentUserLevel.level}
                </h3>
                <p className="text-lg font-medium mb-0.5">{currentLevelInfo.title}</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{currentUserLevel.points} points</span>
                  {nextLevelInfo && <span>{nextLevelInfo.minPoints} points</span>}
                </div>
                <Progress value={progressToNextLevel} className="h-2" />
                {nextLevelInfo ? (
                  <p className="text-sm text-muted-foreground">
                    {pointsToNextLevel} points needed for Level {nextLevelInfo.level}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">Maximum level reached!</p>
                )}
              </div>
              
              {showingDetails && (
                <div className="mt-6">
                  <h4 className="font-medium mb-3">All {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace("-", " ")} Levels</h4>
                  <div className="space-y-4">
                    {categoryLevels.map((level) => {
                      const isCurrentLevel = level.level === currentUserLevel.level;
                      const isLocked = level.level > currentUserLevel.level;
                      
                      return (
                        <div 
                          key={level.level}
                          className={`p-3 rounded-lg border ${
                            isCurrentLevel 
                              ? 'border-primary/50 bg-primary/5' 
                              : 'border-border'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Badge className={level.color + " text-background"}>
                                Level {level.level}
                              </Badge>
                              <h4 className="font-medium ml-3">{level.title}</h4>
                              {isLocked && <Lock className="h-3.5 w-3.5 ml-2 text-muted-foreground" />}
                              {isCurrentLevel && <TrendingUp className="h-3.5 w-3.5 ml-2 text-primary" />}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {level.minPoints}+ points
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{level.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium mb-4">Recommended Challenges</h3>
              {recommendedChallenges.length > 0 ? (
                <div className="space-y-3">
                  {recommendedChallenges.map((challenge) => {
                    // Check if completed
                    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
                    const key = `${challenge.category}-${challenge.title}`;
                    const isCompleted = !!completedChallenges[key];
                    
                    return (
                      <TooltipProvider key={challenge.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className={`p-3 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer ${isCompleted ? 'border-green-500/30 bg-green-500/5' : 'border-border'}`}>
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{challenge.title}</h4>
                                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                    {challenge.description}
                                  </p>
                                </div>
                                {isCompleted ? (
                                  <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                                    Completed
                                  </Badge>
                                ) : (
                                  <Badge variant="outline">
                                    {challenge.difficulty}
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                                <ArrowUp className="h-3 w-3 mr-1" />
                                <span>+{pointValues[challenge.difficulty as keyof typeof pointValues]} points</span>
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to view challenge details</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No recommended challenges available.</p>
              )}
              
              {nextLevelInfo && (
                <div className="mt-6 p-4 border border-dashed rounded-lg bg-primary/5">
                  <div className="flex items-center">
                    <Unlock className="h-4 w-4 mr-2 text-primary" />
                    <h4 className="font-medium">Next Level: {nextLevelInfo.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Complete more {selectedCategory.replace("-", " ")} challenges to reach Level {nextLevelInfo.level}!
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DifficultyProgression;
