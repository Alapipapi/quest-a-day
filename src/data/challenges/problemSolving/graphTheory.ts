
import { ProblemSolvingChallenge } from "../../types";

export const graphTheoryChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Graph Theory Problems",
  instructions: [
    "Review basic graph theory concepts (vertices, edges, paths)",
    "Understand common algorithms like breadth-first and depth-first search",
    "Solve a shortest path problem using Dijkstra's algorithm",
    "Implement a minimum spanning tree algorithm",
    "Apply your solutions to a real-world network problem"
  ],
  resources: [
    {
      title: "Graph Theory Basics",
      url: "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs"
    },
    {
      title: "Interactive Graph Algorithm Visualizations",
      url: "https://visualgo.net/en/graphds"
    }
  ],
  verification: [
    "Correctly implemented graph representations",
    "Successfully applied search algorithms",
    "Found correct shortest paths",
    "Applied concepts to real-world problem"
  ],
  examples: [
    "Find the shortest path through a city network",
    "Design an efficient network layout for a company",
    "Solve the traveling salesman problem for a delivery route"
  ]
};
