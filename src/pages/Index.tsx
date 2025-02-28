
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ChallengeCard from "@/components/ChallengeCard";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

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
  {
    id: 5,
    title: "Build a Todo List App",
    description: "Create a simple todo list application with React and local storage for data persistence.",
    category: "coding",
    difficulty: "Easy",
    timeEstimate: "1-2 hours",
  },
  {
    id: 6,
    title: "Yoga Flow Session",
    description: "Complete a beginner-friendly yoga flow session focusing on flexibility and mindfulness.",
    category: "fitness",
    difficulty: "Easy",
    timeEstimate: "20 minutes",
  },
  {
    id: 7,
    title: "Digital Art Creation",
    description: "Create a digital artwork using basic tools in a drawing application of your choice.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "1 hour",
  },
  {
    id: 8,
    title: "Build a Chat Interface",
    description: "Create a responsive chat interface using React components and CSS Grid/Flexbox.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 9,
    title: "Core Strength Workout",
    description: "Complete a core-focused workout routine to build strength and stability.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "25 minutes",
  },
  {
    id: 10,
    title: "Solve Sudoku Puzzle",
    description: "Complete a medium-difficulty Sudoku puzzle while practicing logical thinking.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "30 minutes",
  },
  {
    id: 11,
    title: "Build an API Client",
    description: "Create a React application that fetches and displays data from a public API.",
    category: "coding",
    difficulty: "Hard",
    timeEstimate: "3-4 hours",
  },
  {
    id: 12,
    title: "Watercolor Painting",
    description: "Create a simple landscape painting using basic watercolor techniques.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "1-2 hours",
  },
  {
    id: 13,
    title: "Algorithm Challenge",
    description: "Solve three algorithmic problems focusing on arrays and string manipulation.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "1 hour",
  },
  {
    id: 14,
    title: "Endurance Running",
    description: "Complete a progressive running session with proper warm-up and cool-down.",
    category: "fitness",
    difficulty: "Hard",
    timeEstimate: "45 minutes",
  },
  {
    id: 15,
    title: "Build a Portfolio Website",
    description: "Create a personal portfolio website using React and modern design principles.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "4-6 hours",
  },
  {
    id: 16,
    title: "Morning Yoga Flow",
    description: "Start your day with an energizing morning yoga routine focusing on stretching and breathing.",
    category: "fitness",
    difficulty: "Easy",
    timeEstimate: "20 minutes",
  },
  {
    id: 17,
    title: "Abstract Art Creation",
    description: "Create an abstract artwork using any medium, focusing on shapes, colors, and composition.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "1-2 hours",
  },
  {
    id: 18,
    title: "Chess Puzzle Challenge",
    description: "Solve a series of chess puzzles to improve tactical thinking and pattern recognition.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "45 minutes",
  },
  {
    id: 19,
    title: "Mobile App UI Design",
    description: "Design a mobile app interface using Figma or similar design tools.",
    category: "creativity",
    difficulty: "Hard",
    timeEstimate: "3-4 hours",
  },
  {
    id: 20,
    title: "Database Design Challenge",
    description: "Design a normalized database schema for a social media application.",
    category: "coding",
    difficulty: "Hard",
    timeEstimate: "2-3 hours",
  },
  {
    id: 21,
    title: "Interval Sprint Training",
    description: "Complete a high-intensity sprint workout with proper warm-up and cool-down.",
    category: "fitness",
    difficulty: "Hard",
    timeEstimate: "40 minutes",
  },
  {
    id: 22,
    title: "Logic Grid Puzzle",
    description: "Solve a complex logic grid puzzle requiring deductive reasoning and systematic thinking.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "1 hour",
  },
  {
    id: 23,
    title: "Nature Photography",
    description: "Capture and edit three nature photographs focusing on composition and lighting.",
    category: "creativity",
    difficulty: "Easy",
    timeEstimate: "1-2 hours",
  },
  {
    id: 24,
    title: "API Documentation",
    description: "Write comprehensive documentation for a RESTful API using OpenAPI/Swagger.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 25,
    title: "Master React Hooks",
    description: "Build a small application that demonstrates proficiency with various React hooks.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "3-4 hours",
  },
  {
    id: 26,
    title: "Global State Management",
    description: "Implement a global state management solution in a React application.",
    category: "coding",
    difficulty: "Hard",
    timeEstimate: "4-5 hours",
  },
  {
    id: 27,
    title: "Full Body Strength Training",
    description: "Complete a comprehensive strength training workout targeting all major muscle groups.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "45 minutes",
  },
  {
    id: 28,
    title: "Digital Music Production",
    description: "Create a short musical piece using digital audio workstation software.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 29,
    title: "Data Structures Mastery",
    description: "Implement and use various data structures to solve algorithmic problems.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "3-4 hours",
  },
  {
    id: 30,
    title: "Data Analysis Challenge",
    description: "Analyze a dataset to clean data, create visualizations, and derive meaningful insights.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(CHALLENGES);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [completedChallengesCount, setCompletedChallengesCount] = useState(0);

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
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    setCompletedChallengesCount(
      Object.keys(completedChallenges).filter(key => !key.includes("-progress")).length
    );
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

        {completedChallengesCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md p-4 text-center"
          >
            <p className="text-gray-700 dark:text-gray-200">
              You've completed <span className="font-bold text-primary">{completedChallengesCount}</span> {completedChallengesCount === 1 ? 'challenge' : 'challenges'} so far! 
              <span className="ml-2">🎉</span>
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 space-y-6"
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search challenges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/80 dark:bg-gray-800/80 dark:text-white backdrop-blur-sm"
            />
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty.id}
                  onClick={() => setDifficultyFilter(difficulty.id)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    difficultyFilter === difficulty.id
                      ? "bg-secondary text-secondary-foreground shadow-lg"
                      : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md"
                  }`}
                >
                  {difficulty.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} {...challenge} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No challenges found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </motion.div>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredChallenges.length} {filteredChallenges.length === 1 ? 'challenge' : 'challenges'}
        </div>
      </div>
    </div>
  );
};

export default Index;
