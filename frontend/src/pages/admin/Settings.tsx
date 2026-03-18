import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, Palette, Database, Save } from 'lucide-react';

const Settings: React.FC = () => (
  <div>
    <div className="mb-8">
      <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><SettingsIcon className="h-7 w-7 text-ath-blue" /> Settings</h1>
      <p className="text-gray-500 mt-1">Configure system preferences and platform settings.</p>
    </div>

    <div className="space-y-6 max-w-3xl">
      {/* General */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-ath-purple mb-5 flex items-center gap-2"><Palette className="h-5 w-5 text-ath-blue" /> General</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Platform Name</label>
            <input type="text" defaultValue="AthleteOps" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tagline</label>
            <input type="text" defaultValue="Train Smarter. Perform Stronger." className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-ath-purple mb-5 flex items-center gap-2"><Bell className="h-5 w-5 text-ath-blue" /> Notifications</h2>
        <div className="space-y-4">
          {[
            { label: 'Email notifications for new injuries', checked: true },
            { label: 'Alert coaches on missed sessions', checked: true },
            { label: 'Weekly performance reports', checked: false },
            { label: 'System maintenance alerts', checked: true },
          ].map((opt, i) => (
            <label key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-ath-indigo/5 transition-colors cursor-pointer">
              <span className="text-sm font-medium text-gray-700">{opt.label}</span>
              <div className={`w-11 h-6 rounded-full transition-colors relative ${opt.checked ? 'bg-ath-indigo' : 'bg-gray-300'}`}>
                <div className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-transform ${opt.checked ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-ath-purple mb-5 flex items-center gap-2"><Shield className="h-5 w-5 text-ath-blue" /> Security</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">JWT Secret</label>
            <input type="password" defaultValue="••••••••••••" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Session Timeout (minutes)</label>
            <input type="number" defaultValue={30} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
          </div>
        </div>
      </div>

      {/* Database */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-ath-purple mb-5 flex items-center gap-2"><Database className="h-5 w-5 text-ath-blue" /> Database</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Host</label>
            <input type="text" defaultValue="localhost" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Database Name</label>
            <input type="text" defaultValue="athleteops_db" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
          </div>
        </div>
      </div>

      {/* Save */}
      <button className="bg-ath-gradient text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/30 hover:scale-[1.02] transition-all flex items-center gap-2">
        <Save className="h-4 w-4" /> Save Settings
      </button>
    </div>
  </div>
);

export default Settings;
