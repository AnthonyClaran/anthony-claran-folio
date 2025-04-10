
import { useState } from "react";
import { ExternalLink, Github, Eye, Figma, Layout, Code, Palette, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const categories = [
    { id: "all", name: "Tous", icon: <Layout size={16} className="mr-2" /> },
    { id: "web", name: "Web", icon: <Code size={16} className="mr-2" /> },
    { id: "design", name: "Design", icon: <Palette size={16} className="mr-2" /> },
    { id: "mobile", name: "Mobile", icon: <Figma size={16} className="mr-2" /> },
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "/placeholder.svg",
      description: "Site e-commerce complet avec système de panier et paiement en ligne",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-indigo-500 to-blue-500",
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
      color: "from-blue-500 to-cyan-500",
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
      color: "from-purple-500 to-pink-500",
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
      color: "from-cyan-500 to-teal-500",
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
      color: "from-amber-500 to-orange-500",
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
      color: "from-green-500 to-emerald-500",
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
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Designer-style background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full opacity-50 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full opacity-50 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <p className="text-indigo-600 font-medium mb-3 tracking-wider">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Projets</span> Récents
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-1 rounded-full bg-indigo-600"></div>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500"></div>
            <div className="w-10 h-1 rounded-full bg-purple-500"></div>
          </div>
          <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes travaux récents en développement et design.
            Chaque projet est une opportunité d'explorer de nouvelles idées et de créer quelque chose d'unique.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center ${
                filter === category.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-indigo-300 hover:shadow-sm"
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                {/* Project image with overlay */}
                <div className="relative overflow-hidden h-60">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category label */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs py-1 px-3 rounded-full bg-white/80 backdrop-blur-sm font-medium
                      ${project.category === 'web' ? 'text-indigo-600' : 
                      project.category === 'design' ? 'text-purple-600' : 'text-blue-600'}`}>
                      {project.category === 'web' ? 'Web Development' : 
                       project.category === 'design' ? 'Graphic Design' : 'Mobile App'}
                    </span>
                  </div>
                  
                  {/* Action buttons overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.links.preview && (
                      <a 
                        href={project.links.preview} 
                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg transform hover:scale-110 transition-transform duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Preview project"
                      >
                        <Eye size={20} className="text-indigo-600" />
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg transform hover:scale-110 transition-transform duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View code on GitHub"
                      >
                        <Github size={20} className="text-indigo-600" />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Technologies used */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs py-1 px-3 bg-gray-100 text-gray-700 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View project link */}
                  <a 
                    href={project.links.preview} 
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet 
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-10 rounded-2xl shadow-sm border border-indigo-100/50">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Vous avez un projet en tête ?</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Discutons ensemble de votre vision et transformons-la en une expérience digitale unique et captivante.
            </p>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 inline-flex items-center"
            >
              Discuter de votre projet <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
