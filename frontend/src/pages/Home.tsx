import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, BarChart3, Users, Shield, Zap, HeartPulse, Calendar, ArrowRight, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    { icon: <Users className="h-6 w-6" />, title: 'Athlete Profiles', desc: 'Complete athlete management with detailed profiles, stats, and performance history.' },
    { icon: <Zap className="h-6 w-6" />, title: 'Training Programs', desc: 'Create, assign, and monitor training programs with real-time tracking.' },
    { icon: <BarChart3 className="h-6 w-6" />, title: 'Performance Analytics', desc: 'Deep analytics with speed, strength, endurance, and recovery metrics.' },
    { icon: <HeartPulse className="h-6 w-6" />, title: 'Injury Tracking', desc: 'Monitor injuries, recovery plans, and return-to-play timelines.' },
    { icon: <Shield className="h-6 w-6" />, title: 'Team Management', desc: 'Organize athletes into teams, assign coaches, and track team performance.' },
    { icon: <Calendar className="h-6 w-6" />, title: 'Smart Scheduling', desc: 'Schedule training sessions, matches, and recovery with calendar views.' },
  ];

  const stats = [
    { value: '50K+', label: 'Athletes Tracked' },
    { value: '12K+', label: 'Training Plans' },
    { value: '98%', label: 'Performance Uplift' },
    { value: '200+', label: 'Teams Active' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-ath-gradient opacity-95"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(61,194,236,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(75,112,245,0.2) 0%, transparent 50%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Activity className="h-4 w-4 text-ath-cyan" />
              <span className="text-white/90 text-sm font-semibold">Modern Sports Analytics Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Train Smarter.<br />
              <span className="text-ath-cyan">Perform Stronger.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              AthleteOps is your command center for athletic excellence. Track performance, manage training, monitor health, and unlock your full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="inline-flex items-center justify-center gap-2 bg-white text-ath-purple px-8 py-3.5 rounded-xl font-bold text-lg shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-105 transition-all">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/login" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Sign In <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C360,100 720,20 1440,60 V100 H0 Z" fill="#F7F8FC"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-ath-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                <p className="text-3xl sm:text-4xl font-black text-gradient mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-ath-purple mb-4">Everything You Need</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">A complete suite of tools designed for coaches, teams, and athletes to reach peak performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-ath-blue/30 hover:shadow-xl hover:shadow-ath-blue/5 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-ath-gradient flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-ath-blue/20">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-ath-purple mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-ath-gradient p-10 sm:p-16 text-center">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)' }}></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Elevate Your Game?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Join thousands of athletes and coaches using AthleteOps to reach peak performance.</p>
              <Link to="/register" className="inline-flex items-center gap-2 bg-white text-ath-purple px-8 py-3.5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Start Free Today <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
