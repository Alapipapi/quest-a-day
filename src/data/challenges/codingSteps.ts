import { StepDetails } from "../types/common";

const reactComponentStylingSteps: StepDetails = {
  title: "React Component Styling",
  instructions: [
    "Create a new React component.",
    "Apply inline styles to the component.",
    "Use CSS classes to style the component.",
    "Implement conditional styling based on component state.",
    "Use a CSS-in-JS library for styling."
  ],
  verification: [
    "Component renders correctly with inline styles.",
    "CSS classes are applied to the component.",
    "Conditional styling changes the component's appearance based on state.",
    "CSS-in-JS library styles are applied correctly."
  ],
  resources: [
    { title: "React Documentation", url: "https://reactjs.org/docs/getting-started.html" },
    { title: "CSS Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
  ]
};

const apiIntegrationSteps: StepDetails = {
  title: "API Integration",
  instructions: [
    "Choose a public API to integrate with.",
    "Make a GET request to the API using fetch or axios.",
    "Parse the JSON response from the API.",
    "Display the data in a React component.",
    "Handle loading and error states."
  ],
  verification: [
    "Data is successfully fetched from the API.",
    "Data is correctly parsed and displayed in the component.",
    "Loading and error states are handled gracefully.",
    "The component updates when new data is fetched."
  ],
  resources: [
    { title: "Fetch API Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
    { title: "Axios Documentation", url: "https://github.com/axios/axios" }
  ]
};

const stateManagementSteps: StepDetails = {
  title: "State Management",
  instructions: [
    "Implement state management using React's useState hook.",
    "Create a custom hook for managing complex state.",
    "Use React Context for global state management.",
    "Integrate a state management library like Redux or Zustand.",
    "Dispatch actions to update the state."
  ],
  verification: [
    "State is updated correctly using useState.",
    "Custom hook manages state effectively.",
    "React Context provides global state access.",
    "State management library updates the state as expected.",
    "Components re-render when the state changes."
  ],
  resources: [
    { title: "React useState Hook", url: "https://reactjs.org/docs/hooks-state.html" },
    { title: "React Context", url: "https://reactjs.org/docs/context.html" },
    { title: "Redux Documentation", url: "https://redux.js.org/" },
    { title: "Zustand Documentation", url: "https://github.com/pmndrs/zustand" }
  ]
};

const responsiveLayoutSteps: StepDetails = {
  title: "Responsive Layout",
  instructions: [
    "Create a responsive layout using CSS Grid.",
    "Use media queries to adjust the layout for different screen sizes.",
    "Implement a mobile-first approach.",
    "Test the layout on various devices and screen sizes.",
    "Ensure the layout is accessible."
  ],
  verification: [
    "Layout adapts correctly to different screen sizes.",
    "Media queries are used effectively.",
    "Mobile-first approach is implemented.",
    "Layout is accessible on all devices.",
    "Content is readable and usable on all screen sizes."
  ],
  resources: [
    { title: "CSS Grid Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" },
    { title: "Media Queries Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" }
  ]
};

const componentTestingSteps: StepDetails = {
  title: "Component Testing",
  instructions: [
    "Write unit tests for a React component using Jest and React Testing Library.",
    "Test component rendering and props.",
    "Test user interactions and event handling.",
    "Mock API calls and test component behavior.",
    "Ensure high test coverage."
  ],
  verification: [
    "All component functionality is tested.",
    "Tests cover rendering, props, and user interactions.",
    "API calls are mocked correctly.",
    "Test coverage is high.",
    "Tests pass consistently."
  ],
  resources: [
    { title: "Jest Documentation", url: "https://jestjs.io/" },
    { title: "React Testing Library Documentation", url: "https://testing-library.com/docs/react-testing-library/intro/" }
  ]
};

const authenticationFlowSteps: StepDetails = {
  title: "Authentication Flow",
  instructions: [
    "Implement user registration and login.",
    "Use a library like Firebase Authentication or Auth0.",
    "Store user authentication tokens securely.",
    "Implement role-based access control.",
    "Handle password reset and account recovery."
  ],
  verification: [
    "Users can register and log in successfully.",
    "Authentication tokens are stored securely.",
    "Role-based access control is implemented correctly.",
    "Password reset and account recovery work as expected.",
    "The application is secure against common authentication vulnerabilities."
  ],
  resources: [
    { title: "Firebase Authentication Documentation", url: "https://firebase.google.com/docs/auth" },
    { title: "Auth0 Documentation", url: "https://auth0.com/docs" }
  ]
};

const dataVisualizationSteps: StepDetails = {
  title: "Data Visualization",
  instructions: [
    "Choose a data visualization library like Chart.js or D3.js.",
    "Fetch data from an API or use static data.",
    "Create a chart or graph to visualize the data.",
    "Customize the chart appearance and add labels.",
    "Make the chart responsive."
  ],
  verification: [
    "Data is visualized correctly in the chart.",
    "Chart appearance is customized as desired.",
    "Labels and tooltips are added for clarity.",
    "The chart is responsive and works on different screen sizes.",
    "The chart updates when the data changes."
  ],
  resources: [
    { title: "Chart.js Documentation", url: "https://www.chartjs.org/" },
    { title: "D3.js Documentation", url: "https://d3js.org/" }
  ]
};

const performanceOptimizationSteps: StepDetails = {
  title: "Performance Optimization",
  instructions: [
    "Identify performance bottlenecks using browser developer tools.",
    "Optimize images and other assets.",
    "Implement code splitting and lazy loading.",
    "Use memoization techniques to avoid unnecessary re-renders.",
    "Profile the application and measure performance improvements."
  ],
  verification: [
    "Performance bottlenecks are identified and addressed.",
    "Images and assets are optimized.",
    "Code splitting and lazy loading are implemented.",
    "Memoization techniques are used effectively.",
    "Application performance is improved significantly."
  ],
  resources: [
    { title: "Google PageSpeed Insights", url: "https://developers.google.com/speed/pagespeed/insights/" },
    { title: "Webpack Documentation", url: "https://webpack.js.org/" }
  ]
};

const accessibilityAuditSteps: StepDetails = {
  title: "Accessibility Audit",
  instructions: [
    "Use an accessibility testing tool like WAVE or Axe.",
    "Identify accessibility issues in the application.",
    "Fix the identified issues by adding ARIA attributes and semantic HTML.",
    "Test the application with a screen reader.",
    "Ensure the application meets WCAG guidelines."
  ],
  verification: [
    "Accessibility issues are identified and fixed.",
    "ARIA attributes and semantic HTML are used correctly.",
    "The application is usable with a screen reader.",
    "The application meets WCAG guidelines.",
    "The application is accessible to users with disabilities."
  ],
  resources: [
    { title: "WAVE Accessibility Tool", url: "https://wave.webaim.org/" },
    { title: "Axe Accessibility Tool", url: "https://www.deque.com/axe/" },
    { title: "WCAG Guidelines", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" }
  ]
};

const cicdPipelineSteps: StepDetails = {
  title: "CI/CD Pipeline Setup",
  instructions: [
    "Set up a CI/CD pipeline using GitHub Actions or GitLab CI.",
    "Automate testing and linting.",
    "Automate deployment to a staging environment.",
    "Automate deployment to production after manual approval.",
    "Monitor the pipeline and address any failures."
  ],
  verification: [
    "The CI/CD pipeline is set up correctly.",
    "Testing and linting are automated.",
    "Deployment to staging and production is automated.",
    "The pipeline is monitored and maintained.",
    "The application is deployed successfully using the pipeline."
  ],
  resources: [
    { title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
    { title: "GitLab CI Documentation", url: "https://docs.gitlab.com/ee/ci/" }
  ]
};

const automatedTestingImplementationSteps: StepDetails = {
  title: "Automated Testing Implementation",
  instructions: [
    "Write unit tests for core application logic.",
    "Implement integration tests to test interactions between components.",
    "Set up end-to-end tests using Cypress or Selenium.",
    "Run tests automatically as part of the CI/CD pipeline.",
    "Monitor test results and address any failures."
  ],
  verification: [
    "Unit tests cover core application logic.",
    "Integration tests cover interactions between components.",
    "End-to-end tests cover user flows.",
    "Tests are run automatically as part of the CI/CD pipeline.",
    "Test results are monitored and maintained."
  ],
  resources: [
    { title: "Cypress Documentation", url: "https://www.cypress.io/" },
    { title: "Selenium Documentation", url: "https://www.selenium.dev/" }
  ]
};

// Add new quick coding challenge steps
const cssAnimationShowcaseSteps: StepDetails = {
  title: "CSS Animation Showcase",
  instructions: [
    "Create a new HTML file with various UI elements (buttons, cards, loading spinners)",
    "Design smooth hover animations for buttons using CSS transitions",
    "Create a card flip animation using CSS transforms",
    "Build a loading spinner with keyframe animations",
    "Add entrance animations for when elements appear on screen",
    "Implement a smooth progress bar animation",
    "Test animations across different browsers for compatibility"
  ],
  verification: [
    "Button hover effects work smoothly",
    "Card flip animation completes in under 1 second",
    "Loading spinner rotates continuously",
    "Elements fade in when they appear",
    "Progress bar animates from 0 to 100%",
    "All animations work in Chrome and Firefox"
  ],
  resources: [
    { title: "CSS Animations Guide", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations" },
    { title: "CSS Transitions", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions" }
  ]
};

const formValidationHelperSteps: StepDetails = {
  title: "Form Validation Helper",
  instructions: [
    "Create a reusable form validation component in React or vanilla JavaScript",
    "Implement real-time validation for email, password, and required fields",
    "Add visual feedback with error messages and success indicators",
    "Create validation rules for different input types",
    "Implement debounced validation to avoid excessive API calls",
    "Add accessibility features like ARIA labels and screen reader support",
    "Test the component with various invalid and valid inputs"
  ],
  verification: [
    "Email validation works correctly",
    "Password strength indicator updates in real-time",
    "Required field validation shows appropriate messages",
    "Success states are clearly indicated",
    "Validation is accessible to screen readers",
    "Component is reusable across different forms"
  ],
  resources: [
    { title: "Form Validation Best Practices", url: "https://web.dev/sign-in-form-best-practices/" },
    { title: "React Hook Form", url: "https://react-hook-form.com/" }
  ]
};

const quickCalculatorWidgetSteps: StepDetails = {
  title: "Quick Calculator Widget",
  instructions: [
    "Create a calculator interface with number buttons and operation buttons",
    "Implement basic arithmetic operations (add, subtract, multiply, divide)",
    "Add a display screen to show current input and results",
    "Handle edge cases like division by zero and decimal numbers",
    "Implement keyboard support for number and operation inputs",
    "Add a clear function to reset the calculator",
    "Style the calculator with a clean, modern interface"
  ],
  verification: [
    "All four basic operations work correctly",
    "Calculator handles decimal numbers",
    "Division by zero shows appropriate error",
    "Keyboard input works for all functions",
    "Clear button resets the calculator",
    "Interface is clean and user-friendly"
  ],
  resources: [
    { title: "JavaScript Calculator Tutorial", url: "https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/" },
    { title: "Calculator UI Design", url: "https://dribbble.com/tags/calculator" }
  ]
};

// Update the main steps array to include new challenges
export const codingSteps: StepDetails[] = [
  reactComponentStylingSteps,
  apiIntegrationSteps,
  stateManagementSteps,
  responsiveLayoutSteps,
  componentTestingSteps,
  authenticationFlowSteps,
  dataVisualizationSteps,
  performanceOptimizationSteps,
  accessibilityAuditSteps,
  cicdPipelineSteps,
  automatedTestingImplementationSteps,
  cssAnimationShowcaseSteps,
  formValidationHelperSteps,
  quickCalculatorWidgetSteps
];
