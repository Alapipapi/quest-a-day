
import { CodingChallenge } from "../../types";

export const markdownEditorChallenge: CodingChallenge = {
  category: "coding",
  title: "Create a Markdown Editor",
  instructions: [
    "Set up a new React project with a simple layout",
    "Create a split-screen interface with editor and preview panels",
    "Add a textarea for markdown input",
    "Integrate a markdown parser library",
    "Display live-rendered markdown in the preview panel",
    "Implement basic styling for the rendered markdown",
    "Add buttons for common markdown formatting (bold, italic, headers)",
    "Ensure the editor is responsive across device sizes"
  ],
  resources: [
    {
      title: "Markdown Syntax Guide",
      url: "https://www.markdownguide.org/basic-syntax/"
    },
    {
      title: "React Markdown Libraries",
      url: "https://github.com/remarkjs/react-markdown"
    }
  ],
  verification: [
    "Editor updates preview in real-time",
    "Markdown renders correctly with proper formatting",
    "Interface is intuitive and responsive",
    "Formatting buttons work as expected"
  ]
};
