
import { Badge } from "@/components/ui/badge";
import { Zap, ZapOff } from "lucide-react";

interface ChallengeDifficultyProps {
  difficulty: "Easy" | "Medium" | "Hard";
  showIcon?: boolean;
}

const ChallengeDifficulty = ({ difficulty, showIcon = true }: ChallengeDifficultyProps) => {
  const getDifficultyConfig = (level: string) => {
    switch (level) {
      case "Easy":
        return {
          color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-800",
          bars: 1,
        };
      case "Medium":
        return {
          color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800",
          bars: 2,
        };
      case "Hard":
        return {
          color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-800",
          bars: 3,
        };
      default:
        return {
          color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 border-gray-200 dark:border-gray-800",
          bars: 1,
        };
    }
  };

  const config = getDifficultyConfig(difficulty);

  return (
    <Badge variant="outline" className={`${config.color} font-medium flex items-center gap-1.5`}>
      {showIcon && (
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className={`w-1 h-3 rounded-full ${
                i < config.bars
                  ? "bg-current opacity-100"
                  : "bg-current opacity-20"
              }`}
            />
          ))}
        </div>
      )}
      {difficulty}
    </Badge>
  );
};

export default ChallengeDifficulty;
