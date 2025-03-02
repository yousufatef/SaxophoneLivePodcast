import React, { useState } from 'react';
import { Play, Calendar, Clock, ExternalLink } from 'lucide-react';

const episodes = [
  {
    id: 'next',
    title: 'The Future of Decentralized Finance',
    guest: 'Sarah Johnson',
    role: 'CEO, BlockFin',
    date: 'June 15, 2025',
    time: '8:00 PM EST',
    description: 'A deep dive into how DeFi is reshaping traditional banking and what to expect in the next 5 years.',
    image: '/public/images/comingSoon.png',
    isLive: false,
    countdown: {
      days: 2,
      hours: 14,
      minutes: 35
    }
  },
  {
    id: 'ep1',
    title: 'NFTs: Beyond Digital Art',
    guest: 'Michael Chen',
    role: 'Founder, MetaCollect',
    date: 'May 28, 2025',
    time: '7:00 PM EST',
    description: 'Exploring the practical applications of NFTs in real estate, identity verification, and more.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isLive: false,
    links: {
      youtube: '#',
      spotify: '#',
      twitch: '#'
    }
  },
  {
    id: 'ep2',
    title: 'Web3 Gaming Revolution',
    guest: 'Elena Rodriguez',
    role: 'CTO, GameChain',
    date: 'May 14, 2025',
    time: '8:00 PM EST',
    description: 'How blockchain technology is transforming gaming economies and player ownership.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isLive: false,
    links: {
      youtube: '#',
      spotify: '#',
      twitch: '#'
    }
  },
  {
    id: 'ep3',
    title: 'Centralized vs. Decentralized AI',
    guest: 'Dr. James Wilson',
    role: 'AI Researcher',
    date: 'April 30, 2025',
    time: '7:30 PM EST',
    description: 'The ethical implications and technical challenges of AI development in Web3.',
    image: 'https://images.unsplash.com/photo-1677442135968-6144fc1c8ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isLive: false,
    links: {
      youtube: '#',
      spotify: '#',
      twitch: '#'
    }
  }
];

const EpisodesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  const nextEpisode = episodes[0];
  const pastEpisodes = episodes.slice(1);
  
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-cyan-400 font-medium text-sm mb-6">
            🎤 EPISODES
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Upcoming & Past Episodes
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join our live discussions or catch up on previous episodes featuring industry leaders and blockchain innovators.
          </p>
        </div>
        
        {/* Next Episode */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-white">Next Episode</h3>
          
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img 
                  src={nextEpisode.image} 
                  alt={nextEpisode.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Countdown */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white mb-2">Going live in:</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-cyan-400">{nextEpisode.countdown?.days}</div>
                      <div className="text-xs text-gray-400">Days</div>
                    </div>
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-cyan-400">{nextEpisode.countdown?.hours}</div>
                      <div className="text-xs text-gray-400">Hours</div>
                    </div>
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-cyan-400">{nextEpisode.countdown?.minutes}</div>
                      <div className="text-xs text-gray-400">Minutes</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{nextEpisode.title}</h4>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                  <div>
                    <div className="text-white font-medium">{nextEpisode.guest}</div>
                    <div className="text-gray-400 text-sm">{nextEpisode.role}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{nextEpisode.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{nextEpisode.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{nextEpisode.time}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg text-white font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Add to Calendar
                  </button>
                  <button className="px-6 py-3 border border-cyan-500 rounded-lg text-white font-medium hover:bg-cyan-500/10 transition-colors duration-300 flex items-center">
                    Get Notified
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Past Episodes */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Past Episodes</h3>
            
            <div className="flex">
              <button 
                className={`px-4 py-2 rounded-l-lg ${
                  activeTab === 'upcoming' 
                    ? 'bg-gray-700 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Recent
              </button>
              <button 
                className={`px-4 py-2 rounded-r-lg ${
                  activeTab === 'past' 
                    ? 'bg-gray-700 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('past')}
              >
                Popular
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEpisodes.map((episode) => (
              <div 
                key={episode.id} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="relative">
                  <img 
                    src={episode.image} 
                    alt={episode.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{episode.title}</h4>
                  
                  <div className="flex items-center mb-4">
                    <div className="text-gray-400 text-sm">
                      With <span className="text-cyan-400">{episode.guest}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{episode.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4">
                    <a 
                      href={episode.links?.youtube} 
                      className="p-2 bg-gray-700 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a 
                      href={episode.links?.spotify} 
                      className="p-2 bg-gray-700 rounded-full hover:bg-green-500/20 hover:text-green-400 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>
                    <a 
                      href={episode.links?.twitch} 
                      className="p-2 bg-gray-700 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 ml-auto"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;