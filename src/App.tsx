import React from 'react';
import { AuthProvider } from './components/auth/AuthProvider';
import { useAuth } from './components/auth/AuthProvider';
import { LoginForm } from './components/auth/LoginForm';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { CandidateList } from './components/CandidateList';
import { InterviewPanel } from './components/InterviewPanel';
import { mockCandidates, mockQuestions } from './data/mockData';

function MainApp() {
  const { user } = useAuth();
  const [selectedCandidate, setSelectedCandidate] = React.useState<string | null>(null);

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Interview Dashboard</h2>
        
        <Dashboard />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CandidateList 
              candidates={mockCandidates}
              onSelectCandidate={setSelectedCandidate}
            />
          </div>

          <div>
            <InterviewPanel
              selectedCandidate={selectedCandidate}
              questions={mockQuestions}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;