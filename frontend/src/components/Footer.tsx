import React from 'react';
import { Activity, Github, Twitter, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-ath-purple text-white/70">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-ath-gradient flex items-center justify-center">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-black text-white">Athlete<span className="text-ath-cyan">Ops</span></span>
          </Link>
          <p className="text-sm leading-relaxed">Train Smarter. Perform Stronger. The modern athlete performance management platform.</p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Platform</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-ath-cyan transition-colors">Home</Link></li>
            <li><Link to="/login" className="hover:text-ath-cyan transition-colors">Login</Link></li>
            <li><Link to="/register" className="hover:text-ath-cyan transition-colors">Register</Link></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Features</h4>
          <ul className="space-y-2.5 text-sm">
            <li><span className="hover:text-ath-cyan transition-colors cursor-default">Athlete Profiles</span></li>
            <li><span className="hover:text-ath-cyan transition-colors cursor-default">Performance Analytics</span></li>
            <li><span className="hover:text-ath-cyan transition-colors cursor-default">Injury Tracking</span></li>
            <li><span className="hover:text-ath-cyan transition-colors cursor-default">Team Management</span></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Connect</h4>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-ath-blue/40 transition-colors"><Github className="h-4 w-4" /></a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-ath-blue/40 transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-ath-blue/40 transition-colors"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs">
        <p>© 2026 AthleteOps. Made with <Heart className="inline h-3 w-3 text-red-400" /> for athletes everywhere.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
