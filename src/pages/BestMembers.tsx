
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import { Award, Trophy, Star } from 'lucide-react';

const BestMembers = () => {
  const awardCategories = [
    {
      title: 'Member of the Year',
      year: '2023',
      winner: {
        name: 'Amira Abdel Rahman',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
        achievement: 'Led 3 successful projects impacting over 500 community members',
        quote: 'Being part of Enactus has taught me that small actions can create massive change.'
      }
    },
    {
      title: 'Innovation Award',
      year: '2023',
      winner: {
        name: 'Mohamed Gamal',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        achievement: 'Developed the Banova Smart Labels technology',
        quote: 'Innovation is not just about technology, it\'s about solving real problems for real people.'
      }
    },
    {
      title: 'Leadership Excellence',
      year: '2023',
      winner: {
        name: 'Dina Mansour',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
        achievement: 'Successfully managed team of 25+ members across multiple projects',
        quote: 'True leadership is empowering others to achieve more than they thought possible.'
      }
    }
  ];

  const achievers = [
    {
      name: 'Khaled Hassan',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      achievements: ['Best Presenter 2023', 'Community Impact Award', 'Mentorship Excellence'],
      projects: 4,
      impact: '300+ lives'
    },
    {
      name: 'Rania Ahmed',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      achievements: ['Research Excellence', 'Social Innovation Award', 'Team Player Award'],
      projects: 3,
      impact: '150+ families'
    },
    {
      name: 'Youssef Omar',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      achievements: ['Tech Innovation Award', 'Best Collaboration', 'Rising Star 2023'],
      projects: 5,
      impact: '200+ students'
    },
    {
      name: 'Heba Mostafa',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      achievements: ['Marketing Excellence', 'Creative Campaign Award', 'Public Speaking Award'],
      projects: 3,
      impact: '400+ reached'
    }
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
                Our <span className="text-enactus-yellow">Champions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Celebrating the outstanding members who have gone above and beyond to create positive impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Major Awards Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Major <span className="text-enactus-yellow">Awards</span>
              </h2>
              <p className="text-xl text-gray-600">Recognizing exceptional contributions and achievements.</p>
            </AnimatedSection>

            <div className="space-y-16">
              {awardCategories.map((category, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-enactus-yellow/10 to-enactus-gold/10 rounded-2xl p-8 border border-enactus-yellow/20"
                  >
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                          <Trophy className="w-8 h-8 text-enactus-yellow mr-3" />
                          <span className="text-2xl font-bold text-black">{category.year}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-black mb-2">{category.title}</h3>
                      </div>
                      
                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="relative inline-block"
                        >
                          <img
                            src={category.winner.image}
                            alt={category.winner.name}
                            className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-enactus-yellow shadow-lg"
                          />
                          <div className="absolute -top-2 -right-2">
                            <Star className="w-8 h-8 text-enactus-yellow fill-current" />
                          </div>
                        </motion.div>
                        <h4 className="text-xl font-bold text-black mt-4">{category.winner.name}</h4>
                      </div>
                      
                      <div className="text-center lg:text-right">
                        <p className="text-gray-600 mb-4 italic">"{category.winner.quote}"</p>
                        <div className="bg-white rounded-lg p-4 shadow-md">
                          <p className="text-sm font-semibold text-black">{category.winner.achievement}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Top Achievers Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Top <span className="text-enactus-yellow">Achievers</span>
              </h2>
              <p className="text-xl text-gray-600">Outstanding members making significant contributions.</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievers.map((achiever, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={achiever.image}
                        alt={achiever.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Award className="w-6 h-6 text-enactus-yellow" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-3">{achiever.name}</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-enactus-yellow">{achiever.projects}</div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-enactus-yellow">{achiever.impact}</div>
                          <div className="text-sm text-gray-600">Impact</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {achiever.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <Star className="w-4 h-4 text-enactus-yellow mr-2 fill-current" />
                            <span className="text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition CTA */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-white mb-6">
                Want to be <span className="text-enactus-yellow">Recognized?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Excellence is recognized and celebrated. Join us and make your mark through meaningful contributions and exceptional work.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-enactus-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-gold transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BestMembers;
