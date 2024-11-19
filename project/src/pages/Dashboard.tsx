import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  AlertTriangle, 
  Truck, 
  Battery, 
  ThermometerSun,
  Activity,
  Calendar,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('24h');

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gradient">Mining Operations Dashboard</h1>
          <div className="flex gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white rounded-lg border border-gray-200 px-4 py-2"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
          </div>
        </div>

        {/* Real-time Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Activity, label: 'Production Rate', value: '450 tons/hour' },
            { icon: Battery, label: 'Energy Usage', value: '2.4 MW' },
            { icon: Truck, label: 'Active Equipment', value: '24/30' },
            { icon: AlertTriangle, label: 'Active Alerts', value: '3' },
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-600">{label}</p>
                  <p className="text-2xl font-semibold">{value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Production Overview</h3>
            {/* Add your preferred charting library component here */}
            <div className="h-80 bg-gray-100 rounded-lg"></div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Equipment Status</h3>
            {/* Add your preferred charting library component here */}
            <div className="h-80 bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Alerts</h3>
          <div className="space-y-4">
            {[
              { type: 'warning', message: 'Equipment M103 requires maintenance', time: '10 minutes ago' },
              { type: 'critical', message: 'High temperature detected in Zone B', time: '25 minutes ago' },
              { type: 'info', message: 'Production target achieved for Sector 3', time: '1 hour ago' },
            ].map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <AlertTriangle className={`w-5 h-5 ${
                    alert.type === 'critical' ? 'text-red-500' :
                    alert.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                  }`} />
                  <span>{alert.message}</span>
                </div>
                <span className="text-gray-500 text-sm">{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;