
import { CodingChallenge } from "../../types";

export const realtimeChatAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Real-time Chat Application",
  instructions: [
    "Set up a React application with WebSocket support",
    "Create user authentication and registration system",
    "Design the chat interface with message history",
    "Implement real-time message sending and receiving",
    "Add user presence indicators (online/offline status)",
    "Include typing indicators for active conversations",
    "Add support for multiple chat rooms or channels",
    "Implement message timestamps and read receipts",
    "Test the application with multiple users simultaneously"
  ],
  tools: [
    "React with TypeScript",
    "WebSocket API or Socket.io",
    "Node.js backend (or WebSocket service)",
    "CSS framework (Tailwind, Material-UI, etc.)",
    "State management (Redux, Zustand, or Context API)"
  ],
  resources: [
    {
      title: "WebSocket API Documentation",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"
    },
    {
      title: "Socket.io Getting Started",
      url: "https://socket.io/get-started/chat"
    },
    {
      title: "React WebSocket Integration",
      url: "https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8fe7c9e65dc3/"
    }
  ],
  verification: [
    "Messages appear instantly for all connected users",
    "User authentication works correctly",
    "Online/offline status updates in real-time",
    "Typing indicators function properly",
    "Message history persists and loads correctly",
    "Application handles connection drops gracefully",
    "Multiple chat rooms work independently"
  ]
};
