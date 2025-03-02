import React from 'react';
import { Mail, Twitter, Instagram, Youtube, Twitch } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            {/* <Mic className="h-8 w-8 text-purple-500" /> */}
                            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                                Saxophone Live
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            The ultimate live podcast platform bridging centralized and decentralized worlds through engaging debates and discussions.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
                            <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" />
                            <SocialLink icon={<Youtube className="h-5 w-5" />} href="#" />
                            <SocialLink icon={<Twitch className="h-5 w-5" />} href="#" />
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <FooterLink href="#" text="About Us" />
                            <FooterLink href="#" text="Episodes" />
                            <FooterLink href="#" text="Guests" />
                            <FooterLink href="#" text="Community" />
                            <FooterLink href="#" text="Blog" />
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <FooterLink href="#" text="Web3 Glossary" />
                            <FooterLink href="#" text="Blockchain Basics" />
                            <FooterLink href="#" text="DeFi Explained" />
                            <FooterLink href="#" text="NFT Guide" />
                            <FooterLink href="#" text="Smart Contracts 101" />
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest episodes and blockchain insights.
                        </p>
                        <form className="mb-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-600 transition-colors duration-300"
                                >
                                    <Mail className="h-5 w-5" />
                                </button>
                            </div>
                        </form>
                        <p className="text-gray-500 text-sm">
                            By subscribing, you agree to our Privacy Policy and Terms of Service.
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2025 Saxophone Live Podcast. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

interface SocialLinkProps {
    icon: React.ReactNode;
    href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
    return (
        <a
            href={href}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 text-gray-400 hover:text-white"
        >
            {icon}
        </a>
    );
};

interface FooterLinkProps {
    href: string;
    text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
    return (
        <li>
            <a href={href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                {text}
            </a>
        </li>
    );
};

export default Footer;