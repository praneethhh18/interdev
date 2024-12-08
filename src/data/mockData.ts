import type { Candidate, Question } from '../types';

export const mockCandidates: Candidate[] = [
  { id: '1', name: 'Sarah Johnson', role: 'Senior Frontend Developer', status: 'scheduled' },
  { id: '2', name: 'Michael Chen', role: 'Backend Engineer', status: 'in-progress', score: 8 },
  { id: '3', name: 'Emily Rodriguez', role: 'Full Stack Developer', status: 'completed', score: 9 },
];

export const mockQuestions: Question[] = [
  {
    id: '1',
    text: "Explain the difference between React's useState and useEffect hooks",
    category: 'technical',
    difficulty: 'medium',
  },
  {
    id: '2',
    text: 'Describe a challenging project you worked on and how you overcame obstacles',
    category: 'behavioral',
    difficulty: 'medium',
  },
  {
    id: '3',
    text: 'How would you design a scalable notification system?',
    category: 'problem-solving',
    difficulty: 'hard',
  },
];