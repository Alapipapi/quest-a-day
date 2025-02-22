
import { StepDetails } from "../types";

export const codingSteps: StepDetails[] = [
  {
    title: "Build a Weather App",
    instructions: [
      "Set up a new React project",
      "Create components for weather display",
      "Integrate with a weather API",
      "Handle API responses and errors",
      "Style the weather interface"
    ],
    resources: [
      {
        title: "OpenWeather API Documentation",
        url: "https://openweathermap.org/api"
      },
      {
        title: "React API Integration Guide",
        url: "https://react.dev/learn/synchronizing-with-effects"
      }
    ],
    verification: [
      "API integration works",
      "Weather data displays correctly",
      "Error handling implemented",
      "Responsive design works"
    ]
  },
  {
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
  },
  {
    title: "Chat Interface",
    instructions: [
      "Create the basic chat interface layout",
      "Implement CSS Grid/Flexbox for message layout",
      "Style message bubbles for sender and receiver",
      "Add input field for new messages",
      "Implement message sending functionality"
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
      "Input field is positioned correctly",
      "Messages can be sent"
    ]
  },
  {
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
  }
];
