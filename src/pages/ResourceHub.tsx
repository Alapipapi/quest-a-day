
import { ArrowLeft, FileText, Download, ExternalLink, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

interface Resource {
  id: number;
  title: string;
  description: string;
  fileType: "pdf" | "video" | "article";
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  url: string;
  size?: string;
  date: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Beginner's Guide to React",
    description: "A comprehensive guide for getting started with React development",
    fileType: "pdf",
    category: "coding",
    url: "#",
    size: "2.4 MB",
    date: "2025-04-10"
  },
  {
    id: 2,
    title: "HIIT Workout Illustrated Guide",
    description: "Visual instructions for high-intensity interval training exercises",
    fileType: "pdf",
    category: "fitness",
    url: "#",
    size: "3.1 MB",
    date: "2025-04-09"
  },
  {
    id: 3,
    title: "Creative Ideation Techniques",
    description: "Methods to enhance creative thinking and ideation processes",
    fileType: "pdf",
    category: "creativity",
    url: "#",
    size: "1.8 MB",
    date: "2025-04-08"
  },
  {
    id: 4,
    title: "Problem-Solving Frameworks",
    description: "Structured approaches to tackle complex problems effectively",
    fileType: "pdf",
    category: "problem-solving",
    url: "#",
    size: "2.2 MB",
    date: "2025-04-07"
  },
  {
    id: 5,
    title: "Getting Started with Algorithms",
    description: "Introduction to algorithmic thinking and common algorithms",
    fileType: "pdf",
    category: "coding",
    url: "#",
    size: "4.5 MB",
    date: "2025-04-06"
  },
  {
    id: 6,
    title: "Strength Training Fundamentals",
    description: "Core principles and techniques for effective strength training",
    fileType: "pdf",
    category: "fitness",
    url: "#",
    size: "3.7 MB",
    date: "2025-04-05"
  },
  {
    id: 7,
    title: "Introduction to Digital Art",
    description: "Getting started with digital art tools and techniques",
    fileType: "video",
    category: "creativity",
    url: "https://example.com/digital-art-intro",
    date: "2025-04-04"
  },
  {
    id: 8,
    title: "Data Structures Explained",
    description: "Visual guide to common data structures used in programming",
    fileType: "article",
    category: "coding",
    url: "https://example.com/data-structures",
    date: "2025-04-03"
  }
];

const ResourceHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredResources = resources.filter(resource => {
    // Filter by category
    if (activeCategory !== "all" && resource.category !== activeCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !resource.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !resource.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const fileTypeIcons = {
    pdf: <FileText className="h-5 w-5 text-red-500" />,
    video: <ExternalLink className="h-5 w-5 text-blue-500" />,
    article: <ExternalLink className="h-5 w-5 text-green-500" />
  };
  
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case "coding": return "Coding";
      case "fitness": return "Fitness";
      case "creativity": return "Creativity";
      case "problem-solving": return "Problem Solving";
      default: return "All Categories";
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "coding": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "fitness": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "creativity": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "problem-solving": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
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
          <h1 className="text-3xl font-bold">Resource Hub</h1>
          <div className="hidden sm:block w-24"></div>
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
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid grid-cols-3 sm:grid-cols-5 mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="coding">Coding</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
              <TabsTrigger value="creativity">Creativity</TabsTrigger>
              <TabsTrigger value="problem-solving">Problem Solving</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <motion.div 
                      key={resource.id} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            {fileTypeIcons[resource.fileType]}
                            <Badge className={getCategoryColor(resource.category)}>
                              {getCategoryLabel(resource.category)}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg mt-3">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2 flex-grow">
                          <p className="text-muted-foreground text-sm">{resource.description}</p>
                        </CardContent>
                        <CardFooter className="pt-2 flex justify-between items-center">
                          {resource.fileType === "pdf" ? (
                            <span className="text-xs text-muted-foreground">{resource.size}</span>
                          ) : (
                            <span className="text-xs text-muted-foreground">External resource</span>
                          )}
                          
                          <Button variant="outline" size="sm" asChild>
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              {resource.fileType === "pdf" ? (
                                <>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  View
                                </>
                              )}
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">No resources found matching your criteria.</p>
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

export default ResourceHub;
