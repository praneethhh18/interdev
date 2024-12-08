import React from 'react';
import { Save } from 'lucide-react';
import { AIFeedback } from '../AIFeedback';
import type { Assessment, Question } from '../../types';

interface AssessmentFormProps {
  question: Question;
  onSubmit: (assessment: Assessment) => void;
}

export function AssessmentForm({ question, onSubmit }: AssessmentFormProps) {
  const [notes, setNotes] = React.useState('');
  const [score, setScore] = React.useState(5);
  const [aiAnalysis, setAiAnalysis] = React.useState<Assessment['aiAnalysis']>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      questionId: question.id,
      score,
      notes,
      aiAnalysis,
    });
    setNotes('');
    setScore(5);
    setAiAnalysis(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Assessment Notes
        </label>
        <textarea
          className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter your assessment notes here..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Score (0-10)
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-center mt-2">{score}/10</div>
      </div>

      <AIFeedback
        question={question.text}
        notes={notes}
        onAnalysisComplete={setAiAnalysis}
      />

      {aiAnalysis && (
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-green-800 mb-2">AI Analysis</h4>
          <p className="text-green-700">{aiAnalysis.feedback}</p>
          <p className="text-green-800 mt-2">Suggested Score: {aiAnalysis.score}/10</p>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
      >
        <Save className="h-5 w-5" />
        <span>Save Assessment</span>
      </button>
    </form>
  );
}