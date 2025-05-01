
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CategoryProgress {
  name: string;
  value: number;
  color: string;
}

const COLORS = {
  coding: "#8884d8", 
  fitness: "#82ca9d", 
  creativity: "#ffc658",
  "problem-solving": "#ff8042"
};

const ProgressTrackingChart = () => {
  const [progressData, setProgressData] = useState<CategoryProgress[]>([]);
  
  useEffect(() => {
    // Get all challenges to count the total per category
    const totalCounts = {
      coding: 0,
      fitness: 0,
      creativity: 0,
      "problem-solving": 0
    };
    
    // Get from local storage
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    
    // Count completions by category
    const completedCounts = {
      coding: 0,
      fitness: 0,
      creativity: 0,
      "problem-solving": 0
    };
    
    // Count challenges from localStorage
    Object.keys(completedChallenges).forEach(key => {
      if (!key.includes("-progress") && !key.includes("-verification")) {
        const parts = key.split("-");
        if (parts.length >= 2) {
          const category = parts[0];
          if (category in completedCounts) {
            completedCounts[category as keyof typeof completedCounts]++;
          }
        }
      }
    });
    
    // Import all challenge data to get total counts
    import('@/data/challengeData').then(({ CHALLENGES }) => {
      CHALLENGES.forEach(challenge => {
        totalCounts[challenge.category as keyof typeof totalCounts]++;
      });
      
      // Calculate percentages and prepare chart data
      const data: CategoryProgress[] = [
        {
          name: "Coding",
          value: completedCounts.coding,
          color: COLORS.coding
        },
        {
          name: "Fitness",
          value: completedCounts.fitness,
          color: COLORS.fitness
        },
        {
          name: "Creativity",
          value: completedCounts.creativity,
          color: COLORS.creativity
        },
        {
          name: "Problem Solving",
          value: completedCounts["problem-solving"],
          color: COLORS["problem-solving"]
        }
      ];
      
      setProgressData(data.filter(item => item.value > 0));
    });
  }, []);
  
  if (progressData.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={progressData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {progressData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProgressTrackingChart;
