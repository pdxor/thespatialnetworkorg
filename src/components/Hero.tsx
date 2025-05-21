import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { applyScrollAnimation } from '../utils/animations';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('value-proposition');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1578570/pexels-photo-1578570.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-20 z-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            See Regeneration from Above — and Within
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Experience the story of your land in stunning, immersive detail. From aerial drone captures to 3D walkthroughs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              Start Your Journey
            </a>
            <a 
              href="#how-it-works" 
              className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full font-medium transition-all"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </button>
    </div>
  );
};

export default Hero;