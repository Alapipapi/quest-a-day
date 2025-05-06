
import { CodingChallenge } from "../../types";

export const responsiveEmailTemplateChallenge: CodingChallenge = {
  category: "coding",
  title: "Responsive Email Template",
  instructions: [
    "Design a responsive HTML email template that works across major email clients",
    "Include header, body content section, and footer components",
    "Implement responsive layout that adapts to desktop and mobile screens",
    "Use inline CSS for styling (as external stylesheets won't work in most email clients)",
    "Test your template in different email clients and viewport sizes"
  ],
  resources: [
    {
      title: "HTML Email Development Guide",
      url: "https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/"
    },
    {
      title: "Email Client CSS Support Reference",
      url: "https://www.campaignmonitor.com/css/"
    },
    {
      title: "Email Testing Tools",
      url: "https://sendgrid.com/en-us/solutions/email-marketing/email-testing"
    }
  ],
  verification: [
    "Template displays correctly in Gmail, Outlook, Apple Mail, and on mobile devices",
    "Layout adjusts appropriately for different screen sizes",
    "Images include appropriate alt tags for accessibility",
    "Color contrast meets accessibility standards",
    "Structure uses proper HTML email best practices"
  ]
};
