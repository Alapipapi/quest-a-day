
import { motion } from "framer-motion";
import CategoryBadge from "./CategoryBadge";

interface ChallengeCardProps {
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
}

const ChallengeCard = ({
  title,
  description,
  category,
  difficulty,
  timeEstimate,
}: ChallengeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-2xl bg-white/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <CategoryBadge category={category} className="mb-4" />
        
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full" style={{
              backgroundColor: 
                difficulty === "Easy" ? "#4FD1C5" :
                difficulty === "Medium" ? "#F6AD55" : "#FC8181"
            }} />
            {difficulty}
          </span>
          <span>{timeEstimate}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
