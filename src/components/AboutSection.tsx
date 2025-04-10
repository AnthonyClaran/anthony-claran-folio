
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À <span className="text-gradient">Propos</span> de Moi
          </h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Qui suis-je?</h3>
            <p className="text-portfolio-neutral mb-6">
              Je suis Anthony Claran Randrianantoandro, un développeur full stack et graphic designer
              basé à Madagascar. Passionné par la technologie et le design, je m'efforce de créer des
              solutions digitales qui allient esthétique et fonctionnalité.
            </p>
            <p className="text-portfolio-neutral mb-6">
              En tant qu'étudiant à IT Andoharanofotsy, je continue d'améliorer mes compétences
              et de rester à jour avec les dernières technologies et tendances du design.
            </p>
            
            <div className="flex flex-col space-y-4 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Formation</h4>
                  <p className="text-portfolio-neutral">Étudiant à IT Andoharanofotsy</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center mr-4">
                  <Briefcase className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Spécialisation</h4>
                  <p className="text-portfolio-neutral">Développement Full Stack & Design Graphique</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Localisation</h4>
                  <p className="text-portfolio-neutral">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="btn-primary">Discutons de votre projet</a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-accent/20 rounded-xl blur-2xl"></div>
              <div className="relative bg-white p-5 rounded-xl shadow-xl">
                <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder image - will be replaced with actual about image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                      Photo à propos
                    </p>
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
