import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  ArrowRight, 
  BarChart2, 
  Cpu, 
  Database,
  Truck,
  HardHat,
  Timer,
  Shield,
  Cog,
  Activity,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Mining
            <span className="block text-green-600">Operations Excellence</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 mb-8 h-20">
            <TypeAnimation
              sequence={[
                'Optimize Production Efficiency',
                2000,
                'Reduce Operational Costs',
                2000,
                'Enhance Safety Standards',
                2000,
                'Drive Sustainable Mining',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-8 py-4 rounded-lg hover:bg-green-200 transition-colors"
            >
              Try Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Core Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart2,
                title: 'Real-time Analytics',
                description: 'Monitor and analyze mining operations with live data insights'
              },
              {
                icon: Cpu,
                title: 'AI-Driven Optimization',
                description: 'Leverage machine learning for predictive maintenance and efficiency'
              },
              {
                icon: Database,
                title: 'Comprehensive Reporting',
                description: 'Generate detailed reports and visualizations for better decision making'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-green-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mining-Specific Features */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mining Operations Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: 'Fleet Management',
                description: 'Track and optimize mining vehicle operations and maintenance schedules'
              },
              {
                icon: HardHat,
                title: 'Safety Monitoring',
                description: 'Real-time safety alerts and compliance tracking for mining operations'
              },
              {
                icon: Timer,
                title: 'Production Tracking',
                description: 'Monitor extraction rates and production targets in real-time'
              },
              {
                icon: Shield,
                title: 'Environmental Impact',
                description: 'Track and minimize environmental footprint of mining operations'
              },
              {
                icon: Cog,
                title: 'Equipment Maintenance',
                description: 'Predictive maintenance scheduling for mining equipment'
              },
              {
                icon: Activity,
                title: 'Resource Planning',
                description: 'Optimize resource allocation and workforce management'
              },
              {
                icon: AlertTriangle,
                title: 'Risk Management',
                description: 'Identify and mitigate operational risks with AI-powered analysis'
              },
              {
                icon: Zap,
                title: 'Energy Optimization',
                description: 'Monitor and optimize energy consumption across operations'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Equipment Efficiency', value: '25%', suffix: 'Increase' },
              { label: 'Cost Reduction', value: '30%', suffix: 'Average' },
              { label: 'Production Rate', value: '40%', suffix: 'Improvement' },
              { label: 'Downtime Reduction', value: '35%', suffix: 'Decrease' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-sm text-green-700 font-medium mb-1">{stat.suffix}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Operational Excellence',
                points: [
                  'Optimize mining processes with AI-driven insights',
                  'Reduce equipment downtime through predictive maintenance',
                  'Improve resource allocation and utilization'
                ]
              },
              {
                title: 'Safety & Compliance',
                points: [
                  'Enhanced safety monitoring and alert systems',
                  'Automated compliance reporting and tracking',
                  'Real-time risk assessment and mitigation'
                ]
              },
              {
                title: 'Cost Optimization',
                points: [
                  'Reduce operational costs through efficiency gains',
                  'Optimize energy consumption and resource usage',
                  'Minimize maintenance and repair expenses'
                ]
              },
              {
                title: 'Sustainability',
                points: [
                  'Monitor and reduce environmental impact',
                  'Track and optimize water usage',
                  'Implement sustainable mining practices'
                ]
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-600">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Mining Operations?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join the future of mining with our AI-powered solution. Enhance efficiency,
            reduce costs, and drive sustainable operations.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;