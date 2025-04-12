
import { CodingChallenge } from "../../types";

export const microservicesArchitectureChallenge: CodingChallenge = {
  category: "coding",
  title: "Microservices Architecture Design",
  instructions: [
    "Analyze a monolithic application and identify components for microservices",
    "Design the architecture for 3-5 microservices with clear responsibilities",
    "Create API contracts for service-to-service communication",
    "Design a data management strategy (shared vs isolated databases)",
    "Implement service discovery and communication patterns",
    "Create diagrams showing the system architecture",
    "Document potential failure modes and recovery strategies",
    "Include security considerations for inter-service communication"
  ],
  resources: [
    {
      title: "Microservices Patterns",
      url: "https://microservices.io/patterns/index.html"
    },
    {
      title: "Designing Resilient Systems",
      url: "https://cloud.google.com/compute/docs/tutorials/robustsystems"
    }
  ],
  verification: [
    "Clear separation of concerns between services",
    "Well-defined API contracts between services",
    "Appropriate data management strategy",
    "Consideration of service discovery and communication",
    "Documentation of failure modes and recovery strategies",
    "Security considerations addressed"
  ],
  examples: [
    "E-commerce platform decomposed into catalog, cart, payment, and shipping services",
    "Content management system with separate authoring, publishing, and delivery services",
    "Financial application with account, transaction, and reporting microservices"
  ]
};
