import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
              M
            </div>
            <span className="text-white font-bold tracking-tight">Meet Thakkar</span>
          </div>
          
          <p className="text-slate-400 text-sm text-center md:text-left">
            Built with React, Tailwind CSS, & Vite.
          </p>
          
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
