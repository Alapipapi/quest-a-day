
import { Button } from "../ui/button";

interface ChallengeDialogFooterProps {
  isCompleted: boolean;
  onClose: () => void;
  onViewDetails: () => void;
}

const ChallengeDialogFooter = ({ 
  isCompleted, 
  onClose, 
  onViewDetails 
}: ChallengeDialogFooterProps) => {
  return (
    <div className="mt-6 flex justify-between items-center">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {isCompleted ? "Challenge completed" : "Challenge in progress"}
      </span>
      <div className="flex gap-2">
        <Button 
          variant="outline"
          onClick={onClose}
        >
          Close
        </Button>
        <Button 
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ChallengeDialogFooter;
