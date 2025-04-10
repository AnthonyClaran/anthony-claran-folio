
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50"></div>
        
        {/* Designer-style geometric elements */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-pink-200/20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-blue-200/30 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-indigo-200/20 animate-pulse delay-1000"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-portfolio-accent/10 to-purple-300/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-portfolio-blue/10 to-pink-300/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div>
              <h2 className="text-indigo-600 text-xl md:text-2xl font-medium mb-4 tracking-wider">
                Bienvenue, je suis
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block">Anthony Claran</span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Randrianantoandro
                </span>
              </h1>
              <div className="flex items-center space-x-4 my-6">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500"></div>
                <p className="text-lg font-medium text-gray-600">Design & Développement</p>
              </div>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Créateur d'expériences digitales <span className="text-indigo-600 font-medium">captivantes</span> et 
                <span className="text-pink-500 font-medium"> innovantes</span>. Alliant la puissance du code à l'élégance du design.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Me contacter
              </a>
              <a href="#projects" className="px-8 py-3 border-2 border-indigo-500 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1">
                Voir mes projets
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center animate-scale-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 w-20 h-20 border-2 border-indigo-300 rounded-lg z-0"></div>
              <div className="absolute -right-6 -bottom-6 w-20 h-20 border-2 border-pink-300 rounded-lg z-0"></div>
              
              {/* Creative frame */}
              <div className="relative z-10 bg-white p-4 rounded-xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="w-72 h-72 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center">
                  {/* User image */}
                  <div className="flex flex-col items-center justify-center p-6">
                    <svg className="w-32 h-32 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                    </svg>
                    <p className="mt-4 text-indigo-500 font-medium text-lg">Designer & Développeur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-indigo-500 hover:text-indigo-700 transition-colors">
            <span className="text-sm mb-2 font-medium">Découvrir plus</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
