import React from 'react';
import { Tent, Users, Calendar, Globe, LineChart } from 'lucide-react';

const RetreatCenterPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg"
            alt="Retreat Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Virtual Tours for Retreat Centers</h1>
            <p className="text-xl mb-8">Let potential guests experience the serenity and amenities of your retreat center before booking.</p>
            <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark px-8 py-3 rounded-full font-medium transition-colors">
              Book Your Center Tour
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Virtual Tours for Your Retreat Center?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Tent,
                title: "Showcase Facilities",
                description: "Give guests a complete view of accommodations and amenities."
              },
              {
                icon: Users,
                title: "Group Bookings",
                description: "Help event planners visualize their retreat experience."
              },
              {
                icon: Calendar,
                title: "Increase Bookings",
                description: "Convert more inquiries with immersive virtual experiences."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Attract international guests with detailed virtual tours."
              },
              {
                icon: LineChart,
                title: "Marketing Edge",
                description: "Stand out in the retreat industry with professional tours."
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
          <h2 className="text-3xl font-bold text-center mb-12">Features for Retreat Centers</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
                alt="Retreat center aerial view"
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Complete Center Coverage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>360° tours of all accommodation types</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Aerial views of grounds and facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Interactive map with amenity locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Seasonal beauty documentation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Event Planning Tools</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Event space measurements and layouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Capacity information overlays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                    <span>Downloadable floor plans</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Showcase Your Retreat Center?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join other retreat centers using virtual tours to increase bookings and create excitement for your venue.
          </p>
          <a href="#contact" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default RetreatCenterPage;