
import { Briefcase, GraduationCap, MapPin, Palette, Code, Monitor } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Designer-style background elements */}
      <div className="absolute -right-64 top-0 w-[500px] h-[500px] rounded-full bg-indigo-50 opacity-50"></div>
      <div className="absolute -left-64 bottom-0 w-[500px] h-[500px] rounded-full bg-pink-50 opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <p className="text-indigo-600 font-medium mb-3 tracking-wider">DÉCOUVREZ QUI JE SUIS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Propos</span> de Moi
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-1 rounded-full bg-indigo-600"></div>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500"></div>
            <div className="w-10 h-1 rounded-full bg-purple-500"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Créateur d'<span className="text-indigo-600">Expériences</span> Digitales
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Je suis Anthony Claran Randrianantoandro, développeur full stack et designer graphique 
              passionné par la convergence entre la technologie et l'esthétique. Mon approche mêle créativité 
              et expertise technique pour créer des projets digitaux qui se démarquent.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Étudiant à IT Andoharanofotsy, je cultive continuellement ma curiosité pour les nouvelles 
              technologies et tendances du design, avec l'ambition de créer des expériences numériques 
              qui allient beauté et fonctionnalité.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-indigo-500 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Développement</h4>
                <p className="text-gray-600">
                  Solutions web modernes et responsives
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-purple-500 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Design</h4>
                <p className="text-gray-600">
                  Créations visuelles captivantes et uniques
                </p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4 mt-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <GraduationCap className="text-indigo-600" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Formation</h4>
                  <p className="text-gray-600">Étudiant à IT Andoharanofotsy</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <Briefcase className="text-purple-600" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Spécialisation</h4>
                  <p className="text-gray-600">Développement Full Stack & Design Graphique</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <MapPin className="text-pink-600" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Localisation</h4>
                  <p className="text-gray-600">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-dashed border-indigo-300 rounded-lg"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-dashed border-pink-300 rounded-lg"></div>
              
              <div className="relative z-10">
                <div className="relative bg-white p-3 rounded-xl shadow-xl rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="w-full md:w-[450px] h-80 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-lg overflow-hidden relative group">
                    {/* Visual designer elements */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-500 transform group-hover:scale-110">
                      <div className="grid grid-cols-3 gap-3 p-6">
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-300/40 to-purple-500/40 flex items-center justify-center">
                          <Monitor className="text-purple-600" size={30} />
                        </div>
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-indigo-300/40 to-indigo-500/40 flex items-center justify-center">
                          <Code className="text-indigo-600" size={30} />
                        </div>
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-pink-300/40 to-pink-500/40 flex items-center justify-center">
                          <Palette className="text-pink-600" size={30} />
                        </div>
                        <div className="aspect-square rounded-lg bg-white/80 col-span-3 flex items-center justify-center p-4">
                          <p className="text-center text-gray-800 font-medium">
                            Créativité, technique et passion au service de vos projets digitaux
                          </p>
                        </div>
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-300/40 to-blue-500/40 flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                          </svg>
                        </div>
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-green-300/40 to-green-500/40 flex items-center justify-center">
                          <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.59 12l-3.3-3.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4A1 1 0 016.7 8.7L3.4 12zm7.56 8.24a1 1 0 01-1.94-.48l4-16a1 1 0 111.94.48l-4 16z"></path>
                          </svg>
                        </div>
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-300/40 to-orange-500/40 flex items-center justify-center">
                          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
