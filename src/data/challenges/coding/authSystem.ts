
import { CodingChallenge } from "../../types";

export const authSystemChallenge: CodingChallenge = {
  category: "coding",
  title: "Authentication System",
  instructions: [
    "Set up a React project with routing",
    "Implement registration form with validation",
    "Create login functionality with JWT token storage",
    "Add password reset flow with email verification",
    "Implement protected routes for authenticated users",
    "Add logout functionality",
    "Test all authentication flows"
  ],
  resources: [
    {
      title: "JWT Authentication Guide",
      url: "https://blog.logrocket.com/jwt-authentication-best-practices/"
    },
    {
      title: "React Auth Patterns",
      url: "https://kentcdodds.com/blog/authentication-in-react-applications"
    }
  ],
  verification: [
    "User can register with email validation",
    "Login works correctly with token storage",
    "Password reset flow is functional",
    "Protected routes block unauthorized access",
    "Logout clears authentication state",
    "Forms include proper validation"
  ]
};
