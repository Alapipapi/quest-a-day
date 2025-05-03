
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const ChallengeStatistics = () => {
  const [statistics, setStatistics] = useState<any[]>([]);
  
  // Helper function to capitalize first letter only
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  useEffect(() => {
    // Get all completed challenges
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    
    // Count completed challenges by category
    const categoryCounts = {
      coding: 0,
      fitness: 0,
      creativity: 0,
      "problem-solving": 0
    };
    
    // Count only actual completions, not progress or verification
    Object.keys(completedChallenges).forEach(key => {
      if (!key.includes("-progress") && !key.includes("-verification")) {
        // Extract category from key format "category-title"
        const parts = key.split("-");
        if (parts.length >= 2) {
          const category = parts[0];
          if (category in categoryCounts) {
            categoryCounts[category as keyof typeof categoryCounts]++;
          }
        }
      }
    });
    
    // Transform for chart display with proper capitalization
    const chartData = Object.entries(categoryCounts).map(([name, value]) => {
      // Format category name: problem-solving -> Problem solving
      const displayName = name === "problem-solving" 
        ? "Problem solving"
        : capitalizeFirstLetter(name);
      
      return {
        name: displayName,
        completed: value,
        categoryKey: name // Keep original key for color matching
      };
    });
    
    setStatistics(chartData);
  }, []);

  if (statistics.length === 0) {
    return null;
  }

  // Define chart colors for each category - ensure these are correctly mapped
  const categoryColors = {
    coding: "#4FD1C5", // Teal
    fitness: "#FC8181", // Red
    creativity: "#F6AD55", // Orange
    "problem-solving": "#9F7AEA" // Purple
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Challenge Completion Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={statistics}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                barGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted/30" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis 
                  allowDecimals={false}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <ChartTooltip
                  content={(props) => {
                    const { active, payload } = props;
                    
                    if (!active || !payload || payload.length === 0) return null;
                    
                    const data = payload[0].payload;
                    const category = data.name;
                    const value = data.completed;
                    const categoryKey = data.categoryKey;
                    
                    return (
                      <div className="rounded-lg border border-border bg-background p-2 shadow-md">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-1">
                            <div 
                              className="h-2 w-2 rounded-full" 
                              style={{ 
                                backgroundColor: categoryColors[categoryKey as keyof typeof categoryColors] 
                              }}
                            />
                            <span className="font-medium">{category}</span>
                          </div>
                          <div className="text-right font-medium">
                            <span className="text-muted-foreground">
                              {capitalizeFirstLetter("completed")}: {value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                />
                <Bar 
                  dataKey="completed"
                  isAnimationActive={true}
                  animationDuration={800}
                  background={{ fill: "transparent" }}
                  radius={[4, 4, 0, 0]}
                >
                  {statistics.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={categoryColors[entry.categoryKey as keyof typeof categoryColors]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChallengeStatistics;
