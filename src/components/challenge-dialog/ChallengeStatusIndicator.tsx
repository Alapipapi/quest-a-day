
import { Check, ChevronRight } from "lucide-react";

interface ChallengeStatusIndicatorProps {
  isCompleted: boolean;
  title: string;
}

const ChallengeStatusIndicator = ({ isCompleted, title }: ChallengeStatusIndicatorProps) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 first:rounded-t-md last:rounded-b-md">
      <div 
        className={`h-6 w-6 rounded-full flex items-center justify-center border ${
          isCompleted 
            ? 'bg-[hsl(var(--completed-bg))] border-[hsl(var(--completed-text))]' 
            : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        {isCompleted ? (
          <Check className="h-4 w-4 text-[hsl(var(--completed-text))]" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-400" />
        )}
      </div>
      <span className={`flex-1 font-medium ${
        isCompleted ? 'text-[hsl(var(--completed-text))]' : 'text-gray-700 dark:text-gray-200'
      }`}>
        {title}
      </span>
    </div>
  );
};

export default ChallengeStatusIndicator;
