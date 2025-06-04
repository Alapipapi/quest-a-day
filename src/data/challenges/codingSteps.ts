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
  title: "Web Accessibility Audit",
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

// Add new quick coding challenge steps - these should match the exact titles in quickCodingChallenges.ts
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

// Add steps for challenges that exist in the main challenge files
const responsiveDesignChallengeSteps: StepDetails = {
  title: "Responsive Design Challenge", // This should match the title in quickCodingChallenges.ts
  instructions: [
    "Create a responsive webpage that looks good on all devices",
    "Implement mobile-first design principles",
    "Use CSS media queries for breakpoints",
    "Ensure proper image scaling and text readability",
    "Test on at least three different viewport sizes"
  ],
  verification: [
    "Layout adapts to different screen sizes",
    "No horizontal scrolling on mobile",
    "Text remains readable at all sizes",
    "Images scale appropriately",
    "Navigation is usable on all devices"
  ],
  resources: [
    { title: "Responsive Web Design Fundamentals", url: "https://web.dev/responsive-web-design-basics/" },
    { title: "CSS Media Queries Guide", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" }
  ]
};

const buildChatInterfaceSteps: StepDetails = {
  title: "Build a Chat Interface",
  instructions: [
    "Create a chat container with message display area",
    "Build message components for sent and received messages", 
    "Implement an input field with send button",
    "Add message timestamps and user avatars",
    "Create responsive layout using CSS Grid or Flexbox",
    "Implement auto-scroll to latest message",
    "Add typing indicators and message status"
  ],
  verification: [
    "Messages display correctly for different users",
    "Input field works with enter key and send button", 
    "Chat scrolls to show latest messages",
    "Interface is responsive on mobile devices",
    "Timestamps display properly",
    "User avatars appear correctly"
  ],
  resources: [
    { title: "Chat UI Design Patterns", url: "https://www.smashingmagazine.com/2018/12/designing-chat-experiences/" },
    { title: "CSS Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
  ]
};

const uiMicroanimationsSteps: StepDetails = {
  title: "UI Microanimations",
  instructions: [
    "Create subtle hover effects for buttons and links",
    "Implement loading animations for buttons and content",
    "Add transition effects for modal and dropdown appearances",
    "Create smooth page transition animations",
    "Implement form field focus animations",
    "Add success and error state animations",
    "Optimize animations for performance"
  ],
  verification: [
    "Hover effects are smooth and responsive",
    "Loading animations provide clear feedback",
    "Modal transitions feel natural",
    "Page transitions don't cause layout shifts",
    "Form animations enhance user experience",
    "All animations perform well on slower devices"
  ],
  resources: [
    { title: "Microinteractions in UI Design", url: "https://uxplanet.org/microinteractions-the-secret-to-great-app-design-4cfe70fbaccf" },
    { title: "CSS Animation Performance", url: "https://web.dev/animations/" }
  ]
};

const buildMobileFirstWebsiteSteps: StepDetails = {
  title: "Build a Mobile-First Website",
  instructions: [
    "Plan your website structure with mobile users as priority",
    "Create a responsive layout using CSS Grid and Flexbox",
    "Implement mobile navigation (hamburger menu)",
    "Optimize images and assets for mobile devices",
    "Test on multiple viewport sizes",
    "Add progressive enhancement for larger screens"
  ],
  verification: [
    "Website works well on mobile devices",
    "Navigation is accessible on small screens",
    "Content is properly prioritized",
    "Layout adapts smoothly to larger screens",
    "Performance is optimized for mobile"
  ],
  resources: [
    { title: "Mobile-First Design Guide", url: "https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/" },
    { title: "Responsive Design Patterns", url: "https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns" }
  ]
};

const responsiveDashboardDesignSteps: StepDetails = {
  title: "Responsive Dashboard Design",
  instructions: [
    "Create a responsive dashboard layout that adapts to different screen sizes",
    "Implement at least 3 different data visualization components (charts, graphs, etc.)",
    "Add a sidebar navigation menu that collapses on mobile devices",
    "Use CSS Grid and Flexbox for responsive layouts",
    "Implement dark mode toggle functionality",
    "Ensure all dashboard components are fully accessible",
    "Create a responsive data table with sorting and filtering capabilities",
    "Add skeleton loading states for components that fetch data"
  ],
  verification: [
    "Does the dashboard layout adapt properly to mobile, tablet, and desktop screen sizes?",
    "Are all data visualization components displaying correctly?",
    "Is the sidebar navigation functional and does it collapse properly on mobile?",
    "Does the dark mode toggle work smoothly between light and dark themes?",
    "Are all interactive elements accessible via keyboard navigation?",
    "Do the data tables have proper sorting and filtering functionality?"
  ],
  resources: [
    { title: "Dashboard UI Design Principles", url: "https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c" },
    { title: "CSS Grid Layout Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
    { title: "Data Visualization Best Practices", url: "https://www.tableau.com/visualization/data-visualization-best-practices" }
  ]
};

const buildDarkModeToggleSteps: StepDetails = {
  title: "Build a Dark Mode Toggle",
  instructions: [
    "Create a toggle button component for switching themes",
    "Implement CSS custom properties for light and dark color schemes",
    "Store user theme preference in localStorage",
    "Apply theme changes across all components",
    "Add smooth transitions between theme changes",
    "Ensure proper contrast ratios for accessibility",
    "Test theme switching on different components"
  ],
  verification: [
    "Toggle button works smoothly",
    "Theme preference persists after page reload",
    "All components respect the selected theme",
    "Transitions between themes are smooth",
    "Text contrast meets accessibility standards",
    "Theme changes apply immediately"
  ],
  resources: [
    { title: "Dark Mode Design Guide", url: "https://material.io/design/color/dark-theme.html" },
    { title: "CSS Custom Properties", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" }
  ]
};

const responsiveEmailTemplateSteps: StepDetails = {
  title: "Responsive Email Template",
  instructions: [
    "Design a responsive HTML email template that works across major email clients",
    "Include header, body content section, and footer components",
    "Implement responsive layout that adapts to desktop and mobile screens",
    "Use inline CSS for styling (as external stylesheets won't work in most email clients)",
    "Test your template in different email clients and viewport sizes"
  ],
  verification: [
    "Template displays correctly in Gmail, Outlook, Apple Mail, and on mobile devices",
    "Layout adjusts appropriately for different screen sizes",
    "Images include appropriate alt tags for accessibility",
    "Color contrast meets accessibility standards",
    "Structure uses proper HTML email best practices"
  ],
  resources: [
    { title: "HTML Email Development Guide", url: "https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/" },
    { title: "Email Client CSS Support Reference", url: "https://www.campaignmonitor.com/css/" },
    { title: "Email Testing Tools", url: "https://sendgrid.com/en-us/solutions/email-marketing/email-testing" }
  ]
};

// Add steps for other challenges that exist in the main challenge files
const mobileAppIntegrationSteps: StepDetails = {
  title: "Mobile App Integration",
  instructions: [
    "Set up responsive design principles for mobile-first development",
    "Implement touch-friendly UI components and gestures",
    "Integrate device-specific features like camera, GPS, or accelerometer",
    "Optimize performance for mobile devices with slower processors",
    "Test across different mobile browsers and operating systems",
    "Implement offline functionality using service workers",
    "Add mobile-specific features like push notifications"
  ],
  verification: [
    "Application works seamlessly on mobile devices",
    "Touch interactions feel natural and responsive",
    "Device features are properly integrated",
    "Performance is optimized for mobile hardware",
    "Works consistently across mobile browsers",
    "Offline functionality works as expected"
  ],
  resources: [
    { title: "Progressive Web App Guide", url: "https://web.dev/progressive-web-apps/" },
    { title: "Mobile Web Development Best Practices", url: "https://developers.google.com/web/fundamentals/design-and-ux/principles" }
  ]
};

const databaseSchemaOptimizationSteps: StepDetails = {
  title: "Database Schema Optimization",
  instructions: [
    "Analyze the current database schema for inefficiencies",
    "Identify and remove redundant data and normalize tables",
    "Create appropriate indexes for frequently queried columns",
    "Optimize data types to reduce storage requirements",
    "Implement proper foreign key relationships",
    "Review and optimize slow-performing queries",
    "Document the optimized schema design"
  ],
  verification: [
    "Database queries execute faster after optimization",
    "Storage requirements are reduced",
    "Data integrity is maintained through proper relationships",
    "Query performance is measurably improved",
    "Schema follows database design best practices",
    "All existing functionality remains intact"
  ],
  resources: [
    { title: "Database Design Best Practices", url: "https://www.sqlshack.com/database-design-best-practices/" },
    { title: "SQL Performance Optimization", url: "https://use-the-index-luke.com/" }
  ]
};

const securityAuditImplementationSteps: StepDetails = {
  title: "Security Audit Implementation",
  instructions: [
    "Conduct a comprehensive security assessment of the application",
    "Identify common vulnerabilities like XSS, CSRF, and SQL injection",
    "Implement input validation and sanitization",
    "Set up proper authentication and authorization mechanisms",
    "Configure secure headers and HTTPS",
    "Review and secure API endpoints",
    "Document security measures and create incident response plan"
  ],
  verification: [
    "Common security vulnerabilities are identified and fixed",
    "Input validation prevents malicious data entry",
    "Authentication system is secure and robust",
    "API endpoints are properly secured",
    "Security headers are correctly configured",
    "Application passes security scanning tools"
  ],
  resources: [
    { title: "OWASP Security Guidelines", url: "https://owasp.org/www-project-top-ten/" },
    { title: "Web Application Security Best Practices", url: "https://cheatsheetseries.owasp.org/" }
  ]
};

// Add the missing step definitions for coding challenges
const progressiveWebAppSteps: StepDetails = {
  title: "Progressive Web App",
  instructions: [
    "Assess an existing web application",
    "Create a web app manifest with app icons",
    "Implement a service worker for caching",
    "Set up offline functionality", 
    "Add install prompts and support",
    "Test PWA functionality across devices",
    "Audit performance with Lighthouse"
  ],
  verification: [
    "Web app manifest is properly configured",
    "Service worker successfully caches assets",
    "Application works offline",
    "Install prompt appears on supporting devices",
    "Lighthouse PWA score of at least 90",
    "Smooth user experience across devices"
  ],
  resources: [
    { title: "PWA Introduction", url: "https://web.dev/learn/pwa/" },
    { title: "Service Worker Guide", url: "https://developers.google.com/web/fundamentals/primers/service-workers" }
  ]
};

const graphqlIntegrationSteps: StepDetails = {
  title: "GraphQL Integration",
  instructions: [
    "Set up a GraphQL client library (Apollo Client or similar)",
    "Define GraphQL schema and queries",
    "Implement data fetching with GraphQL queries",
    "Handle loading and error states",
    "Add mutations for data updates",
    "Implement caching strategies",
    "Test GraphQL operations"
  ],
  verification: [
    "GraphQL client is properly configured",
    "Queries fetch data successfully", 
    "Mutations update data correctly",
    "Loading and error states are handled",
    "Caching improves performance",
    "Operations work consistently"
  ],
  resources: [
    { title: "GraphQL Documentation", url: "https://graphql.org/learn/" },
    { title: "Apollo Client Guide", url: "https://www.apollographql.com/docs/react/" }
  ]
};

const microservicesArchitectureSteps: StepDetails = {
  title: "Microservices Architecture",
  instructions: [
    "Design microservices architecture for a web application",
    "Break down monolithic application into smaller services",
    "Implement service communication patterns",
    "Set up API gateway for routing",
    "Add service discovery and load balancing",
    "Implement monitoring and logging",
    "Test inter-service communication"
  ],
  verification: [
    "Services are properly decoupled",
    "Communication between services works",
    "API gateway routes requests correctly",
    "Load balancing distributes traffic",
    "Monitoring provides useful insights",
    "System is scalable and maintainable"
  ],
  resources: [
    { title: "Microservices Patterns", url: "https://microservices.io/patterns/" },
    { title: "Building Microservices", url: "https://martinfowler.com/articles/microservices.html" }
  ]
};

const kanbanBoardSteps: StepDetails = {
  title: "Kanban Board",
  instructions: [
    "Create a Kanban board layout with columns",
    "Implement draggable task cards",
    "Add functionality to create, edit, and delete tasks",
    "Implement drag-and-drop between columns",
    "Add task filtering and search capabilities",
    "Store board state in local storage or database",
    "Make the board responsive for mobile devices"
  ],
  verification: [
    "Tasks can be created and edited",
    "Drag-and-drop works smoothly",
    "Board state persists between sessions",
    "Filtering and search work correctly",
    "Interface is responsive",
    "All CRUD operations function properly"
  ],
  resources: [
    { title: "React DnD Library", url: "https://react-dnd.github.io/react-dnd/" },
    { title: "Kanban Board Design", url: "https://blog.trello.com/kanban-board" }
  ]
};

const markdownEditorSteps: StepDetails = {
  title: "Markdown Editor",
  instructions: [
    "Create a split-pane interface with editor and preview",
    "Implement markdown parsing and rendering",
    "Add syntax highlighting for the editor",
    "Include toolbar with common formatting options",
    "Add real-time preview updates",
    "Implement file save and load functionality",
    "Add export options (HTML, PDF)"
  ],
  verification: [
    "Markdown is parsed and rendered correctly",
    "Syntax highlighting improves readability",
    "Preview updates in real-time",
    "Toolbar functions work properly",
    "Files can be saved and loaded",
    "Export functionality works"
  ],
  resources: [
    { title: "Markdown Guide", url: "https://www.markdownguide.org/" },
    { title: "CodeMirror Editor", url: "https://codemirror.net/" }
  ]
};

const databaseDesignSteps: StepDetails = {
  title: "Database Design",
  instructions: [
    "Analyze requirements for a database system",
    "Design entity-relationship diagrams",
    "Normalize database tables to reduce redundancy",
    "Define primary and foreign key relationships",
    "Create indexes for performance optimization",
    "Write SQL scripts to create the database",
    "Test database operations and queries"
  ],
  verification: [
    "Database schema meets all requirements",
    "Tables are properly normalized",
    "Relationships are correctly defined",
    "Indexes improve query performance",
    "SQL scripts execute without errors",
    "All operations work as expected"
  ],
  resources: [
    { title: "Database Design Principles", url: "https://www.lucidchart.com/pages/database-diagram/database-design" },
    { title: "SQL Tutorial", url: "https://www.w3schools.com/sql/" }
  ]
};

const authSystemSteps: StepDetails = {
  title: "Authentication System",
  instructions: [
    "Set up user registration and login forms",
    "Implement password hashing and validation",
    "Add JWT token-based authentication",
    "Create protected routes and middleware",
    "Implement password reset functionality",
    "Add social login options (Google, GitHub)",
    "Test authentication flow and security"
  ],
  verification: [
    "Users can register and login successfully",
    "Passwords are securely hashed",
    "JWT tokens work for authentication",
    "Protected routes require authentication",
    "Password reset functionality works",
    "Social login integrates properly"
  ],
  resources: [
    { title: "JWT Authentication Guide", url: "https://jwt.io/introduction/" },
    { title: "OAuth 2.0 Documentation", url: "https://oauth.net/2/" }
  ]
};

// Update the main codingSteps array to include all challenges
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
  quickCalculatorWidgetSteps,
  responsiveDesignChallengeSteps,
  buildChatInterfaceSteps,
  uiMicroanimationsSteps,
  buildMobileFirstWebsiteSteps,
  responsiveDashboardDesignSteps,
  buildDarkModeToggleSteps,
  responsiveEmailTemplateSteps,
  mobileAppIntegrationSteps,
  databaseSchemaOptimizationSteps,
  securityAuditImplementationSteps,
  progressiveWebAppSteps,
  graphqlIntegrationSteps,
  microservicesArchitectureSteps,
  kanbanBoardSteps,
  markdownEditorSteps,
  databaseDesignSteps,
  authSystemSteps
];
