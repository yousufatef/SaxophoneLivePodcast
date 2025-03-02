import { useState, useEffect } from 'react';
// import { Menu, X, Mic, ChevronDown, ExternalLink, Play, Calendar, Clock } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandsCarousel from './components/BrandsCarousel';
import AboutSection from './components/AboutSection';
import EpisodesSection from './components/EpisodesSection';
import GuestsSection from './components/GuestsSection';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header isScrolled={isScrolled} />
      <main>
        <div className="">
          <img
            src="/images/landing.png"
            alt="Neon microphone"
            className="w-full h-full object-cover"
          />
        </div>
        <Hero />
        <BrandsCarousel />
        <AboutSection />
        <EpisodesSection />
        <GuestsSection />
      </main >
      <Footer />
    </div >
  );
}

export default App;