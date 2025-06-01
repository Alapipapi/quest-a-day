
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import Hero from "@/components/Hero";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import CompletionSummary from "@/components/challenges/CompletionSummary";
import ChallengeGrid from "@/components/challenges/ChallengeGrid";
import ResultsCount from "@/components/challenges/ResultsCount";
import ScheduledChallenges from "@/components/challenges/ScheduledChallenges";
import DifficultyFilters from "@/components/challenges/DifficultyFilters";
import FeaturedChallenge from "@/components/challenges/FeaturedChallenge";
import FavoriteChallenges from "@/components/challenges/FavoriteChallenges";
import ChallengeOfTheDay from "@/components/challenges/ChallengeOfTheDay";
import ChallengeStatistics from "@/components/challenges/ChallengeStatistics";
import ChallengeRecommendations from "@/components/challenges/ChallengeRecommendations";
import AchievementBadges from "@/components/challenges/AchievementBadges";
import EnhancedSearch from "@/components/challenges/EnhancedSearch";
import QuickActions from "@/components/challenges/QuickActions";
import { Challenge, CHALLENGES } from "@/data/challengeData";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
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
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((challenge) => selectedCategories.includes(challenge.category));
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
  }, [selectedCategory, selectedCategories, searchQuery, difficultyFilter]);

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

  const difficulties = [
    { id: "all", label: "All Difficulties" },
    { id: "Easy", label: "Easy" },
    { id: "Medium", label: "Medium" },
    { id: "Hard", label: "Hard" },
  ];

  const handleSearchFocus = () => {
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    searchInput?.focus();
  };

  const handleFilterOpen = () => {
    // This would open an advanced filter modal
    console.log("Open advanced filters");
  };

  const handleScheduleOpen = () => {
    // This would open a schedule modal
    console.log("Open schedule dialog");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeSwitcher />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero />

        <CompletionSummary completedChallengesCount={completedChallengesCount} />
        
        <AchievementBadges />
        
        <ChallengeOfTheDay />
        
        <FeaturedChallenge />
        
        <ScheduledChallenges />

        <ChallengeRecommendations />
        
        <FavoriteChallenges />

        <ChallengeStatistics />
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">All Challenges</h2>
          <Link to="/categories">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <LayoutGrid className="h-4 w-4" />
              Browse by Category
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 space-y-6"
        >
          <EnhancedSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            onFocus={handleSearchFocus}
          />

          <div className="space-y-4">
            <DifficultyFilters
              difficultyFilter={difficultyFilter}
              setDifficultyFilter={setDifficultyFilter}
              difficulties={difficulties}
            />
          </div>
        </motion.div>

        <ChallengeGrid filteredChallenges={filteredChallenges} />

        <ResultsCount count={filteredChallenges.length} />
      </div>

      <QuickActions
        onSearchFocus={handleSearchFocus}
        onFilterOpen={handleFilterOpen}
        onScheduleOpen={handleScheduleOpen}
      />
    </div>
  );
};

export default Index;
