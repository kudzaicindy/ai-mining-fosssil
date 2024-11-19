import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const safetyData = [
  { name: 'Compliant', value: 85 },
  { name: 'Non-Compliant', value: 15 },
];

const COLORS = ['#4CAF50', '#f44336'];

const SafetyCompliance = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gradient mb-8">Safety & Compliance</h1>

        {/* Safety Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Compliance Rate</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={safetyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {safetyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Safety Metrics</h2>
            <div className="space-y-4">
              {[
                { label: 'Days Without Incidents', value: '45' },
                { label: 'Open Safety Reports', value: '3' },
                { label: 'Completed Inspections', value: '28' },
                { label: 'Training Compliance', value: '94%' },
              ].map((metric) => (
                <div key={metric.label} className="flex justify-between items-center">
                  <span className="text-gray-600">{metric.label}</span>
                  <span className="font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Safety Reports */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Recent Safety Reports</h2>
          <div className="space-y-4">
            {[
              { type: 'critical', title: 'Emergency Exit Blockage', status: 'Open', date: '2024-03-22' },
              { type: 'warning', title: 'PPE Compliance Issue', status: 'In Progress', date: '2024-03-21' },
              { type: 'success', title: 'Safety Training Completed', status: 'Closed', date: '2024-03-20' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  {report.type === 'critical' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                  {report.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                  {report.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                  <div>
                    <p className="font-semibold">{report.title}</p>
                    <p className="text-sm text-gray-500">{report.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  report.status === 'Open' ? 'bg-red-100 text-red-600' :
                  report.status === 'In Progress' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {report.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyCompliance; 