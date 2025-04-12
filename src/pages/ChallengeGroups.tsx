
import { useState } from "react";
import { ArrowLeft, Users, Plus, Calendar, Search, UserPlus, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";

interface GroupMember {
  id: number;
  name: string;
  avatar?: string;
  role: "admin" | "member";
  joinedAt: string;
  completedChallenges: number;
}

interface ChallengeGroup {
  id: number;
  name: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving" | "mixed";
  memberCount: number;
  members: GroupMember[];
  activeChallenge?: {
    id: number;
    title: string;
    dueDate: string;
    completedCount: number;
  };
  createdAt: string;
  isPublic: boolean;
}

// Sample data for challenge groups
const sampleGroups: ChallengeGroup[] = [
  {
    id: 1,
    name: "Web Dev Warriors",
    description: "A group focused on web development challenges and projects",
    category: "coding",
    memberCount: 8,
    members: [
      { id: 1, name: "Alex Chen", role: "admin", joinedAt: "2025-03-15", completedChallenges: 12 },
      { id: 2, name: "Jamie Smith", role: "member", joinedAt: "2025-03-16", completedChallenges: 8 },
      { id: 3, name: "Taylor Johnson", avatar: "/placeholder.svg", role: "member", joinedAt: "2025-03-18", completedChallenges: 5 },
    ],
    activeChallenge: {
      id: 5,
      title: "Build a Responsive Portfolio Website",
      dueDate: "2025-04-20",
      completedCount: 3
    },
    createdAt: "2025-03-15",
    isPublic: true
  },
  {
    id: 2,
    name: "Fitness Friends",
    description: "Supporting each other through fitness challenges and routines",
    category: "fitness",
    memberCount: 12,
    members: [
      { id: 4, name: "Morgan Lee", role: "admin", joinedAt: "2025-02-28", completedChallenges: 15 },
      { id: 5, name: "Casey Wilson", role: "member", joinedAt: "2025-03-01", completedChallenges: 12 },
      { id: 6, name: "Jordan Parker", avatar: "/placeholder.svg", role: "member", joinedAt: "2025-03-05", completedChallenges: 10 },
    ],
    activeChallenge: {
      id: 14,
      title: "30-Day HIIT Challenge",
      dueDate: "2025-04-15",
      completedCount: 8
    },
    createdAt: "2025-02-28",
    isPublic: true
  },
  {
    id: 3,
    name: "Creative Minds",
    description: "Exploring various creative challenges and sharing inspiration",
    category: "creativity",
    memberCount: 6,
    members: [
      { id: 7, name: "Riley Thompson", role: "admin", joinedAt: "2025-03-05", completedChallenges: 7 },
      { id: 8, name: "Quinn Murphy", role: "member", joinedAt: "2025-03-08", completedChallenges: 5 },
    ],
    activeChallenge: {
      id: 22,
      title: "Digital Art Challenge",
      dueDate: "2025-04-25",
      completedCount: 2
    },
    createdAt: "2025-03-05",
    isPublic: false
  },
  {
    id: 4,
    name: "Problem Solvers",
    description: "Tackling complex problems and puzzles together",
    category: "problem-solving",
    memberCount: 10,
    members: [
      { id: 9, name: "Avery Williams", role: "admin", joinedAt: "2025-02-10", completedChallenges: 18 },
      { id: 10, name: "Charlie Davis", role: "member", joinedAt: "2025-02-12", completedChallenges: 15 },
    ],
    activeChallenge: {
      id: 30,
      title: "Logic Puzzle Marathon",
      dueDate: "2025-04-18",
      completedCount: 6
    },
    createdAt: "2025-02-10",
    isPublic: true
  },
  {
    id: 5,
    name: "Full Stack Challenge",
    description: "Working on full stack development projects and challenges",
    category: "coding",
    memberCount: 5,
    members: [
      { id: 11, name: "Sam Peterson", role: "admin", joinedAt: "2025-03-20", completedChallenges: 9 },
      { id: 12, name: "Blake Turner", role: "member", joinedAt: "2025-03-22", completedChallenges: 7 },
    ],
    createdAt: "2025-03-20",
    isPublic: true
  },
  {
    id: 6,
    name: "Wellness Warriors",
    description: "Combining fitness and mindfulness challenges",
    category: "fitness",
    memberCount: 15,
    members: [
      { id: 13, name: "Jordan Smith", role: "admin", joinedAt: "2025-01-15", completedChallenges: 25 },
      { id: 14, name: "Taylor Johnson", role: "member", joinedAt: "2025-01-18", completedChallenges: 20 },
    ],
    activeChallenge: {
      id: 42,
      title: "Morning Routine Challenge",
      dueDate: "2025-04-30",
      completedCount: 10
    },
    createdAt: "2025-01-15",
    isPublic: true
  },
];

const ChallengeGroups = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [groups, setGroups] = useState<ChallengeGroup[]>(sampleGroups);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDescription, setNewGroupDescription] = useState("");
  const [newGroupCategory, setNewGroupCategory] = useState<ChallengeGroup["category"]>("mixed");
  const [newGroupIsPublic, setNewGroupIsPublic] = useState(true);
  
  const filteredGroups = groups.filter(group => {
    // Filter by category
    if (activeCategory !== "all" && group.category !== activeCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !group.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !group.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "coding": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "fitness": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "creativity": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "problem-solving": return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "mixed": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      default: return "";
    }
  };
  
  const handleCreateGroup = () => {
    if (!newGroupName.trim()) {
      toast({
        title: "Group name required",
        description: "Please provide a name for your group",
        variant: "destructive",
      });
      return;
    }
    
    const newGroup: ChallengeGroup = {
      id: groups.length + 1,
      name: newGroupName,
      description: newGroupDescription,
      category: newGroupCategory,
      memberCount: 1,
      members: [
        { id: 1, name: "Current User", role: "admin", joinedAt: format(new Date(), "yyyy-MM-dd"), completedChallenges: 0 }
      ],
      createdAt: format(new Date(), "yyyy-MM-dd"),
      isPublic: newGroupIsPublic
    };
    
    setGroups([...groups, newGroup]);
    setShowCreateDialog(false);
    setNewGroupName("");
    setNewGroupDescription("");
    setNewGroupCategory("mixed");
    setNewGroupIsPublic(true);
    
    toast({
      title: "Group Created!",
      description: `${newGroupName} has been created successfully.`,
    });
  };
  
  const handleJoinGroup = (groupId: number) => {
    toast({
      title: "Joined Group",
      description: "You've successfully joined this challenge group!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeSwitcher />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4 sm:mb-0">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Challenge Groups</h1>
          <div className="w-24 mt-4 sm:mt-0">
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Group
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Challenge Group</DialogTitle>
                  <DialogDescription>
                    Start a new group to tackle challenges together with others.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Group Name</label>
                    <Input 
                      id="name" 
                      value={newGroupName} 
                      onChange={(e) => setNewGroupName(e.target.value)} 
                      placeholder="Enter group name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Description</label>
                    <Input 
                      id="description" 
                      value={newGroupDescription} 
                      onChange={(e) => setNewGroupDescription(e.target.value)} 
                      placeholder="What's this group about?" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">Category</label>
                    <select 
                      id="category"
                      className="w-full p-2 rounded-md border border-input bg-background"
                      value={newGroupCategory}
                      onChange={(e) => setNewGroupCategory(e.target.value as ChallengeGroup["category"])}
                    >
                      <option value="mixed">Mixed</option>
                      <option value="coding">Coding</option>
                      <option value="fitness">Fitness</option>
                      <option value="creativity">Creativity</option>
                      <option value="problem-solving">Problem Solving</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="isPublic" 
                      checked={newGroupIsPublic}
                      onChange={(e) => setNewGroupIsPublic(e.target.checked)}
                      className="rounded"
                    />
                    <label htmlFor="isPublic" className="text-sm font-medium">Make group public</label>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowCreateDialog(false)}>Cancel</Button>
                  <Button onClick={handleCreateGroup}>Create Group</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="coding">Coding</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
              <TabsTrigger value="creativity">Creativity</TabsTrigger>
              <TabsTrigger value="problem-solving">Problem Solving</TabsTrigger>
              <TabsTrigger value="mixed">Mixed</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGroups.length > 0 ? (
                  filteredGroups.map((group) => (
                    <motion.div 
                      key={group.id} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <Badge className={getCategoryColor(group.category)}>
                              {group.category.charAt(0).toUpperCase() + group.category.slice(1)}
                            </Badge>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem 
                                  onClick={() => {
                                    toast({
                                      title: "Coming Soon",
                                      description: "This feature will be available in a future update.",
                                    });
                                  }}
                                >
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => {
                                    toast({
                                      title: "Coming Soon",
                                      description: "This feature will be available in a future update.",
                                    });
                                  }}
                                >
                                  Share Group
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem 
                                  className="text-red-600 dark:text-red-400"
                                  onClick={() => {
                                    toast({
                                      title: "Coming Soon",
                                      description: "This feature will be available in a future update.",
                                    });
                                  }}
                                >
                                  Report Group
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <CardTitle className="text-lg mt-3">{group.name}</CardTitle>
                          <div className="flex -space-x-2 mt-3">
                            {group.members.slice(0, 3).map((member) => (
                              <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                                {member.avatar ? (
                                  <AvatarImage src={member.avatar} />
                                ) : null}
                                <AvatarFallback className="text-xs">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                            {group.memberCount > 3 && (
                              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium">
                                +{group.memberCount - 3}
                              </div>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2 flex-grow">
                          <p className="text-muted-foreground text-sm line-clamp-2">{group.description}</p>
                          
                          {group.activeChallenge && (
                            <div className="mt-4 p-3 bg-muted/50 rounded-md">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium">Active Challenge</h4>
                                <span className="text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3 inline mr-1" />
                                  Due {format(new Date(group.activeChallenge.dueDate), "MMM d")}
                                </span>
                              </div>
                              <p className="text-sm mt-1">{group.activeChallenge.title}</p>
                              <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary" 
                                  style={{ width: `${(group.activeChallenge.completedCount / group.memberCount) * 100}%` }} 
                                />
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {group.activeChallenge.completedCount} of {group.memberCount} completed
                              </p>
                            </div>
                          )}
                        </CardContent>
                        <CardFooter className="pt-2 flex justify-between items-center">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{group.memberCount} {group.memberCount === 1 ? 'member' : 'members'}</span>
                          </div>
                          
                          <Button variant="outline" size="sm" onClick={() => handleJoinGroup(group.id)}>
                            <UserPlus className="h-4 w-4 mr-2" />
                            Join
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">No groups found matching your criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ChallengeGroups;
