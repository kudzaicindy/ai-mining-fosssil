import { motion } from 'framer-motion';
import { Settings, AlertTriangle, Battery, Thermometer } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  temperature: Math.floor(Math.random() * 30) + 60,
  vibration: Math.floor(Math.random() * 50) + 20,
  pressure: Math.floor(Math.random() * 40) + 30,
}));

const EquipmentMonitoring = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gradient mb-8">Equipment Monitoring</h1>

        {/* Equipment Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { name: 'Excavator XC-201', status: 'Operational', health: '92%' },
            { name: 'Drill RIG-104', status: 'Maintenance', health: '68%' },
            { name: 'Loader HD-305', status: 'Critical', health: '45%' },
          ].map((equipment) => (
            <motion.div
              key={equipment.name}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{equipment.name}</h3>
                  <p className={`mt-2 ${
                    equipment.status === 'Operational' ? 'text-green-500' :
                    equipment.status === 'Critical' ? 'text-red-500' : 'text-yellow-500'
                  }`}>
                    {equipment.status}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Health Score</p>
                  <p className="text-2xl font-bold">{equipment.health}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Charts */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Equipment Performance Metrics</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperature (°C)" />
                <Line type="monotone" dataKey="vibration" stroke="#82ca9d" name="Vibration (Hz)" />
                <Line type="monotone" dataKey="pressure" stroke="#ffc658" name="Pressure (PSI)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Upcoming Maintenance</h2>
          <div className="space-y-4">
            {[
              { equipment: 'Excavator XC-201', date: '2024-03-25', type: 'Routine' },
              { equipment: 'Drill RIG-104', date: '2024-03-23', type: 'Urgent' },
              { equipment: 'Loader HD-305', date: '2024-03-24', type: 'Repair' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">{item.equipment}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  item.type === 'Urgent' ? 'bg-red-100 text-red-600' :
                  item.type === 'Repair' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentMonitoring; 