import { CodingChallenge } from "../../types";

export const formValidationHelperChallenge: CodingChallenge = {
  category: "coding",
  title: "Form Validation Helper",
  instructions: [
    "Create a reusable form validation component",
    "Implement real-time validation for email, password, and text fields",
    "Add visual indicators for valid and invalid states",
    "Display helpful error messages below each field",
    "Include password strength indicator with visual feedback",
    "Add form submission validation with error summary",
    "Implement debounced validation to avoid excessive API calls",
    "Create custom validation rules for different field types"
  ],
  tools: [
    "React or vanilla JavaScript",
    "HTML5 form validation API",
    "CSS for styling validation states",
    "Regular expressions for pattern matching"
  ],
  resources: [
    {
      title: "Form Validation Guide",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
    },
    {
      title: "JavaScript Form Validation",
      url: "https://www.w3schools.com/js/js_validation.asp"
    },
    {
      title: "UX Patterns for Form Validation",
      url: "https://uxplanet.org/designing-more-efficient-forms-structure-inputs-labels-and-actions-e3a47007114f"
    }
  ],
  verification: [
    "Validation triggers appropriately on input events",
    "Error messages are clear and helpful",
    "Visual feedback clearly indicates field status",
    "Form prevents submission when validation fails",
    "Password strength indicator works accurately",
    "Component is reusable across different forms"
  ]
};