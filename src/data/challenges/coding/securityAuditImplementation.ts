
import { CodingChallenge } from "../../types/coding";

export const securityAuditImplementationChallenge: CodingChallenge = {
  title: "Security Audit Implementation",
  category: "coding",
  instructions: [
    "Complete a security audit of a web application, identifying common vulnerabilities",
    "Document all security issues found, categorized by risk level and potential impact",
    "Implement fixes for at least 5 of the identified security vulnerabilities",
    "Create automated security tests to verify the effectiveness of your fixes",
    "Develop a security policy document outlining best practices for ongoing security maintenance"
  ],
  resources: [
    {
      title: "OWASP Top Ten Security Risks",
      url: "https://owasp.org/www-project-top-ten/"
    },
    {
      title: "Web Application Security Testing Guide",
      url: "https://owasp.org/www-project-web-security-testing-guide/"
    },
    {
      title: "Modern JavaScript Security Best Practices",
      url: "https://snyk.io/blog/10-react-security-best-practices/"
    }
  ],
  verification: [
    "Did you identify a comprehensive list of security vulnerabilities?",
    "Have you implemented effective fixes for at least 5 critical issues?",
    "Do your automated tests verify that the fixes work as intended?",
    "Does your security policy provide clear guidelines for future development?",
    "Have you considered both frontend and backend security concerns?"
  ]
};
