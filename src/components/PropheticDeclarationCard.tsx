
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye } from 'lucide-react';
import { format } from 'date-fns';

interface PropheticDeclaration {
  id: number;
  title: string;
  content: string;
  timestamp: Date;
  category: 'Prophetic Declaration' | 'Word of Knowledge' | 'Prophetic Word' | 'Prophetic Alert';
  views: number;
}

interface PropheticDeclarationCardProps {
  declaration: PropheticDeclaration;
  index: number;
  isInView: boolean;
  onClick: (declaration: PropheticDeclaration) => void;
}

const PropheticDeclarationCard: React.FC<PropheticDeclarationCardProps> = ({ 
  declaration, 
  index, 
  isInView, 
  onClick 
}) => {
  const timeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return format(date, 'MMM dd, yyyy');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-blue-100 overflow-hidden card-hover group cursor-pointer"
      onClick={() => onClick(declaration)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">P</span>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-amber-100 text-blue-700 text-sm font-medium rounded-full">
                {declaration.category}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{declaration.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{timeAgo(declaration.timestamp)}</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {declaration.title}
        </h3>

        <p className="text-gray-700 leading-relaxed line-clamp-4 mb-4">
          {declaration.content}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500 font-medium">
            {format(declaration.timestamp, 'h:mm a')}
          </span>
          <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
            Read More →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PropheticDeclarationCard;