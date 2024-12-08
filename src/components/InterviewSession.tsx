import React from 'react';
import { InterviewControls } from './interview/InterviewControls';
import { QuestionList } from './interview/QuestionList';
import { AssessmentForm } from './interview/AssessmentForm';
import { useInterviewSession } from '../hooks/useInterviewSession';
import type { Question, Assessment } from '../types';

interface InterviewSessionProps {
  questions: Question[];
  onAssessment: (assessment: Assessment) => void;
  onComplete: () => void;
}

export function InterviewSession({ 
  questions, 
  onAssessment,
  onComplete 
}: InterviewSessionProps) {
  const {
    currentQuestion,
    handleSubmitAssessment,
    isLastQuestion,
  } = useInterviewSession(questions);

  const handleAssessment = async (assessment: Assessment) => {
    await handleSubmitAssessment(assessment);
    onAssessment(assessment);
    
    if (isLastQuestion) {
      onComplete();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <InterviewControls
        duration={45}
        onEnd={onComplete}
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Questions</h3>
          <QuestionList
            questions={questions}
            currentIndex={currentQuestion}
            onSelectQuestion={() => {}} // Implement question navigation if needed
          />
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Assessment</h3>
          <AssessmentForm
            question={questions[currentQuestion]}
            onSubmit={handleAssessment}
          />
        </div>
      </div>
    </div>
  );
}