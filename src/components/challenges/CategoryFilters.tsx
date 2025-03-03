
import { motion } from "framer-motion";

interface CategoryFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: { id: string; label: string }[];
}

const CategoryFilters = ({ 
  selectedCategory, 
  setSelectedCategory, 
  categories 
}: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
