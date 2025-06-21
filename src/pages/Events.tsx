
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Enactus National Competition 2024',
      date: '2024-03-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Cairo Convention Center',
      description: 'Annual competition showcasing innovative projects from universities across Egypt.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      type: 'Competition',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Entrepreneurship Workshop Series',
      date: '2024-02-20',
      time: '2:00 PM - 5:00 PM',
      location: 'Menoufia University',
      description: 'Intensive workshop on business model development and startup strategies.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      type: 'Workshop',
      status: 'past'
    },
    {
      id: 3,
      title: 'Social Impact Summit',
      date: '2024-04-10',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual Event',
      description: 'Bringing together social entrepreneurs and changemakers to discuss sustainable development.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      type: 'Summit',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Community Outreach Program',
      date: '2024-01-25',
      time: '8:00 AM - 2:00 PM',
      location: 'Local Villages',
      description: 'Hands-on community service and project implementation in rural areas.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      type: 'Outreach',
      status: 'past'
    },
    {
      id: 5,
      title: 'Innovation Showcase',
      date: '2024-05-18',
      time: '6:00 PM - 9:00 PM',
      location: 'Business Hub Cairo',
      description: 'Presenting cutting-edge solutions and innovations by Enactus teams.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      type: 'Showcase',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Leadership Development Bootcamp',
      date: '2024-12-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Alexandria',
      description: 'Intensive training program for developing leadership skills and team management.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      type: 'Training',
      status: 'past'
    }
  ];

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const EventCard = ({ event, index }: { event: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        
        <div className="md:w-2/3 p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              event.status === 'upcoming' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {event.type}
            </span>
            <span className="text-enactus-yellow font-semibold">{event.status}</span>
          </div>
          
          <h3 className="text-xl font-bold text-black mb-3">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>
          
          <div className="space-y-2">
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

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
                Our <span className="text-enactus-yellow">Events</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest events, workshops, and community initiatives that drive positive change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Upcoming <span className="text-enactus-yellow">Events</span>
              </h2>
              <p className="text-xl text-gray-600">Don't miss out on our exciting upcoming events!</p>
            </AnimatedSection>

            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Past <span className="text-enactus-yellow">Events</span>
              </h2>
              <p className="text-xl text-gray-600">Look back at our successful events and achievements.</p>
            </AnimatedSection>

            <div className="space-y-8">
              {pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;
