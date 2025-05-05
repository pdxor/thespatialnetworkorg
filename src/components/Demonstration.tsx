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
            <h3 className="text-xl font-semibold mb-4 text-slate-800">Plan it, Build it, and Share it</h3>
            <p className="text-slate-600 mb-4">
              Our platform allows you to bring your regenerative project to life from funding to the build.
            </p>
            <h4 className="text-lg font-bold mb-4 text-slate-700">Feature Walkthrough</h4>
            <div className="aspect-video bg-slate-200 rounded-lg mb-6 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TNCKi-YbhPc"
                title="Feature Walkthrough"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* Preview of Features Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-slate-800">Preview of Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 1. Projects */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/1-projects.png" alt="Projects" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Projects</h4>
              <p className="text-center">Effortlessly manage and explore all your projects in one place. The Projects view provides a visually engaging dashboard where you can browse, filter, and access detailed information about each project, making organization and navigation seamless.</p>
            </div>
            {/* 2. Project View */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/2-project-view.png" alt="Project View" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Project View</h4>
              <p className="text-center">Dive deep into individual projects with a comprehensive overview that includes progress tracking, team collaboration, and essential project details. Stay on top of updates and milestones to ensure your project's success.</p>
            </div>
            {/* 3. Inventory System */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/3-inventory-system.png" alt="Inventory System" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Inventory System</h4>
              <p className="text-center">Keep track of all your resources with the Inventory System. Easily manage, categorize, and monitor inventory items, ensuring you always know what's available and what needs replenishing.</p>
            </div>
            {/* 4. Inventory View */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/4-inventory-view.png" alt="Inventory View" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Inventory View</h4>
              <p className="text-center">Get a quick snapshot of your inventory status. The Inventory View offers a streamlined interface for reviewing item quantities, recent changes, and fast access to inventory actions.</p>
            </div>
            {/* 5. Map View */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/5-map-view.png" alt="Map View" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Map View</h4>
              <p className="text-center">Visualize your projects and assets on an interactive map. The Map View enables spatial organization, location-based insights, and easy navigation between geographically distributed resources.</p>
            </div>
            {/* 6. Calendar View */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/6-calendar-view.png" alt="Calendar View" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Calendar View</h4>
              <p className="text-center">Plan and schedule with ease using the Calendar View. Organize tasks, deadlines, and events in a clear, intuitive calendar format to keep your team aligned and on track.</p>
            </div>
            {/* 7. Task View */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/7-task-view.png" alt="Task View" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Task View</h4>
              <p className="text-center">Stay productive with the Task View, where you can create, assign, and track tasks across your projects. Visual boards and lists help you prioritize and manage work efficiently.</p>
            </div>
            {/* 8. User Profile */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/8-user-profile.png" alt="User Profile" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">User Profile</h4>
              <p className="text-center">Personalize your experience with the User Profile section. Manage your account details, preferences, and view your activity history, all in one secure and accessible location.</p>
            </div>
            {/* 8. Badge System */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/8-badge-system.png" alt="Badge System" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Badge System</h4>
              <p className="text-center">Motivate and reward users with the Badge System. Earn badges for achievements and milestones, fostering engagement and recognizing contributions within your community.</p>
            </div>
            {/* 9. Badge Quest */}
            <div className="flex flex-col bg-white rounded-xl shadow p-6 gap-4 items-center">
              <img src="/9-badge-quest.png" alt="Badge Quest" className="w-full rounded-lg object-cover mb-4" />
              <h4 className="font-bold text-lg mb-2 text-center">Badge Quest</h4>
              <p className="text-center">Take on challenges and quests to earn exclusive badges. The Badge Quest feature gamifies your experience, encouraging participation and continuous improvement through fun, goal-oriented activities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;