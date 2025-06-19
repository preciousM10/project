import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Church, Users, Globe, BookOpen, Heart, Zap } from 'lucide-react';

const Ministry: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ministryAreas = [
    {
      icon: Church,
      title: 'Church Planting',
      description: 'Establishing new churches and training leaders to expand God\'s kingdom across communities.',
      stats: '5 Churches Planted',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Discipleship',
      description: 'Mentoring and training believers to become mature disciples who can disciple others.',
      stats: '200+ Disciples Trained',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Evangelism',
      description: 'Reaching the lost with the Gospel through crusades, outreaches, and personal evangelism.',
      stats: '500+ Souls Won',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: BookOpen,
      title: 'Teaching Ministry',
      description: 'Equipping believers with sound biblical doctrine through seminars and conferences.',
      stats: '50+ Conferences',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Pastoral Care',
      description: 'Providing spiritual guidance, counseling, and support to individuals and families.',
      stats: '1000+ Lives Touched',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Healing Ministry',
      description: 'Praying for the sick and witnessing God\'s miraculous power in healing and deliverance.',
      stats: '100+ Miracles',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="ministry" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Ministry <span className="gradient-text">Areas</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-primary-600 to-gold-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            God has called Rev. Iniobong Udoh to serve in various capacities, 
            each designed to advance His kingdom and transform lives.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministryAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
            >
              <div className={`h-2 bg-gradient-to-r ${area.color}`} />
              
              <div className="p-8">
                <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${area.color} text-white text-sm font-semibold`}>
                  {area.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-gold-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Join Us in Ministry
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Be part of God's work in transforming lives and communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Partner With Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ministry;