
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          {/* Animated Gradient Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative w-64 h-64 bg-slate-900 rounded-full overflow-hidden border border-slate-800 mx-auto">

             {/* Actual Profile Picture */}
             <img 
               src={PERSONAL_INFO.profileImage} 
               alt={PERSONAL_INFO.name}
               className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
               onError={(e) => {
                 // Fallback if image is missing
                 const target = e.target as HTMLImageElement;
                 target.style.display = 'none';
                 target.nextElementSibling?.classList.remove('hidden');
               }}
             />
             
             {/* Fallback Placeholder (Hidden by default) */}
             <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-xl">
                  {PERSONAL_INFO.name.charAt(0)}
                </div>
                <p className="mt-4 text-slate-400 font-mono text-sm">
                  "Writing code that makes a difference."
                </p>
             </div>

             {/* Glassmorphism Overlay on Hover */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">Suraj Prakash Patil</p>
             </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center space-x-2 text-blue-500 mb-4">
            <span className="w-8 h-px bg-blue-500"></span>
            <span className="text-sm font-bold uppercase tracking-widest">Introduction</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-slate-400 mb-6 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:bg-slate-800/50 transition-colors">
               <h3 className="text-blue-400 font-semibold mb-2">Location</h3>
               <p className="text-slate-300">{PERSONAL_INFO.location}</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:bg-slate-800/50 transition-colors">
               <h3 className="text-blue-400 font-semibold mb-2">Traits</h3>
               <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">Disciplined</span>
                 <span className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">Self-Motivated</span>
                 <span className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">Quick Learner</span>
               </div>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:bg-slate-800/50 transition-colors">
               <h3 className="text-blue-400 font-semibold mb-2">Interests</h3>
               <p className="text-slate-300 text-sm">Cloud Computing, Web Dev, Travelling</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:bg-slate-800/50 transition-colors">
               <h3 className="text-blue-400 font-semibold mb-2">Birthday</h3>
               <p className="text-slate-300">24th August 2003</p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <span className="mr-2">✨</span> Certifications & Courses
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                Cloud Computing (NPTEL, 2024)
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                Deloitte Australia Job Simulation
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                DevOps Course (TuteDude, In Progress)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
