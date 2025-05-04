
import { motion } from "framer-motion";
import { Brush } from "lucide-react";

interface ChallengeMaterialsProps {
  materials: string[];
}

const ChallengeMaterials = ({ materials }: ChallengeMaterialsProps) => {
  if (!materials || materials.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
        <Brush className="mr-2 h-5 w-5" />
        Materials Needed
      </h2>
      <ul className="space-y-2 pl-5 list-disc">
        {materials.map((material, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="text-muted-foreground"
          >
            {material}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeMaterials;
