
import { CodingChallenge } from "../../types";

export const todoAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Build a Todo List App",
  instructions: [
    "Create a new React component for the Todo List",
    "Set up state management using useState",
    "Create an input field for new todos",
    "Implement basic add todo functionality",
    "Add delete and complete functionality"
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
    "Can add new todos to the list",
    "Can mark todos as complete"
  ]
};
