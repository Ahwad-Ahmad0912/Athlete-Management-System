import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Dumbbell, HeartPulse, Clock, Flame, Zap, Calendar, ChevronRight } from 'lucide-react';

const performanceData = [
  { week: 'W1', speed: 72, strength: 65, endurance: 70 },
  { week: 'W2', speed: 75, strength: 68, endurance: 72 },
  { week: 'W3', speed: 78, strength: 70, endurance: 75 },
  { week: 'W4', speed: 80, strength: 74, endurance: 78 },
  { week: 'W5', speed: 82, strength: 77, endurance: 80 },
  { week: 'W6', speed: 85, strength: 80, endurance: 83 },
];

const trainingLoad = [
  { day: 'Mon', load: 85 }, { day: 'Tue', load: 72 }, { day: 'Wed', load: 90 },
  { day: 'Thu', load: 65 }, { day: 'Fri', load: 88 }, { day: 'Sat', load: 45 }, { day: 'Sun', load: 30 },
];

const AthleteDashboard: React.FC = () => {
  const stats = [
    { icon: <Zap className="h-5 w-5" />, label: 'Performance Score', value: '87/100', trend: '+5%', color: 'from-ath-indigo to-ath-blue' },
    { icon: <Dumbbell className="h-5 w-5" />, label: 'Training Completion', value: '92%', trend: '+3%', color: 'from-ath-blue to-ath-cyan' },
    { icon: <Flame className="h-5 w-5" />, label: 'Weekly Sessions', value: '5/6', trend: 'On track', color: 'from-amber-500 to-orange-400' },
    { icon: <HeartPulse className="h-5 w-5" />, label: 'Injury Status', value: 'Healthy', trend: 'Clear', color: 'from-emerald-500 to-green-400' },
  ];

  const upcomingSessions = [
    { title: 'Strength Training', time: '09:00 AM', coach: 'Coach Martinez', type: 'Strength' },
    { title: 'Sprint Drills', time: '02:00 PM', coach: 'Coach Lee', type: 'Speed' },
    { title: 'Recovery Yoga', time: '05:30 PM', coach: 'Coach Patel', type: 'Recovery' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple">Welcome back, Alex! 👋</h1>
        <p className="text-gray-500 mt-1">Here's your performance overview for this week.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">{s.trend}</span>
            </div>
            <p className="text-2xl font-black text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-ath-purple flex items-center gap-2"><TrendingUp className="h-5 w-5 text-ath-blue" /> Performance Trend</h2>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} domain={[60, 100]} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="speed" stroke="#4C3BCF" strokeWidth={2.5} dot={{ r: 4, fill: '#4C3BCF', strokeWidth: 0 }} />
                <Line type="monotone" dataKey="strength" stroke="#4B70F5" strokeWidth={2.5} dot={{ r: 4, fill: '#4B70F5', strokeWidth: 0 }} />
                <Line type="monotone" dataKey="endurance" stroke="#3DC2EC" strokeWidth={2.5} dot={{ r: 4, fill: '#3DC2EC', strokeWidth: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 mt-4 justify-center">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500"><span className="w-3 h-3 rounded-full bg-ath-indigo"></span> Speed</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500"><span className="w-3 h-3 rounded-full bg-ath-blue"></span> Strength</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500"><span className="w-3 h-3 rounded-full bg-ath-cyan"></span> Endurance</span>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-ath-purple flex items-center gap-2 mb-5"><Calendar className="h-5 w-5 text-ath-blue" /> Today's Schedule</h2>
          <div className="space-y-3">
            {upcomingSessions.map((s, i) => (
              <div key={i} className="p-4 rounded-xl bg-gray-50 hover:bg-ath-indigo/5 border border-transparent hover:border-ath-indigo/10 transition-all cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm group-hover:text-ath-indigo transition-colors">{s.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5"><Clock className="inline h-3 w-3 mr-1" />{s.time} · {s.coach}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-ath-blue transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Load */}
      <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-ath-purple mb-6">Weekly Training Load</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trainingLoad}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
              <defs>
                <linearGradient id="loadGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4B70F5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4B70F5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="load" stroke="#4B70F5" fill="url(#loadGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AthleteDashboard;
