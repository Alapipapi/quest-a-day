import { ProblemSolvingChallenge } from "../../types";

export const systemDesignChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "System Design Challenge",
  instructions: [
    "Choose a real-world system to design (e.g., URL shortener, chat app, social media feed)",
    "Define functional requirements (what the system should do)",
    "Identify non-functional requirements (scale, performance, availability)",
    "Design high-level architecture with major components",
    "Choose appropriate databases and justify your decisions",
    "Plan for scalability using load balancers, caching, CDNs",
    "Design data models and API endpoints",
    "Consider security, monitoring, and disaster recovery",
    "Create diagrams to visualize your architecture"
  ],
  examples: [
    "Design a URL shortener like bit.ly",
    "Create architecture for a messaging system",
    "Plan a distributed cache system",
    "Design a social media newsfeed"
  ],
  resources: [
    {
      title: "System Design Interview Guide",
      url: "https://github.com/donnemartin/system-design-primer"
    },
    {
      title: "High Scalability Blog",
      url: "http://highscalability.com/"
    },
    {
      title: "System Design Interview Questions",
      url: "https://leetcode.com/discuss/interview-question/system-design"
    },
    {
      title: "Designing Data-Intensive Applications",
      url: "https://dataintensive.net/"
    },
    {
      title: "AWS Architecture Center",
      url: "https://aws.amazon.com/architecture/"
    }
  ],
  verification: [
    "Architecture handles specified scale requirements",
    "Clear separation of concerns between components",
    "Database choices align with data access patterns",
    "Scalability plan addresses potential bottlenecks",
    "Security considerations are properly addressed"
  ]
};
