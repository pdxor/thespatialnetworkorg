import React from 'react';

interface SDGItemProps {
  number: string;
  title: string;
  description: string;
  color: string;
}

const SDGItem: React.FC<SDGItemProps> = ({ number, title, description, color }) => {
  return (
    <div className="flex items-start p-6 rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className={`flex-shrink-0 w-12 h-12 ${color} text-white rounded-lg flex items-center justify-center font-bold text-lg mr-4`}>
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const Impact: React.FC = () => {
  const sdgs = [
    {
      number: "13",
      title: "Climate Action",
      description: "Mapping carbon sequestration zones and facilitating climate adaptation strategies through spatial planning.",
      color: "bg-green-600"
    },
    {
      number: "15",
      title: "Life on Land",
      description: "Supporting biodiversity conservation and ecosystem restoration through integrated landscape management.",
      color: "bg-emerald-600"
    },
    {
      number: "11",
      title: "Sustainable Cities",
      description: "Enabling holistic urban planning that integrates green infrastructure and regenerative systems.",
      color: "bg-amber-600"
    },
    {
      number: "9",
      title: "Industry & Infrastructure",
      description: "Facilitating development of resilient, sustainable infrastructure through 3D visualization and planning.",
      color: "bg-orange-600"
    },
    {
      number: "6",
      title: "Clean Water",
      description: "Supporting watershed restoration and integrated water resource management through spatial modeling.",
      color: "bg-blue-600"
    },
    {
      number: "17",
      title: "Partnerships",
      description: "Fostering multi-stakeholder collaboration through our open-source platform and networking capabilities.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Global Impact & SDG Alignment</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            The Spatial Network is designed to advance multiple UN Sustainable Development Goals 
            through our integrated approach to spatial planning and regenerative design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdgs.map((sdg, index) => (
            <SDGItem
              key={index}
              number={sdg.number}
              title={sdg.title}
              description={sdg.description}
              color={sdg.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://sdgs.un.org/goals" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Learn More About UN SDGs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;