import React, { useState, useEffect } from 'react';
import { Menu, X, Map, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

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

  const solutions = [
    { name: 'Regenerative Farms', path: '/solutions/regenerative-farms' },
    { name: 'Ecovillages', path: '/solutions/ecovillages' },
    { name: 'Retreat Centers', path: '/solutions/retreat-centers' },
    { name: 'Conservation Projects', path: '/solutions/conservation' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
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
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className={`flex items-center font-medium hover:text-accent transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                Solutions
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary transition-colors"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="#contact" 
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Contact Us
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
              {solutions.map((solution) => (
                <Link
                  key={solution.path}
                  to={solution.path}
                  className="font-medium text-gray-800 hover:text-primary px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {solution.name}
                </Link>
              ))}
              
              <a 
                href="#contact" 
                className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-full font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;