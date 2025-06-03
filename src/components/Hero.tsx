
import { ArrowDown, Code, Palette, Smartphone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Simon
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Crafting exceptional digital experiences through innovative applications,
              stunning websites, and creative design solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Code className="text-purple-400" size={20} />
                <span className="text-white">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Smartphone className="text-blue-400" size={20} />
                <span className="text-white">Mobile Applications</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Palette className="text-pink-400" size={20} />
                <span className="text-white">UI/UX Design</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#applications"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>View My Work</span>
                <ArrowDown size={20} />
              </a>
              
              <a
                href="#designs"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Palette size={20} />
                <span>Graphic Design</span>
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-md opacity-50"></div>
              
              {/* Profile image */}
              <div className="relative">
                <img
                  src="/lovable-uploads/3836e382-bbed-49ce-b63e-fdbc0b03c9d6.png"
                  alt="Simon Developer - Professional Profile"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
                
                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <Code className="text-white" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
                  <Palette className="text-white" size={24} />
                </div>
                <div className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                  <Smartphone className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
