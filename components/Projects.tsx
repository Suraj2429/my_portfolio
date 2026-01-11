
import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400">A collection of my recent work in backend development and AI.</p>
        </div>
        <a 
          href={`https://${PERSONAL_INFO.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group transition-colors"
        >
          View all on GitHub 
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-950 p-8 relative overflow-hidden">
               <div className="absolute top-4 right-4 flex gap-2">
                 {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-mono rounded border border-blue-500/20 uppercase tracking-tighter">
                      {tech}
                    </span>
                 ))}
               </div>
               <div className="mt-8">
                 <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                 <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
               </div>
               <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
            </div>
            
            <div className="p-8 flex-grow">
              <h4 className="text-slate-300 font-semibold mb-4 text-sm uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-3 mb-8">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-slate-400">
                    <svg className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-xl transition-all w-full sm:w-auto transform active:scale-95"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
