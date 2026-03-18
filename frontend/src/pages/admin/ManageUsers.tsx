import React from 'react';
import { Users, Search, Shield, User, Mail, Edit, Trash2, MoreVertical } from 'lucide-react';

const users = [
  { id: 1, name: 'Alex Thompson', email: 'alex@athleteops.com', role: 'Athlete', status: 'Active', joined: 'Jan 2025' },
  { id: 2, name: 'Coach Martinez', email: 'martinez@athleteops.com', role: 'Coach', status: 'Active', joined: 'Dec 2024' },
  { id: 3, name: 'Admin User', email: 'admin@athleteops.com', role: 'Admin', status: 'Active', joined: 'Nov 2024' },
  { id: 4, name: 'Sarah Chen', email: 'sarah@athleteops.com', role: 'Athlete', status: 'Active', joined: 'Feb 2025' },
  { id: 5, name: 'Marcus Johnson', email: 'marcus@athleteops.com', role: 'Athlete', status: 'Suspended', joined: 'Mar 2025' },
  { id: 6, name: 'Coach Lee', email: 'lee@athleteops.com', role: 'Coach', status: 'Active', joined: 'Jan 2025' },
];

const ManageUsers: React.FC = () => {
  const roleBadge: Record<string, string> = { 'Admin': 'bg-purple-100 text-purple-700', 'Coach': 'bg-ath-blue/10 text-ath-blue', 'Athlete': 'bg-gray-100 text-gray-700' };
  const roleIcon = (r: string) => r === 'Admin' ? <Shield className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-ath-purple flex items-center gap-2"><Users className="h-7 w-7 text-ath-blue" /> Manage Users</h1>
          <p className="text-gray-500 mt-1">Control user accounts and role assignments.</p>
        </div>
        <button className="bg-ath-gradient text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/20 hover:scale-105 transition-all">+ Add User</button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search users..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4 font-semibold w-12"></th>
                <th className="px-6 py-4 font-semibold">User</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Joined</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-ath-gradient flex items-center justify-center text-white font-bold text-xs">
                      {u.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{u.name}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Mail className="h-3 w-3" /> {u.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 w-max px-2.5 py-1 rounded-lg text-xs font-bold ${roleBadge[u.role]}`}>
                      {roleIcon(u.role)} {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${u.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>{u.status}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{u.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-ath-blue hover:bg-ath-blue/10 rounded-lg"><Edit className="h-4 w-4" /></button>
                      <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="h-4 w-4" /></button>
                      <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg"><MoreVertical className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
