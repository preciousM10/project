import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Award,
      title: 'Ordained Minister',
      description: 'Ordained in 1999, serving faithfully for over 25 years',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Soul Winner',
      description: 'Led over 500 souls to Christ through evangelism',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Church Planter',
      description: 'Established 5 churches across different communities',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BookOpen,
      title: 'Bible Teacher',
      description: 'Taught thousands through seminars and conferences',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
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
            About <span className="gradient-text">Rev. Iniobong Udoh</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-primary-600 to-gold-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbU5NSDGCI1j-9Ff13UEH3NtRNRExL_8s1PA&s"
                alt="Rev. Iniobong Udoh"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs"
            >
              <p className="text-gray-700 italic mb-2">
                "My heart burns with passion to see souls saved and lives transformed by the power of God."
              </p>
              <p className="text-primary-600 font-semibold">- Rev. Iniobong Udoh</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              A Life Dedicated to God's Service
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Rev. Iniobong Udoh is a passionate servant of God with over 25 years of dedicated ministry. 
                Born with a heart for souls, he answered the call to ministry at a young age and has since 
                been a powerful instrument in God's hands for the transformation of lives.
              </p>
              
              <p>
                His ministry is characterized by powerful preaching, miraculous healings, and a deep 
                commitment to discipleship. Rev. Udoh believes in the power of God's Word to transform 
                lives and has seen countless testimonies of salvation, healing, and deliverance.
              </p>
              
              <p>
                Beyond preaching, Rev. Udoh is actively involved in community development, youth mentorship, 
                and church planting. His vision is to see the Gospel reach every corner of the earth, 
                starting from his local community.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-gradient-to-r from-primary-50 to-gold-50 p-6 rounded-xl"
            >
              <h4 className="font-semibold text-gray-900 mb-3">Ministry Focus Areas:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span>Evangelism and Soul Winning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span>Church Planting and Leadership Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span>Youth Ministry and Mentorship</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span>Community Development and Outreach</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h4>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;