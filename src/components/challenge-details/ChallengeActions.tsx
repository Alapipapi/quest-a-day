
import { Button } from "@/components/ui/button";
import { Calendar, Share2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ChallengeActionsProps {
  onSchedule: () => void;
  title: string | undefined;
}

const ChallengeActions = ({ onSchedule, title }: ChallengeActionsProps) => {
  const handleShare = () => {
    if (navigator.share && title) {
      navigator.share({
        title: `Daily Challenge: ${title}`,
        text: `Check out this challenge: ${title}`,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Challenge link copied to clipboard",
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={onSchedule}>
        <Calendar className="h-4 w-4 mr-1" />
        Schedule
      </Button>
      <Button variant="outline" size="sm" onClick={handleShare}>
        <Share2 className="h-4 w-4 mr-1" />
        Share
      </Button>
    </div>
  );
};

export default ChallengeActions;
