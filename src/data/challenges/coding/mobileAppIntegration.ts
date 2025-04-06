
import { CodingChallenge } from "../../types";

export const mobileAppIntegrationChallenge: CodingChallenge = {
  category: "coding",
  title: "Mobile App Integration",
  instructions: [
    "Set up a responsive web application with mobile-first design",
    "Implement device-specific features (camera, location, etc.)",
    "Create a responsive layout that adapts to various screen sizes",
    "Add touch-friendly UI components and interactions",
    "Test on multiple device sizes and orientations",
    "Implement offline functionality with service workers"
  ],
  resources: [
    {
      title: "Responsive Web Design Guide",
      url: "https://web.dev/articles/responsive-web-design-basics"
    },
    {
      title: "Mobile Web API References",
      url: "https://developer.android.com/reference"
    }
  ],
  verification: [
    "Application works on both desktop and mobile devices",
    "Successfully implements device APIs",
    "UI components are touch-friendly and responsive",
    "Layout adjusts correctly across different screen sizes",
    "Basic offline functionality works as expected"
  ],
  examples: [
    "Photo sharing app with camera integration",
    "Location-based service finder",
    "Offline-capable note-taking app"
  ]
};
