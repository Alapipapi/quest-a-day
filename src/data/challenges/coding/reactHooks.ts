
import { CodingChallenge } from "../../types";

export const reactHooksChallenge: CodingChallenge = {
  category: "coding",
  title: "Master React Hooks",
  instructions: [
    "Implement a custom useFetch hook",
    "Create a component that uses useState for form state",
    "Use useEffect for data fetching and cleanup",
    "Implement useContext for theme toggling",
    "Create a useReducer for complex state management"
  ],
  resources: [
    {
      title: "React Hooks Documentation",
      url: "https://reactjs.org/docs/hooks-intro.html"
    },
    {
      title: "Custom Hooks Guide",
      url: "https://usehooks.com/"
    }
  ],
  verification: [
    "Custom hooks work correctly",
    "Components use hooks properly",
    "No memory leaks in useEffect",
    "Context properly distributes theme",
    "Reducer handles state transitions correctly"
  ]
};
