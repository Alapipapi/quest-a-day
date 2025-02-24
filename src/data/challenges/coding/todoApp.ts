
import { CodingChallenge } from "../../types";

export const todoAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Build a Todo List App",
  instructions: [
    "Create a todo list app with add, complete, and delete functionality"
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
    "Can add new todos",
    "Can mark todos as complete",
    "Can delete todos"
  ]
};
