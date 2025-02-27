
import { CodingChallenge } from "../../types";

export const chatInterfaceChallenge: CodingChallenge = {
  category: "coding",
  title: "Build a Chat Interface",
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
};
