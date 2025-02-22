
import { StepDetails } from "../types";

export const codingSteps: StepDetails[] = [
  {
    title: "Set up your development environment",
    instructions: [
      "Install Visual Studio Code from https://code.visualstudio.com",
      "Install Git from https://git-scm.com",
      "Create a new folder for your project",
      "Open the folder in VS Code"
    ],
    resources: [
      {
        title: "Download Visual Studio Code",
        url: "https://code.visualstudio.com/download"
      },
      {
        title: "Download Git",
        url: "https://git-scm.com/downloads"
      },
      {
        title: "Git Basic Commands Cheatsheet",
        url: "https://education.github.com/git-cheat-sheet-education.pdf"
      }
    ],
    verification: [
      "VS Code is installed and running",
      "Git is installed (run 'git --version' in terminal)",
      "Project folder is created and open in VS Code"
    ]
  },
  {
    title: "Create a new project and initialize dependencies",
    instructions: [
      "Open terminal in VS Code (Ctrl+`)",
      "Run 'npm create vite@latest'",
      "Choose React + TypeScript template",
      "Navigate to project directory",
      "Run 'npm install'"
    ],
    resources: [
      {
        title: "Vite Documentation",
        url: "https://vitejs.dev/guide/"
      },
      {
        title: "npm Basics Guide",
        url: "https://docs.npmjs.com/getting-started"
      }
    ],
    verification: [
      "package.json exists in your project",
      "node_modules folder is created",
      "Project runs with 'npm run dev'"
    ]
  },
  // New coding challenges
  {
    title: "Build a Todo List App - Setup",
    instructions: [
      "Create a new React component for the Todo List",
      "Set up state management using useState",
      "Create an input field for new todos",
      "Implement basic add todo functionality"
    ],
    resources: [
      {
        title: "React useState Hook Documentation",
        url: "https://react.dev/reference/react/useState"
      },
      {
        title: "Local Storage API Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
      }
    ],
    verification: [
      "Component renders without errors",
      "Input field works correctly",
      "Can add new todos to the list"
    ]
  },
  {
    title: "Chat Interface - Layout Design",
    instructions: [
      "Create the basic chat interface layout",
      "Implement CSS Grid/Flexbox for message layout",
      "Style message bubbles for sender and receiver",
      "Add input field for new messages"
    ],
    resources: [
      {
        title: "CSS Grid Guide",
        url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
      },
      {
        title: "Flexbox Guide",
        url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
      }
    ],
    verification: [
      "Layout is responsive",
      "Messages are properly aligned",
      "Input field is positioned correctly"
    ]
  },
  {
    title: "API Client - Data Fetching",
    instructions: [
      "Choose a public API to work with",
      "Set up axios or fetch for API calls",
      "Create data interfaces for API response",
      "Implement error handling and loading states"
    ],
    resources: [
      {
        title: "Public APIs Directory",
        url: "https://github.com/public-apis/public-apis"
      },
      {
        title: "React Query Documentation",
        url: "https://tanstack.com/query/latest"
      }
    ],
    verification: [
      "Successfully fetches data from API",
      "Handles errors gracefully",
      "Shows loading state while fetching"
    ]
  }
];
