
import { DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

interface ChallengeDialogHeaderProps {
  title: string;
}

const ChallengeDialogHeader = ({ title }: ChallengeDialogHeaderProps) => {
  return (
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
      <DialogDescription className="text-base mt-2">
        Complete the challenge
      </DialogDescription>
    </DialogHeader>
  );
};

export default ChallengeDialogHeader;
