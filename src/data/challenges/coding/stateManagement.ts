
import { CodingChallenge } from "../../types";

export const stateManagementChallenge: CodingChallenge = {
  category: "coding",
  title: "Global State Management",
  instructions: [
    "Set up a global state management solution",
    "Create actions for state modifications",
    "Implement selectors for state access",
    "Add async state updates with proper loading states",
    "Connect multiple components to the global state"
  ],
  resources: [
    {
      title: "Redux Toolkit Guide",
      url: "https://redux-toolkit.js.org/introduction/getting-started"
    },
    {
      title: "Zustand Documentation",
      url: "https://github.com/pmndrs/zustand"
    }
  ],
  verification: [
    "State updates correctly",
    "Components re-render appropriately",
    "Loading states handled properly",
    "State is persisted between page changes",
    "Developer tools show correct state transitions"
  ]
};
