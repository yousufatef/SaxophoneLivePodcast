import React from 'react';
import { MessageSquare, Users, TrendingUp, Zap, DollarSign } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left side - Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                            What is Saxophone Live Podcast?
                        </h2>

                        <p className="text-gray-300 text-lg mb-8">
                            The Ultimate Live Debate Between Centralized & Decentralized Thinkers.
                            We bring together high-net-worth individuals and blockchain pioneers to
                            debate the future of finance, technology, and society.
                        </p>

                        <div className="space-y-6">
                            <FeatureItem
                                icon={<MessageSquare className="h-6 w-6 text-purple-400" />}
                                title="HNWIs Meet DeWorld"
                                description="Billionaires & blockchain pioneers debating the future of finance and technology."
                            />

                            <FeatureItem
                                icon={<TrendingUp className="h-6 w-6 text-cyan-400" />}
                                title="Real-World Impact"
                                description="Conversations influencing finance, AI, and Web3 adoption globally."
                            />

                            <FeatureItem
                                icon={<Users className="h-6 w-6 text-pink-400" />}
                                title="Community-Powered"
                                description="Listeners vote on discussion topics and engage live with speakers."
                            />

                            <FeatureItem
                                icon={<Zap className="h-6 w-6 text-yellow-400" />}
                                title="Funding New Ideas"
                                description="A platform to showcase and support blockchain startups and innovations."
                            />

                            <FeatureItem
                                icon={<DollarSign className="h-6 w-6 text-green-400" />}
                                title="Market Insights"
                                description="Expert opinions on DeFi, smart contracts, and blockchain innovation."
                            />
                        </div>

                        <div className="mt-10">
                            <p className="text-xl font-semibold text-white mb-4">
                                🎙️ Live. Unscripted. Revolutionary.
                            </p>

                            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors duration-300">
                                Learn More About Our Mission
                            </button>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 h-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>

                            <div className="grid h-full">
                                <div>
                                    <img
                                        src="/images/show.png"
                                        alt="Podcast host and guest"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg mr-4">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};
export default AboutSection;