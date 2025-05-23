import React, { useEffect, useRef } from 'react';
import { applyScrollAnimation } from '../utils/animations';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      applyScrollAnimation(contentRef.current, 'fade-in-up');
    }
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Early Adopter Spot & Schedule a Demo
          </h2>
          
          <p className="text-xl text-white/90 mb-10">
            Don't miss this limited opportunity to join The Spatial Network at over 50% savings and get a personalized demo of the platform.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-4 border border-white/20 overflow-hidden">
            <iframe 
              src="https://thespatialnetwork.com/contact/" 
              width="100%" 
              height="600px" 
              style={{ border: 'none', minHeight: '500px' }}
              title="Contact Form"
            >
              Loading contact form...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;