import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Sport Leader",
      company: "Decathlon",
      period: "Recent",
      description: "Directed fast-paced retail operations, focusing on rapid problem resolution, proactive cross-functional teamwork, and handling complex customer interactions efficiently in a high-demand environment.",
      skills: ["Leadership", "Team Management", "Operational Efficiency", "Process Optimization"]
    },
    {
      role: "Customer Service",
      company: "7-Eleven",
      period: "Previous",
      description: "Thrived in a strict, high-pressure operational setting. Demonstrated continuous adaptability, reliable execution, and clear communication while navigating heavy workflow demands.",
      skills: ["Rapid Problem Solving", "Reliability", "Continuous Operations", "Communication"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950/50 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Professional background highlighting transferable core skills: communication, teamwork, reliability, and rapid problem solving.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:bg-slate-900/60 transition-colors">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <Briefcase size={28} />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mt-2 sm:mt-0 inline-flex w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="text-lg font-medium text-slate-300 mb-4">
                    {exp.company}
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs font-semibold text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-md uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
