
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

  // Function to check for completed challenges and update count
  const updateCompletedChallenges = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    
    // Filter out progress tracking keys (those with -progress suffix)
    const completedKeys = Object.keys(completedChallenges).filter(
      key => !key.includes("-progress") && !key.includes("-verification")
    );
    
    setCompletedChallengesCount(completedKeys.length);
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

    // Update completed challenges count
    updateCompletedChallenges();
    
    // Add event listener for challenge updates
    const handleChallengeUpdate = () => {
      updateCompletedChallenges();
    };
    
    window.addEventListener("challengeUpdated", handleChallengeUpdate);
    
    return () => {
      window.removeEventListener("challengeUpdated", handleChallengeUpdate);
    };
  }, [selectedCategory, searchQuery, difficultyFilter]);

  // Add a manual listener for storage events
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "completedChallenges") {
        updateCompletedChallenges();
        // Dispatch a custom event for other components to update
        window.dispatchEvent(new Event("challengeUpdated"));
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
