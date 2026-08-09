import React from 'react';
import { FaCode, FaLaptopCode, FaRocket, FaUserNinja } from 'react-icons/fa6';

const AboutMe = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-slate-100">
      {/* Encabezado Principal */}
      <div className="text-center mb-12">
        <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto font-mono around-3 border">
          Desarrollador Full Stack MERN | Apasionado por el código, la tecnología y la creatividad.
        </p>
      </div>
      {/* Grid de Contenido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Carta 1: Presentación & Perfil */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-emerald-400 text-2xl">
            <FaLaptopCode />
            <h3 className="text-2xl font-bold text-slate-100">¿Quién soy?</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            ¡Hola! Soy un desarrollador enfocado en crear soluciones web robustas, escalables y dinámicas. Me especializo en el ecosistema JavaScript utilizando el Stack **MERN** (MongoDB, Express, React, Node.js).
          </p>
          <p className="text-slate-300 leading-relaxed">
            Me caracteriza una mentalidad de constante aprendizaje, disciplina y adaptabilidad. Disfruto transformar ideas en productos digitales funcionales cuidando la arquitectura del código y la experiencia de usuario.
          </p>
        </div>

        {/* Carta 2: Habilidades Destacadas & Enfoque */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm space-y-6">
          <div className="flex items-center gap-3 text-blue-400 text-2xl">
            <FaCode />
            <h3 className="text-2xl font-bold text-slate-100">Stack Principal</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'REST APIs', 'Git / GitHub'].map((tech) => (
              <span
                key={tech}
                className="bg-slate-800 text-slate-200 text-sm font-semibold px-3 py-1.5 rounded-lg border border-slate-700/60 shadow-sm hover:border-emerald-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3 text-purple-400 text-xl mb-2">
              <FaUserNinja />
              <h4 className="font-semibold text-slate-200">Hobbies & Intereses</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Además del desarrollo, mantengo una alta disciplina física practicando Break Dance, Capoeira, calistenia y dibujo de comics. Creo firmemente que la constancia en el entrenamiento físico se traduce directamente en enfoque y resolución de problemas en el código.
            </p>
          </div>
        </div>
      </div>

      {/* Footer / Call to action interno */}
      <div className="mt-12 text-center bg-slate-900/40 border border-slate-800/80 rounded-xl p-6">
        <div className="flex justify-center items-center gap-2 text-slate-300 text-lg">
          <FaRocket className="text-emerald-400" />
          <span>¿Tienes un proyecto en mente o buscas un desarrollador para tu equipo?</span>
                  </div>
      </div>
    </section>
  );
};

export default AboutMe;