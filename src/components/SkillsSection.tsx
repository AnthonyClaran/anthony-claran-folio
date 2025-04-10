
import { Code, Palette, Lightbulb, Database, Layout, Globe } from "lucide-react";

const SkillsSection = () => {
  const developerSkills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "PHP", level: 75 },
    { name: "Python", level: 70 },
  ];
  
  const designSkills = [
    { name: "Photoshop", level: 90 },
    { name: "Illustrator", level: 85 },
    { name: "Figma", level: 95 },
    { name: "After Effects", level: 70 },
    { name: "UI/UX Design", level: 85 },
    { name: "Branding", level: 80 },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="dots-pattern absolute inset-0 opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gold-gradient">Mes Compétences</span>
          </h2>
          <div className="luxury-divider w-24 mx-auto my-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Une fusion de compétences techniques et créatives pour donner vie à des projets web exceptionnels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Development Skills */}
          <div className="glass-card p-8">
            <div className="mb-6 flex items-center">
              <Code size={24} className="text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-200">Développement</h3>
            </div>
            
            <div className="space-y-6">
              {developerSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-indigo-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Design Skills */}
          <div className="glass-card p-8">
            <div className="mb-6 flex items-center">
              <Palette size={24} className="text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-200">Design</h3>
            </div>
            
            <div className="space-y-6">
              {designSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-indigo-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Competencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-200">Autres Compétences</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-16 h-16 mx-auto bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb size={32} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-200">Résolution de problèmes</h4>
              <p className="text-gray-400">Approche analytique et créative pour résoudre des défis techniques complexes.</p>
            </div>
            
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-16 h-16 mx-auto bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                <Database size={32} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-200">Bases de données</h4>
              <p className="text-gray-400">Conception et optimisation de bases de données SQL et NoSQL.</p>
            </div>
            
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-16 h-16 mx-auto bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                <Layout size={32} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-200">Responsive Design</h4>
              <p className="text-gray-400">Création d'interfaces adaptatives pour une expérience optimale sur tous les appareils.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
