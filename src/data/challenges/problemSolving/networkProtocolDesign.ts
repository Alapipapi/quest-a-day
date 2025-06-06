
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
      url: "https://www.ncsc.gov.uk/whitepaper/protocol-design-principles"
    },
    {
      title: "OSI Model Reference",
      url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"
    },
    {
      title: "Protocol Specification Writing Guide",
      url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://dipl.nt.gov.au/__data/assets/pdf_file/0020/234155/specification-writing-guide.pdf&ved=2ahUKEwjBwoHqj9yNAxVUR2cHHSm_JI8QFnoECCQQAQ&usg=AOvVaw1F5PAPZJASxumPkh5H-X8_"
    },
    {
      title: "Network Security Best Practices",
      url: "https://www.netwrix.com/network_security_best_practices.html"
    },
    {
      title: "TCP/IP Protocol Suite Analysis",
      url: "https://www.linkedin.com/pulse/tcpip-protocol-suite-design-implementation-dynamics-hani-fahmi-z24xe"
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
