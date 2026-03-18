import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, LogIn, UserPlus } from 'lucide-react';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ath-purple/95 backdrop-blur-md shadow-lg shadow-ath-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-ath-gradient flex items-center justify-center shadow-lg shadow-ath-blue/30 group-hover:shadow-ath-cyan/40 transition-shadow">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              Athlete<span className="text-ath-cyan">Ops</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${location.pathname === '/' ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
              Home
            </Link>
            <Link to="/login" className="px-4 py-2 rounded-lg text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5">
              <LogIn className="h-4 w-4" /> Login
            </Link>
            <Link to="/register" className="px-5 py-2 rounded-xl bg-ath-gradient text-white text-sm font-bold shadow-lg shadow-ath-blue/30 hover:shadow-ath-cyan/40 hover:scale-105 transition-all flex items-center gap-1.5">
              <UserPlus className="h-4 w-4" /> Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-1 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="block px-4 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
