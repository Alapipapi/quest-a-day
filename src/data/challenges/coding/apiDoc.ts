
import { CodingChallenge } from "../../types";

export const apiDocChallenge: CodingChallenge = {
  category: "coding",
  title: "API Documentation",
  instructions: [
    "Set up a new OpenAPI/Swagger documentation project",
    "Document API endpoints including paths, methods, and parameters",
    "Add request/response examples for each endpoint",
    "Include authentication requirements and error responses",
    "Generate and review the documentation"
  ],
  resources: [
    {
      title: "OpenAPI Specification",
      url: "https://swagger.io/specification/"
    },
    {
      title: "API Documentation Best Practices",
      url: "https://swagger.io/blog/api-documentation/best-practices-in-api-documentation/"
    }
  ],
  verification: [
    "Documentation is complete and accurate",
    "All endpoints are properly documented",
    "Examples are clear and helpful",
    "Generated documentation is readable"
  ]
};
