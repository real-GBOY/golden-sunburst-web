
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const Team = () => {
  const leadership = [
    {
      name: 'Ahmed Mohamed',
      position: 'President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading Enactus Menoufia with passion for social entrepreneurship and sustainable development.',
      linkedin: '#',
      email: 'ahmed.mohamed@enactus.com'
    },
    {
      name: 'Fatima Hassan',
      position: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Driving strategic initiatives and fostering innovation across all our projects.',
      linkedin: '#',
      email: 'fatima.hassan@enactus.com'
    },
    {
      name: 'Omar Khaled',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Overseeing project implementation and ensuring maximum social impact.',
      linkedin: '#',
      email: 'omar.khaled@enactus.com'
    },
    {
      name: 'Nour Ali',
      position: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Building our brand and communicating our impact to the wider community.',
      linkedin: '#',
      email: 'nour.ali@enactus.com'
    }
  ];

  const members = [
    {
      name: 'Mahmoud Ahmed',
      position: 'Finance Coordinator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      department: 'Finance'
    },
    {
      name: 'Sara Mostafa',
      position: 'Research Analyst',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      department: 'Research'
    },
    {
      name: 'Karim Saad',
      position: 'Technology Lead',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face',
      department: 'Technology'
    },
    {
      name: 'Yasmin Omar',
      position: 'Community Outreach',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      department: 'Outreach'
    },
    {
      name: 'Hassan Ali',
      position: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
      department: 'Events'
    },
    {
      name: 'Layla Ibrahim',
      position: 'Content Creator',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
      department: 'Marketing'
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
                Meet Our <span className="text-enactus-yellow">Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The passionate individuals driving positive change and creating sustainable impact in our community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Leadership <span className="text-enactus-yellow">Team</span>
              </h2>
              <p className="text-xl text-gray-600">Our dedicated leaders guiding the vision and strategy.</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{leader.name}</h3>
                        <p className="text-enactus-yellow font-semibold">{leader.position}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                      <div className="flex space-x-3">
                        <a
                          href={leader.linkedin}
                          className="text-enactus-yellow hover:text-enactus-gold transition-colors"
                        >
                          LinkedIn
                        </a>
                        <a
                          href={`mailto:${leader.email}`}
                          className="text-enactus-yellow hover:text-enactus-gold transition-colors"
                        >
                          Email
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Team <span className="text-enactus-yellow">Members</span>
              </h2>
              <p className="text-xl text-gray-600">The talented individuals making our projects possible.</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-enactus-yellow text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {member.department}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-white mb-6">
                Want to <span className="text-enactus-yellow">Join Us?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to make a difference. Join our team and help create positive change!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-enactus-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-gold transition-all duration-300"
              >
                Apply to Join
              </motion.button>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;
