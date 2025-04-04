
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format, startOfDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ScheduleDialogProps {
  challengeId?: number;
  challengeTitle: string;
  challengeCategory: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ScheduleDialog = ({ 
  challengeId, 
  challengeTitle, 
  challengeCategory, 
  isOpen, 
  setIsOpen 
}: ScheduleDialogProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleSchedule = () => {
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select a date to schedule this challenge",
        variant: "destructive",
      });
      return;
    }

    // Get existing scheduled challenges from localStorage
    const scheduledChallenges = JSON.parse(localStorage.getItem("scheduledChallenges") || "{}");
    
    // Normalize the date to remove time component and use local date format YYYY-MM-DD
    // This ensures consistent date comparison regardless of timezone
    const normalizedDate = startOfDay(date);
    const dateKey = normalizedDate.toISOString().split('T')[0];
    
    // Add the new scheduled challenge
    if (!scheduledChallenges[dateKey]) {
      scheduledChallenges[dateKey] = [];
    }
    
    // Avoid duplicates
    const isDuplicate = scheduledChallenges[dateKey].some(
      (challenge: { id?: number; title: string }) => 
        (challengeId && challenge.id === challengeId) || 
        challenge.title === challengeTitle
    );
    
    if (!isDuplicate) {
      scheduledChallenges[dateKey].push({
        id: challengeId,
        title: challengeTitle,
        category: challengeCategory,
        scheduled: new Date().toISOString(),
      });
      
      localStorage.setItem("scheduledChallenges", JSON.stringify(scheduledChallenges));
      
      // Show success toast
      toast({
        title: "Challenge scheduled!",
        description: `${challengeTitle} scheduled for ${format(normalizedDate, "PPP")}`,
      });
      
      setIsOpen(false);
    } else {
      toast({
        title: "Already scheduled",
        description: `This challenge is already scheduled for ${format(normalizedDate, "PPP")}`,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule Challenge</DialogTitle>
          <DialogDescription>
            Pick a date to schedule "{challengeTitle}"
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={{ before: new Date() }}
            className="rounded-md border mx-auto"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSchedule}>
            Schedule Challenge
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDialog;
