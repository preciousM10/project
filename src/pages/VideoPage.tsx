
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Filter, Search, Video } from 'lucide-react';
import SermonCard from '../components/SermonCard';
import SermonModal from '../components/SermonModal';
import { sermonsData, categories, Sermon } from '../data/sermonsData';

const VideoPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

  const filteredSermons = sermonsData
    .filter(sermon => selectedCategory === 'All' || sermon.category === selectedCategory)
    .filter(sermon => sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     sermon.description.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Video className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Video <span className="gradient-text">Sermons</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary-600 to-gold-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Watch powerful video messages that will inspire and transform your life.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search video sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white rounded-xl p-6 mb-12 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{filteredSermons.length}</div>
              <div className="text-gray-600">Video Sermons</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {filteredSermons.reduce((acc, sermon) => acc + sermon.views, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {Math.round(filteredSermons.reduce((acc, sermon) => {
                  const [minutes, seconds] = sermon.duration.split(':').map(Number);
                  return acc + minutes + seconds / 60;
                }, 0))}h
              </div>
              <div className="text-gray-600">Total Content</div>
            </div>
          </div>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon, index) => (
            <SermonCard
              key={sermon.id}
              sermon={sermon}
              index={index}
              isInView={isInView}
              onClick={setSelectedSermon}
              type="video"
            />
          ))}
        </div>

        {filteredSermons.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No video sermons found matching your criteria.</p>
          </motion.div>
        )}
      </div>

      {selectedSermon && (
        <SermonModal
          sermon={selectedSermon}
          onClose={() => setSelectedSermon(null)}
          type="video"
        />
      )}
    </div>
  );
};

export default VideoPage;
