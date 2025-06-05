
import { CodingChallenge } from "../../types";

export const recipeManagerAppChallenge: CodingChallenge = {
  category: "coding",
  title: "Recipe Manager App",
  instructions: [
    "Design a comprehensive recipe management system",
    "Create components for recipe cards, detailed views, and forms",
    "Implement search functionality with filters by ingredients, cuisine, or dietary restrictions",
    "Add categorization system for organizing recipes",
    "Build a meal planning feature for weekly menu creation",
    "Include shopping list generation based on selected recipes",
    "Add user ratings and reviews for recipes",
    "Implement data persistence using local storage or a database"
  ],
  resources: [
    {
      title: "Recipe API for Sample Data",
      url: "https://spoonacular.com/food-api"
    },
    {
      title: "Meal Planning App Design Inspiration",
      url: "https://dribbble.com/shots/15234567-Recipe-App-Design"
    },
    {
      title: "Local Storage Best Practices",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
    }
  ],
  verification: [
    "Users can add, edit, and delete recipes",
    "Search and filtering work accurately",
    "Meal planning interface is intuitive",
    "Shopping lists generate correctly",
    "Data persists between sessions",
    "App is responsive on all devices"
  ]
};
