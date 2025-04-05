
import { CodingChallenge } from "../../types";

export const cicdPipelineChallenge: CodingChallenge = {
  category: "coding",
  title: "CI/CD Pipeline Setup",
  instructions: [
    "Set up a basic GitHub Actions workflow for a web application",
    "Configure the workflow to run on push to main branch",
    "Add steps for linting, testing, and building the application",
    "Set up automated deployment to a staging environment",
    "Include notifications for failed builds"
  ],
  resources: [
    {
      title: "GitHub Actions Documentation",
      url: "https://docs.github.com/en/actions"
    },
    {
      title: "CI/CD Pipeline Best Practices",
      url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"
    }
  ],
  verification: [
    "Pipeline runs successfully on code push",
    "All linting and testing steps pass",
    "Build artifacts are generated correctly",
    "Deployment to staging environment works",
    "Notifications are sent for failed builds"
  ]
};
