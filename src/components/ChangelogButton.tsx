
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ChangelogButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="fixed top-4 left-4 z-50"
          >
            <Link to="/changelog">
              <FileText className="h-5 w-5" />
              <span className="sr-only">Changelog</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View Changelog</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ChangelogButton;
