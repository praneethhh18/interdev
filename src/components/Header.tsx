import React from 'react';
import { Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8" />
          <h1 className="text-2xl font-bold">InterviewPro</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#dashboard" className="hover:text-indigo-200 transition-colors">Dashboard</a>
          <a href="#candidates" className="hover:text-indigo-200 transition-colors">Candidates</a>
          <a href="#interviews" className="hover:text-indigo-200 transition-colors">Interviews</a>
          <a href="#analytics" className="hover:text-indigo-200 transition-colors">Analytics</a>
        </nav>
      </div>
    </header>
  );
}