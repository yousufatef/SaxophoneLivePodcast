import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/95"></div>
        <img
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Neon microphone"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            The First Voice of DeWorld – Live & Unfiltered
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Weekly Discussions on the future of innovation & decentralization
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-medium text-lg flex items-center justify-center group relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <Play className="h-5 w-5 mr-2" />
              <span className="relative">Join the Live Show</span>
            </button>

            <button className="w-full md:w-auto px-8 py-4 border-2 border-cyan-500 rounded-full text-white font-medium text-lg hover:bg-cyan-500/10 transition-colors duration-300 flex items-center justify-center">
              Vote for the Next Topic
            </button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
        <span className="text-sm text-gray-400 mt-2">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;