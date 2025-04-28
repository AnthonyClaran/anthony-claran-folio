import { ArrowDown, Image } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container flex flex-col items-center justify-center relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Add avatar/photo */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-36 h-36 border-4 border-amber-400 shadow-lg">
              <AvatarImage 
                src="./../../public/Rectangle 4.png" 
                alt="Anthony Claran" 
                className="object-cover"
              />
              {/* <AvatarFallback>
                <Image className="text-gray-400" />
              </AvatarFallback> */}
            </Avatar>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block font-serif font-medium text-lg md:text-xl text-amber-300 mb-2">Bienvenue, je suis</span>
            <span className="block mb-2">Anthony Claran</span>
            <span className="text-gradient">Développeur & Designer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Je crée des expériences numériques élégantes combinant design graphique sophistiqué et développement full stack innovant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </div>
          
          <div className="animate-bounce">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-amber-400 text-amber-400 hover:bg-amber-900/20 transition-colors duration-300"
            >
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Designer elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-portfolio-dark to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-full h-32 bg-amber-600/5 transform -skew-y-12"></div>
    </section>
  );
};

export default HeroSection;
