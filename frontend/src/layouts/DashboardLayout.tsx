import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import {
  Activity, LayoutDashboard, Users, Dumbbell, LineChart, HeartPulse,
  Shield, Calendar, Settings, ChevronLeft, ChevronRight, Bell, Search, LogOut, Menu, X
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Determine role from URL
  const role = location.pathname.startsWith('/admin') ? 'admin'
    : location.pathname.startsWith('/coach') ? 'coach' : 'athlete';

  const navItems: Record<string, { to: string; icon: React.ReactNode; label: string }[]> = {
    athlete: [
      { to: '/athlete/dashboard', icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard' },
      { to: '/athlete/training', icon: <Dumbbell className="h-5 w-5" />, label: 'My Training' },
      { to: '/athlete/performance', icon: <LineChart className="h-5 w-5" />, label: 'Performance' },
      { to: '/athlete/injuries', icon: <HeartPulse className="h-5 w-5" />, label: 'Report Injury' },
      { to: '/athlete/profile', icon: <Users className="h-5 w-5" />, label: 'My Profile' },
    ],
    coach: [
      { to: '/coach/dashboard', icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard' },
      { to: '/coach/athletes', icon: <Users className="h-5 w-5" />, label: 'Athletes' },
      { to: '/coach/training', icon: <Dumbbell className="h-5 w-5" />, label: 'Training' },
      { to: '/coach/injuries', icon: <HeartPulse className="h-5 w-5" />, label: 'Injuries' },
      { to: '/coach/schedule', icon: <Calendar className="h-5 w-5" />, label: 'Schedule' },
    ],
    admin: [
      { to: '/admin/dashboard', icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard' },
      { to: '/admin/users', icon: <Users className="h-5 w-5" />, label: 'Users' },
      { to: '/admin/teams', icon: <Shield className="h-5 w-5" />, label: 'Teams' },
      { to: '/admin/analytics', icon: <LineChart className="h-5 w-5" />, label: 'Analytics' },
      { to: '/admin/settings', icon: <Settings className="h-5 w-5" />, label: 'Settings' },
    ],
  };

  const items = navItems[role] || navItems.athlete;

  return (
    <div className="min-h-screen flex bg-ath-bg">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full z-40 bg-ath-purple flex flex-col transition-all duration-300 
        ${collapsed ? 'w-[72px]' : 'w-64'} 
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-ath-gradient flex items-center justify-center flex-shrink-0 shadow-lg shadow-ath-blue/30">
              <Activity className="h-5 w-5 text-white" />
            </div>
            {!collapsed && <span className="text-lg font-black text-white whitespace-nowrap">Athlete<span className="text-ath-cyan">Ops</span></span>}
          </div>
        </div>

        {/* Role Badge */}
        {!collapsed && (
          <div className="px-4 py-3">
            <div className="px-3 py-1.5 rounded-lg bg-ath-indigo/50 text-center">
              <span className="text-xs font-bold text-ath-cyan uppercase tracking-widest">{role}</span>
            </div>
          </div>
        )}

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all group
                ${isActive
                  ? 'bg-ath-gradient text-white shadow-lg shadow-ath-blue/25'
                  : 'text-white/60 hover:text-white hover:bg-white/8'
                }
                ${collapsed ? 'justify-center' : ''}`
              }
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Collapse toggle */}
        <div className="hidden lg:flex p-3 border-t border-white/10">
          <button onClick={() => setCollapsed(!collapsed)} className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-colors text-sm">
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <><ChevronLeft className="h-5 w-5" /><span>Collapse</span></>}
          </button>
        </div>

        {/* Logout */}
        <div className="p-3 border-t border-white/10">
          <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-300/70 hover:text-red-300 hover:bg-red-500/10 transition-colors text-sm font-semibold ${collapsed ? 'justify-center' : ''}`}>
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? 'lg:ml-[72px]' : 'lg:ml-64'}`}>
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="relative hidden sm:flex">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ath-blue/30 focus:border-ath-blue w-64" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-500">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-ath-cyan rounded-full border-2 border-white"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-ath-gradient flex items-center justify-center text-white font-bold text-sm shadow-md">
              AO
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
