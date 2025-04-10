
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Luxe",
      description: "Design et développement d'un portfolio élégant avec React et TailwindCSS.",
      image: "https://placehold.co/600x400/1a1a2e/e2e8f0?text=Portfolio+Luxe",
      tags: ["React", "TailwindCSS", "Design UI"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Boutique",
      description: "Plateforme e-commerce avec système de paiement et panneau d'administration.",
      image: "https://placehold.co/600x400/1a1a2e/e2e8f0?text=E-Commerce",
      tags: ["Next.js", "Stripe", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Identity Branding",
      description: "Création d'identité visuelle complète pour une entreprise locale.",
      image: "https://placehold.co/600x400/1a1a2e/e2e8f0?text=Branding",
      tags: ["Illustrator", "Photoshop", "Branding"],
      github: null,
      demo: "#"
    },
    {
      title: "Application Mobile",
      description: "Application mobile de suivi de fitness avec statistiques personnalisées.",
      image: "https://placehold.co/600x400/1a1a2e/e2e8f0?text=App+Mobile",
      tags: ["React Native", "Firebase", "UI/UX"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-portfolio-darker/50 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gold-gradient">Mes Projets</span>
          </h2>
          <div className="luxury-divider w-24 mx-auto my-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes en développement et design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden rounded-xl group hover-lift">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-darker via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-black/50 text-purple-300 text-xs rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-200">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex items-center space-x-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github size={18} className="mr-2" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="inline-flex items-center px-4 py-2 bg-purple-900/50 text-purple-300 rounded-lg hover:bg-purple-900/70 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
