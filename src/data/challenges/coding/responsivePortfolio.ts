
import { CodingChallenge } from "../../types";

export const responsivePortfolioChallenge: CodingChallenge = {
  category: "coding",
  title: "Responsive Portfolio Website",
  instructions: [
    "Design and build a responsive portfolio website",
    "Include a hero section with your name and brief introduction",
    "Create an about section with your skills and background",
    "Build a projects section showcasing your work with descriptions",
    "Add a contact section with a form or contact information",
    "Implement responsive design that works on mobile, tablet, and desktop",
    "Ensure proper accessibility features are implemented",
    "Test the site on multiple devices and browsers"
  ],
  resources: [
    {
      title: "Responsive Web Design Fundamentals",
      url: "https://web.dev/responsive-web-design-basics/"
    },
    {
      title: "Portfolio Website Examples",
      url: "https://www.sitebuilderreport.com/inspiration/portfolio-websites"
    },
    {
      title: "CSS Media Queries",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
    }
  ],
  verification: [
    "Website is fully responsive across different screen sizes",
    "All sections (hero, about, projects, contact) are present",
    "Site passes basic accessibility tests",
    "Design is visually appealing and professional",
    "Navigation is intuitive and functional"
  ],
  examples: [
    "Personal developer portfolio with project gallery",
    "Design portfolio with case studies",
    "Photography portfolio with image galleries",
    "Writing portfolio with article samples"
  ],
  tools: [
    "HTML5 and CSS3",
    "JavaScript (optional)",
    "Responsive framework like Bootstrap or Tailwind CSS",
    "Git for version control",
    "Browser developer tools for testing",
    "Accessibility evaluation tools"
  ]
};
