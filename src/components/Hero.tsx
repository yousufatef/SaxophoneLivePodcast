import { PlayCircle, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <div className="py-16 md:py-20 bg-gradient-to-b from-black to-zinc-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Hero Image Section */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30">
                        <img
                            src="/public/images/hero.png"
                            alt="Hero image"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                            <button className="rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black">
                                <PlayCircle className="text-4xl cursor-pointer" />
                            </button>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-white">Crypto Talk #42</h3>
                                <p className="text-xs sm:text-sm text-amber-200">The Future of DeFi</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
                            The First Voice of DeWorld – Live & Unfiltered
                        </h2>
                        <p className="text-base sm:text-lg text-amber-100/80">
                            Weekly Discussions on the Future of Innovation & Decentralization
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Weekly Discussions on the Future of Innovation & Decentralization",
                                "HNWIs, Blockchain Experts, & Game-Changing Thinkers",
                                "Bridging the gap between centralized power and decentralized freedom",
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-black">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <span className="text-amber-100">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-medium px-4 py-2 cursor-pointer">
                                Join the Live Show
                            </button>
                            <button className="text-amber-400 cursor-pointer">
                                Vote the Next Topic
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;