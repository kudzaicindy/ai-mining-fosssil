import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowUp, ArrowDown } from 'lucide-react';

const productionData = [
  { month: 'Jan', actual: 4000, target: 3500 },
  { month: 'Feb', actual: 3800, target: 3500 },
  { month: 'Mar', actual: 4200, target: 3500 },
  { month: 'Apr', actual: 3900, target: 3500 },
  { month: 'May', actual: 4100, target: 3500 },
  { month: 'Jun', actual: 3700, target: 3500 },
];

const efficiencyData = [
  { day: 'Mon', efficiency: 85 },
  { day: 'Tue', efficiency: 83 },
  { day: 'Wed', efficiency: 88 },
  { day: 'Thu', efficiency: 82 },
  { day: 'Fri', efficiency: 86 },
  { day: 'Sat', efficiency: 84 },
  { day: 'Sun', efficiency: 87 },
];

const Analytics = () => {
  return (
    <div className="p-6 pt-20">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {[
          { title: 'Daily Production', value: '2,450', unit: 'tons', change: 5.2, isPositive: true },
          { title: 'Equipment Efficiency', value: '85.4', unit: '%', change: -2.1, isPositive: false },
          { title: 'Energy Usage', value: '45,280', unit: 'kWh', change: -3.5, isPositive: true },
          { title: 'Operating Cost', value: '$12,384', unit: '/day', change: 1.8, isPositive: false },
        ].map((kpi) => (
          <div key={kpi.title} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-sm text-gray-600 mb-2">{kpi.title}</h3>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold">{kpi.value}</span>
              <span className="text-gray-600 text-sm">{kpi.unit}</span>
            </div>
            <div className={`flex items-center gap-1 mt-2 ${
              kpi.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {kpi.isPositive ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
              <span className="text-sm">{Math.abs(kpi.change)}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Production Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="actual" fill="#16a34a" name="Actual Production" />
              <Bar dataKey="target" fill="#86efac" name="Target Production" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Equipment Efficiency Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={efficiencyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#16a34a" 
                name="Efficiency (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;