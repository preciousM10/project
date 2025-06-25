
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Clock, Eye } from 'lucide-react';
import { format } from 'date-fns';

interface PropheticDeclaration {
  id: number;
  title: string;
  content: string;
  timestamp: Date;
  category: 'Prophetic Declaration' | 'Word of Knowledge' | 'Prophetic Word' | 'Prophetic Alert';
  views: number;
}

interface PropheticDeclarationModalProps {
  declaration: PropheticDeclaration;
  onClose: () => void;
}

const PropheticDeclarationModal: React.FC<PropheticDeclarationModalProps> = ({ 
  declaration, 
  onClose 
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-blue-500 to-amber-500 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {declaration.category}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Plus className="w-5 h-5 rotate-45" />
              </button>
            </div>

            <h2 className="text-2xl font-serif font-bold mb-2">
              {declaration.title}
            </h2>

            <div className="flex items-center space-x-4 text-white/80">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{timeAgo(declaration.timestamp)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{declaration.views} views</span>
              </div>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-96">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {declaration.content}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Received at {format(declaration.timestamp, 'h:mm a on MMM dd, yyyy')}
                </div>
                <button className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg transition-colors">
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PropheticDeclarationModal;