import { useState } from "react";
import { Headphones, Menu, X, Mic, ChevronDown } from "lucide-react";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-500/20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-2 group">
                            <Headphones className="text-amber-500 w-8 h-8 group-hover:text-amber-400 transition-colors" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent group-hover:from-amber-400 group-hover:to-yellow-200 transition-all duration-300">
                                Saxophone
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        <a href="/" className="text-amber-100 hover:text-amber-400 transition-colors font-medium">
                            Home
                        </a>
                        <div className="relative group">
                            <button className="text-amber-100 hover:text-amber-400 transition-colors flex items-center space-x-1 font-medium">
                                <span>Podcast</span>
                                <ChevronDown className="w-4 h-4 text-amber-400 group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800/95 backdrop-blur-sm ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a
                                        href="/all-episodes"
                                        className="block px-4 py-2 text-sm text-amber-100 hover:bg-zinc-700 hover:text-amber-400"
                                    >
                                        All Episodes
                                    </a>
                                    <a
                                        href="/featured"
                                        className="block px-4 py-2 text-sm text-amber-100 hover:bg-zinc-700 hover:text-amber-400"
                                    >
                                        Featured
                                    </a>
                                    <a
                                        href="/categories"
                                        className="block px-4 py-2 text-sm text-amber-100 hover:bg-zinc-700 hover:text-amber-400"
                                    >
                                        Categories
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="/guests" className="text-amber-100 hover:text-amber-400 transition-colors font-medium">
                            Guests
                        </a>
                        <a href="/community" className="text-amber-100 hover:text-amber-400 transition-colors font-medium">
                            Community & Voting
                        </a>
                        <a href="/blog" className="text-amber-100 hover:text-amber-400 transition-colors font-medium">
                            Blog & News
                        </a>
                    </nav>

                    {/* Desktop Action Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="px-4 py-1.5 curser-pointer rounded-full text-amber-900 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-medium transition-all duration-300 shadow-md hover:shadow-amber-500/20">
                            Sign In
                        </button>
                        <button className="p-2 curser-pointer rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
                            <Mic className="w-5 h-5 text-amber-400" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        >
                            {mobileMenuOpen ?
                                <X className="w-6 h-6 text-amber-400 curser-pointer" /> :
                                <Menu className="w-6 h-6 text-amber-400 curser-pointer" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-3 space-y-2 bg-zinc-900/80 backdrop-blur-sm">
                    <a
                        href="/"
                        className="block p-2.5 rounded-md text-base font-medium text-amber-100 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                    >
                        Home
                    </a>
                    <div className="space-y-1">
                        <div className="p-2.5 rounded-md text-base font-medium text-amber-100">
                            Podcast
                        </div>
                        <div className="pl-4 space-y-1 border-l-2 border-amber-500/20">
                            <a
                                href="/all-episodes"
                                className="block p-2 rounded-md text-sm font-medium text-amber-100 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                            >
                                All Episodes
                            </a>
                            <a
                                href="/featured"
                                className="block p-2 rounded-md text-sm font-medium text-amber-100 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                            >
                                Featured
                            </a>
                            <a
                                href="/categories"
                                className="block p-2 rounded-md text-sm font-medium text-amber-100 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                            >
                                Categories
                            </a>
                        </div>
                    </div>
                    <a
                        href="/guests"
                        className="block p-2.5 rounded-md text-base font-medium text-amber-100 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                    >
                        Guests
                    </a>
                    <a
                        href="/community"
                        className="block p-2.5 rounded-md text-base font-medium text-amber-100 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                    >
                        Community & Voting
                    </a>
                    <a
                        href="/blog"
                        className="block p-2.5 rounded-md text-base font-medium text-amber-100 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                    >
                        Blog & News
                    </a>

                    <div className="pt-2 grid grid-cols-2 gap-2">
                        <button className="rounded-md bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 curser-pointer text-black font-medium font-medium py-2.5 px-4 transition-all duration-300 shadow-md">
                            Sign In
                        </button>
                        <button className="curser-pointer rounded-md bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-medium py-2.5 px-4 flex items-center justify-center space-x-2 transition-colors">
                            <Mic className="w-5 h-5" />
                            <span>Vote</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;