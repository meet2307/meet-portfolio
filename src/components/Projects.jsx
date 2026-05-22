import React, { useRef } from 'react';
import { ExternalLink, FolderGit2, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Find the precise width of one card + its gap
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild.offsetWidth;
      const gap = 24; // Tailwind gap-6 is 24px
      const scrollAmount = cardWidth + gap;
      
      const distance = direction === 'left' ? -scrollAmount : scrollAmount;
      container.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "FLANK Digital",
      subtitle: "AI WhatsApp Chatbot Engine",
      description: "Architected a scalable AI chatbot engine for automated customer interactions over the WhatsApp Cloud API. Built a fault-tolerant Flask microservice using MongoDB for persistent data handling and Redis for low-latency session caching, seamlessly integrating OpenAI for dynamic response routing.",
      techStack: ["Flask", "OpenAI API", "MongoDB", "Redis"],
      github: "https://github.com/placeholder",
      demo: "https://placeholder-demo.com"
    },
    {
      title: "Cloud Architecture",
      subtitle: "DevOps & CI/CD Pipeline",
      description: "Designed and deployed a robust CI/CD pipeline using AWS and GitHub Actions. Automated testing workflows and enforced strict environment configurations to consistently deliver secure, zero-downtime application releases.",
      techStack: ["AWS", "GitHub Actions", "Docker", "Vercel"],
      github: "https://github.com/placeholder",
      demo: "https://placeholder-demo.com"
    },
    {
      title: "Relational DB Systems",
      subtitle: "Data & System Architecture",
      description: "Engineered an optimized relational database prioritizing 3NF normalization and complex data integrity. Designed rigorous Entity-Relationship models and applied advanced SQL indexing strategies to resolve efficient, large-scale query operations.",
      techStack: ["SQL", "MySQL", "DB Design"],
      github: "https://github.com/placeholder",
      demo: ""
    },
    {
      title: "Relational DB Systems",
      subtitle: "Data & System Architecture",
      description: "Engineered an optimized relational database prioritizing 3NF normalization and complex data integrity. Designed rigorous Entity-Relationship models and applied advanced SQL indexing strategies to resolve efficient, large-scale query operations.",
      techStack: ["SQL", "MySQL", "DB Design"],
      github: "https://github.com/placeholder",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-24 relative scroll-mt-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Real-world systems focusing on backend logic, cloud infrastructure, and data architecture.
          </p>
        </div>
      
      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight"></h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-4 opacity-80"></div>
            <p className="text-slate-400/90 text-[15px] font-light max-w-md">
              
            </p>
          </div>
        </div> */}
      </div>

      {/* Wrapper explicitly granting padding so arrows never cover cards */}
      <div className="relative w-full max-w-[1400px] mx-auto px-12 sm:px-16 lg:px-24 group">
        
        {/* Navigation Controls Vertically Centered beside the cards container */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-2.5 lg:p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all focus:outline-none shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-2.5 lg:p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all focus:outline-none shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Masked Carousel Wrapper strictly enforcing hidden overflow */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-hidden gap-6 pb-2 pt-2 snap-x snap-mandatory scroll-smooth"
        >
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] min-h-[420px] flex-shrink-0 snap-center bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl flex flex-col hover:border-slate-700/60 transition-colors shadow-sm"
            >
              {/* Inner Focus Area */}
              <div className="p-7 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-400/80">
                    <FolderGit2 size={20} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-1.5 tracking-tight">{project.title}</h3>
                <h4 className="text-[11px] font-semibold text-blue-400/70 mb-4 uppercase tracking-widest leading-relaxed">
                  {project.subtitle}
                </h4>
                
                {/* Line clamped description */}
                <p className="text-slate-400/90 text-sm leading-relaxed font-light line-clamp-4 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack - Compact and aligned at bottom of content block */}
                <div className="flex flex-wrap gap-1.5 mt-auto pb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons - Fixed firmly at bottom, clean UI */}
              <div className="px-7 pb-7 pt-0 mt-auto grid grid-cols-2 gap-3">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 text-slate-300 border border-slate-700/50 transition-colors text-[13px] font-medium group">
                    <FaGithub size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" /> Code
                  </a>
                ) : (
                  <div className="flex items-center justify-center w-full py-2.5 rounded-lg bg-slate-900/30 text-slate-500 border border-slate-800/30 text-[13px] font-medium cursor-not-allowed">
                    Private
                  </div>
                )}
                
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 transition-colors text-[13px] font-medium group">
                    <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" /> Demo
                  </a>
                ) : (
                  <div className="flex items-center justify-center w-full py-2.5 rounded-lg bg-slate-900/30 text-slate-500 border border-slate-800/30 text-[13px] font-medium cursor-not-allowed">
                    Service
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
