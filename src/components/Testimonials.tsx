import React, { useEffect, useRef } from 'react';
import { CalendarCheck } from 'lucide-react';
import { applyScrollAnimation } from '../utils/animations';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      applyScrollAnimation(contentRef.current, 'fade-in-up');
    }
  }, []);

  return (
    <section 
      id="schedule-demo"
      ref={sectionRef}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-all duration-1000"
        >
          <div className="mb-8">
            <CalendarCheck size={64} className="mx-auto text-white/80" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Would You Like to Schedule a Demo?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Schedule a free personalized demo today to see how The Spatial Network can elevate your project's success.
          </p>
          
          <a 
            href="#contact"
            className="px-10 py-4 bg-white hover:bg-gray-100 text-primary rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule Your Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;