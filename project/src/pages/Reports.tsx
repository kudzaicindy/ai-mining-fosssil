import React from 'react';
import { FileText, Download, Filter, Calendar } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      name: 'Monthly Production Summary',
      type: 'Production',
      date: '2024-03-01',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Equipment Maintenance Log',
      type: 'Maintenance',
      date: '2024-03-05',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'Safety Incident Report',
      type: 'Safety',
      date: '2024-03-10',
      size: '956 KB'
    },
    {
      id: 4,
      name: 'Environmental Impact Assessment',
      type: 'Environmental',
      date: '2024-03-12',
      size: '3.2 MB'
    }
  ];

  return (
    <div className="p-6 pt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        <button className="bg-fossil-600 text-white px-4 py-2 rounded-lg hover:bg-fossil-700 transition-colors">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Reports', value: '124', type: 'All Time' },
          { title: 'Generated This Month', value: '18', type: 'March 2024' },
          { title: 'Scheduled Reports', value: '5', type: 'Pending' },
          { title: 'Storage Used', value: '45.8 GB', type: 'of 100 GB' }
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-sm text-gray-600 mb-2">{stat.title}</h3>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.type}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fossil-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Calendar className="w-5 h-5" />
                <span>Date Range</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid gap-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-fossil-100 rounded-lg">
                    <FileText className="w-6 h-6 text-fossil-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{report.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{report.type}</span>
                      <span>•</span>
                      <span>{report.date}</span>
                      <span>•</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-fossil-600 hover:text-fossil-700">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;