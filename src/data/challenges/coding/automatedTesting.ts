
import { CodingChallenge } from "../../types";

export const automatedTestingChallenge: CodingChallenge = {
  category: "coding",
  title: "Automated Testing Implementation",
  instructions: [
    "Set up a testing framework (Jest or similar) for a front-end application",
    "Write unit tests for at least two components",
    "Create integration tests for a key user flow",
    "Set up test coverage reporting",
    "Configure tests to run automatically in a CI environment"
  ],
  resources: [
    {
      title: "Jest Testing Framework",
      url: "https://jestjs.io/docs/getting-started"
    },
    {
      title: "React Testing Library",
      url: "https://testing-library.com/docs/react-testing-library/intro/"
    }
  ],
  verification: [
    "All tests pass successfully",
    "Test coverage meets minimum threshold (70%+)",
    "Tests run correctly in CI environment",
    "Key user flows are properly tested",
    "Component tests validate expected behavior"
  ]
};
