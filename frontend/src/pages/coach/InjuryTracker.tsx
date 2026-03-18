import React from 'react';
import { HeartPulse, Search, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const injuries = [
  { id: 1, athlete: 'Marcus Johnson', type: 'Knee Strain', severity: 'Moderate', date: 'Mar 15, 2026', status: 'Active', recovery: 'Physical therapy 3x/week', expected: 'Apr 5, 2026' },
  { id: 2, athlete: 'Mia Rodriguez', type: 'Shoulder Impingement', severity: 'Severe', date: 'Mar 10, 2026', status: 'Active', recovery: 'Rest + rehab exercises', expected: 'Apr 15, 2026' },
  { id: 3, athlete: 'Alex Thompson', type: 'Hamstring Tightness', severity: 'Minor', date: 'Mar 12, 2026', status: 'Recovering', recovery: 'Stretching program', expected: 'Mar 22, 2026' },
  { id: 4, athlete: 'Sarah Chen', type: 'Lower Back Pain', severity: 'Minor', date: 'Feb 28, 2026', status: 'Recovered', recovery: 'Core strengthening', expected: 'Mar 10, 2026' },
];

const InjuryTracker: React.FC = () => {
  const severityColors: Record<string, string> = { 'Minor': 'bg-green-100 text-green-700', 'Moderate': 'bg-yellow-100 text-yellow-700', 'Severe': 'bg-orange-100 text-orange-700', 'Critical': 'bg-red-100 text-red-700' };
  const statusIcon = (status: string) => status === 'Active' ? <AlertTriangle className="h-4 w-4 text-red-500" /> : status === 'Recovering' ? <Clock className="h-4 w-4 text-amber-500" /> : <CheckCircle className="h-4 w-4 text-emerald-500" />;
  const statusColors: Record<string, string> = { 'Active': 'bg-red-100 text-red-700', 'Recovering': 'bg-amber-100 text-amber-700', 'Recovered': 'bg-emerald-100 text-emerald-700' };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><HeartPulse className="h-7 w-7 text-ath-blue" /> Injury Tracker</h1>
        <p className="text-gray-500 mt-1">Monitor injuries and recovery progress across your athletes.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center text-red-600"><AlertTriangle className="h-5 w-5" /></div>
          <div><p className="text-2xl font-black text-gray-900">2</p><p className="text-xs text-gray-500">Active Injuries</p></div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600"><Clock className="h-5 w-5" /></div>
          <div><p className="text-2xl font-black text-gray-900">1</p><p className="text-xs text-gray-500">Recovering</p></div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle className="h-5 w-5" /></div>
          <div><p className="text-2xl font-black text-gray-900">1</p><p className="text-xs text-gray-500">Recovered</p></div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search by athlete or injury..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
        </div>
      </div>

      {/* Injury Cards */}
      <div className="space-y-4">
        {injuries.map((inj) => (
          <div key={inj.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-ath-blue/20 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-ath-gradient flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {inj.athlete.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{inj.athlete}</p>
                  <p className="text-sm text-gray-500">{inj.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${severityColors[inj.severity]}`}>{inj.severity}</span>
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 ${statusColors[inj.status]}`}>{statusIcon(inj.status)}{inj.status}</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-500">
              <div><span className="font-semibold text-gray-700">Reported:</span> {inj.date}</div>
              <div><span className="font-semibold text-gray-700">Recovery:</span> {inj.recovery}</div>
              <div><span className="font-semibold text-gray-700">Expected Return:</span> {inj.expected}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InjuryTracker;
