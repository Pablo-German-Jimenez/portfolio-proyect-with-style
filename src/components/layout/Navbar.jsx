import React from 'react';
import { ReactAtom } from './ReactAtom';

export const Navbar = () => {
  const techList = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind'];

  return (
    <header className="w-full bg-slate-900 border-b border-slate-800 text-slate-200 py-3 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Datos Personales */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-bold text-cyan-400">
          <ReactAtom></ReactAtom>
          </div>
          <div>
            <h1 className="font-bold text-lg text-white leading-tight">Pablo Germán Jiménez</h1>
            <p className="text-xs text-cyan-400 font-mono">Full-Stack MERN Developer</p>
          </div>
        </div>

        {/* Listado de Conocimientos / Tech Stack */}
        <div className="hidden lg:flex items-center gap-2 overflow-x-auto max-w-xl py-1 no-scrollbar">
          {techList.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 text-xs font-mono bg-slate-800/80 hover:bg-cyan-950 hover:text-cyan-400 text-slate-300 rounded-md border border-slate-700/60 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links a Redes y Breaking */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <a 
            href="https://github.com/developerbreakboylinkin" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-600">|</span>
          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-md shadow-indigo-500/20">
            Break-boy Linkin Style ⚡
          </span>
        </div>

      </div>
    </header>
  );
};