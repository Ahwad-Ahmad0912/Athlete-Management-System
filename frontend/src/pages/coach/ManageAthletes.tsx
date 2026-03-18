import React from 'react';
import { Users, Search, Filter, Eye, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const athletes = [
  { id: 1, name: 'Alex Thompson', sport: 'Track & Field', position: 'Sprinter', team: 'Phoenix Elite', score: 87, trend: 'up', status: 'Healthy', age: 24 },
  { id: 2, name: 'Sarah Chen', sport: 'Swimming', position: 'Freestyle', team: 'Aqua Force', score: 92, trend: 'up', status: 'Healthy', age: 21 },
  { id: 3, name: 'Marcus Johnson', sport: 'Basketball', position: 'Point Guard', team: 'Thunder Squad', score: 78, trend: 'down', status: 'Recovering', age: 26 },
  { id: 4, name: 'Emily Davis', sport: 'Tennis', position: 'Singles', team: 'Court Kings', score: 85, trend: 'stable', status: 'Healthy', age: 22 },
  { id: 5, name: 'Ryan Park', sport: 'Soccer', position: 'Midfielder', team: 'Phoenix Elite', score: 90, trend: 'up', status: 'Healthy', age: 23 },
  { id: 6, name: 'Mia Rodriguez', sport: 'Volleyball', position: 'Setter', team: 'Storm Setters', score: 70, trend: 'down', status: 'Injured', age: 20 },
];

const ManageAthletes: React.FC = () => {
  const trendIcon = (t: string) => t === 'up' ? <TrendingUp className="h-4 w-4 text-emerald-500" /> : t === 'down' ? <TrendingDown className="h-4 w-4 text-red-500" /> : <Minus className="h-4 w-4 text-gray-400" />;
  const healthColors: Record<string, string> = { 'Healthy': 'bg-emerald-100 text-emerald-700', 'Recovering': 'bg-amber-100 text-amber-700', 'Injured': 'bg-red-100 text-red-700' };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><Users className="h-7 w-7 text-ath-blue" /> Manage Athletes</h1>
          <p className="text-gray-500 mt-1">View and manage your athlete roster.</p>
        </div>
        <button className="bg-ath-gradient text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/20 hover:scale-105 transition-all">+ Add Athlete</button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search athletes..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"><Filter className="h-4 w-4" /> Filter</button>
      </div>

      {/* Athlete Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {athletes.map((a) => (
          <div key={a.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-ath-blue/20 hover:-translate-y-0.5 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-ath-gradient flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {a.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-ath-indigo transition-colors">{a.name}</p>
                  <p className="text-xs text-gray-500">{a.sport} · {a.position}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-lg text-xs font-bold ${healthColors[a.status]}`}>{a.status}</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black text-ath-indigo">{a.score}</span>
                <span className="text-xs text-gray-500">/100</span>
                {trendIcon(a.trend)}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">{a.team}</span>
                <button className="p-1.5 rounded-lg bg-ath-indigo/10 text-ath-indigo hover:bg-ath-indigo/20 transition-colors opacity-0 group-hover:opacity-100">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAthletes;
