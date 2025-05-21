import React, { useEffect, useRef } from 'react';
import { Compass, Map, Cuboid as Cube, DivideIcon as LucideIcon, Link, Globe } from 'lucide-react';
import { applyScrollAnimation } from '../utils/animations';

interface Feature {
  icon: LucideIcon;
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
      icon: Compass,
      title: "360° Virtual Walkthroughs",
      description: "Immersive indoor and outdoor tours that let visitors explore every corner of your land project."
    },
    {
      icon: Globe,
      title: "High-Resolution Aerial Tours",
      description: "Breathtaking drone footage that showcases your land from unique and stunning perspectives."
    },
    {
      icon: Map,
      title: "Orthomosaic Mapping & 3D Models",
      description: "Precise digital twins of your property for planning, analysis, and visualization."
    },
    {
      icon: Cube,
      title: "Interactive Maps with Hotspots",
      description: "Engaging maps with clickable points of interest that reveal detailed information and media."
    },
    {
      icon: Link,
      title: "Web-Ready Embeds + Hosting",
      description: "Easy integration with your website and reliable hosting for your virtual tour content."
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
            What You Get
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive virtual tour packages offer everything you need to showcase your land project effectively.
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