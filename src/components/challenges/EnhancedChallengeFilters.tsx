
import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, X, Calendar, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import ChallengeSearch from "./ChallengeSearch";
import DifficultyFilters from "./DifficultyFilters";

interface EnhancedChallengeFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  difficultyFilter: string;
  setDifficultyFilter: (difficulty: string) => void;
  difficulties: { id: string; label: string }[];
  sortBy: string;
  setSortBy: (sort: string) => void;
  showCompleted: boolean;
  setShowCompleted: (show: boolean) => void;
}

const EnhancedChallengeFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  difficultyFilter,
  setDifficultyFilter,
  difficulties,
  sortBy,
  setSortBy,
  showCompleted,
  setShowCompleted
}: EnhancedChallengeFiltersProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const categories = [
    { id: "all", label: "All Categories", color: "bg-gray-100 text-gray-800" },
    { id: "coding", label: "Coding", color: "bg-blue-100 text-blue-800" },
    { id: "fitness", label: "Fitness", color: "bg-green-100 text-green-800" },
    { id: "creativity", label: "Creativity", color: "bg-purple-100 text-purple-800" },
    { id: "problem-solving", label: "Problem Solving", color: "bg-orange-100 text-orange-800" }
  ];

  const sortOptions = [
    { id: "difficulty", label: "By Difficulty" },
    { id: "title", label: "Alphabetical" },
    { id: "timeEstimate", label: "By Duration" }
  ];

  const activeFilters = [
    selectedCategory !== "all" && { type: "category", value: selectedCategory },
    difficultyFilter !== "all" && { type: "difficulty", value: difficultyFilter },
    !showCompleted && { type: "status", value: "incomplete only" }
  ].filter(Boolean);

  const clearFilter = (type: string) => {
    switch (type) {
      case "category":
        setSelectedCategory("all");
        break;
      case "difficulty":
        setDifficultyFilter("all");
        break;
      case "status":
        setShowCompleted(true);
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <ChallengeSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "" : "hover:bg-muted"}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <DifficultyFilters
              difficultyFilter={difficultyFilter}
              setDifficultyFilter={setDifficultyFilter}
              difficulties={difficulties}
            />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Advanced
            </Button>
          </div>

          {showAdvanced && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t space-y-4"
            >
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 border rounded-md text-sm bg-background"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={showCompleted}
                    onChange={(e) => setShowCompleted(e.target.checked)}
                    className="rounded"
                  />
                  Show completed challenges
                </label>
              </div>
            </motion.div>
          )}

          {activeFilters.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {activeFilters.map((filter: any, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {filter.value}
                    <X
                      className="h-3 w-3 cursor-pointer hover:text-destructive"
                      onClick={() => clearFilter(filter.type)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedChallengeFilters;
