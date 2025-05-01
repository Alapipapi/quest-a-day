
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookmarkButton from "./BookmarkButton";
import ChallengeSharingOptions from "../challenges/ChallengeSharingOptions";

interface ChallengeActionsProps {
  onSchedule: () => void;
  title?: string;
  challengeId?: number;
}

const ChallengeActions = ({ 
  onSchedule, 
  title = "",
  challengeId 
}: ChallengeActionsProps) => {
  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        size="icon"
        onClick={onSchedule}
      >
        <CalendarDays className="h-4 w-4" />
      </Button>
      
      <BookmarkButton title={title} challengeId={challengeId} />
      
      {title && <ChallengeSharingOptions challengeTitle={title} challengeCategory="coding" />}
    </div>
  );
};

export default ChallengeActions;
