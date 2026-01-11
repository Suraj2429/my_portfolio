
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 animate-pulse">
          🚀 Available for Internships & Projects
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
          <span className="block text-white">Suraj Prakash Patil</span>
          <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent pb-2">
            Junior Software Developer
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
          Building secure, scalable, and maintainable microservices. 
          Final year MCA student specializing in Python, React, and DevOps.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center">
             <span className="text-2xl font-bold">8.75</span>
             <span className="text-xs uppercase tracking-widest text-slate-500">CGPI</span>
          </div>
          <div className="h-8 w-px bg-slate-700"></div>
          <div className="flex flex-col items-center">
             <span className="text-2xl font-bold">5+</span>
             <span className="text-xs uppercase tracking-widest text-slate-500">Projects</span>
          </div>
          <div className="h-8 w-px bg-slate-700"></div>
          <div className="flex flex-col items-center">
             <span className="text-2xl font-bold">AI</span>
             <span className="text-xs uppercase tracking-widest text-slate-500">Enhanced</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
