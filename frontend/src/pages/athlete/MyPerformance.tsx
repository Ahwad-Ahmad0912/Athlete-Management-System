import React from 'react';
import { LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { LineChart as LineIcon, TrendingUp, Award } from 'lucide-react';

const weeklyData = [
  { week: 'W1', speed: 72, strength: 65, endurance: 70, recovery: 80 },
  { week: 'W2', speed: 75, strength: 68, endurance: 72, recovery: 78 },
  { week: 'W3', speed: 78, strength: 70, endurance: 75, recovery: 82 },
  { week: 'W4', speed: 80, strength: 74, endurance: 78, recovery: 85 },
  { week: 'W5', speed: 82, strength: 77, endurance: 80, recovery: 83 },
  { week: 'W6', speed: 85, strength: 80, endurance: 83, recovery: 88 },
];

const radarData = [
  { metric: 'Speed', value: 85 },
  { metric: 'Strength', value: 80 },
  { metric: 'Endurance', value: 83 },
  { metric: 'Recovery', value: 88 },
  { metric: 'Agility', value: 78 },
  { metric: 'Power', value: 82 },
];

const monthlyLoad = [
  { month: 'Jan', load: 120 }, { month: 'Feb', load: 140 }, { month: 'Mar', load: 135 },
  { month: 'Apr', load: 155 }, { month: 'May', load: 160 }, { month: 'Jun', load: 150 },
];

const MyPerformance: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><LineIcon className="h-7 w-7 text-ath-blue" /> Performance Analytics</h1>
        <p className="text-gray-500 mt-1">Detailed breakdown of your speed, strength, endurance, and recovery metrics.</p>
      </div>

      {/* Top Scores */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Speed', score: 85, color: '#4C3BCF' },
          { label: 'Strength', score: 80, color: '#4B70F5' },
          { label: 'Endurance', score: 83, color: '#3DC2EC' },
          { label: 'Recovery', score: 88, color: '#10b981' },
        ].map((m, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-3">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="35" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                <circle cx="40" cy="40" r="35" fill="none" stroke={m.color} strokeWidth="6" strokeLinecap="round" strokeDasharray={`${(m.score / 100) * 220} 220`} />
              </svg>
              <span className="absolute text-lg font-black text-gray-900">{m.score}</span>
            </div>
            <p className="text-sm font-bold text-gray-600">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Progress Chart */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-ath-purple flex items-center gap-2 mb-6"><TrendingUp className="h-5 w-5 text-ath-blue" /> Weekly Progress</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} domain={[60, 100]} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="speed" stroke="#4C3BCF" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="strength" stroke="#4B70F5" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="endurance" stroke="#3DC2EC" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="recovery" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-ath-purple flex items-center gap-2 mb-6"><Award className="h-5 w-5 text-ath-blue" /> Ability Radar</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: '#6b7280', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar dataKey="value" stroke="#4C3BCF" fill="#4C3BCF" fillOpacity={0.15} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Monthly Load */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-ath-purple mb-6">Monthly Training Load</h2>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyLoad}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
              <Bar dataKey="load" fill="#4B70F5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MyPerformance;
