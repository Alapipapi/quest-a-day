
import { CodingChallenge } from "../../types";

export const weatherAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Build a Weather App",
  instructions: [
    "Set up a new React project",
    "Create components for weather display",
    "Integrate with a weather API",
    "Handle API responses and errors",
    "Style the weather interface"
  ],
  resources: [
    {
      title: "OpenWeather API Documentation",
      url: "https://openweathermap.org/api"
    },
    {
      title: "React API Integration Guide",
      url: "https://react.dev/learn/synchronizing-with-effects"
    }
  ],
  verification: [
    "API integration works",
    "Weather data displays correctly",
    "Error handling implemented",
    "Responsive design works"
  ]
};
