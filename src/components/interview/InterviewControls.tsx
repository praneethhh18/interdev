import React from 'react';
import { Timer } from './Timer';
import { Play, Pause, StopCircle } from 'lucide-react';

interface InterviewControlsProps {
  onEnd: () => void;
  duration: number;
}

export function InterviewControls({ onEnd, duration }: InterviewControlsProps) {
  const [isRunning, setIsRunning] = React.useState(true);

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      <Timer 
        duration={duration} 
        onTimeUp={onEnd}
        isPaused={!isRunning}
      />
      
      <div className="flex space-x-2">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isRunning ? (
            <Pause className="h-5 w-5 text-gray-600" />
          ) : (
            <Play className="h-5 w-5 text-gray-600" />
          )}
        </button>
        
        <button
          onClick={onEnd}
          className="p-2 rounded-full hover:bg-red-100"
        >
          <StopCircle className="h-5 w-5 text-red-600" />
        </button>
      </div>
    </div>
  );
}