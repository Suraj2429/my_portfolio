
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-slate-400">Tools and technologies I use to build modern software solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div key={idx} className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700 hover:bg-slate-700 hover:text-white cursor-default transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
