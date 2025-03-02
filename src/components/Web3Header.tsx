import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

const Web3Header: React.FC = () => {
    const [isConnecting, setIsConnecting] = useState(false);

    const handleConnectWallet = () => {
        setIsConnecting(true);
        // Simulate connection delay
        setTimeout(() => {
            setIsConnecting(false);
            alert('This is a demo. In a real application, this would connect to a Web3 wallet.');
        }, 1500);
    };

    return (
        <div className="py-12 bg-gray-900 relative overflow-hidden text-center ">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none"></div>

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500 blur-xl"></div>
                <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-blue-500 blur-xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-indigo-500 blur-xl"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">

                <h1 className="mb-4 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                    Saxophone Live Podcast
                </h1>

                <p className="text-xl md:text-2xl font-medium mb-8 ">
                    The Billion-Dollar Show for DeWorld
                </p>

                <button
                    onClick={handleConnectWallet}
                    disabled={isConnecting}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                >
                    <Wallet className="w-5 h-5" />
                    <span>
                        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                    </span>
                    <span className="absolute inset-0 rounded-lg overflow-hidden">
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/40 to-indigo-600/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Web3Header;