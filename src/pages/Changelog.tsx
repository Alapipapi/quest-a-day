
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
        <h1 className="text-3xl font-bold mt-4 sm:mt-0 sm:mx-auto">Changelog</h1>
        <div className="hidden sm:block sm:mr-auto"></div>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">v1.5.0</h2>
            <span className="ml-3 text-sm text-muted-foreground">May 1, 2025</span>
          </div>
          <div className="border-l-2 border-primary pl-4 ml-2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">New Features</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Added challenge recommendation system based on user history</li>
                <li>Implemented challenge sharing via social media</li>
                <li>Added progress tracking with visual completion charts</li>
                <li>Introduced challenge categories filter on the homepage</li>
                <li>Implemented challenge difficulty progression system</li>
                <li>Added custom notifications for scheduled challenges</li>
                <li>Created detailed challenge statistics dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">New Challenges</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
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
              <h3 className="text-lg font-semibold">Improvements</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Enhanced UI with smoother animations and transitions</li>
                <li>Improved challenge completion tracking accuracy</li>
                <li>Optimized mobile responsiveness across all views</li>
                <li>Added more detailed challenge descriptions</li>
                <li>Implemented better challenge categorization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bug Fixes</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Fixed issue with challenge timers not saving state</li>
                <li>Resolved synchronization issues with scheduled challenges</li>
                <li>Fixed responsive layout issues on smaller devices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">v1.4.0</h2>
            <span className="ml-3 text-sm text-muted-foreground">April 5, 2025</span>
          </div>
          <div className="border-l-2 border-primary pl-4 ml-2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">New Features</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Added favorites functionality to save your favorite challenges</li>
                <li>Added a dedicated section to display all favorite challenges</li>
                <li>Added a changelog page to track all updates and changes</li>
                <li>Added 10 new challenges across all categories</li>
                <li>Introduced detailed instructions for all new challenges</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">New Challenges</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
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
              <h3 className="text-lg font-semibold">Improvements</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Improved UI responsiveness across devices</li>
                <li>Enhanced challenge card animations</li>
                <li>Fixed various TypeScript errors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bug Fixes</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
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
