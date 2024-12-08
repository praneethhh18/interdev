import React from 'react';
import { InterviewSession } from './InterviewSession';
import type { Question, Assessment } from '../types';

interface InterviewPanelProps {
  selectedCandidate: string | null;
  questions: Question[];
  onAssessment: (assessment: Assessment) => void;
}

export function InterviewPanel({ selectedCandidate, questions, onAssessment }: InterviewPanelProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Active Interview</h3>
      {selectedCandidate ? (
        <InterviewSession
          questions={questions}
          onAssessment={onAssessment}
        />
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-600">
          Select a candidate to start the interview
        </div>
      )}
    </div>
  );
}