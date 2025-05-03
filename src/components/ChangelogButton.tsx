
import { FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ChangelogButton = () => {
  const location = useLocation();
  
  // Don't render the button if we're already on the changelog page
  if (location.pathname === "/changelog") {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm shadow-sm"
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
