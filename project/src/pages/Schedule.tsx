import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  const appointments = [
    {
      id: 1,
      title: 'Plumbing Repair',
      client: 'Sarah Johnson',
      time: '09:00 AM',
      location: '123 Main St, Apt 4B',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 2,
      title: 'Electrical Inspection',
      client: 'Michael Brown',
      time: '11:30 AM',
      location: '456 Oak Avenue',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 3,
      title: 'HVAC Maintenance',
      client: 'Emma Wilson',
      time: '02:00 PM',
      location: '789 Pine Road',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          + New Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Today's Appointments</h2>
            <div className="flex items-center gap-2 text-gray-500">
              <CalendarIcon className="w-5 h-5" />
              <span>March 15, 2024</span>
            </div>
          </div>

          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <img
                  src={appointment.image}
                  alt={appointment.client}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{appointment.title}</h3>
                  <p className="text-sm text-gray-500">{appointment.client}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {appointment.location}
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
          <div className="space-y-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
              <div key={day} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    index === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {day}
                  </span>
                  <span className="font-medium">{index === 2 ? 'Today' : `March ${15 + index}`}</span>
                </div>
                <span className="text-sm text-gray-500">{3 - index} appointments</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;