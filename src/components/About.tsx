import React from 'react';
import { MapPin, Leaf, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6">
          <p>
            The Spatial Network is an open-source platform for regenerative projects worldwide. 
            We combine 3D geospatial visualization, project management tools, AI-driven insights, 
            and blockchain-based fundraising solutions to empower communities, land stewards, 
            and innovators in the Global South and beyond.
          </p>
          <p>
            Our mission is to democratize access to advanced spatial technologies, 
            enabling collaborative planning and execution of projects that heal ecosystems 
            while supporting sustainable development goals.
          </p>
          <p>
            By providing tools that visualize, plan, and fund regenerative initiatives, 
            we aim to accelerate positive transformation of our planet's most vulnerable landscapes 
            and communities.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">Open-Source Spatial Technology</h3>
            <p className="text-slate-600">Democratizing access to powerful geospatial tools for all</p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-xl text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">Global Regenerative Projects</h3>
            <p className="text-slate-600">Empowering local and global initiatives for planetary health</p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-xl text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">Sustainable Development</h3>
            <p className="text-slate-600">Tools to plan, visualize and fund regenerative initiatives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;