import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ministry', href: '#ministry' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const ministryLinks = [
    { name: 'Church Planting', href: '#ministry' },
    { name: 'Discipleship', href: '#ministry' },
    { name: 'Evangelism', href: '#ministry' },
    { name: 'Healing Ministry', href: '#ministry' },
    { name: 'Youth Ministry', href: '#ministry' },
    { name: 'Prayer Ministry', href: '#ministry' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/revudoh', name: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com/revudoh', name: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/revudoh', name: 'YouTube' },
    { icon: Twitter, url: 'https://twitter.com/revudoh', name: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-gold-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RU</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Rev. Iniobong Udoh</h3>
                <p className="text-gray-400 text-sm">Servant of God</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Dedicated to preaching the Gospel with power and demonstration of the Spirit, 
              transforming lives and communities through God's love.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 group-hover:bg-gold-400 transition-colors duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ministry Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-xl mb-6">Ministry Areas</h4>
            <ul className="space-y-3">
              {ministryLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 group-hover:bg-gold-400 transition-colors duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-xl mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Church Street</p>
                  <p className="text-gray-300">Uyo, Akwa Ibom State</p>
                  <p className="text-gray-300">Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+234 803 123 4567</p>
                  <p className="text-gray-300">+234 806 987 6543</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@revudoh.com</p>
                  <p className="text-gray-300">prayer@revudoh.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-600 to-gold-500 rounded-r-lg hover:from-primary-700 hover:to-gold-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span>© 2024 Rev. Iniobong Udoh Ministry. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for God's Kingdom</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;