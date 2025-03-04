
export interface Challenge {
  id: number;
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
}

// Import the challenges from individual category files
import { codingSteps } from "./challenges/codingSteps";
import { fitnessSteps } from "./challenges/fitnessSteps";
import { creativitySteps } from "./challenges/creativitySteps";
import { problemSolvingSteps } from "./challenges/problemSolvingSteps";

// Map coding challenges to the Challenge interface
const codingChallenges: Challenge[] = [
  {
    id: 1,
    title: "Build a Weather App",
    description: "Create a simple weather application that fetches and displays current weather data for a given location.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 5,
    title: "Build a Todo List App",
    description: "Create a simple todo list application with React and local storage for data persistence.",
    category: "coding",
    difficulty: "Easy",
    timeEstimate: "1-2 hours",
  },
  {
    id: 8,
    title: "Build a Chat Interface",
    description: "Create a responsive chat interface using React components and CSS Grid/Flexbox.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 11,
    title: "Build an API Client",
    description: "Create a React application that fetches and displays data from a public API.",
    category: "coding",
    difficulty: "Hard",
    timeEstimate: "3-4 hours",
  },
  {
    id: 15,
    title: "Build a Portfolio Website",
    description: "Create a personal portfolio website using React and modern design principles.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "4-6 hours",
  },
  {
    id: 20,
    title: "Database Design Challenge",
    description: "Design a normalized database schema for a social media application.",
    category: "coding",
    difficulty: "Hard",
    timeEstimate: "2-3 hours",
  },
  {
    id: 24,
    title: "API Documentation",
    description: "Write comprehensive documentation for a RESTful API using OpenAPI/Swagger.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 25,
    title: "Master React Hooks",
    description: "Build a small application that demonstrates proficiency with various React hooks.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "3-4 hours",
  },
  {
    id: 26,
    title: "Global State Management",
    description: "Implement a global state management solution in a React application.",
    category: "coding",
    difficulty: "Hard",
    timeEstimate: "4-5 hours",
  },
  {
    id: 31,
    title: "Responsive Design Challenge",
    description: "Create a responsive webpage that looks good on all devices using mobile-first design principles.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 32,
    title: "Web Accessibility Audit",
    description: "Audit an existing website for accessibility issues and create a report with recommendations.",
    category: "coding",
    difficulty: "Medium",
    timeEstimate: "3-4 hours",
  }
];

// Map fitness challenges to the Challenge interface
const fitnessChallenges: Challenge[] = [
  {
    id: 2,
    title: "30-Minute HIIT Workout",
    description: "Complete a high-intensity interval training workout focusing on full-body exercises.",
    category: "fitness",
    difficulty: "Hard",
    timeEstimate: "30 minutes",
  },
  {
    id: 6,
    title: "Yoga Flow Session",
    description: "Complete a beginner-friendly yoga flow session focusing on flexibility and mindfulness.",
    category: "fitness",
    difficulty: "Easy",
    timeEstimate: "20 minutes",
  },
  {
    id: 9,
    title: "Core Strength Workout",
    description: "Complete a core-focused workout routine to build strength and stability.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "25 minutes",
  },
  {
    id: 14,
    title: "Endurance Running",
    description: "Complete a progressive running session with proper warm-up and cool-down.",
    category: "fitness",
    difficulty: "Hard",
    timeEstimate: "45 minutes",
  },
  {
    id: 16,
    title: "Morning Yoga Flow",
    description: "Start your day with an energizing morning yoga routine focusing on stretching and breathing.",
    category: "fitness",
    difficulty: "Easy",
    timeEstimate: "20 minutes",
  },
  {
    id: 21,
    title: "Interval Sprint Training",
    description: "Complete a high-intensity sprint workout with proper warm-up and cool-down.",
    category: "fitness",
    difficulty: "Hard",
    timeEstimate: "40 minutes",
  },
  {
    id: 27,
    title: "Full Body Strength Training",
    description: "Complete a comprehensive strength training workout targeting all major muscle groups.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "45 minutes",
  },
  {
    id: 33,
    title: "Warm-up Routine",
    description: "Learn and practice a proper warm-up routine to prepare for exercise and prevent injuries.",
    category: "fitness",
    difficulty: "Easy",
    timeEstimate: "15 minutes",
  },
  {
    id: 34,
    title: "Pilates Core Workout",
    description: "Complete a pilates-based core workout focusing on control and proper breathing technique.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "30 minutes",
  },
  {
    id: 35,
    title: "Full-Body Mobility Routine",
    description: "Improve joint mobility and flexibility with a comprehensive mobility routine.",
    category: "fitness",
    difficulty: "Medium",
    timeEstimate: "25 minutes",
  }
];

// Map creativity challenges to the Challenge interface
const creativityChallenges: Challenge[] = [
  {
    id: 3,
    title: "Daily Sketch Challenge",
    description: "Draw an object from your surroundings using only basic shapes and lines.",
    category: "creativity",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
  },
  {
    id: 7,
    title: "Digital Art Creation",
    description: "Create a digital artwork using basic tools in a drawing application of your choice.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "1 hour",
  },
  {
    id: 12,
    title: "Watercolor Painting",
    description: "Create a simple landscape painting using basic watercolor techniques.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "1-2 hours",
  },
  {
    id: 17,
    title: "Abstract Art Creation",
    description: "Create an abstract artwork using any medium, focusing on shapes, colors, and composition.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "1-2 hours",
  },
  {
    id: 19,
    title: "Mobile App UI Design",
    description: "Design a mobile app interface using Figma or similar design tools.",
    category: "creativity",
    difficulty: "Hard",
    timeEstimate: "3-4 hours",
  },
  {
    id: 23,
    title: "Nature Photography",
    description: "Capture and edit three nature photographs focusing on composition and lighting.",
    category: "creativity",
    difficulty: "Easy",
    timeEstimate: "1-2 hours",
  },
  {
    id: 28,
    title: "Digital Music Production",
    description: "Create a short musical piece using digital audio workstation software.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 36,
    title: "Food Photography Basics",
    description: "Learn and practice food photography techniques with proper styling and lighting.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "2 hours",
  },
  {
    id: 37,
    title: "Flash Fiction Challenge",
    description: "Write a complete story in under 500 words with a clear beginning, middle, and end.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "1 hour",
  },
  {
    id: 38,
    title: "Voice Acting Fundamentals",
    description: "Learn and practice basic voice acting techniques to create character voices.",
    category: "creativity",
    difficulty: "Medium",
    timeEstimate: "1-2 hours",
  }
];

// Map problem-solving challenges to the Challenge interface
const problemSolvingChallenges: Challenge[] = [
  {
    id: 4,
    title: "Logic Puzzle Master",
    description: "Solve a complex logic puzzle involving pattern recognition and deductive reasoning.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "45 minutes",
  },
  {
    id: 10,
    title: "Solve Sudoku Puzzle",
    description: "Complete a medium-difficulty Sudoku puzzle while practicing logical thinking.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "30 minutes",
  },
  {
    id: 13,
    title: "Algorithm Challenge",
    description: "Solve three algorithmic problems focusing on arrays and string manipulation.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "1 hour",
  },
  {
    id: 18,
    title: "Chess Puzzle Challenge",
    description: "Solve a series of chess puzzles to improve tactical thinking and pattern recognition.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "45 minutes",
  },
  {
    id: 22,
    title: "Logic Grid Puzzle",
    description: "Solve a complex logic grid puzzle requiring deductive reasoning and systematic thinking.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "1 hour",
  },
  {
    id: 29,
    title: "Data Structures Mastery",
    description: "Implement and use various data structures to solve algorithmic problems.",
    category: "problem-solving",
    difficulty: "Hard",
    timeEstimate: "3-4 hours",
  },
  {
    id: 30,
    title: "Data Analysis Challenge",
    description: "Analyze a dataset to clean data, create visualizations, and derive meaningful insights.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "2-3 hours",
  },
  {
    id: 39,
    title: "Block Puzzle Challenge",
    description: "Solve 3D spatial reasoning puzzles to improve visualization and problem-solving skills.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "45 minutes",
  },
  {
    id: 40,
    title: "Basic Cryptography",
    description: "Learn and apply basic cryptography techniques to encode and decode messages.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "1 hour",
  },
  {
    id: 41,
    title: "Memory Enhancement Techniques",
    description: "Learn and practice memory techniques to improve retention and recall ability.",
    category: "problem-solving",
    difficulty: "Medium",
    timeEstimate: "1-2 hours",
  }
];

// Combine all challenges into one array
export const CHALLENGES: Challenge[] = [
  ...codingChallenges,
  ...fitnessChallenges,
  ...creativityChallenges,
  ...problemSolvingChallenges
];
