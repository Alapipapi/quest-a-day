
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
    title: "Task Management System",
    description: "Build a full-stack task management application with user authentication, task creation, categories, and real-time updates.",
    category: "coding",
    difficulty: "Hard",
    timeEstimate: "4-5 hours",
  },
  {
    id: 2,
    title: "Workout Tracking System",
    description: "Create a fitness tracking system that logs exercises, sets, reps, and provides progress visualization with charts.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 3,
    title: "Digital Art Portfolio System",
    description: "Develop a portfolio system to showcase artwork with categories, tags, and a responsive gallery layout.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "3-4 hours",
  },
  {
    id: 4,
    title: "Algorithm Visualization System",
    description: "Build an interactive system that visualizes sorting algorithms and data structures in real-time with step-by-step explanations.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "4-5 hours",
  }
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
