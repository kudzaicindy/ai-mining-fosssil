import { motion } from 'framer-motion';
import { Calendar, Clock, Wrench, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { equipment: 'Excavators', scheduled: 4, completed: 3, pending: 1 },
  { equipment: 'Drills', scheduled: 6, completed: 4, pending: 2 },
  { equipment: 'Loaders', scheduled: 3, completed: 2, pending: 1 },
  { equipment: 'Trucks', scheduled: 5, completed: 3, pending: 2 },
];

const MaintenanceSchedule = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gradient mb-8">Maintenance Schedule</h1>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Calendar, label: 'Scheduled', value: '18' },
            { icon: Clock, label: 'In Progress', value: '5' },
            { icon: Wrench, label: 'Completed', value: '12' },
            { icon: AlertTriangle, label: 'Overdue', value: '2' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Maintenance Status Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Maintenance Status by Equipment</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="equipment" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" stackId="a" fill="#4caf50" name="Completed" />
                <Bar dataKey="pending" stackId="a" fill="#ff9800" name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Maintenance */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Upcoming Maintenance Tasks</h2>
          <div className="space-y-4">
            {[
              { equipment: 'Excavator XC-201', date: '2024-03-25', priority: 'High', type: 'Preventive' },
              { equipment: 'Drill RIG-104', date: '2024-03-26', priority: 'Medium', type: 'Routine' },
              { equipment: 'Loader HD-305', date: '2024-03-27', priority: 'Low', type: 'Inspection' },
              { equipment: 'Truck T-405', date: '2024-03-28', priority: 'High', type: 'Repair' },
            ].map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">{task.equipment}</p>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span>{task.date}</span>
                    <span>•</span>
                    <span>{task.type}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  task.priority === 'High' ? 'bg-red-100 text-red-600' :
                  task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSchedule; 