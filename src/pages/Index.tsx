
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ChallengeCard from "@/components/ChallengeCard";
import { motion } from "framer-motion";

interface Challenge {
  id: number;
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
}

const CHALLENGES: Challenge[] = [
  {
    id: 1,
    title: "Build a Weather App",
    description: "Create a simple weather application that fetches and displays current weather data for a given location.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 2,
    title: "30-Minute HIIT Workout",
    description: "Complete a high-intensity interval training workout focusing on full-body exercises.",
    category: "fitness",
    difficulty: "Hard",
    timeEstimate: "30 minutes",
  },
  {
    id: 3,
    title: "Daily Sketch Challenge",
    description: "Draw an object from your surroundings using only basic shapes and lines.",
    category: "creativity",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
  },
  {
    id: 4,
    title: "Logic Puzzle Master",
    description: "Solve a complex logic puzzle involving pattern recognition and deductive reasoning.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "45 minutes",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(CHALLENGES);

  useEffect(() => {
    setFilteredChallenges(
      selectedCategory === "all"
        ? CHALLENGES
        : CHALLENGES.filter((challenge) => challenge.category === selectedCategory)
    );
  }, [selectedCategory]);

  const categories = [
    { id: "all", label: "All Challenges" },
    { id: "coding", label: "Coding" },
    { id: "fitness", label: "Fitness" },
    { id: "creativity", label: "Creativity" },
    { id: "problem-solving", label: "Problem Solving" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white/80 text-gray-600 hover:bg-white hover:shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} {...challenge} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
