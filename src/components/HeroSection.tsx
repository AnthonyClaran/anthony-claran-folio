
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/10 to-portfolio-accent/5"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-portfolio-blue/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-portfolio-accent/10 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div>
              <h2 className="text-portfolio-blue text-xl md:text-2xl font-medium mb-4">
                Bienvenue, je suis
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4">
                Anthony Claran <br />
                <span className="text-gradient">Randrianantoandro</span>
              </h1>
              <p className="text-xl text-portfolio-neutral mt-6 max-w-lg">
                Développeur Full Stack & Graphic Designer, passionné par la création 
                d'expériences digitales uniques et innovantes.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className="btn-primary">
                Me contacter
              </a>
              <a href="#projects" className="btn-secondary">
                Voir mes projets
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-blue/20 rounded-full blur-2xl"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-xl">
                <div className="w-72 h-72 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* User image placeholder - will be replaced with actual image */}
                  <div className="flex flex-col items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <p className="mt-4 text-gray-500">Photo de profil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-portfolio-blue hover:text-portfolio-accent">
            <span className="text-sm mb-2">Découvrir plus</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
