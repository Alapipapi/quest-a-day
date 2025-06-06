
import { CodingChallenge } from "../../types";

export const taskManagerAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Task Manager App",
  instructions: [
    "Set up a new React project with TypeScript and Tailwind CSS",
    "Create components for task list, task item, and add task form",
    "Implement local storage to persist tasks between sessions",
    "Add functionality to create, edit, delete, and mark tasks as complete",
    "Include task categories and priority levels (High, Medium, Low)",
    "Add search and filter functionality by status and category",
    "Implement drag-and-drop to reorder tasks",
    "Create responsive design that works on mobile and desktop",
    "Add dark mode toggle with theme persistence",
    "Include task statistics dashboard showing completion rates"
  ],
  tools: [
    "React with TypeScript",
    "Tailwind CSS for styling",
    "React DnD for drag-and-drop",
    "Local Storage API",
    "React hooks (useState, useEffect, useContext)"
  ],
  resources: [
    {
      title: "React TypeScript Tutorial",
      url: "https://react-typescript-cheatsheet.netlify.app/"
    },
    {
      title: "React DnD Documentation",
      url: "https://react-dnd.github.io/react-dnd/about"
    },
    {
      title: "Local Storage Best Practices",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
    }
  ],
  verification: [
    "Tasks can be created, edited, and deleted successfully",
    "Local storage persists data across browser sessions",
    "Search and filtering work accurately",
    "Drag-and-drop reordering functions properly",
    "Responsive design works on all screen sizes",
    "Dark mode toggle works and persists user preference"
  ]
};
