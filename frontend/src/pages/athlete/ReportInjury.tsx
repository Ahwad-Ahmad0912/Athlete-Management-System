import React, { useState } from 'react';
import { HeartPulse, AlertTriangle, Send } from 'lucide-react';

const ReportInjury: React.FC = () => {
  const [form, setForm] = useState({ injury_type: '', severity: 'Minor', description: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const pastInjuries = [
    { id: 1, type: 'Hamstring Strain', severity: 'Moderate', date: 'Feb 10, 2026', status: 'Recovered' },
    { id: 2, type: 'Ankle Sprain', severity: 'Minor', date: 'Jan 15, 2026', status: 'Recovered' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const severityColors: Record<string, string> = {
    'Minor': 'bg-green-100 text-green-700',
    'Moderate': 'bg-yellow-100 text-yellow-700',
    'Severe': 'bg-orange-100 text-orange-700',
    'Critical': 'bg-red-100 text-red-700',
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><HeartPulse className="h-7 w-7 text-ath-blue" /> Report an Injury</h1>
        <p className="text-gray-500 mt-1">Notify your coach about any injury for immediate attention.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-ath-purple mb-5">New Injury Report</h2>
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-lg font-bold text-gray-900">Report Submitted</p>
              <p className="text-gray-500 text-sm mt-1">Your coach has been notified.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Injury Type</label>
                <input type="text" required value={form.injury_type} onChange={(e) => setForm({ ...form, injury_type: e.target.value })} placeholder="e.g. Hamstring Strain" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 focus:border-ath-blue" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Severity</label>
                <div className="grid grid-cols-4 gap-2">
                  {['Minor', 'Moderate', 'Severe', 'Critical'].map((s) => (
                    <button key={s} type="button" onClick={() => setForm({ ...form, severity: s })} className={`py-2 rounded-xl text-xs font-bold transition-all border ${form.severity === s ? 'bg-ath-gradient text-white border-transparent' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-ath-blue/30'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Injury</label>
                <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 focus:border-ath-blue" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
                <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe how the injury occurred..." className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 focus:border-ath-blue resize-none" />
              </div>
              <button type="submit" className="w-full bg-ath-gradient text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/30 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                <Send className="h-4 w-4" /> Submit Report
              </button>
            </form>
          )}
        </div>

        {/* Past Injuries */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-ath-purple mb-5 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-amber-500" /> Injury History</h2>
          <div className="space-y-3">
            {pastInjuries.map((inj) => (
              <div key={inj.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{inj.type}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{inj.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-lg text-xs font-bold ${severityColors[inj.severity]}`}>{inj.severity}</span>
                    <span className="px-2 py-0.5 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-700">{inj.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportInjury;
