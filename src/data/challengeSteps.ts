
export interface StepDetails {
  title: string;
  instructions: string[];
  resources?: string[];
  verification?: string[];
}

export const getStepsForChallenge = (category: string): StepDetails[] => {
  switch (category) {
    case "coding":
      return [
        {
          title: "Set up your development environment",
          instructions: [
            "Install Visual Studio Code from https://code.visualstudio.com",
            "Install Git from https://git-scm.com",
            "Create a new folder for your project",
            "Open the folder in VS Code"
          ],
          resources: [
            "VS Code documentation",
            "Git basic commands cheatsheet"
          ],
          verification: [
            "VS Code is installed and running",
            "Git is installed (run 'git --version' in terminal)",
            "Project folder is created and open in VS Code"
          ]
        },
        {
          title: "Create a new project and initialize dependencies",
          instructions: [
            "Open terminal in VS Code (Ctrl+`)",
            "Run 'npm create vite@latest'",
            "Choose React + TypeScript template",
            "Navigate to project directory",
            "Run 'npm install'"
          ],
          resources: [
            "Vite documentation",
            "npm basics guide"
          ],
          verification: [
            "package.json exists in your project",
            "node_modules folder is created",
            "Project runs with 'npm run dev'"
          ]
        }
      ];
    case "fitness":
      return [
        {
          title: "Warm-up routine",
          instructions: [
            "Find an open space (at least 6x6 feet)",
            "Perform arm circles (10 forward, 10 backward)",
            "Do 20 jumping jacks",
            "March in place for 1 minute",
            "Do 10 leg swings each side"
          ],
          resources: [
            "Video: Proper warm-up technique",
            "Stretching guide PDF"
          ],
          verification: [
            "No muscle strain felt",
            "Light sweat",
            "Increased heart rate",
            "Feeling warmed up and ready"
          ]
        },
        {
          title: "Main workout",
          instructions: [
            "20 push-ups (modify as needed)",
            "30 squats",
            "15 lunges each leg",
            "30-second plank",
            "20 mountain climbers"
          ],
          resources: [
            "Proper form guides",
            "Exercise modifications"
          ],
          verification: [
            "Completed all exercises",
            "Maintained good form",
            "Feel muscle engagement"
          ]
        }
      ];
    case "creativity":
      return [
        {
          title: "Prepare your workspace",
          instructions: [
            "Clear your desk/workspace",
            "Gather required materials",
            "Ensure good lighting",
            "Have reference materials ready",
            "Set up your tools"
          ],
          resources: [
            "Workspace setup guide",
            "Material checklist"
          ],
          verification: [
            "Workspace is clean",
            "All materials ready",
            "Good lighting",
            "Comfortable setup"
          ]
        },
        {
          title: "Start creating",
          instructions: [
            "Sketch basic shapes",
            "Develop main elements",
            "Add details",
            "Review and adjust",
            "Complete final touches"
          ],
          resources: [
            "Basic techniques guide",
            "Common patterns reference"
          ],
          verification: [
            "Basic structure complete",
            "Main elements defined",
            "Details added",
            "Work reviewed"
          ]
        }
      ];
    case "problem-solving":
      return [
        {
          title: "Analyze the problem",
          instructions: [
            "Read problem statement carefully",
            "Identify key information",
            "List constraints",
            "Define expected output",
            "Note special cases"
          ],
          resources: [
            "Problem analysis template",
            "Common problem patterns"
          ],
          verification: [
            "Problem understood",
            "Key info identified",
            "Constraints listed",
            "Output defined"
          ]
        },
        {
          title: "Develop solution",
          instructions: [
            "Break down into steps",
            "Create solution outline",
            "Consider alternatives",
            "Plan implementation",
            "Review approach"
          ],
          resources: [
            "Solution planning guide",
            "Strategy templates"
          ],
          verification: [
            "Steps broken down",
            "Solution outlined",
            "Alternatives considered",
            "Implementation planned"
          ]
        }
      ];
    default:
      return [];
  }
};
