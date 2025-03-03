
import { motion } from "framer-motion";

interface CompletionSummaryProps {
  completedChallengesCount: number;
}

const CompletionSummary = ({ completedChallengesCount }: CompletionSummaryProps) => {
  if (completedChallengesCount === 0) return null;
  
  return (
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
  );
};

export default CompletionSummary;
