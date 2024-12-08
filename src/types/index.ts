export interface Question {
  id: string;
  text: string;
  category: 'technical' | 'behavioral' | 'problem-solving';
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  status: 'scheduled' | 'in-progress' | 'completed';
  score?: number;
  email: string;
  experience: number;
  skills: string[];
}

export interface Assessment {
  questionId: string;
  score: number;
  notes: string;
  aiAnalysis?: {
    score: number;
    feedback: string;
  };
  recordingUrl?: string;
}

export interface Interview {
  id: string;
  candidateId: string;
  status: 'scheduled' | 'in-progress' | 'completed';
  scheduledFor: Date;
  completedAt?: Date;
  assessments?: Assessment[];
}