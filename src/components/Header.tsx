import React, { useState, useEffect } from 'react';
import { Menu, X, Map, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const platformLinks = [
    { name: 'Why The Spatial Network', path: '#value-proposition' },
    { name: 'Intelligent Tools', path: '#features' },
    { name: 'Community', path: '#community' },
    { name: 'Early Adopter Offer', path: '#how-it-works' },
  ];

  const scrollToSection = (path: string) => {
    const id = path.substring(1);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsPlatformOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home');}} className="flex items-center">
            <Map 
              size={28} 
              className={`${isScrolled ? 'text-primary' : 'text-white'} mr-2`} 
              strokeWidth={2.5} 
            />
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              The Spatial Network
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className={`flex items-center font-medium hover:text-accent transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
              >
                Platform
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isPlatformOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  {platformLinks.map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary transition-colors"
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.path); }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact');}}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Join / Demo
            </a>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {platformLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="font-medium text-gray-800 hover:text-primary px-4 py-2"
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.path); }}
                >
                  {link.name}
                </a>
              ))}
              
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact');}}
                className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-full font-medium text-center"
              >
                Join / Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;