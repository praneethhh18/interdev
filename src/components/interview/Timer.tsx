import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  duration: number;
  onTimeUp?: () => void;
  isPaused?: boolean;
}

export function Timer({ duration, onTimeUp, isPaused = false }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp?.();
      return;
    }

    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft <= 300) {
      setIsWarning(true);
    }

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, isPaused]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`flex items-center space-x-2 ${
      isWarning ? 'text-red-600' : 'text-gray-600'
    }`}>
      <Clock className="h-5 w-5" />
      <span className="font-mono">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
      {isPaused && (
        <span className="text-sm text-gray-500">(Paused)</span>
      )}
    </div>
  );
}