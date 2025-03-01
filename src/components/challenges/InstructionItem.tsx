
import { motion } from "framer-motion";

interface InstructionItemProps {
  index: number;
  instruction: string;
  delay: number;
}

const InstructionItem = ({ index, instruction, delay }: InstructionItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
    >
      <div className="mt-0.5 min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
        {index + 1}
      </div>
      <span className="text-foreground">{instruction}</span>
    </motion.div>
  );
};

export default InstructionItem;
