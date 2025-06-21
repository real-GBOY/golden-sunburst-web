
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import { Smartphone, Leaf, BarChart, Users } from 'lucide-react';

const Banova = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'NFC-enabled labels that connect physical products to digital information instantly.'
    },
    {
      icon: Leaf,
      title: 'Sustainability Focus',
      description: 'Reducing food waste by providing real-time information about product freshness and quality.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Comprehensive analytics dashboard for farmers and retailers to track product journey.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Connecting farmers directly with consumers, creating transparent supply chains.'
    }
  ];

  const statistics = [
    { number: '500+', label: 'Farmers Benefited' },
    { number: '30%', label: 'Waste Reduction' },
    { number: '1000+', label: 'Products Tracked' },
    { number: '50+', label: 'Retail Partners' }
  ];

  const timeline = [
    {
      phase: 'Research Phase',
      date: 'Jan 2023',
      description: 'Conducted extensive market research and identified key pain points in agricultural supply chain.',
      status: 'completed'
    },
    {
      phase: 'Prototype Development',
      date: 'Mar 2023',
      description: 'Developed initial prototype of smart labels with basic NFC functionality.',
      status: 'completed'
    },
    {
      phase: 'Pilot Testing',
      date: 'Jun 2023',
      description: 'Launched pilot program with 50 local farmers to test functionality and gather feedback.',
      status: 'completed'
    },
    {
      phase: 'Scale Up',
      date: 'Sep 2023',
      description: 'Expanded to 500+ farmers and integrated advanced analytics dashboard.',
      status: 'completed'
    },
    {
      phase: 'Market Expansion',
      date: 'Jan 2024',
      description: 'Planning expansion to neighboring governorates and additional product categories.',
      status: 'current'
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="text-enactus-yellow">Banova</span><br />
                  Smart Labels
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionary smart labeling technology that transforms agricultural supply chains, 
                  reduces waste, and connects farmers directly with consumers through innovative NFC technology.
                </p>
                <div className="space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-enactus-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-gold transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="border-2 border-enactus-yellow text-enactus-yellow px-8 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-yellow hover:text-black transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Banova Smart Labels Technology"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-enactus-yellow">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-black/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                How <span className="text-enactus-yellow">Banova</span> Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our smart labels combine cutting-edge technology with practical solutions to revolutionize agricultural supply chains.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="bg-enactus-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Project <span className="text-enactus-yellow">Timeline</span>
              </h2>
              <p className="text-xl text-gray-600">Our journey from concept to implementation.</p>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-enactus-yellow"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.2}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className="w-1/2 pr-8 pl-8">
                        <div className={`bg-white rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-black">{item.phase}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              item.status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-enactus-yellow text-black'
                            }`}>
                              {item.status === 'completed' ? 'Completed' : 'Current'}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <p className="text-enactus-yellow font-semibold">{item.date}</p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-6 h-6 bg-enactus-yellow rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to <span className="text-enactus-yellow">Transform</span> Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of farmers and retailers who are already benefiting from Banova Smart Labels technology.
              </p>
              <div className="space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-enactus-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-gold transition-all duration-300"
                >
                  Request Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-enactus-yellow text-enactus-yellow px-8 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-yellow hover:text-black transition-all duration-300"
                >
                  Download Brochure
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Banova;
