
import { useState } from "react";

interface ProgressBarProps {
  progress: number;
  updateProgress: (value: number) => void;
}

const ProgressBar = ({ progress, updateProgress }: ProgressBarProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4">Your Progress</h2>
      <div className="w-full bg-muted rounded-full h-4">
        <div 
          className="bg-primary h-4 rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-sm text-muted-foreground">{progress}% complete</span>
      </div>
    </div>
  );
};

export default ProgressBar;
