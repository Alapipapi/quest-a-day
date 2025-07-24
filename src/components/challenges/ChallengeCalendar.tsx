import { useState, useEffect } from "react";
import { Calendar as CalendarIcon, Plus, Edit2, Trash2, Clock, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ScheduledChallenge {
  id: string;
  title: string;
  category: string;
  date: Date;
  time?: string;
  notes?: string;
  isCompleted: boolean;
  reminderSet: boolean;
}

const ChallengeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [scheduledChallenges, setScheduledChallenges] = useState<ScheduledChallenge[]>([]);
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState<ScheduledChallenge | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: new Date(),
    time: "",
    notes: "",
    reminderSet: true,
  });

  const categories = ["coding", "fitness", "creativity", "problem-solving"];

  // Load scheduled challenges on mount
  useEffect(() => {
    const stored = localStorage.getItem("scheduledChallenges");
    if (stored) {
      const parsed = JSON.parse(stored);
      const withDates = parsed.map((challenge: any) => ({
        ...challenge,
        date: new Date(challenge.date),
      }));
      setScheduledChallenges(withDates);
    }
  }, []);

  // Save to localStorage whenever scheduledChallenges changes
  useEffect(() => {
    localStorage.setItem("scheduledChallenges", JSON.stringify(scheduledChallenges));
  }, [scheduledChallenges]);

  const getChallengesForDate = (date: Date) => {
    return scheduledChallenges.filter(challenge => 
      challenge.date.toDateString() === date.toDateString()
    );
  };

  const hasScheduledChallenges = (date: Date) => {
    return getChallengesForDate(date).length > 0;
  };

  const addScheduledChallenge = () => {
    const newChallenge: ScheduledChallenge = {
      id: Date.now().toString(),
      title: formData.title,
      category: formData.category,
      date: formData.date,
      time: formData.time,
      notes: formData.notes,
      isCompleted: false,
      reminderSet: formData.reminderSet,
    };

    setScheduledChallenges(prev => [...prev, newChallenge]);
    setIsScheduleDialogOpen(false);
    resetForm();

    // Set browser notification if supported and enabled
    if (formData.reminderSet && "Notification" in window) {
      Notification.requestPermission();
    }
  };

  const updateScheduledChallenge = () => {
    if (!editingChallenge) return;

    setScheduledChallenges(prev =>
      prev.map(challenge =>
        challenge.id === editingChallenge.id
          ? {
              ...challenge,
              title: formData.title,
              category: formData.category,
              date: formData.date,
              time: formData.time,
              notes: formData.notes,
              reminderSet: formData.reminderSet,
            }
          : challenge
      )
    );

    setEditingChallenge(null);
    setIsScheduleDialogOpen(false);
    resetForm();
  };

  const deleteScheduledChallenge = (id: string) => {
    setScheduledChallenges(prev => prev.filter(challenge => challenge.id !== id));
  };

  const toggleChallengeCompletion = (id: string) => {
    setScheduledChallenges(prev =>
      prev.map(challenge =>
        challenge.id === id
          ? { ...challenge, isCompleted: !challenge.isCompleted }
          : challenge
      )
    );
  };

  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      date: selectedDate,
      time: "",
      notes: "",
      reminderSet: true,
    });
  };

  const openEditDialog = (challenge: ScheduledChallenge) => {
    setEditingChallenge(challenge);
    setFormData({
      title: challenge.title,
      category: challenge.category,
      date: challenge.date,
      time: challenge.time || "",
      notes: challenge.notes || "",
      reminderSet: challenge.reminderSet,
    });
    setIsScheduleDialogOpen(true);
  };

  const openNewChallengeDialog = () => {
    setEditingChallenge(null);
    resetForm();
    setIsScheduleDialogOpen(true);
  };

  const selectedDateChallenges = getChallengesForDate(selectedDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Challenge Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="rounded-md border mx-auto"
              modifiers={{
                hasScheduled: hasScheduledChallenges,
              }}
              modifiersStyles={{
                hasScheduled: {
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  fontWeight: "bold",
                },
              }}
            />
            <div className="mt-4 text-center">
              <Button onClick={openNewChallengeDialog} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Challenge
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Selected Date Challenges */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {format(selectedDate, "MMMM d, yyyy")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateChallenges.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Target className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No challenges scheduled for this date</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openNewChallengeDialog}
                  className="mt-2"
                >
                  Schedule one now
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedDateChallenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className={cn(
                      "p-3 rounded-lg border transition-colors",
                      challenge.isCompleted
                        ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                        : "bg-muted/30"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleChallengeCompletion(challenge.id)}
                            className={cn(
                              "h-5 w-5 p-0 rounded-full border-2",
                              challenge.isCompleted
                                ? "bg-green-500 border-green-500 text-white"
                                : "border-muted-foreground hover:border-primary"
                            )}
                          >
                            {challenge.isCompleted && "✓"}
                          </Button>
                          <h4 className={cn(
                            "font-medium",
                            challenge.isCompleted && "line-through text-muted-foreground"
                          )}>
                            {challenge.title}
                          </h4>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {challenge.category}
                          </Badge>
                          {challenge.time && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {challenge.time}
                            </div>
                          )}
                        </div>
                        
                        {challenge.notes && (
                          <p className="text-sm text-muted-foreground">
                            {challenge.notes}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openEditDialog(challenge)}
                          className="h-7 w-7 p-0"
                        >
                          <Edit2 className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteScheduledChallenge(challenge.id)}
                          className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Schedule Dialog */}
      <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {editingChallenge ? "Edit" : "Schedule"} Challenge
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Challenge Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter challenge title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => date && setFormData(prev => ({ ...prev, date }))}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time (optional)</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Add any notes or reminders..."
                rows={3}
              />
            </div>

            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsScheduleDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={editingChallenge ? updateScheduledChallenge : addScheduledChallenge}
                disabled={!formData.title || !formData.category}
              >
                {editingChallenge ? "Update" : "Schedule"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ChallengeCalendar;