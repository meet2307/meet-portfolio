import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen animate-pulse duration-1000"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-slate-800/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center text-center">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)] content-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Software Engineering Roles
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Code that powers <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 text-glow">real-world systems.</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-slate-400 mb-8 max-w-2xl mx-auto tracking-tight leading-relaxed">
            Backend-focused Software Engineer specializing in scalable infrastructure, robust APIs, and cloud deployments. I build reliable, production-ready systems that solve practical problems.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <a href="#projects" className="group px-8 py-2.5 sm:py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 w-full sm:w-auto">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" target="_blank" className="px-8 py-2.5 sm:py-3.5 rounded-full bg-slate-800 border border-slate-700 text-white font-semibold hover:bg-slate-700 transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-0.5">
              <Download size={18} />
              Download Resume
            </a>
            
            <a href="#contact" className="px-8 py-2.5 sm:py-3.5 rounded-full bg-slate-900 border border-slate-700 text-white font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all w-full sm:w-auto text-center justify-center inline-block">
              Contact Me
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/meet2307" target="_blank" rel="noreferrer" className="p-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-blue-500/50 transition-all shadow-md group">
              <FaGithub size={22} className="group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/meetthakkar2307/" target="_blank" rel="noreferrer" className="p-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-blue-500/50 transition-all shadow-md group">
              <FaLinkedin size={22} className="group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="mailto:thakkarmeet339@gmail.com" className="p-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-blue-500/50 transition-all shadow-md group">
              <Mail size={22} className="group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
