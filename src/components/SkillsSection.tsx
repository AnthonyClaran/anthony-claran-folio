
import { Code, PenTool, Database, Laptop, Palette, Globe } from "lucide-react";

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
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-portfolio-blue font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-portfolio-blue to-portfolio-accent h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  const skillCards = [
    {
      title: "Développement Frontend",
      description: "Création d'interfaces réactives et modernes avec React, Vue et Angular",
      icon: <Code className="text-portfolio-blue" size={32} />,
    },
    {
      title: "Développement Backend",
      description: "Développement de serveurs robustes avec Node.js, Express et MongoDB",
      icon: <Database className="text-portfolio-blue" size={32} />,
    },
    {
      title: "Web Design",
      description: "Conception d'interfaces utilisateur attrayantes et fonctionnelles",
      icon: <Globe className="text-portfolio-blue" size={32} />,
    },
    {
      title: "Applications Responsive",
      description: "Sites web et applications adaptés à tous les appareils",
      icon: <Laptop className="text-portfolio-blue" size={32} />,
    },
    {
      title: "Design Graphique",
      description: "Création de visuels captivants pour tous supports avec les outils Adobe",
      icon: <PenTool className="text-portfolio-blue" size={32} />,
    },
    {
      title: "UI/UX Design",
      description: "Conception d'expériences utilisateur fluides et intuitives",
      icon: <Palette className="text-portfolio-blue" size={32} />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-portfolio-neutral max-w-3xl mx-auto">
            En tant que développeur full stack et graphiste, j'ai développé un ensemble de compétences complémentaires qui me permettent de créer des expériences numériques complètes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCards.map((card, index) => (
            <div key={index} className="skill-card">
              <div className="flex flex-col h-full">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-portfolio-neutral flex-grow">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-dark flex items-center">
              <Code className="mr-3 text-portfolio-blue" size={24} /> Développement
            </h3>
            {developmentSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-dark flex items-center">
              <PenTool className="mr-3 text-portfolio-blue" size={24} /> Design
            </h3>
            {designSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
