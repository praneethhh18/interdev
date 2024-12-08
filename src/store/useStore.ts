import { create } from 'zustand';
import type { Candidate, Interview, Assessment } from '../types';

interface Store {
  candidates: Candidate[];
  selectedCandidate: Candidate | null;
  currentInterview: Interview | null;
  setSelectedCandidate: (candidate: Candidate | null) => void;
  setCurrentInterview: (interview: Interview | null) => void;
  addAssessment: (assessment: Assessment) => void;
}

export const useStore = create<Store>((set) => ({
  candidates: [],
  selectedCandidate: null,
  currentInterview: null,
  setSelectedCandidate: (candidate) => set({ selectedCandidate: candidate }),
  setCurrentInterview: (interview) => set({ currentInterview: interview }),
  addAssessment: (assessment) => 
    set((state) => ({
      currentInterview: state.currentInterview
        ? {
            ...state.currentInterview,
            assessments: [...(state.currentInterview.assessments || []), assessment]
          }
        : null
    }))
}));