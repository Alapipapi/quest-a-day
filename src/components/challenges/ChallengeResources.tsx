
import { Resource } from "@/data/types/common";
import ResourceItem from "./ResourceItem";

interface ChallengeResourcesProps {
  resources: Resource[];
  handleResourceClick: (url: string) => void;
}

const ChallengeResources = ({ resources, handleResourceClick }: ChallengeResourcesProps) => {
  if (!resources || resources.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4">Helpful Resources</h2>
      <div className="space-y-3">
        {resources.map((resource, index) => (
          <ResourceItem 
            key={index}
            resource={resource}
            index={index}
            delay={0.3 + index * 0.1}
            onClick={handleResourceClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeResources;
