
import { CodingChallenge } from "../../types";

export const mobileFirstWebsiteChallenge: CodingChallenge = {
  category: "coding",
  title: "Build a Mobile-First Website",
  instructions: [
    "Plan your website structure with mobile users as priority",
    "Create a responsive layout using CSS Grid and Flexbox",
    "Implement mobile navigation (hamburger menu)",
    "Optimize images and assets for mobile devices",
    "Test on multiple viewport sizes",
    "Add progressive enhancement for larger screens"
  ],
  resources: [
    {
      title: "Mobile-First Design Guide",
      url: "https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/"
    },
    {
      title: "Responsive Design Patterns",
      url: "https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns"
    }
  ],
  verification: [
    "Website works well on mobile devices",
    "Navigation is accessible on small screens",
    "Content is properly prioritized",
    "Layout adapts smoothly to larger screens",
    "Performance is optimized for mobile"
  ]
};
