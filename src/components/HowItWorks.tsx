import React, { useEffect, useRef } from 'react';
import { Calendar, Camera, Share2, Gift, Layers, Zap as ZapIcon, Award } from 'lucide-react';
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
      icon: Gift,
      title: "2-Year Membership (58% Off)",
      description: "Lock in 24 months of full platform access for $1,000 (a $2,400 value). You save $1,400 by joining now."
    },
    {
      icon: Layers,
      title: "All Features Included",
      description: "Enjoy unrestricted use of all current tools (Grant, Feasibility, and Onboard Agents) and every new feature we release – at no extra charge."
    },
    {
      icon: ZapIcon,
      title: "Future Agent Credits",
      description: "Receive exclusive token credits to unlock upcoming AI agents and premium services as they roll out."
    },
    {
      icon: Award,
      title: "Limited Opportunity",
      description: "This discounted buy-in is available to the first wave of visionary users. Don't miss your chance to pioneer this movement and shape the future of regenerative tech!"
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
            Exclusive Early Adopter Offer
          </h2>
          <p className="text-xl text-white/80">
            For a limited time, we invite you to become a founding member of The Spatial Network.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          {/* <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 -translate-y-1/2 z-0"></div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  ref={el => stepsRef.current[index] = el}
                  className="relative z-10 opacity-0 transform translate-x-16"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full flex flex-col">
                    <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0">
                      <Icon size={32} />
                    </div>
                    
                    <div className="text-center flex-grow">
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