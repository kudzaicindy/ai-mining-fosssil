import { motion } from 'framer-motion';
import { BarChart2, Shield, Leaf, Wrench } from 'lucide-react';

const About = () => {
  const features = [
    { 
      category: 'Real-time Analytics', 
      items: ['Production Monitoring', 'Performance Metrics', 'Resource Tracking', 'Efficiency Analysis'] 
    },
    { 
      category: 'Safety & Compliance', 
      items: ['Risk Assessment', 'Safety Alerts', 'Compliance Tracking', 'Incident Reporting'] 
    },
    { 
      category: 'Environmental', 
      items: ['Impact Monitoring', 'Resource Usage', 'Sustainability Metrics', 'Waste Management'] 
    },
    { 
      category: 'Equipment', 
      items: ['Predictive Maintenance', 'Performance Tracking', 'Asset Management', 'Utilization Analysis'] 
    }
  ];

  const impactMetrics = [
    {
      icon: BarChart2,
      title: 'Equipment Efficiency',
      content: '25% increase in overall equipment effectiveness through AI-driven optimization'
    },
    {
      icon: Wrench,
      title: 'Downtime Reduction',
      content: '35% decrease in unexpected equipment downtime with predictive maintenance'
    },
    {
      icon: Shield,
      title: 'Safety Compliance',
      content: '40% improvement in safety incident prevention and response time'
    },
    {
      icon: Leaf,
      title: 'Environmental Impact',
      content: '30% reduction in environmental footprint through optimized operations'
    }
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gradient mb-8 text-center">Mining Operations Monitor</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="/mining-operations.jpg"
              alt="Mining Operations Dashboard"
              className="w-48 h-48 rounded-lg object-cover shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Intelligent Mining Operations Platform</h2>
              <p className="text-gray-600 leading-relaxed">
                Our advanced mining operations monitoring system leverages AI and real-time analytics
                to optimize mining processes, enhance safety, and improve operational efficiency.
                With comprehensive reporting and predictive maintenance capabilities, we help mining
                operations achieve sustainable growth while minimizing environmental impact.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {impactMetrics.map(({ icon: Icon, title, content }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-gray-600">{content}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ category, items }) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-3 text-gradient">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;