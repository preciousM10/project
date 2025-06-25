
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with lighter, more beautiful blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-900 to-white">
        <div className="absolute inset-0 bg-white/10"></div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-15"
        ></motion.div>
      </div>

      {/* Floating elements - Responsive quantity */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(window.innerWidth < 768 ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [-100, -200, -300],
              x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          {/* Profile Image - Responsive sizing */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Rev. Iniobong Udoh"
                className="w-full h-full rounded-full object-cover p-0.5"
              />
            </div>
          </motion.div>
          
          {/* Main Title - Responsive typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-3 sm:mb-4 leading-tight"
          >
            Rev. <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">Iniobong Udoh</span>
          </motion.h1>
          
          {/* Subtitle - Responsive sizing */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-sky-100 mb-2 px-2"
          >
            Servant of the Most High God
          </motion.p>
          
          {/* Quote - Better mobile spacing */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-sm sm:text-base md:text-lg text-sky-200 mb-6 sm:mb-8 px-4 sm:px-6 max-w-3xl mx-auto"
          >
            "Preaching the Gospel with Power and Demonstration of the Spirit"
          </motion.p>
        </motion.div>

        {/* Action Buttons - Improved mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('sermons')}
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base border border-white/30"
          >
            <Play size={18} className="sm:w-5 sm:h-5" />
            <span>Watch Latest Sermon</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white/20 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 bg-white/10 backdrop-blur-sm flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <Calendar size={18} className="sm:w-5 sm:h-5" />
            <span>Learn More</span>
          </motion.button>
        </motion.div>

        {/* Stats - Responsive grid and sizing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto px-4"
        >
          {[
            { number: '25+', label: 'Years of Ministry' },
            { number: '500+', label: 'Souls Won' },
            { number: '100+', label: 'Sermons Preached' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
              className="glass rounded-lg p-4 sm:p-6 text-center backdrop-blur-sm bg-white/10 border border-white/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300 mb-1 sm:mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-sky-100 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on mobile, visible on tablet+ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-white/80 rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
