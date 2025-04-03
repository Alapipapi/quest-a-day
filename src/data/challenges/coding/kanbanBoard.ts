
import { CodingChallenge } from "../../types";

export const kanbanBoardChallenge: CodingChallenge = {
  category: "coding",
  title: "Build a Kanban Board",
  instructions: [
    "Set up a new React project with React DnD dependency",
    "Create components for Board, Column, and Task",
    "Implement drag-and-drop functionality for tasks",
    "Add the ability to create, edit, and delete tasks",
    "Implement task persistence using local storage",
    "Style the board with a clean, user-friendly interface"
  ],
  resources: [
    {
      title: "React DnD Documentation",
      url: "https://react-dnd.github.io/react-dnd/docs/overview"
    },
    {
      title: "Kanban Board UI Design Inspiration",
      url: "https://dribbble.com/tags/kanban"
    }
  ],
  verification: [
    "Tasks can be dragged between columns",
    "New tasks can be added to any column",
    "Tasks persist after page reload",
    "UI is responsive and user-friendly"
  ]
};
