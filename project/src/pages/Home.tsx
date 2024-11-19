import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center relative">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative"
      >
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur"></div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              alt="Kudzai Cindyrella Pemhiwa"
              className="w-32 h-32 rounded-full relative border-4 border-white shadow-glow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mt-6 mb-4">
            Kudzai Cindyrella Pemhiwa
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 mb-6 h-8">
            <TypeAnimation
              sequence={[
                'Computer Science Student',
                2000,
                'Full Stack Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-8 px-4 leading-relaxed">
          Passionate about creating elegant solutions through code.
          Transforming ideas into reality one line at a time.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={label}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Icon className="w-6 h-6 text-gray-700" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-primary-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-6 h-6 text-primary-400" />
      </motion.div>
    </div>
  );
};

export default Home;