
import { Code, PenTool, Database, Laptop, Palette, Globe, Layers, Figma, Monitor, Server, BarChart, Aperture } from "lucide-react";

const SkillsSection = () => {
  const developmentSkills = [
    { name: "HTML/CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "PHP", percentage: 70 },
    { name: "MongoDB", percentage: 75 },
    { name: "MySQL", percentage: 80 },
  ];

  const designSkills = [
    { name: "Photoshop", percentage: 85 },
    { name: "Illustrator", percentage: 80 },
    { name: "Figma", percentage: 90 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Motion Design", percentage: 70 },
  ];

  const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-indigo-600 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%`, transition: "width 1.5s ease-in-out" }}
        ></div>
      </div>
    </div>
  );

  const skillCards = [
    {
      title: "Développement Frontend",
      description: "Création d'interfaces réactives et modernes",
      icon: <Code className="text-white" size={28} />,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Développement Backend",
      description: "Développement de serveurs robustes et API",
      icon: <Server className="text-white" size={28} />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX Design",
      description: "Conception d'expériences utilisateur fluides",
      icon: <Figma className="text-white" size={28} />,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Design Responsive",
      description: "Sites web et applications adaptés à tous appareils",
      icon: <Laptop className="text-white" size={28} />,
      gradient: "from-cyan-500 to-emerald-500",
    },
    {
      title: "Design Graphique",
      description: "Création de visuels captivants pour tous supports",
      icon: <Palette className="text-white" size={28} />,
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "Identité Visuelle",
      description: "Création de logos et chartes graphiques",
      icon: <Aperture className="text-white" size={28} />,
      gradient: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Designer-style background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-indigo-100/50 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-100/50 filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <p className="text-indigo-600 font-medium mb-3 tracking-wider">EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Compétences</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-1 rounded-full bg-indigo-600"></div>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500"></div>
            <div className="w-10 h-1 rounded-full bg-purple-500"></div>
          </div>
          <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            À l'intersection du <span className="text-indigo-600 font-medium">développement</span> et du <span className="text-purple-600 font-medium">design</span>, 
            je crée des expériences digitales complètes où fonctionnalité et esthétique convergent harmonieusement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-full flex flex-col">
                <div className={`p-5 bg-gradient-to-r ${card.gradient}`}>
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    {card.icon}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mr-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Développement</h3>
            </div>
            {developmentSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                <PenTool className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Design</h3>
            </div>
            {designSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
        
        {/* Additional design elements */}
        <div className="flex justify-center mt-20">
          <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-center">
              <p className="text-indigo-600 font-semibold">DESIGN PHILOSOPHY</p>
              <h4 className="text-xl font-bold mt-2 mb-4">Au croisement de l'art et de la technique</h4>
              <p className="text-gray-600">Je crois que chaque pixel compte et que chaque ligne de code doit servir une expérience utilisateur exceptionnelle.</p>
              
              <div className="flex justify-center mt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Layers className="text-indigo-600" size={20} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Palette className="text-purple-600" size={20} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <Monitor className="text-pink-600" size={20} />
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

export default SkillsSection;
