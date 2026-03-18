import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Shield, Activity, Calendar, TrendingUp } from 'lucide-react';

const monthlyAthletes = [
  { month: 'Jan', count: 150 }, { month: 'Feb', count: 165 }, { month: 'Mar', count: 180 },
  { month: 'Apr', count: 195 }, { month: 'May', count: 210 }, { month: 'Jun', count: 230 },
];

const sessionData = [
  { day: 'Mon', sessions: 42 }, { day: 'Tue', sessions: 38 }, { day: 'Wed', sessions: 55 },
  { day: 'Thu', sessions: 35 }, { day: 'Fri', sessions: 48 }, { day: 'Sat', sessions: 60 }, { day: 'Sun', sessions: 20 },
];

const AdminDashboard: React.FC = () => {
  const stats = [
    { icon: <Users className="h-5 w-5" />, label: 'Total Athletes', value: '230', trend: '+12%', color: 'from-ath-indigo to-ath-blue' },
    { icon: <Shield className="h-5 w-5" />, label: 'Active Teams', value: '18', trend: '+2', color: 'from-ath-blue to-ath-cyan' },
    { icon: <Activity className="h-5 w-5" />, label: 'Active Sessions', value: '45', trend: 'Today', color: 'from-emerald-500 to-green-400' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Events This Week', value: '12', trend: '3 matches', color: 'from-amber-500 to-orange-400' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">System-wide overview of AthleteOps platform metrics.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>{s.icon}</div>
              <span className="text-xs font-bold text-ath-blue bg-ath-blue/10 px-2 py-1 rounded-lg">{s.trend}</span>
            </div>
            <p className="text-2xl font-black text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Chart */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-ath-purple flex items-center gap-2 mb-6"><TrendingUp className="h-5 w-5 text-ath-blue" /> Athlete Growth</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyAthletes}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="count" stroke="#4C3BCF" strokeWidth={3} dot={{ r: 4, fill: '#4C3BCF', strokeWidth: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sessions Chart */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-ath-purple mb-6">Daily Sessions</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sessionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="sessions" fill="#4B70F5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
