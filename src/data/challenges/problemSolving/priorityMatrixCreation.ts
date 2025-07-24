import { ProblemSolvingChallenge } from "../../types";

export const priorityMatrixCreationChallenge: ProblemSolvingChallenge = {
  category: "problem-solving",
  title: "Priority Matrix Creation",
  instructions: [
    "List all current tasks, projects, and responsibilities",
    "Create a 2x2 matrix with 'Urgent/Not Urgent' and 'Important/Not Important' axes",
    "Place each task in the appropriate quadrant based on urgency and importance",
    "Quadrant 1 (Urgent + Important): Crisis management, deadline-driven projects",
    "Quadrant 2 (Not Urgent + Important): Strategic planning, skill development, prevention",
    "Quadrant 3 (Urgent + Not Important): Interruptions, unnecessary meetings, some emails",
    "Quadrant 4 (Not Urgent + Not Important): Time wasters, excessive social media, busy work",
    "Develop action plans for each quadrant and schedule time accordingly"
  ],
  examples: [
    "Work deadline tomorrow (Q1: Urgent + Important)",
    "Learning new skills (Q2: Not Urgent + Important)",
    "Non-essential meeting invite (Q3: Urgent + Not Important)",
    "Checking social media (Q4: Not Urgent + Not Important)"
  ],
  resources: [
    {
      title: "Eisenhower Matrix Guide",
      url: "https://www.eisenhower.me/eisenhower-matrix/"
    },
    {
      title: "Time Management Strategies",
      url: "https://www.mindtools.com/pages/article/newHTE_91.htm"
    },
    {
      title: "Priority Setting Techniques",
      url: "https://www.atlassian.com/blog/productivity/how-to-prioritize-tasks"
    }
  ],
  verification: [
    "All tasks are categorized into appropriate quadrants",
    "Quadrant 2 activities are identified and scheduled",
    "Time-wasting activities in Quadrant 4 are minimized",
    "Action plans are created for high-priority items",
    "Matrix helps guide daily and weekly planning decisions",
    "Clear criteria established for future task categorization"
  ]
};