import React from 'react';
import { Scaling as Seedling, Sprout, Users, LineChart, Leaf } from 'lucide-react';

const RegenerativeFarmsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
            alt="Regenerative Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Virtual Tours for Regenerative Farms</h1>
            <p className="text-xl mb-8">Showcase your sustainable farming practices, educate visitors, and attract supporters with immersive virtual experiences.</p>
            <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark px-8 py-3 rounded-full font-medium transition-colors">
              Book Your Farm Tour
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Virtual Tours for Your Farm?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Seedling,
                title: "Showcase Farming Practices",
                description: "Let visitors explore your regenerative techniques, from soil management to crop diversity."
              },
              {
                icon: Users,
                title: "Attract CSA Members",
                description: "Help potential CSA members connect with your farm before they commit."
              },
              {
                icon: LineChart,
                title: "Increase Visibility",
                description: "Stand out in the sustainable agriculture community with professional virtual tours."
              },
              {
                icon: Sprout,
                title: "Educational Tool",
                description: "Create immersive learning experiences for students and aspiring farmers."
              },
              {
                icon: Leaf,
                title: "Document Progress",
                description: "Track and showcase the evolution of your regenerative practices over time."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features Tailored for Farms</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
                alt="Drone view of farm"
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Farm Coverage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Aerial drone mapping of entire property</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>360° ground-level tours of key areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Interactive hotspots highlighting farming practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Seasonal progression documentation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Educational Integration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Embedded information about farming methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Video integration capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Downloadable resources and fact sheets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Showcase Your Farm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join other regenerative farmers using virtual tours to increase visibility, attract supporters, and share knowledge.
          </p>
          <a href="#contact" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default RegenerativeFarmsPage;