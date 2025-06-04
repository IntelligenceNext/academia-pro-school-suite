
import { ExternalLink, Github, Smartphone, Globe, Palette, Users, Monitor, Layers } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProjectShowcase = () => {
  const projectCategories = {
    applications: [
      {
        id: "sms001",
        title: "AcademiaPro: School Management System",
        description: "Comprehensive SMS for BrightSparks International School with student management, attendance tracking, fee management, and parent portals.",
        image: "/placeholder.svg",
        tags: ["React", "Node.js", "MongoDB", "React Native"],
        stats: {
          students: "500+",
          efficiency: "30%",
          engagement: "40%"
        },
        icon: <Smartphone className="text-blue-400" size={24} />
      },
      {
        id: "inventory001",
        title: "InventoryFlow: Warehouse Management",
        description: "Real-time inventory tracking system with barcode scanning, automated reordering, and comprehensive analytics dashboard.",
        image: "/placeholder.svg",
        tags: ["React", "Express", "PostgreSQL", "Socket.io"],
        stats: {
          accuracy: "99.8%",
          efficiency: "45%",
          users: "200+"
        },
        icon: <Smartphone className="text-green-400" size={24} />
      },
      {
        id: "pos001",
        title: "RetailPro: Point of Sale System",
        description: "Modern POS system with payment processing, receipt printing, inventory management, and sales analytics.",
        image: "/placeholder.svg",
        tags: ["React Native", "Firebase", "Stripe", "Node.js"],
        stats: {
          transactions: "10K+",
          uptime: "99.9%",
          stores: "50+"
        },
        icon: <Smartphone className="text-purple-400" size={24} />
      }
    ],
    websites: [
      {
        id: "web001",
        title: "E-Commerce Platform",
        description: "Modern e-commerce solution with payment integration, inventory management, and responsive design.",
        image: "/placeholder.svg",
        tags: ["React", "Stripe", "Tailwind", "PostgreSQL"],
        stats: {
          conversion: "25%",
          performance: "98%",
          users: "1000+"
        },
        icon: <Globe className="text-green-400" size={24} />
      },
      {
        id: "web002",
        title: "Corporate Website & CMS",
        description: "Professional corporate website with custom CMS, blog functionality, and SEO optimization.",
        image: "/placeholder.svg",
        tags: ["React", "Strapi", "Tailwind", "AWS"],
        stats: {
          traffic: "200%",
          seo: "95%",
          speed: "98%"
        },
        icon: <Globe className="text-blue-400" size={24} />
      },
      {
        id: "web003",
        title: "Restaurant Booking Platform",
        description: "Online reservation system with table management, payment processing, and customer reviews.",
        image: "/placeholder.svg",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        stats: {
          bookings: "5K+",
          satisfaction: "4.8/5",
          restaurants: "25+"
        },
        icon: <Globe className="text-orange-400" size={24} />
      }
    ],
    graphics: [
      {
        id: "design001",
        title: "TechStart Brand Identity",
        description: "Complete brand identity design including logo, business cards, and marketing materials for tech startup.",
        image: "/placeholder.svg",
        tags: ["Adobe Illustrator", "Photoshop", "Figma"],
        stats: {
          satisfaction: "100%",
          revisions: "2",
          timeline: "2 weeks"
        },
        icon: <Palette className="text-purple-400" size={24} />
      },
      {
        id: "design002",
        title: "Event Poster Series",
        description: "Creative poster designs for annual tech conference including print and digital variations.",
        image: "/placeholder.svg",
        tags: ["Adobe Illustrator", "InDesign", "After Effects"],
        stats: {
          engagement: "300%",
          shares: "2K+",
          reach: "50K+"
        },
        icon: <Palette className="text-pink-400" size={24} />
      },
      {
        id: "design003",
        title: "Product Packaging Design",
        description: "Modern packaging design for eco-friendly product line with sustainable materials consideration.",
        image: "/placeholder.svg",
        tags: ["Adobe Illustrator", "Photoshop", "3D Mockup"],
        stats: {
          sales: "40%",
          recognition: "Award",
          feedback: "4.9/5"
        },
        icon: <Palette className="text-green-400" size={24} />
      }
    ],
    uiux: [
      {
        id: "ui001",
        title: "Banking App UI/UX Redesign",
        description: "Complete redesign of mobile banking application focusing on user experience and accessibility.",
        image: "/placeholder.svg",
        tags: ["Figma", "Principle", "User Research", "Prototyping"],
        stats: {
          usability: "85%",
          satisfaction: "4.7/5",
          completion: "90%"
        },
        icon: <Monitor className="text-blue-400" size={24} />
      },
      {
        id: "ui002",
        title: "E-learning Platform Interface",
        description: "Intuitive interface design for online learning platform with focus on student engagement.",
        image: "/placeholder.svg",
        tags: ["Figma", "Adobe XD", "User Testing", "Wireframing"],
        stats: {
          engagement: "60%",
          retention: "80%",
          completion: "75%"
        },
        icon: <Monitor className="text-purple-400" size={24} />
      },
      {
        id: "ui003",
        title: "Healthcare Dashboard Design",
        description: "Medical dashboard interface for healthcare professionals with data visualization focus.",
        image: "/placeholder.svg",
        tags: ["Figma", "D3.js", "User Research", "Accessibility"],
        stats: {
          efficiency: "45%",
          errors: "70%",
          satisfaction: "4.8/5"
        },
        icon: <Monitor className="text-green-400" size={24} />
      }
    ],
    portfolios: [
      {
        id: "portfolio001",
        title: "Creative Agency Portfolio",
        description: "Custom portfolio website for creative professional with dynamic galleries and contact forms.",
        image: "/placeholder.svg",
        tags: ["React", "Framer Motion", "Tailwind"],
        stats: {
          inquiries: "150%",
          bounce: "15%",
          speed: "95%"
        },
        icon: <Users className="text-pink-400" size={24} />
      },
      {
        id: "portfolio002",
        title: "Photographer Showcase",
        description: "Elegant portfolio website for professional photographer with image optimization and galleries.",
        image: "/placeholder.svg",
        tags: ["React", "Next.js", "Cloudinary", "Tailwind"],
        stats: {
          bookings: "200%",
          loading: "2s",
          clients: "50+"
        },
        icon: <Users className="text-blue-400" size={24} />
      },
      {
        id: "portfolio003",
        title: "Architect Portfolio Platform",
        description: "Professional portfolio for architecture firm showcasing projects with 3D visualizations.",
        image: "/placeholder.svg",
        tags: ["React", "Three.js", "Tailwind", "CMS"],
        stats: {
          projects: "100+",
          visitors: "5K+",
          leads: "25+"
        },
        icon: <Users className="text-green-400" size={24} />
      }
    ]
  };

  const tabConfig = [
    { 
      value: "applications", 
      label: "Applications", 
      icon: <Smartphone size={18} className="text-blue-400" />,
      anchor: "applications"
    },
    { 
      value: "websites", 
      label: "Websites", 
      icon: <Globe size={18} className="text-green-400" />,
      anchor: "websites"
    },
    { 
      value: "graphics", 
      label: "Graphic Designs", 
      icon: <Palette size={18} className="text-purple-400" />,
      anchor: "designs"
    },
    { 
      value: "uiux", 
      label: "UI/UX Designs", 
      icon: <Monitor size={18} className="text-pink-400" />,
      anchor: "uiux"
    },
    { 
      value: "portfolios", 
      label: "Client Portfolios", 
      icon: <Users size={18} className="text-orange-400" />,
      anchor: "portfolios"
    }
  ];

  const renderProjectCard = (project: any, index: number) => (
    <div
      key={project.id}
      className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {project.icon}
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
        {project.tags.map((tag: string) => (
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
            <div className="text-lg font-bold text-white">{value as string}</div>
            <div className="text-xs text-white/60 capitalize">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore a selection of my best work across different domains and technologies.
          </p>
        </div>

        <Tabs defaultValue="applications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/5 backdrop-blur-sm border border-white/10 mb-8 h-auto p-2">
            {tabConfig.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 py-3 px-4 data-[state=active]:bg-purple-500/20 data-[state=active]:text-white text-white/70 hover:text-white transition-all duration-300"
              >
                {tab.icon}
                <span className="text-xs md:text-sm font-medium">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabConfig.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-8">
              <div id={tab.anchor} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCategories[tab.value as keyof typeof projectCategories].map((project, index) => 
                  renderProjectCard(project, index)
                )}
              </div>
              
              <div className="text-center mt-12">
                <a
                  href={`#${tab.anchor}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Layers size={20} />
                  <span>View All {tab.label}</span>
                </a>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
