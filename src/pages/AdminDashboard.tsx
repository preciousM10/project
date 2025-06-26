import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { 
  BarChart3, 
  
  Play, 
  MessageSquare, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  LogOut,
  
  Link,
  
} from 'lucide-react';
import { format } from 'date-fns';

interface MediaItem {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'audio';
  platform: string;
  url: string;
  thumbnail: string;
  date: Date;
  views: number;
  category: string;
  status: 'published' | 'draft';
}

const AdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<MediaItem | null>(null);

  // Sample media data
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: 1,
      title: "The Power of Faith in Difficult Times",
      description: "Discover how faith can move mountains and transform your circumstances.",
      type: 'video',
      platform: 'YouTube',
      url: 'https://www.youtube.com/watch?v=example1',
      thumbnail: 'https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: new Date('2024-01-15'),
      views: 1250,
      category: 'Faith',
      status: 'published'
    },
    {
      id: 2,
      title: "Walking in Divine Purpose",
      description: "Understanding God's plan for your life and divine calling.",
      type: 'audio',
      platform: 'SoundCloud',
      url: 'https://soundcloud.com/example2',
      thumbnail: 'https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: new Date('2024-01-08'),
      views: 980,
      category: 'Purpose',
      status: 'published'
    }
  ]);

  const [newMedia, setNewMedia] = useState({
    title: '',
    description: '',
    type: 'video' as 'video' | 'audio',
    platform: 'YouTube',
    url: '',
    category: 'Faith',
    status: 'published' as 'published' | 'draft'
  });

  

  const categories = ['All', 'Faith', 'Purpose', 'Healing', 'Prayer', 'Prosperity', 'Evangelism'];
  const platforms = ['YouTube', 'SoundCloud', 'Vimeo', 'Facebook', 'Instagram'];

  const filteredMedia = mediaItems
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const handleAddMedia = () => {
    const newItem: MediaItem = {
      id: Date.now(),
      ...newMedia,
      thumbnail: 'https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: new Date(),
      views: 0
    };
    
    setMediaItems([newItem, ...mediaItems]);
    setNewMedia({
      title: '',
      description: '',
      type: 'video',
      platform: 'YouTube',
      url: '',
      category: 'Faith',
      status: 'published'
    });
    setShowAddModal(false);
  };

  const handleDeleteMedia = (id: number) => {
    setMediaItems(mediaItems.filter(item => item.id !== id));
  };

  const handleEditMedia = (item: MediaItem) => {
    setEditingItem(item);
    setNewMedia({
      title: item.title,
      description: item.description,
      type: item.type,
      platform: item.platform,
      url: item.url,
      category: item.category,
      status: item.status
    });
    setShowAddModal(true);
  };

  const handleUpdateMedia = () => {
    if (editingItem) {
      setMediaItems(mediaItems.map(item => 
        item.id === editingItem.id 
          ? { ...item, ...newMedia }
          : item
      ));
      setEditingItem(null);
      setNewMedia({
        title: '',
        description: '',
        type: 'video',
        platform: 'YouTube',
        url: '',
        category: 'Faith',
        status: 'published'
      });
      setShowAddModal(false);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'media', label: 'Media Library', icon: Play },
    { id: 'messages', label: 'Messages', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-gold-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">RU</span>
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Rev. Iniobong Udoh Ministry</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
       

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {mediaItems.slice(0, 5).map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{format(item.date, 'MMM dd, yyyy')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{item.views} views</p>
                      <p className="text-xs text-gray-500">{item.platform}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Media Library Tab */}
        {activeTab === 'media' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Controls */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      
                      type="text"
                      placeholder="Search media..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="flex items-center space-x-2">
                    <Filter className="text-gray-500 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Add Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Media</span>
                </motion.button>
              </div>
            </div>

            {/* Media Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedia.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.type === 'video' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {item.type.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'published' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                      }`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{item.platform}</span>
                      <span>{format(item.date, 'MMM dd, yyyy')}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{item.views}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleEditMedia(item)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          <Edit className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDeleteMedia(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredMedia.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No media found matching your criteria.</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Messages</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">Prayer Request from Sarah Johnson</h4>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="text-gray-600 mb-3">
                  Please pray for my family's financial situation. We're going through a difficult time...
                </p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded hover:bg-primary-700 transition-colors">
                    Reply
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors">
                    Mark as Read
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Add/Edit Media Modal */}
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setShowAddModal(false);
            setEditingItem(null);
            setNewMedia({
              title: '',
              description: '',
              type: 'video',
              platform: 'YouTube',
              url: '',
              category: 'Faith',
              status: 'published'
            });
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {editingItem ? 'Edit Media' : 'Add New Media'}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newMedia.title}
                    onChange={(e) => setNewMedia({...newMedia, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="Enter media title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newMedia.description}
                    onChange={(e) => setNewMedia({...newMedia, description: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                    placeholder="Enter media description"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select
                      value={newMedia.type}
                      onChange={(e) => setNewMedia({...newMedia, type: e.target.value as 'video' | 'audio'})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      <option value="video">Video</option>
                      <option value="audio">Audio</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                    <select
                      value={newMedia.platform}
                      onChange={(e) => setNewMedia({...newMedia, platform: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      {platforms.map(platform => (
                        <option key={platform} value={platform}>{platform}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="url"
                      value={newMedia.url}
                      onChange={(e) => setNewMedia({...newMedia, url: e.target.value})}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={newMedia.category}
                      onChange={(e) => setNewMedia({...newMedia, category: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      {categories.filter(cat => cat !== 'All').map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={newMedia.status}
                      onChange={(e) => setNewMedia({...newMedia, status: e.target.value as 'published' | 'draft'})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingItem(null);
                    setNewMedia({
                      title: '',
                      description: '',
                      type: 'video',
                      platform: 'YouTube',
                      url: '',
                      category: 'Faith',
                      status: 'published'
                    });
                  }}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={editingItem ? handleUpdateMedia : handleAddMedia}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  {editingItem ? 'Update Media' : 'Add Media'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminDashboard;