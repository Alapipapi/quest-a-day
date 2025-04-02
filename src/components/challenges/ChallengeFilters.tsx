
import { motion } from "framer-motion";
import ChallengeSearch from "./ChallengeSearch";
import DifficultyFilters from "./DifficultyFilters";

interface ChallengeFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  difficultyFilter: string;
  setDifficultyFilter: (difficulty: string) => void;
  difficulties: { id: string; label: string }[];
}

const ChallengeFilters = ({
  searchQuery,
  setSearchQuery,
  difficultyFilter,
  setDifficultyFilter,
  difficulties
}: ChallengeFiltersProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-12 space-y-6"
    >
      <ChallengeSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="space-y-4">
        <DifficultyFilters
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          difficulties={difficulties}
        />
      </div>
    </motion.div>
  );
};

export default ChallengeFilters;
