import React from 'react';
import { Filter, Search, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import type { WorkOrder } from '../types';

const WorkOrders = () => {
  const workOrders: WorkOrder[] = [
    {
      id: '1',
      title: 'Fix Leaking Pipe',
      status: 'open',
      priority: 'high',
      createdAt: '2024-03-15T10:00:00',
      description: 'Water leaking from bathroom ceiling',
      location: '123 Main St, Apt 4B'
    },
    {
      id: '2',
      title: 'AC Maintenance',
      status: 'in-progress',
      priority: 'medium',
      createdAt: '2024-03-14T15:30:00',
      description: 'Regular maintenance check for central AC unit',
      location: '456 Oak Ave'
    },
    {
      id: '3',
      title: 'Electrical Inspection',
      status: 'completed',
      priority: 'low',
      createdAt: '2024-03-13T09:00:00',
      completedAt: '2024-03-13T11:30:00',
      description: 'Annual electrical system inspection',
      location: '789 Pine Rd'
    }
  ];

  const getStatusIcon = (status: WorkOrder['status']) => {
    switch (status) {
      case 'open':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getPriorityColor = (priority: WorkOrder['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Work Orders</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          + New Work Order
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search work orders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {workOrders.map((order) => (
            <div key={order.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {getStatusIcon(order.status)}
                  <h3 className="font-medium">{order.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}>
                    {order.priority}
                  </span>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">
                  View Details
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>ID: #{order.id}</span>
                <span>Created: {new Date(order.createdAt).toLocaleDateString()}</span>
                <span>Location: {order.location}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{order.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-medium mb-2">Open</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">8</span>
            <span className="text-red-500">+2 this week</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-medium mb-2">In Progress</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">5</span>
            <span className="text-yellow-500">-1 this week</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-medium mb-2">Completed</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">12</span>
            <span className="text-green-500">+4 this week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrders;