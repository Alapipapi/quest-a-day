
import { motion } from "framer-motion";

interface DifficultyFiltersProps {
  difficultyFilter: string;
  setDifficultyFilter: (difficulty: string) => void;
  difficulties: { id: string; label: string }[];
}

const DifficultyFilters = ({ 
  difficultyFilter, 
  setDifficultyFilter, 
  difficulties 
}: DifficultyFiltersProps) => {
  return (
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
  );
};

export default DifficultyFilters;
