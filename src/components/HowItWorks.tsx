import React, { useEffect, useRef } from 'react';
import { Calendar, Camera, Share2 } from 'lucide-react';
import { applyScrollAnimation } from '../utils/animations';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const steps: Step[] = [
    {
      icon: Calendar,
      title: "Book a Site Survey",
      description: "Schedule a consultation to discuss your property and specific needs. We'll plan the optimal time for capturing your land."
    },
    {
      icon: Camera,
      title: "We Capture Your Land",
      description: "Our team visits your site with specialized equipment to capture stunning aerial and ground-level imagery of your property."
    },
    {
      icon: Share2,
      title: "You Receive a Shareable Virtual Tour",
      description: "We process and deliver your immersive virtual tour, ready to embed on your website or share with your audience."
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      applyScrollAnimation(titleRef.current, 'fade-in-up');
      
      stepsRef.current.forEach((ref, index) => {
        if (ref) {
          applyScrollAnimation(ref, 'fade-in-right', index * 300);
        }
      });
    }
  }, []);

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-white/80">
            Our streamlined process makes creating your virtual tour simple and efficient.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  ref={el => stepsRef.current[index] = el}
                  className="relative z-10 opacity-0 transform translate-x-16"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                    <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon size={32} />
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-1 mb-4">
                        Step {index + 1}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-white/80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;