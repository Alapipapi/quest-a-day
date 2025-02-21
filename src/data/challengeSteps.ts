
export interface StepDetails {
  title: string;
  instructions: string[];
  resources?: Array<{
    title: string;
    url: string;
  }>;
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
            {
              title: "Download Visual Studio Code",
              url: "https://code.visualstudio.com/download"
            },
            {
              title: "Download Git",
              url: "https://git-scm.com/downloads"
            },
            {
              title: "Git Basic Commands Cheatsheet",
              url: "https://education.github.com/git-cheat-sheet-education.pdf"
            }
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
            {
              title: "Vite Documentation",
              url: "https://vitejs.dev/guide/"
            },
            {
              title: "npm Basics Guide",
              url: "https://docs.npmjs.com/getting-started"
            }
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
            {
              title: "Proper Warm-up Technique Video",
              url: "https://www.youtube.com/results?search_query=proper+warm+up+routine"
            },
            {
              title: "Stretching Guide",
              url: "https://www.healthline.com/health/fitness-exercise/essential-stretching-routine"
            }
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
            {
              title: "Proper Exercise Form Guide",
              url: "https://www.youtube.com/results?search_query=proper+form+basic+exercises"
            },
            {
              title: "Exercise Modifications for Beginners",
              url: "https://www.healthline.com/health/fitness-exercise/exercise-modifications"
            }
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
            {
              title: "Workspace Setup Guide",
              url: "https://www.architecturaldigest.com/story/how-to-set-up-art-studio-at-home"
            },
            {
              title: "Essential Art Materials Checklist",
              url: "https://www.artistsnetwork.com/art-mediums/beginner-art-supplies/"
            }
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
            {
              title: "Basic Drawing Techniques",
              url: "https://www.artistsnetwork.com/art-techniques/beginner-drawing-tips/"
            },
            {
              title: "Art Composition Guide",
              url: "https://www.artistsnetwork.com/art-techniques/composition-techniques/"
            }
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
            {
              title: "Problem Analysis Framework",
              url: "https://www.mindtools.com/pages/article/newTMC_00.htm"
            },
            {
              title: "Problem-Solving Techniques",
              url: "https://asq.org/quality-resources/problem-solving"
            }
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
            {
              title: "Solution Planning Guide",
              url: "https://www.mindtools.com/pages/article/newTMC_03.htm"
            },
            {
              title: "Decision-Making Strategies",
              url: "https://www.mindtools.com/pages/article/newTED_00.htm"
            }
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
