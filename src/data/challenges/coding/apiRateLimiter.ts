
import { CodingChallenge } from "../../types";

export const apiRateLimiterChallenge: CodingChallenge = {
  category: "coding",
  title: "API Rate Limiter Implementation",
  instructions: [
    "Create a rate limiter class using token bucket algorithm",
    "Implement sliding window rate limiting as alternative approach",
    "Add configuration for different rate limits per endpoint",
    "Create middleware to integrate with Express.js or similar",
    "Implement Redis-based distributed rate limiting",
    "Add rate limit headers in API responses",
    "Create admin interface to monitor and adjust limits",
    "Add comprehensive error handling and logging"
  ],
  tools: ["Node.js", "Redis", "Express.js", "TypeScript"],
  verification: [
    "Rate limiting blocks requests after threshold",
    "Different endpoints have independent limits",
    "Rate limit resets correctly after time window",
    "Distributed setup works across multiple servers",
    "Proper HTTP status codes and headers returned"
  ]
};
