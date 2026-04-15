import React from 'react';
import { Server, Cloud, Code2, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg font-light tracking-tight">
            <p>
              I'm an Australia-based <strong className="text-white font-semibold">Software Engineer</strong> passionate about building resilient backend architecture and optimizing cloud infrastructure.
            </p>
            <p>
              I bridge the gap between complex technical requirements and reliable system performance. My expertise lies in designing high-throughput APIs, managing relational databases, and defining active CI/CD pipelines to ensure seamless, secure deployments.
            </p>
            <p>
              Whether integrating LLM workflows into messaging platforms or structuring datasets for rapid querying, I focus on writing clean, maintainable code that scales.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Server size={24} />
              </div>
              <h3 className="text-white font-medium">Backend Systems</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Cloud size={24} />
              </div>
              <h3 className="text-white font-medium">Cloud Engineering</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="text-white font-medium">Database Design</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="text-white font-medium">Software Dev</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
