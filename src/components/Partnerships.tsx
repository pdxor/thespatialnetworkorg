import React from 'react';
import { Users, Building2, GraduationCap, Globe } from 'lucide-react';

const Partnerships: React.FC = () => {
  return (
    <section id="partnerships" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnerships & Future Vision</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            We believe in the power of collaboration to drive global regeneration. 
            Join us in creating a more sustainable and equitable future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 mr-4">
              <Building2 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">UN Organizations</h3>
              <p className="text-slate-300 leading-relaxed">
                We invite UN agencies focused on climate action, biodiversity, and sustainable development 
                to leverage our platform for monitoring, planning, and implementing global initiatives.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 mr-4">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">NGOs & Civil Society</h3>
              <p className="text-slate-300 leading-relaxed">
                NGOs can utilize our tools to enhance planning, coordination, and impact assessment 
                of projects, while increasing transparency and stakeholder engagement.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 mr-4">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Academic Institutions</h3>
              <p className="text-slate-300 leading-relaxed">
                Universities and research institutions can contribute to and benefit from 
                our open-source platform for educational programs, research initiatives, and field projects.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 mr-4">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Regenerative Projects</h3>
              <p className="text-slate-300 leading-relaxed">
                We provide specialized support for regenerative agriculture, ecosystem restoration, 
                and community resilience projects worldwide, with particular focus on the Global South.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-8 rounded-xl bg-slate-700/50 border border-slate-600 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Our Future Vision</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              By 2030, we aim to support over 10,000 regenerative projects worldwide, 
              facilitate the restoration of 100 million hectares of degraded land, 
              and empower communities with the tools and resources needed to create 
              thriving, resilient landscapes and societies.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;