import React from 'react';
import { X, Play, Calendar, Clock, Eye, Volume2, Video } from 'lucide-react';

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

interface SermonModalProps {
  sermon: Sermon;
  onClose: () => void;
  type: 'video' | 'audio' | 'both';
}

const SermonModal: React.FC<SermonModalProps> = ({ sermon, onClose, type }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePlayVideo = () => {
    window.open(sermon.videoUrl, '_blank');
  };

  const handlePlayAudio = () => {
    window.open(sermon.audioUrl, '_blank');
  };

  // Format date without date-fns
  const formatDate = (date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-200 scale-100 opacity-100">
        {/* Header */}
        <div className="relative">
          <img
            src={sermon.thumbnail}
            alt={sermon.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-2">
              {sermon.category}
            </span>
            <h2 className="text-2xl font-serif font-bold text-white mb-2">
              {sermon.title}
            </h2>
            <div className="flex items-center space-x-4 text-white/90 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(sermon.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{sermon.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{sermon.views} views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{sermon.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {(type === 'video' || type === 'both') && (
              <button
                onClick={handlePlayVideo}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Video className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            )}
            {(type === 'audio' || type === 'both') && (
              <button
                onClick={handlePlayAudio}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Volume2 className="w-5 h-5" />
                <span>Listen to Audio</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonModal;