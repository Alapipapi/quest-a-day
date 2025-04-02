
import { useState, useEffect } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { format, isSameDay } from "date-fns";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ScheduledChallenge {
  id?: number;
  title: string;
  scheduled: string;
}

const ScheduledChallenges = () => {
  const [scheduledChallenges, setScheduledChallenges] = useState<Record<string, ScheduledChallenge[]>>({});
  const [todaysSchedule, setTodaysSchedule] = useState<ScheduledChallenge[]>([]);
  const [upcomingSchedule, setUpcomingSchedule] = useState<[string, ScheduledChallenge[]][]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSchedule = localStorage.getItem("scheduledChallenges");
    if (storedSchedule) {
      const schedule = JSON.parse(storedSchedule) as Record<string, ScheduledChallenge[]>;
      setScheduledChallenges(schedule);
      
      // Get today's date
      const today = new Date().toISOString().split('T')[0];
      
      // Set today's scheduled challenges
      setTodaysSchedule(schedule[today] || []);
      
      // Get upcoming scheduled challenges (sorted by date)
      const upcoming = Object.entries(schedule)
        .filter(([date]) => date > today)
        .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
        .slice(0, 3); // Limit to next 3 days with scheduled challenges
      
      // Explicitly cast the result to ensure it matches the expected type
      setUpcomingSchedule(upcoming as [string, ScheduledChallenge[]][]);
    }
  }, []);

  const handleViewChallenge = (challenge: ScheduledChallenge) => {
    // Find the challenge category based on the title
    // Here we're navigating to the challenge, assuming we can find it by title
    // In a real app, you would likely store the category with the scheduled challenge
    import("@/data/challengeData").then(({ CHALLENGES }) => {
      const found = CHALLENGES.find(c => c.title === challenge.title);
      if (found) {
        navigate(`/challenge/${found.category}/${encodeURIComponent(challenge.title)}`);
      }
    });
  };

  // If nothing is scheduled, don't show the component
  if (Object.keys(scheduledChallenges).length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Card className="p-4 bg-card">
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 mr-2 text-primary" />
          <h3 className="font-semibold">Scheduled Challenges</h3>
        </div>

        {todaysSchedule.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Today</h4>
            <div className="space-y-2">
              {todaysSchedule.map((challenge, index) => (
                <div key={`today-${index}`} className="flex items-center justify-between p-2 rounded-md border bg-background">
                  <span className="text-sm">{challenge.title}</span>
                  <Button size="sm" variant="ghost" onClick={() => handleViewChallenge(challenge)}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {upcomingSchedule.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Upcoming</h4>
            <div className="space-y-2">
              {upcomingSchedule.map(([date, challenges]) => (
                <div key={date} className="rounded-md border bg-background">
                  <div className="p-2 border-b bg-muted/50">
                    <span className="text-xs font-medium">{format(new Date(date), "EEEE, MMMM d")}</span>
                  </div>
                  {challenges.map((challenge, challengeIndex) => (
                    <div key={`${date}-${challengeIndex}`} className="flex items-center justify-between p-2">
                      <span className="text-sm">{challenge.title}</span>
                      <Button size="sm" variant="ghost" onClick={() => handleViewChallenge(challenge)}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default ScheduledChallenges;
