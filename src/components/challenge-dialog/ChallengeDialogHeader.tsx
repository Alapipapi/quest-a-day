
import { DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

interface ChallengeDialogHeaderProps {
  title: string;
  category?: string;
  difficulty?: string;
}

const ChallengeDialogHeader = ({ title, category, difficulty }: ChallengeDialogHeaderProps) => {
  return (
    <DialogHeader className="pb-2 border-b border-border/30">
      <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
      <DialogDescription className="text-base mt-2">
        {category && difficulty 
          ? `Complete this ${difficulty.toLowerCase()} ${category} challenge`
          : "Complete the challenge"}
      </DialogDescription>
    </DialogHeader>
  );
};

export default ChallengeDialogHeader;
