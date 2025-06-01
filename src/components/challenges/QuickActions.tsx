
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Filter, Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface QuickActionsProps {
  onSearchFocus: () => void;
  onFilterOpen: () => void;
  onScheduleOpen: () => void;
}

const QuickActions = ({ onSearchFocus, onFilterOpen, onScheduleOpen }: QuickActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Search,
      label: "Quick Search",
      action: onSearchFocus,
      color: "text-blue-500",
    },
    {
      icon: Filter,
      label: "Advanced Filters",
      action: onFilterOpen,
      color: "text-green-500",
    },
    {
      icon: Calendar,
      label: "Schedule Challenge",
      action: onScheduleOpen,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="fixed bottom-20 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="mb-4 space-y-2"
          >
            {actions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => {
                      action.action();
                      setIsOpen(false);
                    }}
                    className="rounded-full h-12 w-12 shadow-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:scale-110 transition-transform"
                    variant="outline"
                    size="icon"
                  >
                    <IconComponent className={`h-5 w-5 ${action.color}`} />
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-14 w-14 shadow-lg bg-primary text-primary-foreground hover:scale-110 transition-transform"
        size="icon"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="h-6 w-6" />
        </motion.div>
      </Button>
    </div>
  );
};

export default QuickActions;
