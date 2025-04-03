
import { useState, useEffect } from "react";
import { Clock, PauseCircle, PlayCircle, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface ChallengeTimerProps {
  challengeId: number;
  initialTimeInMinutes?: number;
}

const ChallengeTimer = ({ challengeId, initialTimeInMinutes = 30 }: ChallengeTimerProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    // Try to load previous timer state from localStorage
    const savedTime = localStorage.getItem(`challenge-timer-${challengeId}`);
    if (savedTime) {
      const timeObj = JSON.parse(savedTime);
      setHours(timeObj.hours || 0);
      setMinutes(timeObj.minutes || 0);
      setSeconds(timeObj.seconds || 0);
    }
  }, [challengeId]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          let newSeconds = prevSeconds + 1;
          let newMinutes = minutes;
          let newHours = hours;
          
          if (newSeconds === 60) {
            newSeconds = 0;
            newMinutes += 1;
            
            if (newMinutes === 60) {
              newMinutes = 0;
              newHours += 1;
            }
          }
          
          setMinutes(newMinutes);
          setHours(newHours);
          
          // Save timer state to localStorage
          localStorage.setItem(`challenge-timer-${challengeId}`, JSON.stringify({
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds
          }));
          
          return newSeconds;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, minutes, hours, challengeId]);
  
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  
  const resetTimer = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    localStorage.removeItem(`challenge-timer-${challengeId}`);
  };
  
  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Challenge Timer</p>
            <p className="text-2xl font-mono">
              {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={toggleTimer}
            className={isRunning ? "text-orange-500" : "text-green-500"}
          >
            {isRunning ? (
              <PauseCircle className="h-4 w-4 mr-1" />
            ) : (
              <PlayCircle className="h-4 w-4 mr-1" />
            )}
            {isRunning ? "Pause" : "Start"}
          </Button>
          
          <Button 
            size="sm" 
            variant="outline" 
            onClick={resetTimer}
            className="text-foreground" // Changed from "text-gray-500" to "text-foreground"
          >
            <RotateCcw className="h-4 w-4 mr-1 text-foreground" /> {/* Added text-foreground explicitly for the icon */}
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengeTimer;
