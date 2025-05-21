import React from 'react';
import { TreePine, Users, Heart, Globe, LineChart } from 'lucide-react';

const ConservationPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3025432/pexels-photo-3025432.jpeg"
            alt="Conservation Area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Virtual Tours for Conservation Projects</h1>
            <p className="text-xl mb-8">Share your conservation efforts and inspire support through immersive virtual experiences.</p>
            <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark px-8 py-3 rounded-full font-medium transition-colors">
              Book Your Project Tour
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Virtual Tours for Conservation?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "Showcase Impact",
                description: "Document and share your conservation achievements."
              },
              {
                icon: Users,
                title: "Engage Supporters",
                description: "Connect donors with your project's mission and progress."
              },
              {
                icon: Heart,
                title: "Increase Support",
                description: "Inspire more donations with immersive experiences."
              },
              {
                icon: Globe,
                title: "Global Awareness",
                description: "Share your conservation story with the world."
              },
              {
                icon: LineChart,
                title: "Track Progress",
                description: "Document changes and improvements over time."
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
          <h2 className="text-3xl font-bold text-center mb-12">Features for Conservation Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
                alt="Conservation area aerial view"
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Documentation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>High-resolution aerial mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>360° ground-level tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Interactive conservation hotspots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Before/after comparisons</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Educational Tools</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Species and habitat information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Conservation method explanations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Impact metrics and data visualization</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Share Your Conservation Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join other conservation projects using virtual tours to increase awareness and support for their vital work.
          </p>
          <a href="#contact" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ConservationPage;