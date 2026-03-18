import React from 'react';
import { Dumbbell, Clock, CheckCircle, AlertCircle, Flame } from 'lucide-react';

const trainingPlans = [
  { id: 1, name: 'Sprint Endurance Block', type: 'Cardio', intensity: 'High', duration: '60 min', status: 'In Progress', date: 'Mar 18, 2026', coach: 'Coach Martinez', notes: 'Focus on interval recovery' },
  { id: 2, name: 'Upper Body Strength', type: 'Strength', intensity: 'Medium', duration: '45 min', status: 'Completed', date: 'Mar 17, 2026', coach: 'Coach Lee', notes: 'Increase weight by 5%' },
  { id: 3, name: 'Flexibility & Mobility', type: 'Flexibility', intensity: 'Low', duration: '30 min', status: 'Pending', date: 'Mar 19, 2026', coach: 'Coach Patel', notes: 'Pre-competition prep' },
  { id: 4, name: 'Plyometric Power', type: 'Sport-Specific', intensity: 'Max', duration: '50 min', status: 'Pending', date: 'Mar 20, 2026', coach: 'Coach Martinez', notes: 'Box jumps and bounds' },
  { id: 5, name: 'Recovery Session', type: 'Recovery', intensity: 'Low', duration: '40 min', status: 'Completed', date: 'Mar 16, 2026', coach: 'Coach Patel', notes: 'Light stretching and foam rolling' },
];

const MyTraining: React.FC = () => {
  const statusColors: Record<string, string> = {
    'Completed': 'bg-emerald-100 text-emerald-700',
    'In Progress': 'bg-ath-blue/10 text-ath-blue',
    'Pending': 'bg-amber-100 text-amber-700',
  };

  const intensityColors: Record<string, string> = {
    'Low': 'bg-green-100 text-green-700',
    'Medium': 'bg-yellow-100 text-yellow-700',
    'High': 'bg-orange-100 text-orange-700',
    'Max': 'bg-red-100 text-red-700',
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><Dumbbell className="h-7 w-7 text-ath-blue" /> My Training Plans</h1>
        <p className="text-gray-500 mt-1">Your assigned workouts and training programs.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ath-indigo to-ath-blue flex items-center justify-center text-white"><Flame className="h-5 w-5" /></div>
          <div><p className="text-2xl font-black text-gray-900">5</p><p className="text-xs text-gray-500 font-medium">Total Programs</p></div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white"><CheckCircle className="h-5 w-5" /></div>
          <div><p className="text-2xl font-black text-gray-900">2</p><p className="text-xs text-gray-500 font-medium">Completed</p></div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white"><AlertCircle className="h-5 w-5" /></div>
          <div><p className="text-2xl font-black text-gray-900">2</p><p className="text-xs text-gray-500 font-medium">Pending</p></div>
        </div>
      </div>

      {/* Training List */}
      <div className="space-y-4">
        {trainingPlans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-ath-blue/20 transition-all group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-ath-indigo transition-colors">{plan.name}</h3>
                  <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${statusColors[plan.status]}`}>{plan.status}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Dumbbell className="h-3 w-3" /> {plan.type}</span>
                  <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${intensityColors[plan.intensity]}`}>{plan.intensity}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {plan.duration}</span>
                  <span>{plan.date}</span>
                </div>
                {plan.notes && <p className="text-xs text-gray-400 mt-2 italic">"{plan.notes}" — {plan.coach}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTraining;
