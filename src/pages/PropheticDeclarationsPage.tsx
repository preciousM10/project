import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, MessageSquare, Clock, Filter } from 'lucide-react';
import PropheticDeclarationCard from '../components/PropheticDeclarationCard';
import PropheticDeclarationModal from '../components/PropheticDeclarationModal';
import { propheticDeclarations, PropheticDeclaration } from '../data/sermonsData';
import { useMidnightReset } from '../hooks/useMidnightReset';

const PropheticDeclarationsPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedDeclaration, setSelectedDeclaration] = useState<PropheticDeclaration | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sort by timestamp (most recent first) and reset at midnight
  const sortByTime = (a: PropheticDeclaration, b: PropheticDeclaration) => 
    b.timestamp.getTime() - a.timestamp.getTime();

  const { data: sortedDeclarations } = useMidnightReset(propheticDeclarations, sortByTime);

  const filteredDeclarations = sortedDeclarations.filter((declaration: PropheticDeclaration) => 
    selectedCategory === 'All' || declaration.category === selectedCategory
  );

  const categories = ['All', 'Prophetic Declaration', 'Prophetic Word', 'Word of Knowledge', 'Prophetic Alert'];

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
            Prophetic <span className="gradient-text">Declarations</span>
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
            Fresh words from the Lord, sorted by time and reset daily at midnight. 
            Receive prophetic declarations, words of knowledge, and divine encouragement.
          </motion.p>
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
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                {filteredDeclarations.length}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Active Declarations</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">
                {filteredDeclarations.reduce((acc: number, declaration: PropheticDeclaration) => acc + declaration.views, 0).toLocaleString()}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Total Views</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                {new Set(filteredDeclarations.map((d: PropheticDeclaration) => d.category)).size}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                <Clock className="w-6 h-6 mx-auto" />
              </div>
              <div className="text-sm sm:text-base text-gray-600">Auto Reset</div>
            </div>
          </div>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-8 sm:mb-12 px-4 sm:px-0"
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Prophetic Declarations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
          {filteredDeclarations.map((declaration: PropheticDeclaration, index: number) => (
            <PropheticDeclarationCard
              key={declaration.id}
              declaration={declaration}
              index={index}
              isInView={isInView}
              onClick={setSelectedDeclaration}
            />
          ))}
        </div>

        {filteredDeclarations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-12 px-4"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No declarations found</h3>
            <p className="text-gray-500 text-sm sm:text-base">Try adjusting your filter to see more prophetic words.</p>
          </motion.div>
        )}
      </div>

      {selectedDeclaration && (
        <PropheticDeclarationModal
          declaration={selectedDeclaration}
          onClose={() => setSelectedDeclaration(null)}
        />
      )}
    </div>
  );
};

export default PropheticDeclarationsPage;
