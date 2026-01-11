import React from 'react';
import { EDUCATION_LIST } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Academic Background</h2>
        <p className="text-slate-400">My journey through academia and foundational learning.</p>
      </div>

      {/* FIXED: centered timeline */}
      <div className="relative border-l-2 border-slate-800 mx-auto md:left-1/2 md:-translate-x-1/2">
        {EDUCATION_LIST.map((edu, idx) => (
          <div
            key={idx}
            className={`mb-12 relative flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Dot */}
            <div className="absolute -left-1.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-950"></div>

            {/* Content Card */}
            <div className={`w-full md:w-1/2 px-8 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono rounded-full mb-3">
                  {edu.year}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-blue-500 text-sm font-medium mb-2">{edu.institution}</p>
                <div className="flex flex-col md:flex-row items-center gap-2 text-slate-400 text-xs">
                  <span>{edu.university}</span>
                  {edu.grade && (
                    <>
                      <span className="hidden md:inline">•</span>
                      <span className="font-bold text-slate-300">Grade: {edu.grade}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
