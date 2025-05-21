import React, { useEffect, useRef } from 'react';
import { Home, Leaf, Tent, Globe, School } from 'lucide-react';
import { Link } from 'react-router-dom';
import { applyScrollAnimation } from '../utils/animations';

interface UseCase {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  link: string;
}

const IdealFor: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const useCases: UseCase[] = [
    {
      icon: Home,
      title: "Ecovillage Real Estate Listings",
      description: "Help potential buyers explore community spaces before visiting in person.",
      image: "https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/solutions/ecovillages"
    },
    {
      icon: Leaf,
      title: "Regenerative Farm Profiles",
      description: "Showcase your farming practices and land stewardship to customers and students.",
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/solutions/regenerative-farms"
    },
    {
      icon: Tent,
      title: "Retreat & Event Venue Marketing",
      description: "Let potential guests experience your venue's unique atmosphere virtually.",
      image: "https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/solutions/retreat-centers"
    },
    {
      icon: Globe,
      title: "Conservation Awareness Campaigns",
      description: "Create immersive experiences to educate and inspire support for protected lands.",
      image: "https://images.pexels.com/photos/3025432/pexels-photo-3025432.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/solutions/conservation"
    },
    {
      icon: School,
      title: "Educational & Research Land Walkthroughs",
      description: "Build interactive learning experiences for students and researchers.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/solutions/conservation"
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      applyScrollAnimation(titleRef.current, 'fade-in-up');
      
      casesRef.current.forEach((ref, index) => {
        if (ref) {
          applyScrollAnimation(ref, 'fade-in-up', index * 150);
        }
      });
    }
  }, []);

  return (
    <section 
      id="solutions" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ideal For
          </h2>
          <p className="text-lg text-gray-600">
            Our virtual tour solutions are perfect for various regenerative land projects and purposes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <div
                key={index}
                ref={el => casesRef.current[index] = el}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {useCase.description}
                  </p>
                  
                  <Link 
                    to={useCase.link}
                    className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IdealFor;