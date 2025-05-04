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
      </div>
    </div>
  );
};

const Demonstration: React.FC = () => {
  const projects = [
    {
      title: "EcoTerra: Regenerative Incubator in Hudson Valley, NY",
      description: "EcoTerra is a living lab and regenerative incubator on 200 acres in the Catskills, prototyping circular living systems, modular dome housing, agroforestry, and AI-assisted planning tools. The site serves as a testing ground for technologies that merge ecology, community resilience, and immersive spatial storytelling.",
      image: "/ecoterra.png",
      tags: ["Regenerative Design", "Agroforestry", "Tech Incubator"]
    },
    {
      title: "OYA: Watershed Regeneration in the Dominican Republic",
      description: "Located in the lush mountains of the DR, the OYA project supports reforestation, food sovereignty, and watershed healing by blending indigenous knowledge with open-source geospatial mapping. Working alongside local stewards, we're creating a replicable model of climate adaptation and ecological literacy.",
      image: "/oya-virtual-tour.png",
      tags: ["Reforestation", "Watershed Resilience", "Climate Adaptation"]
    }
  ];
  

  return (
    <section id="demonstration" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Video Section */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vm1CO6V7SnY"
              title="Hero Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
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
            <h3 className="text-xl font-semibold mb-4 text-slate-800">Integrate with your existing tools</h3>
            <p className="text-slate-600 mb-4">
              Our platform allows you to bring all of your spatial and immersive tools into a single platform.
           Here is an example of a virtual tour we created for a project in the Dominican Republic.
            </p>
            <div className="aspect-video bg-slate-200 rounded-lg mb-6 overflow-hidden">
              <iframe
                src="https://thespatialnetwork.com/externalmedia/our-virtual-tour"
                title="DR Virtual Tour"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', width: '100%' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* Preview of Features Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-slate-800">Preview of Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Video 2 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/HD-ew8U1rSg" title="New Platform Stages Upload Photos & Map Your Stage!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">New Platform Stages Upload Photos & Map Your Stage!</p>
            </div>
            {/* Video 3 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/g5JwZ7jYM4U" title="Permaculture Project Designing Sustainable Land Use for Business" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Permaculture Project Designing Sustainable Land Use for Business</p>
            </div>
            {/* Video 4 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/bpUdb9oMc8w" title="Sustainable Land Project AI Assistant for Community Support" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Sustainable Land Project AI Assistant for Community Support</p>
            </div>
            {/* Video 5 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/BDpx5bj_D0Y" title="3D Maps Convert Spatial Mesh & Build Virtual Worlds!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">3D Maps Convert Spatial Mesh & Build Virtual Worlds!</p>
            </div>
            {/* Video 6b */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/XJxz11oYYwU" title="Spatial Network Building Your Virtual World's Brain" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Spatial Network Building Your Virtual World's Brain</p>
            </div>
            {/* Video 7 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/yK-5evYIFJ4" title="Investor Pitch Deck Community Engagement Secrets" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Investor Pitch Deck Community Engagement Secrets</p>
            </div>
            {/* Video 8 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/w74T-lh0saI" title="Task Management Assign, Track & Reward with Badges!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Task Management Assign, Track & Reward with Badges!</p>
            </div>
            {/* Video 9 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/trDPVWkLcv4" title="Unlock Badges Squid & Badgito Profile Showcase!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Unlock Badges Squid & Badgito Profile Showcase!</p>
            </div>
            {/* Video 10 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/aQpz3BsCfi0" title="Launchpad Projects Showcase & Fund Your Ideas!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Launchpad Projects Showcase & Fund Your Ideas!</p>
            </div>
            {/* Video 11 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/CUr-V1MJT1s" title="Google Maps SEO Add Multiple Locations FAST" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Google Maps SEO Add Multiple Locations FAST</p>
            </div>
            {/* Video 13 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/BGfTT8v3_Sw" title="YouTube Badges Level Up Your Channel Engagement!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">YouTube Badges Level Up Your Channel Engagement!</p>
            </div>
            {/* Video 14 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/RLyERpZqSYQ" title="Community Driven Platform Shaping the Future Together!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Community Driven Platform Shaping the Future Together!</p>
            </div>
            {/* Video 15 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/yDbPuN-Gd9E" title="Add to Google Maps Quick & Easy Guide 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Add to Google Maps Quick & Easy Guide 2024</p>
            </div>
            {/* Video 16 */}
            <div>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/pB7qUhC8AlE" title="Backhoe Rental Find Quality Deals & Estimate Price" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="mt-2 font-medium">Backhoe Rental Find Quality Deals & Estimate Price</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;