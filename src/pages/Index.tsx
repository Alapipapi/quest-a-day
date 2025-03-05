
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import CompletionSummary from "@/components/challenges/CompletionSummary";
import ChallengeFilters from "@/components/challenges/ChallengeFilters";
import ChallengeGrid from "@/components/challenges/ChallengeGrid";
import ResultsCount from "@/components/challenges/ResultsCount";
import { Challenge, CHALLENGES } from "@/data/challengeData";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(CHALLENGES);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [completedChallengesCount, setCompletedChallengesCount] = useState(0);

  // Count completed challenges in both formats
  const countCompletedChallenges = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    // Count completed challenges - filter out progress and verification entries
    const count = Object.keys(completedChallenges).filter(key => 
      !key.includes("-progress") && 
      !key.includes("-verification")
    ).length;
    
    setCompletedChallengesCount(count);
    console.log(`Found ${count} completed challenges`);
  };

  useEffect(() => {
    let filtered = CHALLENGES;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter((challenge) => challenge.category === selectedCategory);
    }
    
    if (difficultyFilter !== "all") {
      filtered = filtered.filter((challenge) => challenge.difficulty === difficultyFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter((challenge) => 
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredChallenges(filtered);

    // Get completed challenges
    countCompletedChallenges();
    
    // Listen for storage changes
    const handleStorageChange = () => {
      countCompletedChallenges();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('challengeStatusChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('challengeStatusChanged', handleStorageChange);
    };
  }, [selectedCategory, searchQuery, difficultyFilter]);

  const categories = [
    { id: "all", label: "All Challenges" },
    { id: "coding", label: "Coding" },
    { id: "fitness", label: "Fitness" },
    { id: "creativity", label: "Creativity" },
    { id: "problem-solving", label: "Problem Solving" },
  ];

  const difficulties = [
    { id: "all", label: "All Difficulties" },
    { id: "Easy", label: "Easy" },
    { id: "Medium", label: "Medium" },
    { id: "Hard", label: "Hard" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeSwitcher />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero />

        <CompletionSummary completedChallengesCount={completedChallengesCount} />

        <ChallengeFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          categories={categories}
          difficulties={difficulties}
        />

        <ChallengeGrid filteredChallenges={filteredChallenges} />

        <ResultsCount count={filteredChallenges.length} />
      </div>
    </div>
  );
};

export default Index;
