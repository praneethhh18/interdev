import React from 'react';
import { Brain } from 'lucide-react';
import { analyzeAnswer } from '../services/ai';
import type { Assessment } from '../types';

interface AIFeedbackProps {
  question: string;
  notes: string;
  onAnalysisComplete: (analysis: Assessment['aiAnalysis']) => void;
}

export function AIFeedback({ question, notes, onAnalysisComplete }: AIFeedbackProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      setError(null);
      const analysis = await analyzeAnswer(question, notes);
      onAnalysisComplete(analysis);
    } catch (err) {
      setError('Failed to analyze answer. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition-colors disabled:opacity-50"
      >
        <Brain className="h-5 w-5" />
        <span>{loading ? 'Analyzing...' : 'Get AI Feedback'}</span>
      </button>
      
      {error && (
        <p className="mt-2 text-red-600 text-sm">{error}</p>
      )}
    </div>
  );
}