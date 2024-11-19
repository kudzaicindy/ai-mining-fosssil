import { motion } from 'framer-motion';
import { Leaf, Droplet, Wind, TreePine } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = Array.from({ length: 12 }, (_, i) => ({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
  waterUsage: Math.floor(Math.random() * 1000) + 2000,
  emissions: Math.floor(Math.random() * 500) + 1000,
  energy: Math.floor(Math.random() * 800) + 1500,
}));

const EnvironmentalImpact = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gradient mb-8">Environmental Impact</h1>

        {/* Environmental Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Droplet, label: 'Water Usage', value: '2,450 m³', trend: '-15%' },
            { icon: Wind, label: 'CO2 Emissions', value: '1,200 tons', trend: '-20%' },
            { icon: TreePine, label: 'Land Reclamation', value: '85%', trend: '+5%' },
          ].map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <metric.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600">{metric.label}</p>
                  <p className="text-2xl font-semibold">{metric.value}</p>
                </div>
              </div>
              <p className={`text-sm ${metric.trend.startsWith('-') ? 'text-green-600' : 'text-blue-600'}`}>
                {metric.trend} from last month
              </p>
            </motion.div>
          ))}
        </div>

        {/* Usage Trends */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Resource Usage Trends</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="waterUsage" stackId="1" stroke="#2196f3" fill="#2196f3" fillOpacity={0.2} name="Water Usage (m³)" />
                <Area type="monotone" dataKey="emissions" stackId="2" stroke="#f44336" fill="#f44336" fillOpacity={0.2} name="CO2 Emissions (tons)" />
                <Area type="monotone" dataKey="energy" stackId="3" stroke="#4caf50" fill="#4caf50" fillOpacity={0.2} name="Energy Usage (MWh)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Sustainability Initiatives</h2>
          <div className="space-y-4">
            {[
              { title: 'Water Recycling Program', status: 'Active', progress: '75%' },
              { title: 'Solar Power Integration', status: 'In Progress', progress: '45%' },
              { title: 'Land Rehabilitation Project', status: 'Active', progress: '60%' },
            ].map((initiative, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{initiative.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    initiative.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {initiative.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: initiative.progress }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-1">{initiative.progress}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalImpact; 