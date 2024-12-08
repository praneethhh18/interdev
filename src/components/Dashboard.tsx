import React from 'react';
import { BarChart, Users, Calendar, Clock } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { icon: Users, label: 'Active Candidates', value: '24' },
    { icon: Calendar, label: 'Interviews Today', value: '8' },
    { icon: Clock, label: 'Avg. Interview Duration', value: '45m' },
    { icon: BarChart, label: 'Pass Rate', value: '68%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">{label}</p>
              <p className="text-2xl font-semibold">{value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}