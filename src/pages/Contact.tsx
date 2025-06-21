
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@enactusmenoufia.org',
      link: 'mailto:info@enactusmenoufia.org'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+20 123 456 7890',
      link: 'tel:+201234567890'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Menoufia University, Shebin El-Kom, Egypt',
      link: '#'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Join Our Team',
    'Partnership Opportunity',
    'Project Collaboration',
    'Media & Press',
    'Other'
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
                Get In <span className="text-enactus-yellow">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions about our projects or want to join our mission? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-enactus-yellow">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-enactus-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{info.title}</h3>
                  <a 
                    href={info.link}
                    className="text-black/80 hover:text-black transition-colors"
                  >
                    {info.details}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection>
                <h2 className="text-4xl font-bold text-black mb-6">
                  Send Us a <span className="text-enactus-yellow">Message</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Whether you're interested in joining our team, partnering with us, or learning more about our projects, 
                  we're here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-enactus-yellow rounded-full mt-2"></div>
                    <p className="text-gray-600">We typically respond within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-enactus-yellow rounded-full mt-2"></div>
                    <p className="text-gray-600">All information is kept confidential</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-enactus-yellow rounded-full mt-2"></div>
                    <p className="text-gray-600">Follow us on social media for updates</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <motion.form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-xl p-8 shadow-lg"
                  whileHover={{ shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enactus-yellow focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enactus-yellow focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enactus-yellow focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-enactus-yellow focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-enactus-yellow text-black px-6 py-4 rounded-lg font-semibold text-lg hover:bg-enactus-gold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Frequently Asked <span className="text-enactus-yellow">Questions</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-black mb-3">How can I join Enactus Menoufia?</h3>
                  <p className="text-gray-600">We welcome passionate students who want to make a difference. Contact us through this form or attend one of our recruitment events.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-black mb-3">Can I partner with Enactus Menoufia?</h3>
                  <p className="text-gray-600">Absolutely! We're always looking for partners who share our vision. Reach out to discuss collaboration opportunities.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-black mb-3">How can I support your projects?</h3>
                  <p className="text-gray-600">There are many ways to support us - from volunteering and mentorship to sponsorship and resource sharing.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-black mb-3">Do you offer internships?</h3>
                  <p className="text-gray-600">Yes! We offer various internship opportunities across different departments. Contact us to learn about current openings.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
