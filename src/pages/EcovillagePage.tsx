import React from 'react';
import { Home, Users, Leaf, Globe, LineChart } from 'lucide-react';

const EcovillagePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg"
            alt="Ecovillage Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Virtual Tours for Ecovillages</h1>
            <p className="text-xl mb-8">Help potential residents experience your community's unique culture and sustainable infrastructure before they visit.</p>
            <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark px-8 py-3 rounded-full font-medium transition-colors">
              Book Your Community Tour
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Virtual Tours for Your Ecovillage?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Showcase Living Spaces",
                description: "Give potential residents a realistic view of homes and common areas."
              },
              {
                icon: Users,
                title: "Community Culture",
                description: "Highlight your community's unique lifestyle and shared values."
              },
              {
                icon: LineChart,
                title: "Increase Interest",
                description: "Attract more aligned potential residents with immersive tours."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connect with interested people worldwide without travel."
              },
              {
                icon: Leaf,
                title: "Sustainable Features",
                description: "Showcase your eco-friendly infrastructure and systems."
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
          <h2 className="text-3xl font-bold text-center mb-12">Features for Ecovillages</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
                alt="Ecovillage aerial view"
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Coverage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>360° tours of common spaces and sample homes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Aerial views of the entire community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Interactive map with points of interest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Sustainable infrastructure highlights</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Community Integration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Community member testimonials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Event space and activities showcase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Downloadable community guidelines</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Showcase Your Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join other ecovillages using virtual tours to attract aligned residents and share your vision for sustainable living.
          </p>
          <a href="#contact" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default EcovillagePage;