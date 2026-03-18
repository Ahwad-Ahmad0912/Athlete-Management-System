import React, { useState } from 'react';
import { Dumbbell, Plus, X, Clock, User, Flame } from 'lucide-react';

const programs = [
  { id: 1, name: 'Sprint Endurance Block', athlete: 'Alex Thompson', type: 'Cardio', intensity: 'High', duration: '60 min', status: 'In Progress', date: 'Mar 18, 2026' },
  { id: 2, name: 'Upper Body Power', athlete: 'Sarah Chen', type: 'Strength', intensity: 'Medium', duration: '45 min', status: 'Completed', date: 'Mar 17, 2026' },
  { id: 3, name: 'Agility Drills', athlete: 'Marcus Johnson', type: 'Sport-Specific', intensity: 'High', duration: '50 min', status: 'Pending', date: 'Mar 19, 2026' },
  { id: 4, name: 'Recovery Yoga', athlete: 'Emily Davis', type: 'Recovery', intensity: 'Low', duration: '30 min', status: 'Pending', date: 'Mar 20, 2026' },
];

const TrainingPrograms: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const statusColors: Record<string, string> = { 'Completed': 'bg-emerald-100 text-emerald-700', 'In Progress': 'bg-ath-blue/10 text-ath-blue', 'Pending': 'bg-amber-100 text-amber-700' };
  const intensityColors: Record<string, string> = { 'Low': 'text-green-600', 'Medium': 'text-yellow-600', 'High': 'text-orange-600', 'Max': 'text-red-600' };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><Dumbbell className="h-7 w-7 text-ath-blue" /> Training Programs</h1>
          <p className="text-gray-500 mt-1">Create and assign workouts to your athletes.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-ath-gradient text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/20 hover:scale-105 transition-all flex items-center gap-2">
          <Plus className="h-4 w-4" /> New Program
        </button>
      </div>

      {/* Programs Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4 font-semibold">Program</th>
                <th className="px-6 py-4 font-semibold">Athlete</th>
                <th className="px-6 py-4 font-semibold">Type</th>
                <th className="px-6 py-4 font-semibold">Intensity</th>
                <th className="px-6 py-4 font-semibold">Duration</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {programs.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{p.name}</td>
                  <td className="px-6 py-4 text-gray-600 flex items-center gap-2"><User className="h-4 w-4 text-gray-400" /> {p.athlete}</td>
                  <td className="px-6 py-4 text-gray-600">{p.type}</td>
                  <td className="px-6 py-4"><span className={`font-bold ${intensityColors[p.intensity]}`}><Flame className="inline h-3.5 w-3.5 mr-0.5" />{p.intensity}</span></td>
                  <td className="px-6 py-4 text-gray-600 flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-gray-400" /> {p.duration}</td>
                  <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${statusColors[p.status]}`}>{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-ath-purple">New Training Program</h2>
              <button onClick={() => setShowModal(false)} className="p-1 rounded-lg hover:bg-gray-100"><X className="h-5 w-5 text-gray-400" /></button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Workout Name</label>
                <input type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" placeholder="e.g. Speed Intervals" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Assign Athlete</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 bg-white">
                  <option>Alex Thompson</option><option>Sarah Chen</option><option>Marcus Johnson</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Type</label>
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 bg-white">
                    <option>Strength</option><option>Cardio</option><option>Flexibility</option><option>Recovery</option><option>Sport-Specific</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Intensity</label>
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 bg-white">
                    <option>Low</option><option>Medium</option><option>High</option><option>Max</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Coach Notes</label>
                <textarea rows={2} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 resize-none" placeholder="Any instructions..." />
              </div>
              <button type="button" onClick={() => setShowModal(false)} className="w-full bg-ath-gradient text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/30 hover:scale-[1.02] transition-all">
                Assign Program
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingPrograms;
