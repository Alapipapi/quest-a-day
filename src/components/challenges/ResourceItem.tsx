
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Resource } from "@/data/types/common";

interface ResourceItemProps {
  resource: Resource;
  index: number;
  delay: number;
  onClick: (url: string) => void;
}

const ResourceItem = ({ resource, index, delay, onClick }: ResourceItemProps) => {
  return (
    <motion.div 
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-center"
    >
      <Button 
        variant="ghost" 
        className="text-primary hover:text-primary/80 hover:bg-primary/10 p-2 flex items-center gap-2"
        onClick={() => onClick(resource.url)}
      >
        <ExternalLink className="h-4 w-4" />
        {resource.title}
      </Button>
    </motion.div>
  );
};

export default ResourceItem;
