
import { Trophy } from "lucide-react";

interface ChallengeHeaderProps {
  title: string;
  category: string | undefined;
  isCompleted: boolean;
}

const ChallengeHeader = ({ title, category, isCompleted }: ChallengeHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/0 p-6 sm:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
        {isCompleted && (
          <div className="flex items-center completed-badge px-3 py-1 rounded-full">
            <Trophy className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Completed</span>
          </div>
        )}
      </div>
      <p className="mt-2 text-muted-foreground capitalize">{category} Challenge</p>
    </div>
  );
};

export default ChallengeHeader;
