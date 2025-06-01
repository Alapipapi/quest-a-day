
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Search, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EnhancedSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  onFocus?: () => void;
}

const categories = [
  { id: "coding", label: "Coding", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  { id: "fitness", label: "Fitness", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  { id: "creativity", label: "Creativity", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  { id: "problem-solving", label: "Problem Solving", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
];

const EnhancedSearch = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategories, 
  setSelectedCategories,
  onFocus 
}: EnhancedSearchProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };

  const focusInput = () => {
    inputRef.current?.focus();
    onFocus?.();
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <motion.div
        animate={{ 
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused ? "0 8px 25px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.05)"
        }}
        className="relative"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search challenges by title, description, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full pl-10 pr-20 py-3 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/90 dark:bg-gray-800/90 dark:text-white backdrop-blur-sm text-sm"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            {(searchQuery || selectedCategories.length > 0) && (
              <Button
                onClick={clearFilters}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-3" align="end">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Filter by Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        className={`w-full text-left p-2 rounded-md text-sm transition-all ${
                          selectedCategories.includes(category.id)
                            ? "bg-primary/10 border border-primary/20"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </motion.div>

      {selectedCategories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mt-3 justify-center"
        >
          {selectedCategories.map((categoryId) => {
            const category = categories.find(c => c.id === categoryId);
            return (
              <Badge
                key={categoryId}
                variant="secondary"
                className="cursor-pointer hover:opacity-80"
                onClick={() => toggleCategory(categoryId)}
              >
                {category?.label}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default EnhancedSearch;
