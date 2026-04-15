import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "FLANK Digital",
      subtitle: "AI WhatsApp Chatbot Engine",
      description: "Architected a scalable AI chatbot engine for automated customer interactions over the WhatsApp Cloud API. Built a fault-tolerant Flask microservice using MongoDB for persistent data handling and Redis for low-latency session caching, seamlessly integrating OpenAI for dynamic response routing.",
      techStack: ["Flask", "OpenAI API", "MongoDB", "Redis", "WhatsApp API"],
      github: "https://github.com/placeholder",
      demo: "https://placeholder-demo.com"
    },
    {
      title: "Cloud Deployment Architecture",
      subtitle: "DevOps & CI/CD Pipeline",
      description: "Designed and deployed a robust CI/CD pipeline using AWS and GitHub Actions. Automated testing workflows and enforced strict environment configurations to consistently deliver secure, zero-downtime application releases.",
      techStack: ["AWS", "GitHub Actions", "Linux", "Vercel", "Docker"],
      github: "https://github.com/placeholder",
      demo: "https://placeholder-demo.com"
    },
    {
      title: "Relational DB Systems",
      subtitle: "Data & System Architecture",
      description: "Engineered an optimized relational database prioritizing 3NF normalization and complex data integrity. Designed rigorous Entity-Relationship models and applied advanced SQL indexing strategies to resolve efficient, large-scale query operations.",
      techStack: ["SQL", "MySQL", "DB Design", "Normalization"],
      github: "https://github.com/placeholder",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Engineering real-world systems focusing on backend logic, cloud infrastructure, and data architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <FolderGit2 size={24} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <h4 className="text-sm font-medium text-blue-500/80 mb-4 uppercase tracking-wider">{project.subtitle}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>
              </div>
              
              <div className="px-8 pb-8 mt-auto">
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3 items-end">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 font-medium transition-colors text-xs sm:text-sm">
                      <FaGithub size={16} /> Code
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full py-2.5 rounded-lg bg-slate-800/30 text-slate-500 border border-slate-800/50 font-medium text-xs sm:text-sm cursor-not-allowed">
                      Private Repo
                    </div>
                  )}
                  
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors text-xs sm:text-sm shadow-md shadow-blue-500/20">
                      <ExternalLink size={16} /> Demo
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full py-2.5 rounded-lg bg-slate-800/30 text-slate-500 border border-slate-800/50 font-medium text-xs sm:text-sm cursor-not-allowed">
                      Backend Service
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
