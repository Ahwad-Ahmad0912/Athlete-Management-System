import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Dumbbell, AlertTriangle, CheckCircle, TrendingUp, ChevronRight } from 'lucide-react';

const complianceData = [
  { name: 'Mon', completed: 18, missed: 2 },
  { name: 'Tue', completed: 16, missed: 4 },
  { name: 'Wed', completed: 20, missed: 0 },
  { name: 'Thu', completed: 15, missed: 5 },
  { name: 'Fri', completed: 19, missed: 1 },
];

const injuryPie = [
  { name: 'Healthy', value: 18 },
  { name: 'Recovering', value: 3 },
  { name: 'Injured', value: 1 },
];
const PIE_COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const CoachDashboard: React.FC = () => {
  const stats = [
    { icon: <Users className="h-5 w-5" />, label: 'My Athletes', value: '22', color: 'from-ath-indigo to-ath-blue' },
    { icon: <Dumbbell className="h-5 w-5" />, label: 'Active Programs', value: '14', color: 'from-ath-blue to-ath-cyan' },
    { icon: <CheckCircle className="h-5 w-5" />, label: 'Compliance Rate', value: '91%', color: 'from-emerald-500 to-green-400' },
    { icon: <AlertTriangle className="h-5 w-5" />, label: 'Injury Alerts', value: '3', color: 'from-amber-500 to-orange-400' },
  ];

  const alerts = [
    { athlete: 'Sarah Chen', message: 'Reported knee discomfort', type: 'injury', time: '2h ago' },
    { athlete: 'Marcus Johnson', message: 'Missed 2 sessions this week', type: 'compliance', time: '4h ago' },
    { athlete: 'Emily Davis', message: 'Performance score dropped 8%', type: 'performance', time: '1d ago' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple">Coach Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of your team's performance and compliance.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all group">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform mb-3`}>
              {s.icon}
            </div>
            <p className="text-2xl font-black text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Compliance Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-ath-purple flex items-center gap-2 mb-6"><TrendingUp className="h-5 w-5 text-ath-blue" /> Training Compliance</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={complianceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="completed" fill="#4C3BCF" radius={[4, 4, 0, 0]} stackId="a" />
                <Bar dataKey="missed" fill="#f87171" radius={[4, 4, 0, 0]} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Injury Pie */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-ath-purple mb-6">Team Health Status</h2>
          <div className="h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={injuryPie} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value">
                  {injuryPie.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-gray-900">22</span>
              <span className="text-xs text-gray-500">Athletes</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {injuryPie.map((d, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }}></span>{d.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-ath-purple mb-5 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-amber-500" /> Athlete Alerts</h2>
        <div className="space-y-3">
          {alerts.map((a, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-ath-indigo/5 transition-colors group cursor-pointer border border-transparent hover:border-ath-indigo/10">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${a.type === 'injury' ? 'bg-red-500' : a.type === 'compliance' ? 'bg-amber-500' : 'bg-ath-blue'}`}>
                  {a.athlete.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 group-hover:text-ath-indigo transition-colors">{a.athlete}</p>
                  <p className="text-xs text-gray-500">{a.message}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">{a.time}</span>
                <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-ath-blue transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard;
