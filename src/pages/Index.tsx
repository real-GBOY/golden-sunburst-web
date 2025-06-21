
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowDown, Users, Target, Award } from 'lucide-react';

const Index = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: '100+', label: 'Active Members', icon: Users },
    { number: '25+', label: 'Successful Projects', icon: Target },
    { number: '15+', label: 'Awards Won', icon: Award },
    { number: '1000+', label: 'Lives Impacted', icon: Users }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              <span className="text-enactus-yellow">ENACTUS</span><br />
              MENOUFIA
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering students to create positive change through entrepreneurial action and social innovation
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-x-4"
          >
            <Link
              to="/projects"
              className="inline-block bg-enactus-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-gold transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Projects
            </Link>
            <button
              onClick={scrollToAbout}
              className="inline-block border-2 border-enactus-yellow text-enactus-yellow px-8 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-yellow hover:text-black transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button onClick={scrollToAbout} className="text-enactus-yellow animate-bounce">
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About <span className="text-enactus-yellow">Enactus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a community of student, academic and business leaders committed to using the power of entrepreneurial action to transform lives and shape a better more sustainable world.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <stat.icon className="w-12 h-12 text-enactus-yellow mx-auto mb-4" />
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Our <span className="text-enactus-yellow">Mission</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To create a better world by developing the next generation of entrepreneurial leaders and social innovators who see opportunity where others see challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-enactus-yellow rounded-full mt-2"></div>
                    <p className="text-gray-300">Develop entrepreneurial mindset in students</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-enactus-yellow rounded-full mt-2"></div>
                    <p className="text-gray-300">Create sustainable social impact projects</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-enactus-yellow rounded-full mt-2"></div>
                    <p className="text-gray-300">Build bridges between business and community</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Our Mission"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-enactus-yellow to-enactus-gold">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join our community of changemakers and help us create positive impact through entrepreneurial action.
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="inline-block bg-black text-enactus-yellow px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Join Us Today
              </Link>
              <Link
                to="/team"
                className="inline-block border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-enactus-yellow transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
