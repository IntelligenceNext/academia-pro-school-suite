
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              Simon<span className="text-purple-400">Dev</span>
            </div>
            <p className="text-white/60">Creating digital experiences that matter.</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110 text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="text-red-400" size={16} />
            <span>by Simon • © 2024 All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
