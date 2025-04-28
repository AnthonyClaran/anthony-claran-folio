
import { Award, Briefcase, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Luxurious background elements */}
      <div className="absolute inset-0 bg-portfolio-darker/50 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-portfolio-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-portfolio-dark to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gold-gradient">À propos de moi</span>
          </h2>
          <div className="luxury-divider w-24 mx-auto my-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Développeur full stack passionné et designer graphique créatif, je combine technique et esthétique pour créer des expériences numériques mémorables.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Education */}
          <div className="glass-card p-6 transition-all duration-300 hover:shadow-amber-500/5">
            <div className="w-12 h-12 bg-amber-900/30 rounded-lg mb-6 flex items-center justify-center">
              <GraduationCap className="text-amber-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-200">Parcours académique</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-200">Étudiant en Informatique</h4>
                <p className="text-sm text-gray-400">IT Andoharanofotsy</p>
                <p className="text-sm text-purple-300">2022 - Présent</p>
              </div>
              {/* <div>
                <h4 className="font-medium text-gray-200">Formation en Design Graphique</h4>
                <p className="text-sm text-gray-400">Certification professionnelle</p>
                <p className="text-sm text-purple-300">2021</p>
              </div> */}
            </div>
          </div>
          
          {/* Experience */}
          <div className="glass-card p-6 transition-all duration-300 hover:shadow-purple-500/5">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-6 flex items-center justify-center">
              <Briefcase className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-200">Expérience professionnelle</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-200">Développeur Web Freelance</h4>
                <p className="text-sm text-gray-400">Projets variés pour clients</p>
                <p className="text-sm text-purple-300">2022 - Présent</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-200">Designer Graphique</h4>
                <p className="text-sm text-gray-400">Création d'identités visuelles</p>
                <p className="text-sm text-purple-300">2021 - Présent</p>
              </div>
            </div>
          </div>
          
          {/* Skills Highlight */}
          <div className="glass-card p-6 transition-all duration-300 hover:shadow-purple-500/5">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-6 flex items-center justify-center">
              <Award className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-200">Compétences clés</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Développement Full Stack</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                <span>UI/UX Design</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Design Graphique</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Gestion de Projets</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Communication Visuelle</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#skills" className="btn-secondary inline-flex">
            Voir toutes mes compétences
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
