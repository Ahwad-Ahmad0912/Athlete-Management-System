import React from 'react';
import { Shield, Users, Trophy, Plus, Edit, Trash2 } from 'lucide-react';

const teams = [
  { id: 1, name: 'Phoenix Elite', sport: 'Track & Field', coach: 'Coach Martinez', athletes: 8, status: 'Active' },
  { id: 2, name: 'Aqua Force', sport: 'Swimming', coach: 'Coach Lee', athletes: 6, status: 'Active' },
  { id: 3, name: 'Thunder Squad', sport: 'Basketball', coach: 'Coach Martinez', athletes: 12, status: 'Active' },
  { id: 4, name: 'Court Kings', sport: 'Tennis', coach: 'Coach Patel', athletes: 4, status: 'Active' },
  { id: 5, name: 'Storm Setters', sport: 'Volleyball', coach: 'Coach Lee', athletes: 8, status: 'Inactive' },
  { id: 6, name: 'Iron Warriors', sport: 'Weightlifting', coach: 'Coach Martinez', athletes: 5, status: 'Active' },
];

const ManageTeams: React.FC = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><Shield className="h-7 w-7 text-ath-blue" /> Manage Teams</h1>
        <p className="text-gray-500 mt-1">Create and manage sport teams.</p>
      </div>
      <button className="bg-ath-gradient text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/20 hover:scale-105 transition-all flex items-center gap-2"><Plus className="h-4 w-4"/> New Team</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teams.map((t) => (
        <div key={t.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-ath-blue/20 hover:-translate-y-0.5 transition-all group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-ath-gradient flex items-center justify-center text-white shadow-lg">
              <Trophy className="h-6 w-6" />
            </div>
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${t.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>{t.status}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-ath-indigo transition-colors mb-1">{t.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{t.sport}</p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {t.athletes} athletes</span>
              <span>{t.coach}</span>
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 rounded-lg text-ath-blue hover:bg-ath-blue/10"><Edit className="h-3.5 w-3.5" /></button>
              <button className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"><Trash2 className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ManageTeams;
