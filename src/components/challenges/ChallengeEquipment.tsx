
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

interface ChallengeEquipmentProps {
  equipment: string[];
}

const ChallengeEquipment = ({ equipment }: ChallengeEquipmentProps) => {
  if (!equipment || equipment.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
        <Dumbbell className="mr-2 h-5 w-5" />
        Equipment Needed
      </h2>
      <ul className="space-y-2 pl-5 list-disc">
        {equipment.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="text-muted-foreground"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeEquipment;
