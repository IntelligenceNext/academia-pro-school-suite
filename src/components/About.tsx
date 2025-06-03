
import { Award, Clock, Users, Star } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Users className="text-blue-400" size={24} />, value: "50+", label: "Happy Clients" },
    { icon: <Clock className="text-green-400" size={24} />, value: "100+", label: "Projects Completed" },
    { icon: <Award className="text-purple-400" size={24} />, value: "5+", label: "Years Experience" },
    { icon: <Star className="text-yellow-400" size={24} />, value: "4.9", label: "Average Rating" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-purple-400">Simon</span>
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              I'm a passionate full-stack developer and designer with over 5 years of experience 
              creating digital solutions that make a difference. I specialize in building 
              comprehensive applications, responsive websites, and compelling visual designs.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              My expertise spans from school management systems to e-commerce platforms, 
              always focusing on user experience, performance, and scalability. I believe 
              in the power of technology to transform businesses and improve lives.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full">React & Node.js</span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full">MongoDB & PostgreSQL</span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full">UI/UX Design</span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full">Mobile Development</span>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
