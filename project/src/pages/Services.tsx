import React from 'react';
import { Wrench, Clock, DollarSign, Star, Edit, Trash } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Plumbing Services',
      description: 'Professional plumbing repairs and installations',
      rate: '$85/hour',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      completedJobs: 156
    },
    {
      id: 2,
      name: 'Electrical Work',
      description: 'Electrical repairs, installations, and maintenance',
      rate: '$95/hour',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      completedJobs: 132
    },
    {
      id: 3,
      name: 'HVAC Maintenance',
      description: 'Heating and cooling system services',
      rate: '$100/hour',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
      completedJobs: 98
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-500">Manage your service offerings and pricing</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          + Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{service.rate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600">{service.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wrench className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{service.completedJobs} jobs</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  <Trash className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Service Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Earnings</p>
              <p className="text-xl font-semibold">$2,450/week</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Service Hours</p>
              <p className="text-xl font-semibold">32h/week</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
              <p className="text-xl font-semibold">4.8/5.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;