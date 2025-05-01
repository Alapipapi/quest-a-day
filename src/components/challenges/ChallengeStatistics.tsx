
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ChallengeStatistics = () => {
  const [statistics, setStatistics] = useState<any[]>([]);
  
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
    
    // Transform for chart display
    const chartData = Object.entries(categoryCounts).map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1).replace("-", " "),
      completed: value
    }));
    
    setStatistics(chartData);
  }, []);

  if (statistics.length === 0) {
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
          <CardTitle className="text-xl">Challenge Completion Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statistics}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="completed" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChallengeStatistics;
