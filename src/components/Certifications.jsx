import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "Python Data Structures",
    "Introduction to Project Management",
    "The Bits and Bytes of Computer Networking",
    "Flutter - Intermediate",
    "Flutter - Beginners Course"
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Certifications</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300 border border-slate-800/50 hover:border-blue-500/30 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-400/80 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors duration-300 shrink-0">
                <Award size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-slate-300 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                {cert}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
