
import { CodingChallenge } from "../../types";

export const apiClientChallenge: CodingChallenge = {
  category: "coding",
  title: "API Client",
  instructions: [
    "Choose a public API to work with",
    "Set up axios or fetch for API calls",
    "Create data interfaces for API response",
    "Implement error handling and loading states",
    "Add data caching"
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
    "Shows loading state while fetching",
    "Implements data caching"
  ]
};
