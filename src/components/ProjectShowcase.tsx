import { ExternalLink, Github, Smartphone, Globe, Palette, Users, Monitor, Layers, Image } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { LogoCarousel } from "./LogoCarousel";

export const ProjectShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLogoIndex, setSelectedLogoIndex] = useState<number>(0);
  const [isLogoCarouselOpen, setIsLogoCarouselOpen] = useState(false);

  const handleImageClick = (image: { src: string; alt: string; title: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleLogoClick = (index: number) => {
    setSelectedLogoIndex(index);
    setIsLogoCarouselOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const closeLogoCarousel = () => {
    setIsLogoCarouselOpen(false);
  };

  const projectCategories = {
    applications: [
      {
        id: "hrms001",
        title: "HRMS Executive Dashboard",
        description: "Comprehensive automated HRMS solution streamlining talent acquisition, employee management, and HR workflows with real-time analytics and predictive insights.",
        image: "/lovable-uploads/133a6388-907d-4684-806f-defde2834872.png",
        tags: ["React", "Node.js", "MongoDB", "TypeScript", "Analytics"],
        stats: {
          modules: "12+",
          efficiency: "65%",
          users: "500+"
        },
        features: "Talent Acquisition • Employee Hub • Workflow Automation • Analytics Dashboard",
        icon: <Smartphone className="text-purple-400" size={24} />,
        ctaText: "Explore HRMS Suite"
      },
      {
        id: "edumanage001",
        title: "EduManage: College ERP System",
        description: "All-in-one automated college management system handling admissions, academics, finance, and administrative operations with comprehensive reporting.",
        image: "/lovable-uploads/36fab075-375a-4c9f-b7ea-c3ce15b8cf31.png",
        tags: ["React", "Express", "PostgreSQL", "Socket.io", "ERP"],
        stats: {
          students: "2847+",
          modules: "15+",
          efficiency: "50%"
        },
        features: "Student Management • Academic Records • Communications • Events Calendar",
        icon: <Smartphone className="text-blue-400" size={24} />,
        ctaText: "View EduManage Details"
      },
      {
        id: "myschool001",
        title: "MySchool: Multi-School Management",
        description: "Advanced school management system supporting multiple institutions with centralized control, academic management, and parent-teacher collaboration.",
        image: "/lovable-uploads/826ca328-fdac-41d7-b5b7-3d1babb7a543.png",
        tags: ["React", "Node.js", "MySQL", "Real-time", "Multi-tenant"],
        stats: {
          schools: "Multiple",
          students: "Active",
          sessions: "Dynamic"
        },
        features: "Multi-School Support • Student Lifecycle • Academic Management • Parent Portal",
        icon: <Smartphone className="text-green-400" size={24} />,
        ctaText: "Discover MySchool"
      }
    ],
    websites: [
      {
        id: "web001",
        title: "Workist For IT",
        description: "Modern corporate recruitment platform connecting top talent across all industries with seamless job search and hiring solutions.",
        image: "/lovable-uploads/211a5083-fe5c-4a16-a8ae-0e731d056b2f.png",
        tags: ["Next.js", "Supabase", "Tailwind", "React"],
        stats: {
          traffic: "High",
          performance: "Optimized",
          users: "Active"
        },
        features: "Job Portal • Talent Matching • HRMS Integration • Business Solutions",
        icon: <Globe className="text-blue-400" size={24} />,
        ctaText: "Visit Workist",
        liveUrl: "https://www.workistforit.com"
      },
      {
        id: "web002",
        title: "Endeavour Sciences",
        description: "Corporate website for IT services company featuring comprehensive service portfolio and engineering impact solutions.",
        image: "/lovable-uploads/a3e5dba0-a3ff-4311-b0aa-a568844967a0.png",
        tags: ["React", "Node.js", "Express", "Supabase"],
        stats: {
          services: "Multiple",
          impact: "Engineering",
          reach: "Global"
        },
        features: "Service Portfolio • Corporate Info • HRMS Portal • Contact Solutions",
        icon: <Globe className="text-orange-400" size={24} />,
        ctaText: "Discover Endeavour",
        liveUrl: "https://www.endeavorsciences.in"
      },
      {
        id: "web003",
        title: "Cybernetique",
        description: "Digital innovation company website showcasing fastest-growing global services with trusted expertise and innovative solutions.",
        image: "/lovable-uploads/c1a9698e-ce4d-40e5-9eb6-0f3a439586a5.png",
        tags: ["React", "Node.js", "Express", "Supabase"],
        stats: {
          growth: "Fastest",
          ranking: "Top 100",
          trust: "Global"
        },
        features: "Digital Solutions • Innovation Services • Brand Portfolio • Global Reach",
        icon: <Globe className="text-purple-400" size={24} />,
        ctaText: "Explore Services",
        liveUrl: "https://www.cybernetiques.com"
      },
      {
        id: "web004",
        title: "Baptist School Sedam",
        description: "Educational institution website empowering young minds with Baptist values, promoting curiosity, integrity, and lifelong leadership.",
        image: "/lovable-uploads/064d2af1-7836-4f9a-a4ba-e41308279672.png",
        tags: ["WordPress", "PHP", "MySQL", "Education"],
        stats: {
          programs: "Academic",
          values: "Baptist",
          focus: "Leadership"
        },
        features: "Academic Programs • Admission Portal • Student Login • School Information",
        icon: <Globe className="text-red-400" size={24} />,
        ctaText: "Visit School Site",
        liveUrl: "https://baptistschoolsedam.com"
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
      },
      {
        id: "design011",
        title: "Freelancer Platform UI",
        description: "Modern freelancer platform interface design with vibrant purple theme and user-friendly layout.",
        image: "/lovable-uploads/d686d242-9634-4fa3-abe5-14edcf766102.png",
        tags: ["UI Design", "Platform Design", "Freelancer"],
        stats: {
          usability: "High",
          design: "Modern",
          appeal: "Professional"
        },
        icon: <Palette className="text-purple-400" size={24} />
      },
      {
        id: "design012",
        title: "Studio Play Interface",
        description: "Creative studio interface design with 3D elements and modern gradient backgrounds.",
        image: "/lovable-uploads/6157c98b-0170-407a-bbee-46cc3d9825c6.png",
        tags: ["Studio Design", "3D Interface", "Creative"],
        stats: {
          creativity: "High",
          innovation: "Modern",
          visual: "Stunning"
        },
        icon: <Palette className="text-blue-400" size={24} />
      },
      {
        id: "design013",
        title: "Studio Play Variant",
        description: "Alternative version of studio interface with enhanced visual elements and improved user experience.",
        image: "/lovable-uploads/c71738f8-75b2-4ac6-ae27-97221859aa2d.png",
        tags: ["UI Variants", "Studio Design", "UX Enhancement"],
        stats: {
          improvement: "Enhanced",
          experience: "Better",
          design: "Refined"
        },
        icon: <Palette className="text-blue-400" size={24} />
      },
      {
        id: "design014",
        title: "NICOLAI AI Platform",
        description: "Futuristic AI platform design with ethereal visuals and cutting-edge interface elements.",
        image: "/lovable-uploads/3de5e389-a57d-4b8b-979f-3d49605fb768.png",
        tags: ["AI Design", "Futuristic", "Platform"],
        stats: {
          innovation: "Cutting-edge",
          visual: "Futuristic",
          technology: "Advanced"
        },
        icon: <Palette className="text-cyan-400" size={24} />
      },
      {
        id: "design015",
        title: "Design Your Future",
        description: "Inspirational design poster showcasing mobile app development with 3D character illustration.",
        image: "/lovable-uploads/434361ec-bc6e-4ddd-b902-fa2ee15dbde1.png",
        tags: ["Inspirational", "App Development", "3D Character"],
        stats: {
          inspiration: "High",
          creativity: "Excellent",
          message: "Motivational"
        },
        icon: <Palette className="text-green-400" size={24} />
      },
      {
        id: "design016",
        title: "Believe Designs Brand",
        description: "Professional design agency branding with space theme and creative tool illustrations.",
        image: "/lovable-uploads/054a52f2-b51a-46e4-81f0-0616a479c358.png",
        tags: ["Agency Branding", "Space Theme", "Creative Tools"],
        stats: {
          branding: "Professional",
          creativity: "Space-age",
          impact: "Strong"
        },
        icon: <Palette className="text-purple-400" size={24} />
      },
      {
        id: "design017",
        title: "Maldives Travel Package",
        description: "Tropical Maldives travel package design with beautiful ocean views and vacation elements.",
        image: "/lovable-uploads/f4ac204d-bbb4-4f81-a072-22ddfab9f542.png",
        tags: ["Travel Design", "Tourism", "Package Design"],
        stats: {
          appeal: "Tropical",
          booking: "Attractive",
          design: "Vacation"
        },
        icon: <Palette className="text-blue-400" size={24} />
      },
      {
        id: "design018",
        title: "Maldives Love Package",
        description: "Romantic Maldives vacation package design featuring overwater bungalows and couple activities.",
        image: "/lovable-uploads/4609dc04-e9d4-4db1-afcf-0af559e3e4a8.png",
        tags: ["Romantic Travel", "Couple Package", "Luxury"],
        stats: {
          romance: "High",
          luxury: "Premium",
          appeal: "Couple"
        },
        icon: <Palette className="text-pink-400" size={24} />
      },
      {
        id: "design019",
        title: "Desert Safari Adventure",
        description: "Exciting desert safari promotional design with camel riding and adventure elements.",
        image: "/lovable-uploads/474052f2-1112-4073-86d0-37a2d7828912.png",
        tags: ["Adventure Travel", "Desert Safari", "Tourism"],
        stats: {
          adventure: "Thrilling",
          experience: "Unique",
          appeal: "Adventure"
        },
        icon: <Palette className="text-orange-400" size={24} />
      },
      {
        id: "design020",
        title: "Sri Lanka Journey",
        description: "Comprehensive Sri Lanka travel package design showcasing various destinations and experiences.",
        image: "/lovable-uploads/119d8b5d-36d6-4c3b-bc2a-3682fec39667.png",
        tags: ["Destination Travel", "Sri Lanka", "Travel Package"],
        stats: {
          destinations: "Multiple",
          experience: "Comprehensive",
          appeal: "Cultural"
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
    ],
    logos: [
      {
        id: "logo001",
        title: "NABA New Achievers",
        description: "Professional circular logo design for educational institution featuring portrait design and circular text layout.",
        image: "/lovable-uploads/b924b055-afa9-403e-b951-6c8632bfa33c.png",
        client: "NABA Organization",
        industry: "Education",
        year: "2024",
        icon: <Image className="text-blue-400" size={24} />
      },
      {
        id: "logo002",
        title: "Softtouch",
        description: "Modern tech-focused logo with orange and blue gradient text design for software company.",
        image: "/lovable-uploads/7aead4a4-8606-457f-8846-bf43de938c23.png",
        client: "Softtouch Technologies",
        industry: "Technology",
        year: "2024",
        icon: <Image className="text-orange-400" size={24} />
      },
      {
        id: "logo003",
        title: "TEKpages",
        description: "Dynamic corporate logo featuring purple and blue color scheme with forward-moving design elements.",
        image: "/lovable-uploads/721dd443-df27-4d1b-86d1-65141216678a.png",
        client: "TEKpages Digital",
        industry: "Digital Services",
        year: "2024",
        icon: <Image className="text-purple-400" size={24} />
      },
      {
        id: "logo004",
        title: "MKG - My Knowledge Group",
        description: "Colorful educational logo with vibrant typography representing knowledge and growth.",
        image: "/lovable-uploads/6d67475d-cebb-41c1-a1cc-c4526195ccae.png",
        client: "My Knowledge Group",
        industry: "Education",
        year: "2024",
        icon: <Image className="text-green-400" size={24} />
      },
      {
        id: "logo005",
        title: "CBit Technologies",
        description: "Corporate technology logo with sophisticated circular pattern and professional branding.",
        image: "/lovable-uploads/ada85bcd-6dbe-405b-a1ed-6d3c844e6553.png",
        client: "CBit Technologies",
        industry: "Technology",
        year: "2024",
        icon: <Image className="text-cyan-400" size={24} />
      },
      {
        id: "logo006",
        title: "Cybernetique",
        description: "Sleek technology company logo with modern typography and gradient arrow element.",
        image: "/lovable-uploads/120f1773-e2c7-4485-9cc9-2a2872aa2b4d.png",
        client: "Cybernetique",
        industry: "Technology",
        year: "2024",
        icon: <Image className="text-red-400" size={24} />
      },
      {
        id: "logo007",
        title: "Bhim Legacy Foundation",
        description: "Non-profit foundation logo featuring tree of life symbol with vibrant orange and green colors.",
        image: "/lovable-uploads/fad29f4e-8bc8-4e99-8836-1cf80e7633d6.png",
        client: "Bhim Legacy Foundation",
        industry: "Non-Profit",
        year: "2024",
        icon: <Image className="text-orange-400" size={24} />
      },
      {
        id: "logo008",
        title: "GrowJQ",
        description: "Growth-focused startup logo with upward arrow and modern typography in bold colors.",
        image: "/lovable-uploads/bab87538-953f-40d9-9e6f-7bdf8656bcb7.png",
        client: "GrowJQ",
        industry: "Business Growth",
        year: "2024",
        icon: <Image className="text-pink-400" size={24} />
      },
      {
        id: "logo009",
        title: "BLF JeevanSetu",
        description: "Community service logo featuring tree symbol with protective hands representing life and care.",
        image: "/lovable-uploads/25a56082-b571-42ee-b2ec-8a5d9fb5c8b6.png",
        client: "Bhim Legacy Foundation",
        industry: "Community Service",
        year: "2024",
        icon: <Image className="text-green-400" size={24} />
      },
      {
        id: "logo010",
        title: "WorkistForIT",
        description: "Professional recruitment platform logo with corporate blue and orange color scheme.",
        image: "/lovable-uploads/dc271e91-95ba-4100-acd2-c7a212e484b1.png",
        client: "WorkistForIT",
        industry: "Recruitment",
        year: "2024",
        icon: <Image className="text-blue-400" size={24} />
      },
      {
        id: "logo011",
        title: "WAHRES LEBEN",
        description: "Modern German brand logo with dynamic colorful droplet design representing authentic living.",
        image: "/lovable-uploads/eae143a5-5767-4f79-88f0-3dd220602d7d.png",
        client: "WAHRES LEBEN",
        industry: "Lifestyle Brand",
        year: "2024",
        icon: <Image className="text-red-400" size={24} />
      },
      {
        id: "logo012",
        title: "4AM CAFE",
        description: "Restaurant cafe logo with elegant teal design featuring utensils and banner elements for flavorful journey branding.",
        image: "/lovable-uploads/8546adf3-6c5d-4d3f-9aa5-fac2ef3aa359.png",
        client: "4AM CAFE",
        industry: "Food & Beverage",
        year: "2024",
        icon: <Image className="text-teal-400" size={24} />
      },
      {
        id: "logo013",
        title: "Microsoft Office Suite",
        description: "Corporate software logo design with colorful geometric blocks representing productivity suite applications.",
        image: "/lovable-uploads/8a73fb9e-8be2-439f-b909-1761dd7d4367.png",
        client: "Microsoft Corporation",
        industry: "Software",
        year: "2024",
        icon: <Image className="text-blue-400" size={24} />
      },
      {
        id: "logo014",
        title: "ADVITI Xray and Scan Center",
        description: "Medical healthcare logo featuring lungs design with cross symbol in gradient blue tones for diagnostic center.",
        image: "/lovable-uploads/fb838564-49f3-4d16-b97f-5d925a7111c8.png",
        client: "ADVITI Medical Center",
        industry: "Healthcare",
        year: "2024",
        icon: <Image className="text-blue-400" size={24} />
      },
      {
        id: "logo015",
        title: "Cybernetique TalentHub",
        description: "HR recruitment platform logo with modern typography and vibrant gradient arrow design for talent management.",
        image: "/lovable-uploads/19fe9aa7-e3e6-42f0-b269-4287504b6205.png",
        client: "Cybernetique TalentHub",
        industry: "Human Resources",
        year: "2024",
        icon: <Image className="text-purple-400" size={24} />
      },
      {
        id: "logo016",
        title: "BLF Aspire",
        description: "Motivational foundation logo with climbing figure and star symbol representing achievement and growth aspirations.",
        image: "/lovable-uploads/ae4d56c7-75bc-4496-ba3c-ef58da5377f2.png",
        client: "Bhim Legacy Foundation",
        industry: "Non-Profit Education",
        year: "2024",
        icon: <Image className="text-orange-400" size={24} />
      },
      {
        id: "logo017",
        title: "BLF Connect",
        description: "Community connection logo featuring people symbols with circular design in blue and orange colors.",
        image: "/lovable-uploads/ab487a14-a96a-4aeb-a1fb-d380daa3c416.png",
        client: "Bhim Legacy Foundation",
        industry: "Community Services",
        year: "2024",
        icon: <Image className="text-blue-400" size={24} />
      },
      {
        id: "logo018",
        title: "Endeavour Sciences",
        description: "Corporate technology services logo with modern orange and green gradient typography design.",
        image: "/lovable-uploads/60c53bca-29a9-432c-8cad-a6ed7dbfd704.png",
        client: "Endeavour Sciences",
        industry: "Technology Services",
        year: "2024",
        icon: <Image className="text-orange-400" size={24} />
      },
      {
        id: "logo019",
        title: "NABA's Community",
        description: "Community organization logo featuring portrait design with professional blue branding and modern typography.",
        image: "/lovable-uploads/fc20dd3e-d8c9-4188-9dac-a102ca0049ef.png",
        client: "NABA Community",
        industry: "Community Organization",
        year: "2024",
        icon: <Image className="text-blue-400" size={24} />
      },
      {
        id: "logo020",
        title: "BLF - Bhim Legacy Foundation",
        description: "Complete foundation branding with golden tree of life symbol and professional red typography design.",
        image: "/lovable-uploads/e6e1a3af-42e3-4ec9-8d45-4263492428d3.png",
        client: "Bhim Legacy Foundation",
        industry: "Non-Profit Foundation",
        year: "2024",
        icon: <Image className="text-red-400" size={24} />
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
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ExternalLink size={16} className="text-white" />
            </a>
          )}
          <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <Github size={16} className="text-white" />
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

      {project.features && (
        <div className="mb-4">
          <p className="text-sm text-purple-300/80 leading-relaxed">
            {project.features}
          </p>
        </div>
      )}

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

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 mb-4">
        {Object.entries(project.stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-lg font-bold text-white">{value as string}</div>
            <div className="text-xs text-white/60 capitalize">{key}</div>
          </div>
        ))}
      </div>

      {project.ctaText && (
        <button 
          onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}
          className="w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-400/30 hover:border-purple-400/50 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          {project.ctaText}
        </button>
      )}
    </div>
  );

  const renderGalleryItem = (project: any, index: number) => (
    <div
      key={project.id}
      className={`group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-fade-in hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => handleImageClick({
        src: project.image,
        alt: project.title,
        title: project.title
      })}
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

  const renderLogoItem = (logo: any, index: number) => (
    <div
      key={logo.id}
      className={`group relative overflow-hidden rounded-2xl aspect-square bg-white backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in cursor-pointer p-6 flex items-center justify-center`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => handleLogoClick(index)}
    >
      <img 
        src={logo.image} 
        alt={logo.title}
        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-sm mb-1">{logo.title}</h3>
        <p className="text-white/80 text-xs">{logo.client}</p>
      </div>
    </div>
  );

  return (
    <>
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
                <div id={tab.anchor} className={`grid gap-6 ${tab.value === 'graphics' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : tab.value === 'logos' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                  {projectCategories[tab.value as keyof typeof projectCategories].map((project, index) => {
                    if (tab.value === 'graphics') {
                      return renderGalleryItem(project, index);
                    } else if (tab.value === 'logos') {
                      return renderLogoItem(project, index);
                    } else {
                      return renderProjectCard(project, index);
                    }
                  })}
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

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />

      <LogoCarousel
        isOpen={isLogoCarouselOpen}
        onClose={closeLogoCarousel}
        logos={projectCategories.logos}
        initialIndex={selectedLogoIndex}
      />
    </>
  );
};
