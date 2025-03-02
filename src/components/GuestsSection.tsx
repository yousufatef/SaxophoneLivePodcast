import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const guests = [
    {
        id: 1,
        name: 'Dr. Elena Patel',
        role: 'Blockchain Architect',
        company: 'DeWorld Foundation',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Pioneer in decentralized identity solutions with over 15 years in cryptography and distributed systems.',
        twitter: '#',
        linkedin: '#'
    },
    {
        id: 2,
        name: 'Marcus Johnson',
        role: 'Centralized Finance Tycoon',
        company: 'Global Banking Corp',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Former investment banking executive who now bridges traditional finance with emerging blockchain technologies.',
        twitter: '#',
        linkedin: '#'
    },
    {
        id: 3,
        name: 'Sophia Chen',
        role: 'AI & Innovation Expert',
        company: 'Neural Systems',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Researching the intersection of artificial intelligence and blockchain for autonomous economic systems.',
        twitter: '#',
        linkedin: '#'
    },
    {
        id: 4,
        name: 'James Wilson',
        role: 'DeFi Protocol Founder',
        company: 'LiquidityDAO',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Created one of the first decentralized lending protocols that revolutionized how capital flows in crypto markets.',
        twitter: '#',
        linkedin: '#'
    },
    {
        id: 5,
        name: 'Aisha Rahman',
        role: 'Regulatory Expert',
        company: 'Blockchain Policy Institute',
        image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Advises governments and enterprises on blockchain regulation and compliance frameworks worldwide.',
        twitter: '#',
        linkedin: '#'
    }
];

const GuestsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const nextGuest = () => {
        setActiveIndex((prev) => (prev + 1) % guests.length);
    };

    const prevGuest = () => {
        setActiveIndex((prev) => (prev - 1 + guests.length) % guests.length);
    };

    useEffect(() => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.offsetWidth * activeIndex;
            sliderRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }, [activeIndex]);

    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-cyan-400 font-medium text-sm mb-6">
                        🚀 SPECIAL GUESTS
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                        Billion-Dollar Conversations
                    </h2>

                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Meet the thought leaders shaping the future of finance, technology, and society through our live podcast debates.
                    </p>
                </div>

                <div className="relative">
                    {/* Guest slider */}
                    <div
                        ref={sliderRef}
                        className="flex overflow-x-hidden snap-x snap-mandatory"
                    >
                        {guests.map((guest, ) => (
                            <div
                                key={guest.id}
                                className="w-full flex-shrink-0 snap-center"
                            >
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl transform rotate-3"></div>
                                        <img
                                            src={guest.image}
                                            alt={guest.name}
                                            className="relative z-10 w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                                        />

                                        {/* Decorative elements */}
                                        <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-cyan-400 text-sm">
                                            Confirmed Guest
                                        </div>

                                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-50 blur-xl"></div>
                                    </div>

                                    <div>
                                        <div className="mb-6">
                                            <h3 className="text-3xl font-bold text-white mb-2">{guest.name}</h3>
                                            <p className="text-xl text-cyan-400 mb-1">{guest.role}</p>
                                            <p className="text-gray-400">{guest.company}</p>
                                        </div>

                                        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
                                            <p className="text-gray-300">{guest.bio}</p>
                                        </div>

                                        <div className="flex space-x-4 mb-8">
                                            <a
                                                href={guest.twitter}
                                                className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300"
                                            >
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                                </svg>
                                            </a>
                                            <a
                                                href={guest.linkedin}
                                                className="p-2 bg-gray-800 rounded-full hover:bg-blue-700/20 hover:text-blue-400 transition-colors duration-300"
                                            >
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="ml-auto px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center"
                                            >
                                                <span className="mr-2">View Episodes</span>
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div className="flex space-x-2">
                                                {guests.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        className={`w-2 h-2 rounded-full ${idx === activeIndex ? 'bg-cyan-400' : 'bg-gray-700'
                                                            }`}
                                                        onClick={() => setActiveIndex(idx)}
                                                    />
                                                ))}
                                            </div>

                                            <div className="flex space-x-3">
                                                <button
                                                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                                                    onClick={prevGuest}
                                                >
                                                    <ChevronLeft className="h-6 w-6" />
                                                </button>
                                                <button
                                                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                                                    onClick={nextGuest}
                                                >
                                                    <ChevronRight className="h-6 w-6" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        See Full Guest List
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GuestsSection;