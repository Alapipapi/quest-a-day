
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Changelog = () => {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8 flex flex-col sm:flex-row items-center">
        <Button variant="ghost" size="sm" asChild className="mr-auto sm:mr-0">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mt-4 sm:mt-0 sm:mx-auto text-black dark:text-white">Changelog</h1>
        <div className="hidden sm:block sm:mr-auto"></div>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-black dark:text-white">v1.6.0</h2>
            <span className="ml-3 text-sm text-muted-foreground">June 1, 2025</span>
          </div>
          <div className="border-l-2 border-primary pl-4 ml-2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">New Features</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Added comprehensive challenge notes system for tracking personal insights</li>
                <li>Implemented achievement badges with milestone tracking</li>
                <li>Enhanced search functionality with multi-category filtering</li>
                <li>Added quick actions floating menu for improved navigation</li>
                <li>Created enhanced difficulty indicators with visual progress bars</li>
                <li>Added personal notes feature for each challenge with rich text support</li>
                <li>Implemented achievement system with progress tracking and milestone rewards</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">UI/UX Improvements</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Enhanced mobile responsiveness across all components</li>
                <li>Improved challenge card animations and hover effects</li>
                <li>Added smooth transitions and micro-interactions</li>
                <li>Enhanced color scheme with better contrast ratios</li>
                <li>Improved accessibility with better keyboard navigation</li>
                <li>Added loading states and skeleton components</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Progress Tracking</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Enhanced verification checklist with granular progress tracking</li>
                <li>Improved progress calculation based on completed verification items</li>
                <li>Added visual progress indicators in challenge headers</li>
                <li>Better synchronization between progress and completion status</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Technical Improvements</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Fixed TypeScript compatibility issues across components</li>
                <li>Improved type safety with better interface definitions</li>
                <li>Enhanced error handling and validation</li>
                <li>Optimized component performance and rendering</li>
                <li>Better state management with improved hooks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Bug Fixes</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Fixed verification checklist prop type mismatches</li>
                <li>Resolved progress tracking synchronization issues</li>
                <li>Fixed focus handling in search components</li>
                <li>Corrected challenge resource click handlers</li>
                <li>Fixed text color contrast issues in light mode</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-black dark:text-white">v1.5.0</h2>
            <span className="ml-3 text-sm text-muted-foreground">May 1, 2025</span>
          </div>
          <div className="border-l-2 border-primary pl-4 ml-2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">New Features</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Added challenge recommendation system based on user history</li>
                <li>Implemented challenge sharing via social media</li>
                <li>Added progress tracking with visual completion charts</li>
                <li>Added challenge of the day that updates every day</li>
                <li>Added custom notifications for scheduled challenges</li>
                <li>Created detailed challenge statistics dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">New Challenges</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li><strong>Coding:</strong> Database Schema Optimization</li>
                <li><strong>Coding:</strong> Security Audit Implementation</li>
                <li><strong>Coding:</strong> Responsive Dashboard Design</li>
                <li><strong>Fitness:</strong> Functional Mobility Workout</li>
                <li><strong>Fitness:</strong> Pyramid Strength Training</li>
                <li><strong>Fitness:</strong> Interval Cardio-Strength Circuit</li>
                <li><strong>Creativity:</strong> Sound Design Workshop</li>
                <li><strong>Creativity:</strong> Mixed Media Collage Project</li>
                <li><strong>Problem-Solving:</strong> Root Cause Analysis</li>
                <li><strong>Problem-Solving:</strong> Risk Assessment Framework</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Improvements</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Enhanced UI with smoother animations and transitions</li>
                <li>Improved challenge completion tracking accuracy</li>
                <li>Optimized mobile responsiveness across all views</li>
                <li>Added more detailed challenge descriptions</li>
                <li>Implemented better challenge categorization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Bug Fixes</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Fixed issue with challenge timers not saving state</li>
                <li>Resolved synchronization issues with scheduled challenges</li>
                <li>Fixed responsive layout issues on smaller devices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-black dark:text-white">v1.4.0</h2>
            <span className="ml-3 text-sm text-muted-foreground">April 5, 2025</span>
          </div>
          <div className="border-l-2 border-primary pl-4 ml-2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">New Features</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Added favorites functionality to save your favorite challenges</li>
                <li>Added a dedicated section to display all favorite challenges</li>
                <li>Added a changelog page to track all updates and changes</li>
                <li>Added 10 new challenges across all categories</li>
                <li>Introduced detailed instructions for all new challenges</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">New Challenges</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li><strong>Coding:</strong> CI/CD Pipeline Setup</li>
                <li><strong>Coding:</strong> Automated Testing Implementation</li>
                <li><strong>Fitness:</strong> Stretching Routine for Desk Workers</li>
                <li><strong>Fitness:</strong> Low-Impact Cardio Workout</li>
                <li><strong>Creativity:</strong> Minimalist Photography</li>
                <li><strong>Creativity:</strong> Comic Strip Creation</li>
                <li><strong>Problem-Solving:</strong> Ethical Dilemma Analysis</li>
                <li><strong>Problem-Solving:</strong> Strategic Planning Exercise</li>
                <li><strong>Problem-Solving:</strong> Time Management Workshop</li>
                <li><strong>Creativity:</strong> Short Film Storyboarding</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Improvements</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Improved UI responsiveness across devices</li>
                <li>Enhanced challenge card animations</li>
                <li>Fixed various TypeScript errors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Bug Fixes</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-black dark:text-white">
                <li>Fixed issue with challenge card props type mismatch</li>
                <li>Resolved rendering issues on small screens</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
