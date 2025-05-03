
import { CodingChallenge } from "../../types/coding";

export const responsiveDashboardChallenge: CodingChallenge = {
  title: "Responsive Dashboard Design",
  category: "coding",
  instructions: [
    "Create a responsive dashboard layout that adapts to different screen sizes",
    "Implement at least 3 different data visualization components (charts, graphs, etc.)",
    "Add a sidebar navigation menu that collapses on mobile devices",
    "Use CSS Grid and Flexbox for responsive layouts",
    "Implement dark mode toggle functionality",
    "Ensure all dashboard components are fully accessible",
    "Create a responsive data table with sorting and filtering capabilities",
    "Add skeleton loading states for components that fetch data"
  ],
  resources: [
    {
      title: "Dashboard UI Design Principles",
      url: "https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c"
    },
    {
      title: "CSS Grid Layout Guide",
      url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
    },
    {
      title: "Data Visualization Best Practices",
      url: "https://www.tableau.com/learn/articles/data-visualization-best-practices"
    }
  ],
  verification: [
    "Does the dashboard layout adapt properly to mobile, tablet, and desktop screen sizes?",
    "Are all data visualization components displaying correctly?",
    "Is the sidebar navigation functional and does it collapse properly on mobile?",
    "Does the dark mode toggle work smoothly between light and dark themes?",
    "Are all interactive elements accessible via keyboard navigation?",
    "Do the data tables have proper sorting and filtering functionality?"
  ]
};
