
import { CodingChallenge } from "../../types";

export const accessibilityAuditChallenge: CodingChallenge = {
  category: "coding",
  title: "Web Accessibility Audit",
  instructions: [
    "Audit an existing website for accessibility issues",
    "Use automated tools like Lighthouse or WAVE",
    "Test keyboard navigation functionality",
    "Check color contrast ratios",
    "Create a report with recommended improvements"
  ],
  resources: [
    {
      title: "Web Accessibility Checklist",
      url: "https://www.a11yproject.com/checklist/"
    },
    {
      title: "WCAG 2.1 Guidelines",
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/"
    }
  ],
  verification: [
    "Comprehensive audit completed",
    "Issues categorized by severity",
    "Practical recommendations provided",
    "Implementation examples included",
    "Report is clear and actionable"
  ]
};
