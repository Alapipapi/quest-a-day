
import { CodingChallenge } from "../../types";

export const graphqlIntegrationChallenge: CodingChallenge = {
  category: "coding",
  title: "GraphQL API Integration",
  instructions: [
    "Set up a React application with Apollo Client",
    "Connect to a GraphQL API endpoint",
    "Implement query operations for data fetching",
    "Add mutation operations for data modification",
    "Implement optimistic UI updates",
    "Handle loading and error states",
    "Set up proper caching strategies"
  ],
  resources: [
    {
      title: "Apollo Client Documentation",
      url: "https://www.apollographql.com/docs/react/"
    },
    {
      title: "GraphQL Basics",
      url: "https://graphql.org/learn/"
    }
  ],
  verification: [
    "Successfully fetches data with GraphQL queries",
    "Mutations correctly update server data",
    "Implements optimistic UI for better UX",
    "Properly handles loading states",
    "Error handling is implemented",
    "Cache is configured appropriately"
  ]
};
