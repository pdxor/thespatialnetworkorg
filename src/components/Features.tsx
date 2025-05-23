import React, { useEffect, useRef } from 'react';
import { Compass, Map, Cuboid as Cube, Link, Globe, Zap, Brain, MessageSquare, Package } from 'lucide-react';
import { applyScrollAnimation } from '../utils/animations';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Set up features
  const features: Feature[] = [
    {
      icon: Zap,
      title: "Grant Agent",
      description: "An AI assistant that finds relevant grants and helps you craft winning proposals, so you can secure funding faster."
    },
    {
      icon: Brain,
      title: "Feasibility Agent",
      description: "An AI advisor that evaluates your project plans or new ideas for viability and sustainability, giving you data-driven confidence before you invest resources."
    },
    {
      icon: MessageSquare,
      title: "Onboard Agent",
      description: "An AI chatbot trained on your project's information to answer questions and guide new team members, making onboarding and collaboration seamless."
    },
    {
      icon: Package,
      title: "Future Agents Access",
      description: "Early membership comes with token credits for upcoming agents and features, ensuring you always have the latest tools without extra cost."
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      applyScrollAnimation(titleRef.current, 'fade-in-up');
      
      featureRefs.current.forEach((ref, index) => {
        if (ref) {
          applyScrollAnimation(ref, 'fade-in-up', index * 150);
        }
      });
    }
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Intelligent Tools at Your Fingertips
          </h2>
          <p className="text-lg text-gray-600">
            As an early member, you'll gain immediate access to a suite of powerful tools designed to boost your project's success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 transform translate-y-8"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;