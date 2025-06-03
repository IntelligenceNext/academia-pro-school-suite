
import { ArrowDown, Code, Palette, Smartphone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
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
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Code className="text-purple-400" size={20} />
            <span className="text-white">Full-Stack Development</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Smartphone className="text-blue-400" size={20} />
            <span className="text-white">Mobile Applications</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Palette className="text-pink-400" size={20} />
            <span className="text-white">UI/UX Design</span>
          </div>
        </div>

        <div className="animate-fade-in">
          <a
            href="#applications"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View My Work</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
