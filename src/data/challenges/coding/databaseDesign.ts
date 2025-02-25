
import { CodingChallenge } from "../../types";

export const databaseDesignChallenge: CodingChallenge = {
  category: "coding",
  title: "Database Design Challenge",
  instructions: [
    "Analyze social media app requirements",
    "Identify entities and relationships",
    "Create ERD diagram",
    "Define table structures and relationships",
    "Document constraints and indexes"
  ],
  resources: [
    {
      title: "Database Design Fundamentals",
      url: "https://www.postgresql.org/docs/current/tutorial-design.html"
    },
    {
      title: "Normalization Guide",
      url: "https://www.guru99.com/database-normalization.html"
    }
  ],
  verification: [
    "Schema is properly normalized",
    "Relationships are correct",
    "Indexes are optimized",
    "Documentation is complete"
  ]
};
