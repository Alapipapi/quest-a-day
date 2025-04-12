
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CHALLENGES } from "@/data/challengeData";
import ChallengeCard from "@/components/ChallengeCard";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Categories = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("coding");
  
  // Group challenges by category
  const categories = {
    coding: CHALLENGES.filter(challenge => challenge.category === "coding"),
    fitness: CHALLENGES.filter(challenge => challenge.category === "fitness"),
    creativity: CHALLENGES.filter(challenge => challenge.category === "creativity"),
    "problem-solving": CHALLENGES.filter(challenge => challenge.category === "problem-solving")
  };
  
  // Get category colors
  const categoryColors: Record<string, string> = {
    coding: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10",
    fitness: "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/10",
    creativity: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/10",
    "problem-solving": "from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/10",
  };
  
  const getCategoryTitle = (category: string) => {
    switch(category) {
      case "coding": return "Coding Challenges";
      case "fitness": return "Fitness Challenges";
      case "creativity": return "Creativity Challenges";
      case "problem-solving": return "Problem Solving Challenges";
      default: return "Challenges";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeSwitcher />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <Button variant="outline" onClick={() => navigate('/')} className="mr-4">
            <ChevronLeft className="h-4 w-4 mr-2" /> Back
          </Button>
          <h1 className="text-2xl font-bold text-center">Browse by Category</h1>
        </div>
        
        <Tabs defaultValue="coding" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="coding">Coding</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="creativity">Creativity</TabsTrigger>
            <TabsTrigger value="problem-solving">Problem Solving</TabsTrigger>
          </TabsList>
          
          {Object.entries(categories).map(([category, challenges]) => (
            <TabsContent key={category} value={category}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-6 mb-8 rounded-lg bg-gradient-to-r ${categoryColors[category]} border border-${category === "coding" ? "blue" : category === "fitness" ? "green" : category === "creativity" ? "purple" : "amber"}-200 dark:border-${category === "coding" ? "blue" : category === "fitness" ? "green" : category === "creativity" ? "purple" : "amber"}-800/30`}>
                  <h2 className="text-xl font-bold mb-2">{getCategoryTitle(category)}</h2>
                  <p className="text-muted-foreground">
                    {category === "coding" 
                      ? "Enhance your programming skills with these coding challenges."
                      : category === "fitness"
                      ? "Stay active and healthy with these fitness activities." 
                      : category === "creativity"
                      ? "Express yourself and develop creative skills with these challenges."
                      : "Sharpen your mind with these problem-solving exercises."}
                  </p>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {challenges.map(challenge => (
                    <ChallengeCard key={challenge.id} {...challenge} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
