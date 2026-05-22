import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "PHP", "SQL", "C", "HTML5", "CSS3"],
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      title: "Frameworks & Tech",
      skills: ["Django", "Angular", "Flask", "Node.js", "Flutter", "REST APIs"],
      color: "from-indigo-500/20 to-indigo-600/5",
      borderColor: "group-hover:border-indigo-500/50"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQLite","Time-Series Data Storage"],
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Git", "GitHub", "Linux", "Vercel", "Redis", "Jira"],
      color: "from-cyan-500/20 to-cyan-600/5",
      borderColor: "group-hover:border-cyan-500/50"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950/50 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the tools, languages, and technologies I use to build scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`glass-card p-6 rounded-2xl group transition-all duration-300 relative overflow-hidden flex flex-col h-full bg-gradient-to-b ${category.color} ${category.borderColor}`}>
              <h3 className="text-xl font-bold text-white mb-6 relative z-10">{category.title}</h3>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
