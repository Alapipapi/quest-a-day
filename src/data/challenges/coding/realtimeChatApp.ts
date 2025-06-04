
import { CodingChallenge } from "../../types";

export const realtimeChatAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Real-time Chat Application",
  instructions: [
    "Set up a React application with WebSocket connection",
    "Create a message input component with send functionality",
    "Implement real-time message display with user identification",
    "Add typing indicators when users are composing messages",
    "Create user online/offline status indicators",
    "Implement message timestamps and formatting",
    "Add emoji picker or basic markdown support",
    "Handle connection errors and reconnection logic"
  ],
  tools: ["React", "WebSocket API", "CSS/Tailwind", "TypeScript"],
  verification: [
    "Messages appear instantly for all connected users",
    "Typing indicators work correctly",
    "User status updates in real-time",
    "Connection handles interruptions gracefully",
    "Message history persists during session"
  ]
};
