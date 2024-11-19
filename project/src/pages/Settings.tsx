import React from 'react';
import { Bell, Shield, User, Database, HelpCircle } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6 pt-20">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">System Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Zone
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fossil-500">
                    <option>UTC-05:00 Eastern Time</option>
                    <option>UTC-06:00 Central Time</option>
                    <option>UTC-07:00 Mountain Time</option>
                    <option>UTC-08:00 Pacific Time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Production Units
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fossil-500">
                    <option>Metric (tonnes)</option>
                    <option>Imperial (tons)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data Refresh Rate
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fossil-500">
                    <option>Every 5 minutes</option>
                    <option>Every 10 minutes</option>
                    <option>Every 15 minutes</option>
                    <option>Every 30 minutes</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Alert Configuration</h2>
              <div className="space-y-4">
                {[
                  'Equipment maintenance alerts',
                  'Production target notifications',
                  'Safety incident reports',
                  'Environmental compliance alerts'
                ].map((alert) => (
                  <div key={alert} className="flex items-center justify-between">
                    <span className="text-gray-700">{alert}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-fossil-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-fossil-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-4">
              {[
                { icon: User, text: 'Manage Users' },
                { icon: Database, text: 'Data Backup' },
                { icon: Shield, text: 'Security Settings' },
                { icon: HelpCircle, text: 'Help & Support' }
              ].map(({ icon: Icon, text }) => (
                <button
                  key={text}
                  className="flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Icon className="w-5 h-5 text-fossil-600" />
                  <span>{text}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">System Information</h2>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500">Version</div>
                <div className="font-medium">2.4.1</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Last Updated</div>
                <div className="font-medium">March 15, 2024</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">License</div>
                <div className="font-medium">Enterprise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;