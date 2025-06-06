
import { ProblemSolvingChallenge } from "../../types";

export const networkProtocolDesignChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Network Protocol Design",
  instructions: [
    "Define the specific use case and requirements for your protocol",
    "Identify the target network layer (application, transport, network, or data link)",
    "Design the message format including headers, payload structure, and metadata",
    "Specify addressing and routing mechanisms for message delivery",
    "Plan error detection and correction strategies",
    "Design connection establishment and termination procedures",
    "Implement flow control and congestion management mechanisms",
    "Define security measures including encryption and authentication",
    "Create protocol state machines and timing specifications",
    "Document the protocol specification with clear examples and use cases"
  ],
  examples: [
    "Design a protocol for IoT device communication",
    "Create a custom messaging protocol for gaming applications",
    "Develop a file transfer protocol with resume capabilities",
    "Design a protocol for real-time collaborative editing"
  ],
  resources: [
    {
      title: "Network Protocol Design Principles",
      url: "https://tools.ietf.org/html/rfc1958"
    },
    {
      title: "OSI Model Reference",
      url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"
    },
    {
      title: "Protocol Specification Writing Guide",
      url: "https://www.ietf.org/standards/rfcs/"
    },
    {
      title: "Network Security Best Practices",
      url: "https://www.nist.gov/cybersecurity"
    },
    {
      title: "TCP/IP Protocol Suite Analysis",
      url: "https://www.rfc-editor.org/rfc/rfc793.html"
    }
  ],
  verification: [
    "Protocol addresses all specified functional requirements",
    "Message format is clearly defined with proper field specifications",
    "Error handling and recovery mechanisms are comprehensive",
    "Security considerations are appropriately addressed",
    "Protocol specification is complete and implementable",
    "Performance characteristics meet the intended use case requirements"
  ]
};
