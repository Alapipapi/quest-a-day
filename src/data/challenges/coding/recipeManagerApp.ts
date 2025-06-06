
import { CodingChallenge } from "../../types";

export const recipeManagerAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Recipe Manager App",
  instructions: [
    "Set up a React application with routing for different pages",
    "Create a recipe database structure with ingredients, instructions, and metadata",
    "Build a recipe list view with search and filtering capabilities",
    "Design a detailed recipe view with ingredients and step-by-step instructions",
    "Implement add/edit recipe functionality with form validation",
    "Create category management (breakfast, lunch, dinner, dessert, etc.)",
    "Add a meal planning feature to schedule recipes for different days",
    "Implement local storage or database integration for data persistence",
    "Include recipe rating and favorite functionality",
    "Add ingredient shopping list generation from selected recipes"
  ],
  tools: [
    "React with TypeScript",
    "React Router for navigation",
    "Local Storage or Supabase for data",
    "Form libraries like React Hook Form",
    "UI component library (shadcn/ui)"
  ],
  resources: [
    {
      title: "React Router Documentation",
      url: "https://reactrouter.com/home"
    },
    {
      title: "React Hook Form Guide",
      url: "https://react-hook-form.com/get-started"
    },
    {
      title: "Local Storage Best Practices",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
    },
    {
      title: "Recipe Schema.org Guidelines",
      url: "https://schema.org/Recipe"
    },
    {
      title: "Supabase Documentation",
      url: "https://supabase.com/docs"
    }
  ],
  verification: [
    "Users can add, edit, and delete recipes",
    "Search functionality works across recipe names and ingredients",
    "Category filtering is implemented and functional",
    "Meal planning calendar is interactive and saves selections",
    "Shopping list generates correctly from selected recipes",
    "Data persists between browser sessions",
    "Application is responsive and user-friendly"
  ]
};
