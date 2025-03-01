
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
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={progress} 
          onChange={(e) => updateProgress(parseInt(e.target.value))}
          className="w-full h-2 accent-primary"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
