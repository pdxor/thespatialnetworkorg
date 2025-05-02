import React from 'react';
import { 
  Map, 
  LayoutDashboard, 
  BrainCircuit, 
  Coins, 
  Library, 
  GraduationCap 
} from 'lucide-react';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl bg-slate-800 border border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-500/30 hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-600/20 text-blue-400 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
};

const Technologies: React.FC = () => {
  const technologies = [
    {
      icon: <Map size={28} />,
      title: "3D Geospatial Mapping",
      description: "Interactive visualization of landscapes and projects powered by CesiumJS and Resium, enabling real-time collaboration and planning."
    },
    {
      icon: <LayoutDashboard size={28} />,
      title: "Spatial Project Management",
      description: "Upload, organize, and manage assets, plans, and resources with intuitive tools designed for collaborative ecosystem restoration."
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "AI-Driven Planning & Insights",
      description: "Leverage predictive analytics and machine learning to optimize regenerative strategies and increase project success rates."
    },
    {
      icon: <Coins size={28} />,
      title: "Funding & Support Modules",
      description: "Integrated donation systems, grant applications, and DAO-based fundraising to support sustainable development initiatives."
    },
    {
      icon: <Library size={28} />,
      title: "Land Asset Library",
      description: "Access templates for infrastructure, restoration techniques, and land management strategies linked to spatial models."
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Education & Badge Systems",
      description: "Earn certifications in permaculture, sustainable development goals, and regenerative practices through our integrated learning platform."
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies & Capabilities</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Our integrated platform brings together cutting-edge technologies to empower regenerative projects worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechCard 
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;