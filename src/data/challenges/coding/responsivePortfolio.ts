
import { CodingChallenge } from "../../types";

export const responsivePortfolioChallenge: CodingChallenge = {
  category: "coding",
  title: "Responsive Portfolio Website",
  instructions: [
    "Set up a new web project with HTML, CSS, and optional JavaScript",
    "Design a responsive navigation menu that works on mobile and desktop",
    "Create sections for: About, Skills, Projects, and Contact",
    "Implement responsive layouts using flexbox or grid",
    "Ensure all images are responsive and optimized",
    "Add interactive elements (hover effects, smooth scrolling)",
    "Test across multiple screen sizes and browsers",
    "Deploy to a free hosting service (GitHub Pages, Netlify, etc.)"
  ],
  resources: [
    {
      title: "Responsive Design Fundamentals",
      url: "https://web.dev/responsive-web-design-basics/"
    },
    {
      title: "Modern CSS Techniques",
      url: "https://css-tricks.com/modern-css-techniques-to-know-in-2022/"
    }
  ],
  verification: [
    "Website displays correctly on mobile, tablet, and desktop",
    "Navigation menu adapts appropriately to screen size",
    "Content is legible and well-organized at all breakpoints",
    "Interactive elements work as expected",
    "Site is accessible (proper alt text, keyboard navigation)",
    "Deployed version matches local development"
  ],
  tools: [
    "HTML5, CSS3, JavaScript",
    "Visual Studio Code or preferred code editor",
    "Browser developer tools",
    "Git for version control",
    "Image optimization tools"
  ],
  difficulty: "Medium",
  estimatedTime: "4-6 hours"
};
