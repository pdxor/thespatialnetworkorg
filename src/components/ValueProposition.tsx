import React, { useEffect, useRef } from 'react';
import { applyScrollAnimation } from '../utils/animations';

const ValueProposition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      applyScrollAnimation(contentRef.current, 'fade-in-left');
      applyScrollAnimation(imageRef.current, 'fade-in-right');
    }
  }, []);

  return (
    <section 
      id="value-proposition" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            ref={contentRef}
            className="lg:w-1/2 opacity-0 transition-all duration-1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Experience Your Land in a Whole New Dimension
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At The Spatial Network, we help land stewards showcase the full beauty and depth of their regenerative projects. Our virtual tours combine aerial drone mapping, 3D modeling, and immersive walkthroughs to tell your story — engaging visitors, funders, and collaborators like never before.
            </p>
            
            <a 
              href="#features" 
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Discover our solutions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div 
            ref={imageRef}
            className="lg:w-1/2 opacity-0 transition-all duration-1000"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Drone view of regenerative farm" 
                className="w-full h-auto rounded-2xl transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white font-medium">Aerial drone capture of a regenerative farm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;