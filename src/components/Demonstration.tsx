import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div 
        className="h-64 bg-cover bg-center" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Demonstration: React.FC = () => {
  const projects = [
    {
      title: "Ecovillage Planning in Hudson Valley, NY",
      description: "A comprehensive spatial plan for a regenerative community with permaculture design, carbon sequestration zones, and circular water systems.",
      image: "https://images.pexels.com/photos/9927846/pexels-photo-9927846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Permaculture", "Community Design", "Carbon Sequestration"]
    },
    {
      title: "Restoration Mapping in Dominican Republic",
      description: "Collaborative watershed restoration project involving local communities, NGOs, and government entities to reverse erosion and enhance biodiversity.",
      image: "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Watershed Restoration", "Biodiversity", "Community Engagement"]
    }
  ];

  return (
    <section id="demonstration" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Explore how communities and organizations are using The Spatial Network 
            to plan, visualize, and implement regenerative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-slate-800">Interactive Map Demo</h3>
            <p className="text-slate-600 mb-4">
              Experience our 3D geospatial visualization capabilities with our interactive demo map.
            </p>
            <div className="aspect-video bg-slate-200 rounded-lg mb-6 overflow-hidden">
              <div className="w-full h-full bg-cover bg-center flex items-center justify-center text-slate-400" style={{ backgroundImage: "url('https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-md">
                  <p className="font-medium">Interactive Map Preview</p>
                </div>
              </div>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Launch Interactive Map <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;