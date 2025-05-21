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
            Let's Tell Your Land's Story Together
          </h2>
          
          <p className="text-xl text-white/90 mb-10">
            Join the movement of regenerative projects creating meaningful connections through immersive virtual experiences.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-white/90 mb-1">Project Type</label>
                <select
                  id="project"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="" className="text-gray-800">Select your project type</option>
                  <option value="farm" className="text-gray-800">Regenerative Farm</option>
                  <option value="ecovillage" className="text-gray-800">Ecovillage</option>
                  <option value="retreat" className="text-gray-800">Retreat Center</option>
                  <option value="conservation" className="text-gray-800">Conservation Project</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Tell us about your vision for the virtual tour"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start the Conversation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;