
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darker pt-16 border-t border-gray-800 relative">
      <div className="absolute inset-0 bg-portfolio-darker/50 z-0"></div>
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">Anthony</span>
              <span className="text-gray-200"> Claran</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Développeur full stack et designer graphique, je m'efforce de créer des expériences numériques élégantes et fonctionnelles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-900 flex items-center justify-center transition-colors duration-300">
                <Github size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-900 flex items-center justify-center transition-colors duration-300">
                <Linkedin size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-900 flex items-center justify-center transition-colors duration-300">
                <Instagram size={20} className="text-gray-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-200">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Accueil</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">À propos</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Compétences</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Projets</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-200">Coordonnées</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Andoharanofotsy, Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@anthonyclaran.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  contact@anthonyclaran.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <a href="tel:+261XXXXXXXXX" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  +261 XX XX XX XX
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="luxury-divider my-8"></div>
        
        <div className="py-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Anthony Claran. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
