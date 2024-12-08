import React from 'react';
import { CandidateCard } from './CandidateCard';
import type { Candidate } from '../types';

interface CandidateListProps {
  candidates: Candidate[];
  onSelectCandidate: (id: string) => void;
}

export function CandidateList({ candidates, onSelectCandidate }: CandidateListProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Today's Candidates</h3>
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onSelect={onSelectCandidate}
          />
        ))}
      </div>
    </div>
  );
}