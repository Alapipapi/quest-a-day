
import { CodingChallenge } from "../../types";

export const formValidationHelperChallenge: CodingChallenge = {
  category: "coding",
  title: "Form Validation Helper",
  instructions: [
    "Create a reusable form validation component in React",
    "Implement real-time validation for email, password, and required fields",
    "Add custom validation rules support",
    "Display error messages below each field",
    "Show success states when validation passes",
    "Create a demo form showcasing all validation features"
  ],
  resources: [
    {
      title: "React Hook Form Documentation",
      url: "https://react-hook-form.com/get-started"
    },
    {
      title: "Form Validation Best Practices",
      url: "https://uxdesign.cc/form-validation-best-practices-8e3bec7d0549"
    }
  ],
  verification: [
    "Form validates input in real-time",
    "Error messages are clear and helpful",
    "Success states are visually distinct",
    "Component is reusable across different forms",
    "Validation rules are customizable"
  ]
};
