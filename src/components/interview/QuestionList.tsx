import React from 'react';
import { QuestionCard } from './QuestionCard';
import type { Question } from '../../types';

interface QuestionListProps {
  questions: Question[];
  currentIndex: number;
  onSelectQuestion: (index: number) => void;
}

export function QuestionList({ questions, currentIndex, onSelectQuestion }: QuestionListProps) {
  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <button
          key={question.id}
          className={`w-full text-left transition-colors ${
            index === currentIndex
              ? 'ring-2 ring-indigo-500'
              : 'hover:bg-gray-50'
          }`}
          onClick={() => onSelectQuestion(index)}
        >
          <QuestionCard
            question={question}
            index={index}
          />
        </button>
      ))}
    </div>
  );
}