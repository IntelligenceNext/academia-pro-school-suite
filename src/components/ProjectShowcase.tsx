
import { ExternalLink, Github, Smartphone, Globe, Palette, Users } from "lucide-react";

export const ProjectShowcase = () => {
  const projects = [
    {
      id: "sms001",
      category: "Applications",
      title: "AcademiaPro: School Management System",
      description: "Comprehensive SMS for BrightSparks International School with student management, attendance tracking, fee management, and parent portals.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "React Native"],
      stats: {
        students: "500+",
        efficiency: "30%",
        engagement: "40%"
      },
      icon: <Smartphone className="text-blue-400" size={24} />,
      anchor: "applications"
    },
    {
      id: "web001",
      category: "Websites",
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with payment integration, inventory management, and responsive design.",
      image: "/placeholder.svg",
      tags: ["React", "Stripe", "Tailwind", "PostgreSQL"],
      stats: {
        conversion: "25%",
        performance: "98%",
        users: "1000+"
      },
      icon: <Globe className="text-green-400" size={24} />,
      anchor: "websites"
    },
    {
      id: "design001",
      category: "Graphic Designs",
      title: "Brand Identity Package",
      description: "Complete brand identity design including logo, business cards, and marketing materials for tech startup.",
      image: "/placeholder.svg",
      tags: ["Adobe Illustrator", "Photoshop", "Figma"],
      stats: {
        satisfaction: "100%",
        revisions: "2",
        timeline: "2 weeks"
      },
      icon: <Palette className="text-purple-400" size={24} />,
      anchor: "designs"
    },
    {
      id: "portfolio001",
      category: "Client Portfolios",
      title: "Professional Portfolio Website",
      description: "Custom portfolio website for creative professional with dynamic galleries and contact forms.",
      image: "/placeholder.svg",
      tags: ["React", "Framer Motion", "Tailwind"],
      stats: {
        inquiries: "150%",
        bounce: "15%",
        speed: "95%"
      },
      icon: <Users className="text-pink-400" size={24} />,
      anchor: "portfolios"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore a selection of my best work across different domains and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.anchor}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {project.icon}
                  <span className="text-purple-400 font-semibold">{project.category}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Github size={16} className="text-white" />
                  </button>
                  <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <ExternalLink size={16} className="text-white" />
                  </button>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg opacity-70"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-white/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-white">{value}</div>
                    <div className="text-xs text-white/60 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
