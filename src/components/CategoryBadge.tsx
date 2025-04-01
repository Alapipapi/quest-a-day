
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  className?: string;
}

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  if (!category) {
    return null;
  }

  const baseStyles = "px-3 py-1 rounded-full text-sm font-medium transition-all duration-300";
  const categoryStyles = {
    coding: "bg-category-coding/10 text-category-coding",
    fitness: "bg-category-fitness/10 text-category-fitness",
    creativity: "bg-category-creativity/10 text-category-creativity",
    "problem-solving": "bg-category-problem-solving/10 text-category-problem-solving",
  };

  const displayText = category
    ? category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")
    : '';

  return (
    <span className={cn(baseStyles, categoryStyles[category], className)}>
      {displayText}
    </span>
  );
};

export default CategoryBadge;
