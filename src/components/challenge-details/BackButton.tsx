
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <Button variant="outline" onClick={onClick}>
      <ChevronLeft className="h-4 w-4 mr-2" /> Back
    </Button>
  );
};

export default BackButton;
