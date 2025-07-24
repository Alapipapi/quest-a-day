
import { useState, useEffect } from "react";
import { Search, X, Filter, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface ChallengeSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onTagFilter?: (tags: string[]) => void;
  onTimeFilter?: (timeRange: string) => void;
}

const ChallengeSearch = ({ 
  searchQuery, 
  setSearchQuery, 
  onTagFilter, 
  onTimeFilter 
}: ChallengeSearchProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>("all");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const availableTags = [
    "Beginner-friendly", "Advanced", "Team", "Solo", "Mobile", "Web", 
    "API", "Frontend", "Backend", "Strength", "Cardio", "Flexibility",
    "Creative", "Analytical", "Quick", "In-depth"
  ];

  const timeRanges = [
    { value: "all", label: "Any time" },
    { value: "quick", label: "Under 30 minutes" },
    { value: "medium", label: "30 minutes - 2 hours" },
    { value: "long", label: "2+ hours" }
  ];

  const handleTagChange = (tag: string, checked: boolean) => {
    const newTags = checked 
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    
    setSelectedTags(newTags);
    onTagFilter?.(newTags);
  };

  const handleTimeRangeChange = (range: string) => {
    setSelectedTimeRange(range);
    onTimeFilter?.(range);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedTimeRange("all");
    setSearchQuery("");
    onTagFilter?.([]);
    onTimeFilter?.("all");
  };

  const hasActiveFilters = selectedTags.length > 0 || selectedTimeRange !== "all" || searchQuery;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Main search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search challenges by title, description, or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-12 h-12 text-base"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchQuery("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Advanced filters toggle and controls */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Advanced Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-1 h-5 min-w-5 text-xs">
              {selectedTags.length + (selectedTimeRange !== "all" ? 1 : 0)}
            </Badge>
          )}
        </Button>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Advanced filters panel */}
      {showAdvanced && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border rounded-lg p-4 space-y-4 bg-muted/20"
        >
          {/* Time range filter */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Time Commitment</Label>
            <div className="flex flex-wrap gap-2">
              {timeRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={selectedTimeRange === range.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTimeRangeChange(range.value)}
                  className="text-xs"
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Tags filter */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Tags & Skills</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {availableTags.map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox
                    id={tag}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={(checked) => handleTagChange(tag, checked as boolean)}
                  />
                  <Label
                    htmlFor={tag}
                    className="text-xs font-normal cursor-pointer"
                  >
                    {tag}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Active filters display */}
      {(selectedTags.length > 0 || selectedTimeRange !== "all") && (
        <div className="flex flex-wrap gap-2">
          {selectedTimeRange !== "all" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {timeRanges.find(r => r.value === selectedTimeRange)?.label}
              <X 
                className="h-3 w-3 cursor-pointer hover:text-foreground" 
                onClick={() => handleTimeRangeChange("all")}
              />
            </Badge>
          )}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
              {tag}
              <X 
                className="h-3 w-3 cursor-pointer hover:text-foreground" 
                onClick={() => handleTagChange(tag, false)}
              />
            </Badge>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ChallengeSearch;
