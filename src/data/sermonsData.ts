


export interface Sermon {
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

export interface PropheticDeclaration {
  id: number;
  title: string;
  content: string;
  timestamp: Date;
  category: 'Prophetic Declaration' | 'Word of Knowledge' | 'Prophetic Word' | 'Prophetic Alert';
  views: number;
}

export const propheticDeclarations: PropheticDeclaration[] = [
  {
    id: 1,
    title: "Breakthrough is Coming",
    content: "The Lord says: 'I am opening doors that no man can shut in your life. The season of waiting is coming to an end, and breakthrough is imminent. Fear not, for I am with you always.'",
    timestamp: new Date(),
    category: 'Prophetic Declaration',
    views: 1250
  },
  {
    id: 2,
    title: "Divine Restoration",
    content: "Thus says the Lord: 'What the enemy has stolen, I will restore double. Your lost opportunities, broken relationships, and defeated dreams - I am making all things new in this season.'",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    category: 'Prophetic Word',
    views: 980
  },
  {
    id: 3,
    title: "Fear is Defeated",
    content: "The Spirit of the Lord declares: 'Perfect love casts out all fear. I have not given you a spirit of fear, but of power, love, and sound mind. Walk boldly in My promises.'",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    category: 'Prophetic Declaration',
    views: 1680
  },
  {
    id: 4,
    title: "Divine Connections Alert",
    content: "Word of Knowledge: The Lord is orchestrating divine connections in this season. Prepare your heart for supernatural alignments and partnerships that will accelerate your destiny.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    category: 'Word of Knowledge',
    views: 2100
  },
  {
    id: 5,
    title: "Shift is Coming",
    content: "Prophetic Alert: A major shift is coming to the body of Christ. Get ready for acceleration, supernatural increase, and unprecedented favor. The Lord is doing a new thing!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    category: 'Prophetic Alert',
    views: 1890
  }
];

export const sermonsData: Sermon[] = [
  {
    id: 1,
    title: "The Power of Faith in Difficult Times",
    description: "Discover how faith can move mountains and transform your circumstances, even in the darkest moments of life. This powerful message will strengthen your belief and help you overcome any challenge.",
    date: new Date('2024-01-15'),
    duration: "45:30",
    thumbnail: "https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://soundcloud.com/example1",
    category: "Faith",
    views: 1250
  },
  {
    id: 2,
    title: "Walking in Divine Purpose",
    description: "Understanding God's plan for your life and how to align yourself with His divine purpose and calling. Learn to discern His voice and follow His leading in every season.",
    date: new Date('2024-01-08'),
    duration: "52:15",
    thumbnail: "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://soundcloud.com/example2",
    category: "Purpose",
    views: 980
  },
  {
    id: 3,
    title: "The Healing Power of God",
    description: "Testimonies and biblical truths about God's desire and power to heal every sickness and disease. Witness miraculous healings and learn to receive your breakthrough.",
    date: new Date('2024-01-01'),
    duration: "38:45",
    thumbnail: "https://images.pexels.com/photos/236147/pexels-photo-236147.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://soundcloud.com/example3",
    category: "Healing",
    views: 1500
  },
  {
    id: 4,
    title: "Breakthrough in Prayer",
    description: "Learn the secrets of effective prayer and how to experience breakthrough in your prayer life. Discover different types of prayer and how to pray with power and authority.",
    date: new Date('2023-12-25'),
    duration: "41:20",
    thumbnail: "https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://soundcloud.com/example4",
    category: "Prayer",
    views: 875
  },
  {
    id: 5,
    title: "Living in God's Abundance",
    description: "Discover God's desire for you to live abundantly in every area of your life - spiritually, physically, and financially. Learn to receive and steward His blessings.",
    date: new Date('2023-12-18'),
    duration: "47:10",
    thumbnail: "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://soundcloud.com/example5",
    category: "Prosperity",
    views: 1100
  },
  {
    id: 6,
    title: "The Great Commission",
    description: "Understanding our call to evangelize and make disciples of all nations in these end times. Learn practical ways to share the gospel and impact your community.",
    date: new Date('2023-12-11'),
    duration: "43:55",
    thumbnail: "https://images.pexels.com/photos/161172/highway-the-way-forward-road-marking-arrow-161172.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://soundcloud.com/example6",
    category: "Evangelism",
    views: 750
  },
  {
    id: 7,
    title: "Spiritual Warfare and Victory",
    description: "Learn about the spiritual battles we face and how to walk in victory through Christ. Understand your authority as a believer and how to overcome the enemy's schemes.",
    date: new Date('2023-12-04'),
    duration: "49:25",
    thumbnail: "https://images.pexels.com/photos/209832/pexels-photo-209832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://soundcloud.com/example7",
    category: "Spiritual Warfare",
    views: 1350
  },
  {
    id: 8,
    title: "The Love of God",
    description: "Experience the unconditional love of God that surpasses all understanding. Learn how His love transforms lives and gives us the power to love others unconditionally.",
    date: new Date('2023-11-27'),
    duration: "44:18",
    thumbnail: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://soundcloud.com/example8",
    category: "Love",
    views: 920
  }
];

export const categories = [
  'All', 
  'Faith', 
  'Purpose', 
  'Healing', 
  'Prayer', 
  'Prosperity', 
  'Evangelism', 
  'Spiritual Warfare', 
  'Love'
];