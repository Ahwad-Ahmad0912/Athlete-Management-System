import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart as LineIcon, Download } from 'lucide-react';

const sportDistribution = [
  { name: 'Track & Field', value: 65 },
  { name: 'Swimming', value: 40 },
  { name: 'Basketball', value: 35 },
  { name: 'Tennis', value: 25 },
  { name: 'Other', value: 65 },
];
const COLORS = ['#402E7A', '#4C3BCF', '#4B70F5', '#3DC2EC', '#93c5fd'];

const injuryTrend = [
  { month: 'Jan', injuries: 5 }, { month: 'Feb', injuries: 8 }, { month: 'Mar', injuries: 4 },
  { month: 'Apr', injuries: 6 }, { month: 'May', injuries: 3 }, { month: 'Jun', injuries: 2 },
];

const performanceAvg = [
  { month: 'Jan', avg: 72 }, { month: 'Feb', avg: 74 }, { month: 'Mar', avg: 78 },
  { month: 'Apr', avg: 80 }, { month: 'May', avg: 82 }, { month: 'Jun', avg: 85 },
];

const SystemAnalytics: React.FC = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><LineIcon className="h-7 w-7 text-ath-blue" /> System Analytics</h1>
        <p className="text-gray-500 mt-1">Platform-wide performance and usage analytics.</p>
      </div>
      <button className="bg-ath-gradient text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/20 hover:scale-105 transition-all flex items-center gap-2">
        <Download className="h-4 w-4" /> Export
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Avg Performance */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-ath-purple mb-6">Average Performance Score</h2>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceAvg}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} domain={[60, 100]} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
              <Line type="monotone" dataKey="avg" stroke="#4C3BCF" strokeWidth={3} dot={{ r: 4, fill: '#4C3BCF' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Injury Trend */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-ath-purple mb-6">Injury Trend</h2>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={injuryTrend}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
              <Bar dataKey="injuries" fill="#ef4444" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    {/* Sport Pie */}
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <h2 className="text-lg font-bold text-ath-purple mb-6">Athletes by Sport</h2>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="h-64 w-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={sportDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
                {sportDistribution.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-black text-gray-900">230</span>
            <span className="text-xs text-gray-500">Total</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {sportDistribution.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
              <span className="font-medium">{s.name}</span>
              <span className="text-gray-400">({s.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SystemAnalytics;
