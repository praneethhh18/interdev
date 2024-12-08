import React from 'react';
import { User, Calendar, Star } from 'lucide-react';
import type { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
  onSelect: (id: string) => void;
}

export function CandidateCard({ candidate, onSelect }: CandidateCardProps) {
  const statusColors = {
    scheduled: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelect(candidate.id)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <User className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{candidate.name}</h3>
            <p className="text-gray-600">{candidate.role}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[candidate.status]}`}>
          {candidate.status}
        </span>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">Next Interview: Today</span>
        </div>
        {candidate.score && (
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{candidate.score}/10</span>
          </div>
        )}
      </div>
    </div>
  );
}