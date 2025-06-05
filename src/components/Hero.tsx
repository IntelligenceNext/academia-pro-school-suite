
import { ArrowDown, Code, Palette, Smartphone, Bot, Sparkles, Zap, Brain, Cpu, Wand2, Github, Settings } from "lucide-react";

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
              stunning websites, and creative design solutions powered by AI.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Code className="text-purple-400" size={20} />
                <span className="text-white">Full-Stack Development</span>
              </div>
              <a
                href="#designs"
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Palette className="text-white" size={20} />
                <span>Graphic Design</span>
              </a>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Palette className="text-pink-400" size={20} />
                <span className="text-white">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Smartphone className="text-blue-400" size={20} />
                <span className="text-white">Mobile Applications</span>
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
                
                {/* AI Skills floating elements around the image */}
                <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" title="ChatGPT">
                  <Bot className="text-white" size={24} />
                </div>
                <div className="absolute -top-2 -left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }} title="Gemini">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div className="absolute top-1/4 -right-8 w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }} title="Grok">
                  <Zap className="text-white" size={18} />
                </div>
                <div className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1.5s' }} title="DeepSeek">
                  <Brain className="text-white" size={20} />
                </div>
                <div className="absolute bottom-1/4 -right-6 w-11 h-11 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '2s' }} title="Lovable.Dev">
                  <Wand2 className="text-white" size={18} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '2.5s' }} title="Bolt.new">
                  <bolt className="text-white" size={20} />
                </div>
                <div className="absolute -bottom-6 right-1/4 w-10 h-10 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '3s' }} title="Cursor">
                  <Cpu className="text-white" size={18} />
                </div>
                <div className="absolute bottom-1/3 left-1/4 w-9 h-9 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '3.5s' }} title="Copilot X">
                  <Github className="text-white" size={16} />
                </div>
                <div className="absolute top-1/3 left-1/4 w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '4s' }} title="Dynamics 365">
                  <Settings className="text-white" size={18} />
                </div>
                <div className="absolute top-1/2 right-1/4 w-9 h-9 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '4.5s' }} title="Canva">
                  <Palette className="text-white" size={16} />
                </div>
                <div className="absolute bottom-1/2 -left-2 w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '5s' }} title="Power Apps">
                  <Zap className="text-white" size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
