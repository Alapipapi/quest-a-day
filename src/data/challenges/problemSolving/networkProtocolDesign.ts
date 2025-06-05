
import { ProblemSolvingChallenge } from "../../types";

export const networkProtocolDesignChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Network Protocol Design",
  instructions: [
    "Identify a specific use case requiring custom network communication",
    "Define the protocol's objectives and performance requirements",
    "Design the message format and packet structure",
    "Specify connection establishment and termination procedures",
    "Plan error handling and recovery mechanisms",
    "Consider security requirements and authentication methods",
    "Design flow control and congestion management",
    "Create documentation with protocol specifications",
    "Test your protocol design with sample scenarios"
  ],
  resources: [
    {
      title: "Network Protocol Design Principles",
      url: "https://www.ietf.org/standards/process/"
    },
    {
      title: "TCP/IP Protocol Suite Reference",
      url: "https://tools.ietf.org/html/rfc793"
    },
    {
      title: "Protocol Security Considerations",
      url: "https://tools.ietf.org/html/rfc3552"
    }
  ],
  verification: [
    "Protocol serves the intended use case effectively",
    "Message format is well-defined and efficient",
    "Error handling covers common failure scenarios",
    "Security mechanisms are appropriate for the context",
    "Documentation is clear and comprehensive",
    "Design handles edge cases and scalability concerns"
  ]
};
