
import { useState } from "react";
import { ExternalLink, Github, EyeIcon } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const categories = [
    { id: "all", name: "Tous" },
    { id: "web", name: "Développement Web" },
    { id: "design", name: "Design Graphique" },
    { id: "mobile", name: "Applications Mobile" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "/placeholder.svg",
      description: "Site e-commerce complet avec système de panier et paiement en ligne",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        preview: "#",
        github: "#",
      },
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "/placeholder.svg",
      description: "Application de gestion financière personnelle avec analyses",
      technologies: ["React Native", "Firebase", "Redux"],
      links: {
        preview: "#",
        github: "#",
      },
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      image: "/placeholder.svg",
      description: "Identité visuelle complète pour une startup technologique",
      technologies: ["Photoshop", "Illustrator", "Figma"],
      links: {
        preview: "#",
      },
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      image: "/placeholder.svg",
      description: "Site portfolio réactif pour un photographe professionnel",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      links: {
        preview: "#",
        github: "#",
      },
    },
    {
      id: 5,
      title: "Restaurant Branding",
      category: "design",
      image: "/placeholder.svg",
      description: "Branding et packaging pour une chaîne de restaurants",
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      links: {
        preview: "#",
      },
    },
    {
      id: 6,
      title: "Task Management App",
      category: "web",
      image: "/placeholder.svg",
      description: "Application de gestion de tâches avec fonctionnalités collaboratives",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      links: {
        preview: "#",
        github: "#",
      },
    },
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gradient">Projets</span> Récents
          </h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-portfolio-neutral max-w-3xl mx-auto">
            Découvrez une sélection de mes travaux récents en développement et en design.
            Chaque projet est une opportunité d'apprendre et de créer quelque chose d'unique.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-portfolio-blue text-white"
                  : "bg-gray-100 text-portfolio-dark hover:bg-gray-200"
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolio-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.links.preview && (
                    <a 
                      href={project.links.preview} 
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <EyeIcon size={20} className="text-portfolio-blue" />
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="text-portfolio-blue" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-portfolio-neutral mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs py-1 px-3 bg-gray-100 text-portfolio-dark rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.links.preview} 
                  className="text-portfolio-blue hover:text-portfolio-accent flex items-center gap-2 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Discuter d'un projet ensemble
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
