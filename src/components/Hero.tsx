import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background gradient with animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 z-0">
        <div className="absolute inset-0 opacity-20 bg-[url('/thespatialnetworkscreen.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-gray-100">
              The Spatial Network
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
              Mapping, Managing, and Regenerating the Planet. Together.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 text-lg font-medium rounded-full bg-gray-900 text-gold-500 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gold-500"
              style={{ color: 'rgb(215,182,115)', borderColor: 'rgb(215,182,115)' }}
            >
              Explore Collaboration Opportunities
            </a>
          </div>
          {/* Right: YouTube Video */}
          <div className="flex-1 w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vm1CO6V7SnY"
              title="Hero Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;