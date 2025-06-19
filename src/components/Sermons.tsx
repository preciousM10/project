import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Calendar, Clock, Filter, Search } from 'lucide-react';
import { format } from 'date-fns';

interface Sermon {
  id: number;
  title: string;
  description: string;
  date: Date;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  audioUrl: string;
  category: string;
  views: number;
}

const Sermons: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

  // Sample sermon data - sorted by date (newest first)
  const sermons: Sermon[] = [
    {
      id: 1,
      title: "The Power of Faith in Difficult Times",
      description: "Discover how faith can move mountains and transform your circumstances, even in the darkest moments of life.",
      date: new Date('2024-01-15'),
      duration: "45:30",
      thumbnail: "https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      audioUrl: "https://soundcloud.com/example1",
      category: "Faith",
      views: 1250
    },
    {
      id: 2,
      title: "Walking in Divine Purpose",
      description: "Understanding God's plan for your life and how to align yourself with His divine purpose and calling.",
      date: new Date('2024-01-08'),
      duration: "52:15",
      thumbnail: "https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      audioUrl: "https://soundcloud.com/example2",
      category: "Purpose",
      views: 980
    },
    {
      id: 3,
      title: "The Healing Power of God",
      description: "Testimonies and biblical truths about God's desire and power to heal every sickness and disease.",
      date: new Date('2024-01-01'),
      duration: "38:45",
      thumbnail: "https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      audioUrl: "https://soundcloud.com/example3",
      category: "Healing",
      views: 1500
    },
    {
      id: 4,
      title: "Breakthrough in Prayer",
      description: "Learn the secrets of effective prayer and how to experience breakthrough in your prayer life.",
      date: new Date('2023-12-25'),
      duration: "41:20",
      thumbnail: "https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      audioUrl: "https://soundcloud.com/example4",
      category: "Prayer",
      views: 875
    },
    {
      id: 5,
      title: "Living in God's Abundance",
      description: "Discover God's desire for you to live abundantly in every area of your life - spiritually, physically, and financially.",
      date: new Date('2023-12-18'),
      duration: "47:10",
      thumbnail: "https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=example5",
      audioUrl: "https://soundcloud.com/example5",
      category: "Prosperity",
      views: 1100
    },
    {
      id: 6,
      title: "The Great Commission",
      description: "Understanding our call to evangelize and make disciples of all nations in these end times.",
      date: new Date('2023-12-11'),
      duration: "43:55",
      thumbnail: "https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=example6",
      audioUrl: "https://soundcloud.com/example6",
      category: "Evangelism",
      views: 750
    }
  ];

  const categories = ['All', 'Faith', 'Purpose', 'Healing', 'Prayer', 'Prosperity', 'Evangelism'];

  const filteredSermons = sermons
    .filter(sermon => selectedCategory === 'All' || sermon.category === selectedCategory)
    .filter(sermon => sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     sermon.description.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by date, newest first

  return (
    <section id="sermons" className="section-padding bg-gray-50">
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
            Sermons & <span className="gradient-text">Messages</span>
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
            Be blessed by powerful messages that will strengthen your faith and transform your life.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
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

        {/* Sermons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group cursor-pointer"
              onClick={() => setSelectedSermon(sermon)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {sermon.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    {sermon.category}
                  </span>
                  <span className="text-gray-500 text-sm">{sermon.views} views</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {sermon.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {sermon.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{format(sermon.date, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredSermons.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No sermons found matching your criteria.</p>
          </motion.div>
        )}

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Load More Sermons
          </motion.button>
        </motion.div>
      </div>

      {/* Sermon Modal */}
      {selectedSermon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSermon(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  {selectedSermon.title}
                </h3>
                <button
                  onClick={() => setSelectedSermon(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <img
                src={selectedSermon.thumbnail}
                alt={selectedSermon.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <p className="text-gray-600 mb-6">{selectedSermon.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedSermon.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Video</span>
                </a>
                <a
                  href={selectedSermon.audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center space-x-2"
                >
                  <Clock className="w-5 h-5" />
                  <span>Listen Audio</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Sermons;