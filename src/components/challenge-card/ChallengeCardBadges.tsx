
import { Trophy } from "lucide-react";
import CategoryBadge from "../CategoryBadge";

interface ChallengeCardBadgesProps {
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  isCompleted: boolean;
}

const ChallengeCardBadges = ({ category, isCompleted }: ChallengeCardBadgesProps) => {
  return (
    <div className="flex justify-between">
      {category && <CategoryBadge category={category} className="mb-4" />}
      {isCompleted && (
        <div className="flex items-center completed-badge px-2 py-1 rounded-full">
          <Trophy className="h-3 w-3 mr-1" />
          <span className="text-xs font-medium">Completed</span>
        </div>
      )}
    </div>
  );
};

export default ChallengeCardBadges;
