
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Banova Smart Labels',
      category: 'current',
      description: 'Revolutionary smart labeling system for agricultural products to reduce waste and improve traceability.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      impact: '500+ farmers helped',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Digital Literacy Program',
      category: 'current',
      description: 'Teaching essential digital skills to underserved communities to bridge the digital divide.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      impact: '200+ people trained',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Sustainable Farming Initiative',
      category: 'past',
      description: 'Helped local farmers adopt sustainable farming practices and improve crop yields.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      impact: '300+ farmers reached',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Youth Entrepreneurship Hub',
      category: 'current',
      description: 'Creating a platform for young entrepreneurs to access resources, mentorship, and funding.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      impact: '100+ startups supported',
      status: 'Active'
    },
    {
      id: 5,
      title: 'Clean Water Solutions',
      category: 'past',
      description: 'Implemented water purification systems in rural communities lacking access to clean water.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      impact: '1000+ people served',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Women Empowerment Program',
      category: 'current',
      description: 'Supporting women entrepreneurs through training, mentorship, and microfinance opportunities.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      impact: '150+ women empowered',
      status: 'Active'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'current', label: 'Current' },
    { key: 'past', label: 'Past' }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-enactus-yellow">Projects</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the innovative projects that are creating positive change in our community and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center space-x-4">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-enactus-yellow text-black'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-enactus-yellow font-semibold">{project.impact}</span>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-enactus-yellow px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
