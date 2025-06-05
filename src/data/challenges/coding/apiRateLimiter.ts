
import { CodingChallenge } from "../../types";

export const apiRateLimiterChallenge: CodingChallenge = {
  category: "coding",
  title: "API Rate Limiter Implementation",
  instructions: [
    "Design a flexible rate limiting system architecture",
    "Implement token bucket algorithm for rate limiting",
    "Add sliding window rate limiting as an alternative",
    "Create middleware for Express.js integration",
    "Implement Redis-based distributed rate limiting",
    "Add configurable rate limit rules (per user, per IP, per endpoint)",
    "Create rate limit headers in API responses",
    "Implement rate limit bypass for premium users",
    "Add comprehensive logging and monitoring",
    "Write unit and integration tests for all algorithms"
  ],
  tools: [
    "Node.js with Express.js",
    "Redis for distributed caching",
    "TypeScript for type safety",
    "Jest for testing",
    "Docker for Redis setup"
  ],
  resources: [
    {
      title: "Rate Limiting Algorithms Explained",
      url: "https://blog.logrocket.com/rate-limiting-node-js/"
    },
    {
      title: "Redis Rate Limiting Patterns",
      url: "https://redislabs.com/redis-best-practices/basic-rate-limiting/"
    },
    {
      title: "Building Scalable Rate Limiters",
      url: "https://konghq.com/blog/how-to-design-a-scalable-rate-limiting-algorithm"
    }
  ],
  verification: [
    "Token bucket algorithm correctly limits requests",
    "Sliding window implementation works accurately",
    "Redis integration enables distributed rate limiting",
    "Rate limit headers are properly set in responses",
    "Different rate limits apply to different user tiers",
    "System handles high concurrent request loads",
    "All edge cases are covered with comprehensive tests"
  ]
};
