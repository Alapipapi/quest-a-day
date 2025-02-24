
import { CodingChallenge } from "../../types";

export const weatherAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Build a Weather App",
  instructions: [
    "Create a weather app that fetches and displays current weather data from an API"
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
    "App successfully fetches and displays weather data",
    "Handles loading and error states",
    "Shows relevant weather information"
  ]
};
