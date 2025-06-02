
import { useEffect, useState } from "react";
import { 
  TrendingUp, 
  Activity, 
  Lightbulb, 
  AlertTriangle,
  Clock
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ChallengeDifficultyProps {
  difficulty: string;
  timeEstimate: string;
}

const ChallengeDifficulty = ({ difficulty, timeEstimate }: ChallengeDifficultyProps) => {
  const [color, setColor] = useState("text-gray-500");
  const [icon, setIcon] = useState<React.ReactNode>(<TrendingUp className="h-5 w-5" />);

  useEffect(() => {
    switch (difficulty) {
      case "Easy":
        setColor("text-green-500");
        setIcon(<Lightbulb className="h-5 w-5" />);
        break;
      case "Medium":
        setColor("text-amber-500");
        setIcon(<Activity className="h-5 w-5" />);
        break;
      case "Hard":
        setColor("text-red-500");
        setIcon(<AlertTriangle className="h-5 w-5" />);
        break;
      default:
        setColor("text-blue-500");
        setIcon(<TrendingUp className="h-5 w-5" />);
    }
  }, [difficulty]);

  return (
    <div className="flex items-center gap-6 mb-6 p-4 bg-background/50 rounded-lg border">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2">
            <span className={color}>{icon}</span>
            <div>
              <p className="text-sm font-medium">Difficulty</p>
              <p className={`text-sm font-bold ${color}`}>{difficulty}</p>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Challenge difficulty level</p>
        </TooltipContent>
      </Tooltip>

      <div className="w-px h-8 bg-border"></div>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium">Time Estimate</p>
              <p className="text-sm font-bold">{timeEstimate}</p>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Estimated time to complete</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ChallengeDifficulty;
