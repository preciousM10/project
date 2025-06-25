
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock } from 'lucide-react';
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

interface SermonCardProps {
  sermon: Sermon;
  index: number;
  isInView: boolean;
  onClick: (sermon: Sermon) => void;
  type: 'video' | 'audio' | 'both';
}

const SermonCard: React.FC<SermonCardProps> = ({ sermon, index, isInView, onClick, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group cursor-pointer"
      onClick={() => onClick(sermon)}
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
        {type !== 'both' && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded text-sm font-medium">
            {type.toUpperCase()}
          </div>
        )}
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
  );
};

export default SermonCard;
