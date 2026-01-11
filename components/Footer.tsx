
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Suraj Prakash Patil. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
          <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-500 hover:text-white transition-colors">Email</a>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Built with React & AI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
