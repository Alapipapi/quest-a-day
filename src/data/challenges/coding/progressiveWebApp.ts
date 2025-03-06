
import { CodingChallenge } from "../../types";

export const progressiveWebAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Progressive Web App",
  instructions: [
    "Assess an existing web application",
    "Create a web app manifest with app icons",
    "Implement a service worker for caching",
    "Set up offline functionality",
    "Add install prompts and support",
    "Test PWA functionality across devices",
    "Audit performance with Lighthouse"
  ],
  resources: [
    {
      title: "PWA Introduction",
      url: "https://web.dev/learn/pwa/"
    },
    {
      title: "Service Worker Guide",
      url: "https://developers.google.com/web/fundamentals/primers/service-workers"
    }
  ],
  verification: [
    "Web app manifest is properly configured",
    "Service worker successfully caches assets",
    "Application works offline",
    "Install prompt appears on supporting devices",
    "Lighthouse PWA score of at least 90",
    "Smooth user experience across devices"
  ]
};
