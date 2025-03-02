import React, { useEffect, useRef } from 'react';

const brands = [
  'DEEP ROOTS', 'The Address', 'TeleXcoin', 'Deep Assets', 'Share Value', 
  'InnoFi', 'InnoLaunch', 'MetaFabric', 'Foundation', 'RootOpia', 
  'Blockchain', 'Smart Contract', 'DeFi', 'DeWorld', 'DRC'
];

const BrandsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <section className="py-12 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-300">Trusted by Leading Blockchain Brands</h2>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex space-x-12 py-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Double the brands for infinite scroll effect */}
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 min-w-[180px] flex items-center justify-center"
            >
              <span className={`text-lg font-medium ${getBrandColor(index % brands.length)}`}>
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Function to get different neon colors for brands
function getBrandColor(index: number): string {
  const colors = [
    'text-purple-400',
    'text-cyan-400',
    'text-pink-400',
    'text-blue-400',
    'text-green-400',
    'text-yellow-400',
    'text-red-400',
    'text-indigo-400',
  ];
  
  return colors[index % colors.length];
}

export default BrandsCarousel;