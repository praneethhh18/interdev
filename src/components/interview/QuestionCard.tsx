import React from 'react';
import { MessageSquare, AlertCircle } from 'lucide-react';
import type { Question } from '../../types';

interface QuestionCardProps {
  question: Question;
  index: number;
}

export function QuestionCard({ question, index }: QuestionCardProps) {
  const difficultyColors = {
    easy: 'text-green-600 bg-green-100',
    medium: 'text-yellow-600 bg-yellow-100',
    hard: 'text-red-600 bg-red-100',
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5 text-indigo-600" />
          <span className="font-medium">Question {index + 1}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-sm ${difficultyColors[question.difficulty]}`}>
          {question.difficulty}
        </span>
      </div>
      
      <p className="text-gray-700">{question.text}</p>
      
      {question.category === 'technical' && (
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <AlertCircle className="h-4 w-4 mr-1" />
          <span>Technical question - evaluate code knowledge</span>
        </div>
      )}
    </div>
  );
}