import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Shield, Leaf, Wrench, FileText, Layout } from 'lucide-react';
import Landing from './pages/Landing';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import EquipmentMonitoring from './pages/EquipmentMonitoring';
import SafetyCompliance from './pages/SafetyCompliance';
import EnvironmentalImpact from './pages/EnvironmentalImpact';
import MaintenanceSchedule from './pages/MaintenanceSchedule';

// Navigation item component with active state
const NavItem = ({ path, icon: Icon, label }: { path: string; icon: any; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`flex items-center px-4 py-2 transition-colors duration-200 ${
        isActive 
          ? 'text-primary-600 border-b-2 border-primary-600' 
          : 'text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-600'
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    { path: '/overview', icon: Layout, label: 'Overview' },
    { path: '/dashboard', icon: BarChart2, label: 'Dashboard' },
    { path: '/equipment', icon: Wrench, label: 'Equipment' },
    { path: '/safety', icon: Shield, label: 'Safety' },
    { path: '/environmental', icon: Leaf, label: 'Environmental' },
    { path: '/maintenance', icon: FileText, label: 'Maintenance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-2 overflow-x-auto no-scrollbar">
              {navItems.map((item) => (
                <NavItem key={item.path} {...item} />
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-6">
        {children}
      </main>
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      {isLandingPage ? (
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      ) : (
        <AppLayout>
          <Routes>
            <Route path="/overview" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/equipment" element={<EquipmentMonitoring />} />
            <Route path="/safety" element={<SafetyCompliance />} />
            <Route path="/environmental" element={<EnvironmentalImpact />} />
            <Route path="/maintenance" element={<MaintenanceSchedule />} />
          </Routes>
        </AppLayout>
      )}
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;