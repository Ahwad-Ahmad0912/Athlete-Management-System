import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Mail, Lock, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', role: 'athlete' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login — navigate based on role
    navigate(`/${form.role}/dashboard`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-ath-gradient flex items-center justify-center shadow-xl shadow-ath-blue/25">
              <Activity className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-ath-purple">Welcome back</h1>
          <p className="text-gray-500 mt-1">Sign in to your AthleteOps account</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 focus:border-ath-blue transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 focus:border-ath-blue transition-all" />
              </div>
            </div>

            {/* Role Selection (mock) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Sign in as</label>
              <div className="grid grid-cols-3 gap-2">
                {['athlete', 'coach', 'admin'].map((r) => (
                  <button key={r} type="button" onClick={() => setForm({ ...form, role: r })} className={`py-2 rounded-xl text-sm font-bold capitalize transition-all border ${form.role === r ? 'bg-ath-gradient text-white border-transparent shadow-lg shadow-ath-blue/20' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-ath-blue/30'}`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full bg-ath-gradient text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-ath-blue/30 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Sign In <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account? <Link to="/register" className="text-ath-indigo font-bold hover:text-ath-blue transition-colors">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
