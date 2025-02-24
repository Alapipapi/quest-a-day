
import { CodingChallenge } from "../../types";

export const apiClientChallenge: CodingChallenge = {
  category: "coding",
  title: "API Client",
  instructions: [
    "Create a reusable API client with error handling and data caching"
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
    "Successfully fetches data",
    "Handles errors gracefully",
    "Implements caching"
  ]
};
