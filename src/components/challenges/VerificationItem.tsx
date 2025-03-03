
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface VerificationItemProps {
  index: number;
  item: string;
  isChecked: boolean;
  onClick: () => void;
  delay: number;
}

const VerificationItem = ({ index, item, isChecked, onClick, delay }: VerificationItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted/70 transition-colors"
      onClick={onClick}
    >
      <div 
        className={`mt-0.5 min-w-5 h-5 rounded-full flex items-center justify-center ${
          isChecked
            ? "bg-[hsl(var(--completed-bg))] text-[hsl(var(--completed-text))]"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {isChecked ? (
          <Check className="h-3 w-3" />
        ) : (
          <span className="text-xs">{index + 1}</span>
        )}
      </div>
      <span className="text-foreground">{item}</span>
    </motion.div>
  );
};

export default VerificationItem;
