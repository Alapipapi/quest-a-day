
import { CodingChallenge } from "../../types/coding";

export const databaseSchemaOptimizationChallenge: CodingChallenge = {
  title: "Database Schema Optimization",
  category: "coding",
  instructions: [
    "Analyze the provided database schema, identifying potential issues with normalization, indexing, and relationships",
    "Create an optimized version of the schema that addresses the identified issues",
    "Document all changes made and explain the reasoning behind each optimization",
    "Implement performance testing to measure improvements gained from the optimizations",
    "Create a migration plan that shows how to transition from the original schema to the optimized version with minimal downtime"
  ],
  resources: [
    {
      title: "Database Normalization Guide",
      url: "https://guides.visual-paradigm.com/a-comprehensive-guide-to-database-normalization-with-examples/"
    },
    {
      title: "Indexing Best Practices",
      url: "https://use-the-index-luke.com/"
    },
    {
      title: "Database Performance Optimization Techniques",
      url: "https://www.cockroachlabs.com/blog/sql-performance-best-practices/"
    }
  ],
  verification: [
    "Did you identify all major issues in the original schema?",
    "Does your optimized schema address normalization problems?",
    "Have you added appropriate indexes to improve query performance?",
    "Did you document the reasoning behind each optimization?",
    "Does your migration plan minimize application downtime?"
  ]
};
