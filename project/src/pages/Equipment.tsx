import React from 'react';
import { Truck, AlertTriangle, CheckCircle, Clock, Search, Filter } from 'lucide-react';

const Equipment = () => {
  const equipmentList = [
    {
      id: 'EQ001',
      name: 'Excavator XL2000',
      status: 'operational',
      utilization: 85,
      nextMaintenance: '2024-03-20',
      location: 'Pit A',
      hours: 12458
    },
    {
      id: 'EQ002',
      name: 'Haul Truck HD785',
      status: 'maintenance',
      utilization: 0,
      nextMaintenance: '2024-03-15',
      location: 'Maintenance Bay',
      hours: 8965
    },
    {
      id: 'EQ003',
      name: 'Drill Rig DR460',
      status: 'warning',
      utilization: 65,
      nextMaintenance: '2024-03-18',
      location: 'Pit B',
      hours: 5632
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'maintenance':
        return 'In Maintenance';
      case 'warning':
        return 'Needs Attention';
      default:
        return status;
    }
  };

  return (
    <div className="p-6 pt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Equipment Management</h1>
        <button className="bg-fossil-600 text-white px-4 py-2 rounded-lg hover:bg-fossil-700 transition-colors">
          + Add Equipment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fossil-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Maintenance</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {equipmentList.map((equipment) => (
                <tr key={equipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Truck className="w-5 h-5 text-gray-400 mr-2" />
                      <div>
                        <div className="font-medium">{equipment.name}</div>
                        <div className="text-sm text-gray-500">{equipment.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(equipment.status)}
                      <span className="ml-2">{getStatusText(equipment.status)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-fossil-600 h-2.5 rounded-full"
                        style={{ width: `${equipment.utilization}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{equipment.utilization}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{equipment.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{equipment.hours}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{equipment.nextMaintenance}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-fossil-600 hover:text-fossil-700">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Equipment;