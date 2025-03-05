
import { ExternalLink } from "lucide-react";
import { Resource } from "@/data/types/common";

interface ChallengeResourcesListProps {
  resources?: Resource[];
  handleResourceClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const ChallengeResourcesList = ({ resources, handleResourceClick }: ChallengeResourcesListProps) => {
  if (!resources || resources.length === 0) return null;
  
  return (
    <div>
      <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Helpful Resources:</h4>
      <ul className="list-disc pl-5 space-y-2">
        {resources.map((resource, i) => (
          <li key={i} className="flex items-center gap-2">
            <a 
              onClick={(e) => handleResourceClick(e, resource.url)}
              className="text-primary hover:text-primary/80 hover:underline cursor-pointer flex items-center gap-1"
            >
              {resource.title}
              <ExternalLink className="h-3 w-3" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeResourcesList;
