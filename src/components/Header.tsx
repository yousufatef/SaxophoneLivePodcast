import React, { useState } from 'react';
import { Menu, X, Mic, ChevronDown } from 'lucide-react';

interface HeaderProps {
    isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-gray-900/90 backdrop-blur-md shadow-lg'
                }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        {/* <Mic className="h-8 w-8 text-purple-500" /> */}
                        <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                            Saxophone Live
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <div className="relative group">
                            <button className="flex items-center text-gray-300 hover:text-white">
                                Podcast <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Latest Episodes</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Schedule</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Archives</a>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="text-gray-300 hover:text-white">Guests</a>
                        <a href="#" className="text-gray-300 hover:text-white">Community & Voting</a>
                        <a href="#" className="text-gray-300 hover:text-white">Blog & News</a>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-300 hover:text-white">Sign In</button>
                        <button className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium relative overflow-hidden group">
                            <span className="absolute inset-0 bg-white/20 animate-pulse rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <Mic className="h-4 w-4 mr-2" />
                            <span>Live</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
                    }`}
            >
                <div className="container mx-auto px-4 space-y-4">
                    <a href="#" className="block py-2 text-gray-300 hover:text-white border-b border-gray-700">Podcast</a>
                    <a href="#" className="block py-2 text-gray-300 hover:text-white border-b border-gray-700">Guests</a>
                    <a href="#" className="block py-2 text-gray-300 hover:text-white border-b border-gray-700">Community & Voting</a>
                    <a href="#" className="block py-2 text-gray-300 hover:text-white border-b border-gray-700">Blog & News</a>
                    <a href="#" className="block py-2 text-gray-300 hover:text-white border-b border-gray-700">Sign In</a>
                    <button className="flex items-center w-full px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium">
                        <Mic className="h-4 w-4 mr-2" />
                        <span>Live</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;