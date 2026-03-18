import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Public pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// Athlete pages
import AthleteDashboard from './pages/athlete/Dashboard';
import MyTraining from './pages/athlete/MyTraining';
import MyPerformance from './pages/athlete/MyPerformance';
import ReportInjury from './pages/athlete/ReportInjury';
import AthleteProfile from './pages/athlete/AthleteProfile';

// Coach pages
import CoachDashboard from './pages/coach/Dashboard';
import ManageAthletes from './pages/coach/ManageAthletes';
import TrainingPrograms from './pages/coach/TrainingPrograms';
import InjuryTracker from './pages/coach/InjuryTracker';
import ScheduleSessions from './pages/coach/ScheduleSessions';

// Admin pages
import AdminDashboard from './pages/admin/Dashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageTeams from './pages/admin/ManageTeams';
import SystemAnalytics from './pages/admin/SystemAnalytics';
import Settings from './pages/admin/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Athlete Dashboard */}
        <Route path="/athlete" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AthleteDashboard />} />
          <Route path="training" element={<MyTraining />} />
          <Route path="performance" element={<MyPerformance />} />
          <Route path="injuries" element={<ReportInjury />} />
          <Route path="profile" element={<AthleteProfile />} />
        </Route>

        {/* Coach Dashboard */}
        <Route path="/coach" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<CoachDashboard />} />
          <Route path="athletes" element={<ManageAthletes />} />
          <Route path="training" element={<TrainingPrograms />} />
          <Route path="injuries" element={<InjuryTracker />} />
          <Route path="schedule" element={<ScheduleSessions />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="teams" element={<ManageTeams />} />
          <Route path="analytics" element={<SystemAnalytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
