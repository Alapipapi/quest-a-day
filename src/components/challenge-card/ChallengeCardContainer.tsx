
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChallengeCardContainerProps {
  children: ReactNode;
  onClick: () => void;
  isCompleted?: boolean;
  progress?: number;
}

const ChallengeCardContainer = ({ 
  children, 
  onClick, 
  isCompleted = false,
  progress = 0 
}: ChallengeCardContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-2xl bg-white/40 dark:bg-gray-800/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      {progress > 0 && progress < 100 && (
        <div 
          className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      )}
      {isCompleted && (
        <div className="absolute bottom-0 left-0 h-1 w-full bg-[hsl(var(--completed-bg))]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-700/50 dark:to-gray-700/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default ChallengeCardContainer;
