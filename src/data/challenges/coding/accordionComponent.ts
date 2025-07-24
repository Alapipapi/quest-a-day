import { CodingChallenge } from "../../types";

export const accordionComponentChallenge: CodingChallenge = {
  category: "coding",
  title: "Accordion Component",
  instructions: [
    "Create an accordion component with expandable/collapsible sections",
    "Implement smooth open and close animations using CSS transitions",
    "Add keyboard navigation support (arrow keys, Enter, Space)",
    "Include click handlers for expanding and collapsing sections",
    "Support both single and multiple section expansion modes",
    "Add ARIA attributes for accessibility compliance",
    "Style with modern design and clear visual hierarchy",
    "Make the component reusable with props for content and behavior"
  ],
  tools: [
    "React or vanilla JavaScript",
    "CSS3 (transitions, transforms)",
    "HTML5 semantic elements",
    "ARIA attributes for accessibility"
  ],
  resources: [
    {
      title: "Accordion Pattern Accessibility",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"
    },
    {
      title: "CSS Transitions Guide",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions"
    },
    {
      title: "Keyboard Event Handling",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent"
    }
  ],
  verification: [
    "Accordion expands and collapses smoothly",
    "Keyboard navigation works properly",
    "ARIA attributes are correctly implemented",
    "Component supports both single and multiple expansion",
    "Visual feedback clearly indicates expanded state",
    "Component is reusable and customizable"
  ]
};