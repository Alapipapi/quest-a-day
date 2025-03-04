import { motion } from "framer-motion";
import ChallengeCard from "@/components/ChallengeCard";
import { Challenge } from "@/data/types/challenge";

interface ChallengeGridProps {
  filteredChallenges: Challenge[];
}

const ChallengeGrid = ({ filteredChallenges }: ChallengeGridProps) => {
  return (
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
  );
};

export default ChallengeGrid;
