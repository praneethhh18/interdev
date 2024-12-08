import { useState, useCallback } from 'react';
import { useStore } from '../store/useStore';
import { submitAssessment } from '../services/firebase';
import type { Assessment, Question } from '../types';

export function useInterviewSession(questions: Question[]) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [notes, setNotes] = useState('');
  const [score, setScore] = useState(0);
  const { currentInterview, addAssessment } = useStore();

  const handleSubmitAssessment = useCallback(async (assessment: Assessment) => {
    if (!currentInterview) return;

    try {
      await submitAssessment(currentInterview.id, assessment);
      addAssessment(assessment);
      setNotes('');
      setScore(0);
      setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
    } catch (error) {
      console.error('Failed to submit assessment:', error);
      throw error;
    }
  }, [currentInterview, addAssessment, questions.length]);

  return {
    currentQuestion,
    notes,
    setNotes,
    score,
    setScore,
    handleSubmitAssessment,
    isLastQuestion: currentQuestion === questions.length - 1,
  };
}