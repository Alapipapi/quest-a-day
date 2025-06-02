
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
import EnhancedChallengeFilters from "@/components/challenges/EnhancedChallengeFilters";
import StreakCounter from "@/components/challenges/StreakCounter";
import QuickActionsPanel from "@/components/challenges/QuickActionsPanel";
import ProgressAnalytics from "@/components/challenges/ProgressAnalytics";
import { Challenge, CHALLENGES } from "@/data/challengeData";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(CHALLENGES);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [showCompleted, setShowCompleted] = useState<boolean>(true);
  const [completedChallengesCount, setCompletedChallengesCount] = useState(0);

  // Function to check for completed challenges and update count
  const updateCompletedChallenges = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    
    // Filter out progress tracking keys (those with -progress suffix)
    const completedKeys = Object.keys(completedChallenges).filter(
      key => !key.includes("-progress") && !key.includes("-verification") && completedChallenges[key] === true
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
    
    if (!showCompleted) {
      const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
      filtered = filtered.filter((challenge) => {
        const key = `${challenge.category}-${challenge.title}`;
        return !completedChallenges[key];
      });
    }
    
    if (searchQuery) {
      filtered = filtered.filter((challenge) => 
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "difficulty":
        const difficultyOrder = { "Easy": 1, "Medium": 2, "Hard": 3 };
        filtered.sort((a, b) => difficultyOrder[a.difficulty as keyof typeof difficultyOrder] - difficultyOrder[b.difficulty as keyof typeof difficultyOrder]);
        break;
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "timeEstimate":
        filtered.sort((a, b) => {
          const getMinutes = (time: string) => {
            const match = time.match(/(\d+)/);
            return match ? parseInt(match[1]) : 0;
          };
          return getMinutes(a.timeEstimate) - getMinutes(b.timeEstimate);
        });
        break;
      default: // newest
        break;
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
  }, [selectedCategory, searchQuery, difficultyFilter, sortBy, showCompleted]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeSwitcher />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero />

        <div className="space-y-8">
          <CompletionSummary completedChallengesCount={completedChallengesCount} />
          
          <StreakCounter />
          
          <QuickActionsPanel />
          
          <ChallengeOfTheDay />
          
          <FeaturedChallenge />
          
          <ScheduledChallenges />

          <ChallengeRecommendations />
          
          <FavoriteChallenges />

          <ProgressAnalytics />

          <ChallengeStatistics />
        </div>
        
        <div className="flex justify-between items-center mb-6 mt-12">
          <h2 className="text-xl font-bold">All Challenges</h2>
          <Link to="/categories">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <LayoutGrid className="h-4 w-4" />
              Browse by Category
            </Button>
          </Link>
        </div>

        <EnhancedChallengeFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          difficulties={difficulties}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
        />

        <ChallengeGrid filteredChallenges={filteredChallenges} />

        <ResultsCount count={filteredChallenges.length} />
      </div>
    </div>
  );
};

export default Index;
