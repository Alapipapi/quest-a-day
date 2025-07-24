import { useState, useEffect } from "react";
import { Trophy, Medal, Award, Users, TrendingUp, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface LeaderboardEntry {
  id: string;
  name: string;
  totalChallenges: number;
  streak: number;
  categoryBreakdown: Record<string, number>;
  lastActive: Date;
  rank: number;
  points: number;
}

const ChallengeLeaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [currentUser, setCurrentUser] = useState<LeaderboardEntry | null>(null);
  const [timeFilter, setTimeFilter] = useState<"week" | "month" | "all">("month");

  // Generate mock leaderboard data
  useEffect(() => {
    const generateMockData = (): LeaderboardEntry[] => {
      const names = [
        "Alex Chen", "Sarah Johnson", "Mike Rodriguez", "Emily Davis", 
        "David Kim", "Jessica Wang", "Tom Wilson", "Lisa Brown",
        "You", "Chris Lee", "Amy Taylor", "Mark Thompson"
      ];

      return names.map((name, index) => ({
        id: (index + 1).toString(),
        name,
        totalChallenges: Math.floor(Math.random() * 100) + 10,
        streak: Math.floor(Math.random() * 30) + 1,
        categoryBreakdown: {
          coding: Math.floor(Math.random() * 30),
          fitness: Math.floor(Math.random() * 25),
          creativity: Math.floor(Math.random() * 20),
          "problem-solving": Math.floor(Math.random() * 25),
        },
        lastActive: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
        rank: index + 1,
        points: Math.floor(Math.random() * 1000) + 100,
      }));
    };

    const mockData = generateMockData();
    // Sort by total challenges and assign ranks
    const sortedData = mockData
      .sort((a, b) => b.totalChallenges - a.totalChallenges)
      .map((entry, index) => ({ ...entry, rank: index + 1 }));

    setLeaderboardData(sortedData);
    
    // Set current user (assuming "You" is the current user)
    const userEntry = sortedData.find(entry => entry.name === "You");
    if (userEntry) {
      setCurrentUser(userEntry);
    }
  }, [timeFilter]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getProgressColor = (category: string) => {
    const colors = {
      coding: "bg-blue-500",
      fitness: "bg-green-500",
      creativity: "bg-purple-500",
      "problem-solving": "bg-orange-500",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  const topUsers = leaderboardData.slice(0, 10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Current User Stats */}
      {currentUser && (
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Your Rank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getRankIcon(currentUser.rank)}
                  <span className="text-2xl font-bold">#{currentUser.rank}</span>
                </div>
                <div>
                  <p className="font-medium">{currentUser.totalChallenges} challenges completed</p>
                  <p className="text-sm text-muted-foreground">
                    {currentUser.streak} day streak • {currentUser.points} points
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {currentUser.points} pts
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Challenge Leaderboard
            </CardTitle>
            <Tabs value={timeFilter} onValueChange={(value) => setTimeFilter(value as typeof timeFilter)}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="all">All Time</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topUsers.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  user.name === "You" 
                    ? "bg-primary/5 border-primary/20" 
                    : "bg-muted/30 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-sm">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <p className="font-medium flex items-center gap-2">
                      {user.name}
                      {user.name === "You" && (
                        <Badge variant="outline" className="text-xs">You</Badge>
                      )}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{user.totalChallenges} challenges</span>
                      <span>•</span>
                      <span>{user.streak} day streak</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-lg">{user.points}</div>
                  <div className="text-xs text-muted-foreground">points</div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown for Top Users */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Category Leaders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {["coding", "fitness", "creativity", "problem-solving"].map((category) => {
              const categoryLeader = leaderboardData
                .sort((a, b) => (b.categoryBreakdown[category] || 0) - (a.categoryBreakdown[category] || 0))[0];
              
              if (!categoryLeader) return null;

              return (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium capitalize">{category.replace('-', ' ')}</h4>
                    <Badge variant="outline" className="text-xs">
                      {categoryLeader.categoryBreakdown[category]} challenges
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {categoryLeader.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{categoryLeader.name}</span>
                    {categoryLeader.name === "You" && (
                      <Badge variant="outline" className="text-xs">You</Badge>
                    )}
                  </div>
                  
                  <Progress 
                    value={(categoryLeader.categoryBreakdown[category] / Math.max(...leaderboardData.map(u => u.categoryBreakdown[category] || 0))) * 100} 
                    className="h-2"
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChallengeLeaderboard;