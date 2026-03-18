import React from 'react';
import { User, Mail, Ruler, Weight, Trophy, Shield, MapPin, Edit } from 'lucide-react';

const AthleteProfile: React.FC = () => {
  const profile = {
    name: 'Alex Thompson',
    email: 'alex.thompson@athleteops.com',
    sport: 'Track & Field',
    position: 'Sprinter',
    team: 'Phoenix Elite',
    coach: 'Coach Martinez',
    age: 24,
    height: '182 cm',
    weight: '78 kg',
    joined: 'Jan 2025',
    performanceScore: 87,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><User className="h-7 w-7 text-ath-blue" /> My Profile</h1>
        <p className="text-gray-500 mt-1">Your athlete profile and personal information.</p>
      </div>

      {/* Header Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div className="h-32 bg-ath-gradient relative">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)' }}></div>
        </div>
        <div className="px-6 pb-6 -mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <div className="w-24 h-24 rounded-2xl bg-ath-gradient flex items-center justify-center text-white text-3xl font-black border-4 border-white shadow-xl">
              AT
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-gray-900">{profile.name}</h2>
              <p className="text-gray-500 text-sm">{profile.sport} · {profile.position} · {profile.team}</p>
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ath-gradient text-white font-bold text-sm shadow-lg shadow-ath-blue/20 hover:scale-105 transition-all">
              <Edit className="h-4 w-4" /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Info */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-ath-purple mb-5">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <Mail className="h-4 w-4" />, label: 'Email', value: profile.email },
              { icon: <Trophy className="h-4 w-4" />, label: 'Sport', value: profile.sport },
              { icon: <MapPin className="h-4 w-4" />, label: 'Position', value: profile.position },
              { icon: <Shield className="h-4 w-4" />, label: 'Team', value: profile.team },
              { icon: <Ruler className="h-4 w-4" />, label: 'Height', value: profile.height },
              { icon: <Weight className="h-4 w-4" />, label: 'Weight', value: profile.weight },
              { icon: <User className="h-4 w-4" />, label: 'Age', value: `${profile.age} years` },
              { icon: <User className="h-4 w-4" />, label: 'Coach', value: profile.coach },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                <div className="w-9 h-9 rounded-lg bg-ath-indigo/10 flex items-center justify-center text-ath-indigo">{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm font-bold text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="relative inline-flex items-center justify-center w-28 h-28 mb-3">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 112 112">
                <circle cx="56" cy="56" r="48" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                <circle cx="56" cy="56" r="48" fill="none" stroke="#4C3BCF" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(profile.performanceScore / 100) * 301.6} 301.6`} />
              </svg>
              <span className="absolute text-2xl font-black text-ath-indigo">{profile.performanceScore}</span>
            </div>
            <p className="font-bold text-gray-900">Performance Score</p>
            <p className="text-xs text-gray-500">Overall Rating</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-ath-purple mb-3">Member Since</h3>
            <p className="text-2xl font-black text-gradient">{profile.joined}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteProfile;
