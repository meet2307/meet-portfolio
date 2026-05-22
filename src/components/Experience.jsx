import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Digital Asset Custody Solutions (DACS)",
      period: "Jul 2025 - Nov 2025",
      description: "Engineered a RESTful API with automated price aggregation from major cryptocurrency exchanges (Binance, Kraken, CoinGecko). Designed database infrastructure processing 100,000+ data points daily with complete audit trails to support regulatory compliance for the ATO, IRS, and HMRC.",
      skills: ["Python", "REST APIs", "Database Architecture", "RegTech", "Blockchain"]
    },
    {
      role: "Web Developer",
      company: "CROWN Software",
      period: "Jan 2023 - May 2023",
      description: "Led the development of a hostel management system digitizing operations for 500+ students. Enhanced application performance through AJAX implementation, reducing load times, and mentored a development team on Git workflows while refactoring 5,000+ lines of legacy code.",
      skills: ["AJAX", "JavaScript", "Git", "Code Refactoring", "Team Mentorship"]
    },
    {
      role: "Application Developer",
      company: "Indigenous technology",
      period: "May 2022 - Jun 2022",
      description: "Architected the complete frontend for a medicine reminder application serving 200+ beta testers. Established a consistent design system across 15+ screens and created comprehensive technical documentation covering architecture and Firebase integration.",
      skills: ["Frontend Architecture", "UI/UX", "Firebase", "Documentation"]
    },
    {
      role: "Web Developer",
      company: "Simulas",
      period: "Jun 2021 - Aug 2021",
      description: "Developed a hotel management system for 10+ properties with integrated booking, inventory, and billing modules. Built responsive user interfaces and managed multiple concurrent client projects with proactive communication.",
      skills: ["HTML5/CSS3", "JavaScript", "Responsive UI", "Client Management"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950/50 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Professional engineering background with hands-on experience in full-stack development, cloud architecture, and regulatory technology.
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
