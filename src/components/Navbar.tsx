
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home", id: "home" },
    { name: "À propos", href: "#about", id: "about" },
    { name: "Compétences", href: "#skills", id: "skills" },
    { name: "Projets", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-md py-3 border-b border-gray-100" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold font-heading relative group"
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Anthony</span>
            <span className="text-gray-800"> Claran</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full ${
                  activeSection === link.id 
                  ? "text-white" 
                  : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {activeSection === link.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10 animate-scale-in"></span>
                )}
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in border-t border-gray-100">
          <div className="container py-5 px-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`py-3 px-4 rounded-lg flex justify-between items-center transition-all duration-300 ${
                    activeSection === link.id
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {activeSection === link.id && <ChevronRight size={18} className="text-indigo-600" />}
                </a>
              ))}
              
              <a 
                href="#contact" 
                className="mt-3 py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex justify-center items-center shadow"
                onClick={() => setIsMenuOpen(false)}
              >
                Me contacter
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
