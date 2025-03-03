
import { CodingChallenge } from "../../types";

export const responsiveDesignChallenge: CodingChallenge = {
  category: "coding",
  title: "Responsive Design Challenge",
  instructions: [
    "Create a responsive webpage that looks good on all devices",
    "Implement mobile-first design principles",
    "Use CSS media queries for breakpoints",
    "Ensure proper image scaling and text readability",
    "Test on at least three different viewport sizes"
  ],
  resources: [
    {
      title: "Responsive Web Design Fundamentals",
      url: "https://web.dev/responsive-web-design-basics/"
    },
    {
      title: "CSS Media Queries Guide",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
    }
  ],
  verification: [
    "Layout adapts to different screen sizes",
    "No horizontal scrolling on mobile",
    "Text remains readable at all sizes",
    "Images scale appropriately",
    "Navigation is usable on all devices"
  ]
};
