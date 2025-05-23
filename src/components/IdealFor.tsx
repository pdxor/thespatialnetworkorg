import React, { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';
import { applyScrollAnimation } from '../utils/animations';

const IdealFor: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      applyScrollAnimation(titleRef.current, 'fade-in-up');
      applyScrollAnimation(contentRef.current, 'fade-in-left', 150);
      applyScrollAnimation(imageRef.current, 'fade-in-right', 150);
    }
  }, []);

  return (
    <section 
      id="community"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Join a Growing Regenerative Community
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            ref={imageRef}
            className="lg:w-1/2 opacity-0 transition-all duration-1000 order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="EcoTERRA's project dashboard on The Spatial Network"
                className="w-full h-auto rounded-2xl transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div 
            ref={contentRef}
            className="lg:w-1/2 opacity-0 transition-all duration-1000 order-2 lg:order-1"
          >
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                    EcoTERRA's Project Dashboard Example
                </h3>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              EcoTERRA's project dashboard on The Spatial Network (sleek dark-mode design). The EcoTERRA team of 10 members is using this interface to manage a $200,000 regenerative community project in upstate New York. All project details – from values and goals to maps and budgets – are integrated in one view, as shown above. This is just one example of how our community of changemakers is leveraging The Spatial Network.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              By joining now, your venture can enjoy the same clarity and support while connecting with a network of like-minded regenerative pioneers.
            </p>
            
            <a 
              href="#contact"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all transform hover:scale-105 inline-flex items-center"
            >
              Join the Network
              <Users size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealFor;