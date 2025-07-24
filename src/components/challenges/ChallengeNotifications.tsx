import { useState, useEffect } from "react";
import { Bell, BellRing, X, Settings, Clock, Trophy, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Notification {
  id: string;
  type: "reminder" | "streak" | "achievement" | "recommendation";
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  actionUrl?: string;
}

const ChallengeNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    dailyReminders: true,
    streakAlerts: true,
    achievements: true,
    recommendations: true,
  });

  // Load notifications and settings on mount
  useEffect(() => {
    const storedNotifications = localStorage.getItem("challengeNotifications");
    const storedSettings = localStorage.getItem("notificationSettings");
    
    if (storedNotifications) {
      setNotifications(JSON.parse(storedNotifications));
    }
    
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }

    // Set up daily reminder check
    checkForDailyReminder();
    
    // Listen for new achievements
    const handleNewAchievement = (event: CustomEvent) => {
      if (settings.achievements) {
        addNotification({
          type: "achievement",
          title: "Achievement Unlocked!",
          message: event.detail.message,
        });
      }
    };

    window.addEventListener("challengeAchievement", handleNewAchievement as EventListener);
    
    return () => {
      window.removeEventListener("challengeAchievement", handleNewAchievement as EventListener);
    };
  }, [settings.achievements]);

  const checkForDailyReminder = () => {
    if (!settings.dailyReminders) return;

    const lastCheck = localStorage.getItem("lastReminderCheck");
    const today = new Date().toDateString();
    
    if (lastCheck !== today) {
      const completedToday = checkIfCompletedToday();
      
      if (!completedToday) {
        addNotification({
          type: "reminder",
          title: "Daily Challenge Reminder",
          message: "Don't forget to complete a challenge today to maintain your streak!",
        });
      }
      
      localStorage.setItem("lastReminderCheck", today);
    }
  };

  const checkIfCompletedToday = () => {
    const completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "{}");
    const today = new Date().toISOString().split('T')[0];
    const lastCompletionDate = localStorage.getItem("lastChallengeCompletionDate");
    
    return lastCompletionDate === today;
  };

  const addNotification = (notification: Omit<Notification, "id" | "timestamp" | "isRead">) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      isRead: false,
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev].slice(0, 20); // Keep only last 20
      localStorage.setItem("challengeNotifications", JSON.stringify(updated));
      return updated;
    });
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => {
      const updated = prev.map(n => n.id === id ? { ...n, isRead: true } : n);
      localStorage.setItem("challengeNotifications", JSON.stringify(updated));
      return updated;
    });
  };

  const markAllAsRead = () => {
    setNotifications(prev => {
      const updated = prev.map(n => ({ ...n, isRead: true }));
      localStorage.setItem("challengeNotifications", JSON.stringify(updated));
      return updated;
    });
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => {
      const updated = prev.filter(n => n.id !== id);
      localStorage.setItem("challengeNotifications", JSON.stringify(updated));
      return updated;
    });
  };

  const updateSettings = (key: keyof typeof settings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem("notificationSettings", JSON.stringify(newSettings));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "reminder":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "streak":
        return <Trophy className="h-4 w-4 text-orange-500" />;
      case "achievement":
        return <Trophy className="h-4 w-4 text-yellow-500" />;
      case "recommendation":
        return <Target className="h-4 w-4 text-green-500" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          {unreadCount > 0 ? (
            <BellRing className="h-4 w-4" />
          ) : (
            <Bell className="h-4 w-4" />
          )}
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] max-h-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Notifications</span>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="text-xs"
                >
                  Mark all read
                </Button>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Notification Settings */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Settings className="h-4 w-4" />
              <h4 className="font-medium">Notification Settings</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Daily Reminders</Label>
                <Switch
                  checked={settings.dailyReminders}
                  onCheckedChange={(checked) => updateSettings("dailyReminders", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Streak Alerts</Label>
                <Switch
                  checked={settings.streakAlerts}
                  onCheckedChange={(checked) => updateSettings("streakAlerts", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Achievement Notifications</Label>
                <Switch
                  checked={settings.achievements}
                  onCheckedChange={(checked) => updateSettings("achievements", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Challenge Recommendations</Label>
                <Switch
                  checked={settings.recommendations}
                  onCheckedChange={(checked) => updateSettings("recommendations", checked)}
                />
              </div>
            </div>
          </Card>

          <Separator />

          {/* Notifications List */}
          <div className="space-y-2 max-h-64 overflow-y-auto">
            <AnimatePresence>
              {notifications.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      notification.isRead 
                        ? "bg-muted/30 border-muted" 
                        : "bg-background border-primary/20 shadow-sm"
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 flex-1">
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-sm truncate">
                            {notification.title}
                          </h5>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeNotification(notification.id);
                        }}
                        className="h-6 w-6 p-0 opacity-50 hover:opacity-100"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChallengeNotifications;