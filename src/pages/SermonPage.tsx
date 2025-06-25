import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Filter, Search, Sparkles, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SermonCard from '../components/SermonCard';
import SermonModal from '../components/SermonModal';
import PropheticDeclarationCard from '../components/PropheticDeclarationCard';
import PropheticDeclarationModal from '../components/PropheticDeclarationModal';
import { sermonsData, categories, Sermon, propheticDeclarations, PropheticDeclaration } from '../data/sermonsData';

const SermonPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [selectedDeclaration, setSelectedDeclaration] = useState<PropheticDeclaration | null>(null);
  const [contentType, setContentType] = useState<'all' | 'sermons' | 'prophetic'>('all');

  const filteredSermons = sermonsData
    .filter(sermon => selectedCategory === 'All' || sermon.category === selectedCategory)
    .filter(sermon => sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     sermon.description.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const filteredDeclarations = propheticDeclarations
    .filter(declaration => searchTerm === '' || 
             declaration.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             declaration.content.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  const propheticSermons = filteredSermons.filter(sermon => 
    sermon.category.toLowerCase().includes('prophetic') || 
    sermon.category.toLowerCase().includes('word')
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="container-custom py-8 sm:py-16">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Sparkles className="w-8 h-8 text-blue-600" />
            <MessageSquare className="w-8 h-8 text-amber-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight"
          >
            Sermons & <span className="gradient-text">Messages</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mb-6 sm:mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
          >
            Be blessed by powerful messages, prophetic declarations, and divine words that will strengthen your faith and transform your life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4"
          >
            <Link to="/videos" className="btn-primary text-center">
              Watch Videos
            </Link>
            <Link to="/audio" className="btn-outline text-center">
              Listen to Audio
            </Link>
          </motion.div>
        </motion.div>

        {/* Content Type Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-8 px-4 sm:px-0"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button
              onClick={() => setContentType('all')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                contentType === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setContentType('sermons')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                contentType === 'sermons' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Sermons & Messages
            </button>
            <button
              onClick={() => setContentType('prophetic')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                contentType === 'prophetic' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Prophetic Declarations
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-lg mx-4 sm:mx-0"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{filteredSermons.length}</div>
              <div className="text-sm sm:text-base text-gray-600">Total Messages</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">{propheticSermons.length}</div>
              <div className="text-sm sm:text-base text-gray-600">Prophetic Words</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                {filteredSermons.reduce((acc, sermon) => acc + sermon.views, 0).toLocaleString()}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Total Views</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">15+</div>
              <div className="text-sm sm:text-base text-gray-600">Categories</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-8 sm:mb-12 px-4 sm:px-0"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="relative flex-1 max-w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sermons and prophetic messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
              />
            </div>

            {contentType !== 'prophetic' && (
              <div className="flex items-center space-x-2 min-w-0">
                <Filter className="text-gray-500 w-5 h-5 flex-shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 lg:flex-initial px-3 sm:px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base min-w-0"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </motion.div>

        {/* Featured Prophetic Messages */}
        {propheticSermons.length > 0 && selectedCategory === 'All' && contentType !== 'prophetic' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Featured Prophetic Messages</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {propheticSermons.slice(0, 3).map((sermon, index) => (
                  <motion.div
                    key={sermon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedSermon(sermon)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 line-clamp-2">
                          {sermon.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-amber-600 font-medium mb-1">
                          {sermon.category}
                        </p>
                        <p className="text-xs text-gray-500">
                          {sermon.views} views • {sermon.duration}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Content Grid */}
        {contentType === 'sermons' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {filteredSermons.map((sermon, index) => (
              <SermonCard
                key={sermon.id}
                sermon={sermon}
                index={index}
                isInView={isInView}
                onClick={setSelectedSermon}
                type="both"
              />
            ))}
          </div>
        )}

        {contentType === 'prophetic' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
            {filteredDeclarations.map((declaration, index) => (
              <PropheticDeclarationCard
                key={declaration.id}
                declaration={declaration}
                index={index}
                isInView={isInView}
                onClick={setSelectedDeclaration}
              />
            ))}
          </div>
        )}

        {contentType === 'all' && (
          <div className="space-y-12">
            {/* Prophetic Declarations Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 px-4 sm:px-0">Latest Prophetic Declarations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
                {filteredDeclarations.slice(0, 6).map((declaration, index) => (
                  <PropheticDeclarationCard
                    key={declaration.id}
                    declaration={declaration}
                    index={index}
                    isInView={isInView}
                    onClick={setSelectedDeclaration}
                  />
                ))}
              </div>
            </div>

            {/* Sermons Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 px-4 sm:px-0">Recent Sermons & Messages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
                {filteredSermons.slice(0, 8).map((sermon, index) => (
                  <SermonCard
                    key={sermon.id}
                    sermon={sermon}
                    index={index}
                    isInView={isInView}
                    onClick={setSelectedSermon}
                    type="both"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No results message */}
        {((contentType === 'sermons' && filteredSermons.length === 0) ||
          (contentType === 'prophetic' && filteredDeclarations.length === 0) ||
          (contentType === 'all' && filteredSermons.length === 0 && filteredDeclarations.length === 0)) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-12 px-4"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-500 text-sm sm:text-base">Try adjusting your search or filter criteria to find what you're looking for.</p>
          </motion.div>
        )}
      </div>

      {selectedSermon && (
        <SermonModal
          sermon={selectedSermon}
          onClose={() => setSelectedSermon(null)}
          type="both"
        />
      )}

      {selectedDeclaration && (
        <PropheticDeclarationModal
          declaration={selectedDeclaration}
          onClose={() => setSelectedDeclaration(null)}
        />
      )}
    </div>
  );
};

export default SermonPage;
