
import { ExternalLink, Github, Smartphone, Globe, Palette, Users, Monitor, Layers, Image } from "lucide-react";
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
        title: "Corporate Building Signage",
        description: "Professional corporate signage design for Cybernetique technology company building facade.",
        image: "/lovable-uploads/3baa163a-34c4-409a-afe5-49687df3d065.png",
        tags: ["Corporate Identity", "Signage Design", "Brand Application"],
        stats: {
          visibility: "High Impact",
          branding: "Professional",
          implementation: "Success"
        },
        icon: <Palette className="text-blue-400" size={24} />
      },
      {
        id: "design002",
        title: "Political Campaign Poster",
        description: "Eye-catching political campaign poster design with Telugu typography and professional presentation.",
        image: "/lovable-uploads/2d9e6051-54fb-4ab8-a52e-ea67a9f47633.png",
        tags: ["Political Design", "Typography", "Campaign Materials"],
        stats: {
          engagement: "High",
          reach: "Wide",
          impact: "Strong"
        },
        icon: <Palette className="text-red-400" size={24} />
      },
      {
        id: "design003",
        title: "Birthday Celebration Cards",
        description: "Creative birthday celebration card designs with vibrant colors and personalized layouts.",
        image: "/lovable-uploads/655f540d-f077-44cd-938f-7559c52c585f.png",
        tags: ["Event Design", "Typography", "Personal Branding"],
        stats: {
          satisfaction: "100%",
          personalization: "Custom",
          style: "Modern"
        },
        icon: <Palette className="text-orange-400" size={24} />
      },
      {
        id: "design004",
        title: "Traditional Wedding Invitation",
        description: "Elegant wedding invitation design featuring traditional Indian motifs and cultural elements.",
        image: "/lovable-uploads/f52dd303-875e-474e-8c80-bbf4f36c99eb.png",
        tags: ["Wedding Design", "Traditional Art", "Cultural Design"],
        stats: {
          elegance: "Premium",
          tradition: "Authentic",
          reception: "Excellent"
        },
        icon: <Palette className="text-pink-400" size={24} />
      },
      {
        id: "design005",
        title: "Traditional Wedding Card",
        description: "Ornate traditional wedding invitation with Sanskrit text and classical design elements.",
        image: "/lovable-uploads/02b79e31-762a-4ba7-af92-0b275a7f2291.png",
        tags: ["Traditional Design", "Sanskrit Typography", "Wedding Cards"],
        stats: {
          authenticity: "Traditional",
          craftsmanship: "Detailed",
          appeal: "Cultural"
        },
        icon: <Palette className="text-yellow-400" size={24} />
      },
      {
        id: "design006",
        title: "Children's Birthday Invitation",
        description: "Playful and colorful first birthday invitation design with jungle theme and cute animals.",
        image: "/lovable-uploads/28bc1ad2-200e-45fc-80df-68f7a8f802d7.png",
        tags: ["Children's Design", "Birthday Cards", "Illustration"],
        stats: {
          creativity: "High",
          appeal: "Child-Friendly",
          theme: "Jungle"
        },
        icon: <Palette className="text-green-400" size={24} />
      },
      {
        id: "design007",
        title: "Bilingual Birthday Card",
        description: "Vibrant purple-themed birthday invitation with Telugu text and modern design elements.",
        image: "/lovable-uploads/3b0dd0df-5e8e-4844-9004-561bae59461d.png",
        tags: ["Bilingual Design", "Modern Typography", "Event Cards"],
        stats: {
          vibrancy: "High",
          readability: "Clear",
          design: "Modern"
        },
        icon: <Palette className="text-purple-400" size={24} />
      },
      {
        id: "design008",
        title: "Creative Calendar Design",
        description: "Artistic calendar design featuring colorful elephant illustration with decorative elements.",
        image: "/lovable-uploads/fbbd64e0-4d24-47d6-970a-5686d45e8a55.png",
        tags: ["Calendar Design", "Illustration", "Corporate Branding"],
        stats: {
          creativity: "Artistic",
          functionality: "Practical",
          branding: "Corporate"
        },
        icon: <Palette className="text-cyan-400" size={24} />
      },
      {
        id: "design009",
        title: "Summer Camp Poster",
        description: "Educational summer camp promotional poster for English learning activities with vibrant design.",
        image: "/lovable-uploads/2f2afc85-2a8e-4c44-87c5-645fddf640de.png",
        tags: ["Educational Design", "Poster Design", "Promotional Material"],
        stats: {
          engagement: "High",
          clarity: "Clear",
          appeal: "Educational"
        },
        icon: <Palette className="text-yellow-400" size={24} />
      },
      {
        id: "design010",
        title: "Republic Day Tribute",
        description: "Patriotic Republic Day design featuring Indian flag colors and professional portrait layout.",
        image: "/lovable-uploads/85b220c5-da1d-443d-bd58-6993a45816a5.png",
        tags: ["Patriotic Design", "Portrait Layout", "National Events"],
        stats: {
          patriotism: "Strong",
          professionalism: "High",
          impact: "Meaningful"
        },
        icon: <Palette className="text-orange-400" size={24} />
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
    ],
    logos: [
      {
        id: "logo001",
        title: "TechFlow Corporate Logo",
        description: "Modern minimalist logo design for technology company with versatile brand applications.",
        image: "/placeholder.svg",
        tags: ["Adobe Illustrator", "Brand Identity", "Vector Design"],
        stats: {
          satisfaction: "100%",
          variants: "8",
          usage: "Multi-platform"
        },
        icon: <Image className="text-blue-400" size={24} />
      },
      {
        id: "logo002",
        title: "GreenEarth Environmental Logo",
        description: "Eco-friendly logo design reflecting sustainability and environmental consciousness.",
        image: "/placeholder.svg",
        tags: ["Adobe Illustrator", "Sustainable Design", "Brand Strategy"],
        stats: {
          recognition: "Award",
          impact: "Positive",
          adoption: "100%"
        },
        icon: <Image className="text-green-400" size={24} />
      },
      {
        id: "logo003",
        title: "FoodieHub Restaurant Chain",
        description: "Appetizing logo design for restaurant chain with scalable brand system.",
        image: "/placeholder.svg",
        tags: ["Adobe Illustrator", "Food & Beverage", "Scalable Design"],
        stats: {
          locations: "15+",
          brand: "Consistent",
          appeal: "High"
        },
        icon: <Image className="text-orange-400" size={24} />
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
    },
    { 
      value: "logos", 
      label: "Logos", 
      icon: <Image size={18} className="text-cyan-400" />,
      anchor: "logos"
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

      <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
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

  const renderGalleryItem = (project: any, index: number) => (
    <div
      key={project.id}
      className={`group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-fade-in hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-sm mb-1">{project.title}</h3>
        <p className="text-white/80 text-xs leading-relaxed">{project.description}</p>
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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-white/5 backdrop-blur-sm border border-white/10 mb-8 h-auto p-2">
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
              <div id={tab.anchor} className={`grid gap-6 ${tab.value === 'graphics' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {projectCategories[tab.value as keyof typeof projectCategories].map((project, index) => 
                  tab.value === 'graphics' ? renderGalleryItem(project, index) : renderProjectCard(project, index)
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
