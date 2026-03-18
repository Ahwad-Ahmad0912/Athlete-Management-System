import React from 'react';
import { Calendar, MapPin, Clock, Users, Dumbbell, Trophy, HeartPulse } from 'lucide-react';

const events = [
  { id: 1, title: 'Sprint Interval Training', type: 'Training', athlete: 'Alex Thompson', team: null, date: 'Mar 19, 2026', time: '09:00 AM', location: 'Main Track', coach: 'Coach Martinez' },
  { id: 2, title: 'Regional Championship', type: 'Match', athlete: null, team: 'Phoenix Elite', date: 'Mar 22, 2026', time: '02:00 PM', location: 'City Stadium', coach: 'Coach Martinez' },
  { id: 3, title: 'Recovery Session', type: 'Recovery', athlete: 'Marcus Johnson', team: null, date: 'Mar 19, 2026', time: '11:00 AM', location: 'Rehab Center', coach: 'Coach Patel' },
  { id: 4, title: 'Team Strategy Meeting', type: 'Meeting', athlete: null, team: 'Phoenix Elite', date: 'Mar 20, 2026', time: '04:00 PM', location: 'Conference Room B', coach: 'Coach Martinez' },
  { id: 5, title: 'Strength & Conditioning', type: 'Training', athlete: 'Sarah Chen', team: null, date: 'Mar 20, 2026', time: '08:00 AM', location: 'Weight Room', coach: 'Coach Lee' },
  { id: 6, title: 'Flexibility Workshop', type: 'Training', athlete: null, team: 'Aqua Force', date: 'Mar 21, 2026', time: '10:00 AM', location: 'Studio 3', coach: 'Coach Patel' },
];

const ScheduleSessions: React.FC = () => {
  const typeConfig: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
    'Training': { icon: <Dumbbell className="h-5 w-5" />, color: 'text-ath-indigo', bg: 'bg-ath-indigo/10' },
    'Match': { icon: <Trophy className="h-5 w-5" />, color: 'text-amber-600', bg: 'bg-amber-100' },
    'Recovery': { icon: <HeartPulse className="h-5 w-5" />, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    'Meeting': { icon: <Users className="h-5 w-5" />, color: 'text-ath-blue', bg: 'bg-ath-blue/10' },
  };

  // Group by date
  const grouped = events.reduce((acc, event) => {
    if (!acc[event.date]) acc[event.date] = [];
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><Calendar className="h-7 w-7 text-ath-blue" /> Schedule</h1>
          <p className="text-gray-500 mt-1">Upcoming training sessions, matches, and events.</p>
        </div>
        <button className="bg-ath-gradient text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/20 hover:scale-105 transition-all">+ New Event</button>
      </div>

      {/* Quick Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {['All', 'Training', 'Match', 'Recovery', 'Meeting'].map((f) => (
          <button key={f} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${f === 'All' ? 'bg-ath-gradient text-white border-transparent shadow-lg shadow-ath-blue/20' : 'bg-white text-gray-500 border-gray-200 hover:border-ath-blue/30'}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {Object.entries(grouped).map(([date, dayEvents]) => (
          <div key={date}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-ath-indigo"></div>
              <h2 className="text-sm font-bold text-ath-purple uppercase tracking-wider">{date}</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <div className="space-y-3 ml-6">
              {dayEvents.map((event) => {
                const config = typeConfig[event.type];
                return (
                  <div key={event.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-ath-blue/20 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl ${config.bg} ${config.color} flex items-center justify-center flex-shrink-0`}>
                        {config.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-900 group-hover:text-ath-indigo transition-colors">{event.title}</h3>
                          <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${config.bg} ${config.color}`}>{event.type}</span>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {event.time}</span>
                          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {event.location}</span>
                          {event.athlete && <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {event.athlete}</span>}
                          {event.team && <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {event.team}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSessions;
