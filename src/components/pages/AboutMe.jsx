
import { FaCode, FaLaptopCode, FaUserNinja } from 'react-icons/fa6';

const AboutMe = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-slate-100">

      <div className="text-center mb-12">
        <p className=" mt-3 text-lg max-w-2xl mx-auto font-mono ">
          <h1 className="">Developer Full Stack M.E.R.N // Passionated for the code, beacuse it allow to project your thouth in reality🧑‍💻🤖❤️</h1>
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
   
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-emerald-400 text-2xl">
            <FaLaptopCode size={32} color="blue"/>
            <h3 className="text-2xl font-bold text-slate-100">¿Who i'm?</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
           ¡Hi! I'm a developer focused in create web's robust solutions, scalables and dynamic. I work with the languaje Javascript using the Stack **M.E.R.N**(MongoDb,Express,React,Node)
          </p>
          <p className="text-slate-300 leading-relaxed">
          I am characterized by a mindset of continuous learning, discipline, and adaptability. I enjoy transforming ideas into functional digital products, paying close attention to code architecture and user experience.
          </p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm space-y-6">
          <div className="flex items-center gap-3 text-blue-400 text-2xl">
            <FaCode size={32} />
            <h3 className="text-2xl font-bold text-slate-100">Main Stack</h3>
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
              <FaUserNinja size={32} color="orange"/>
              <h4 className="font-semibold text-slate-200">Hobbies & Interest</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
             In addition to development🧑‍💻📈, I maintain a high discipline in practice break dance🤸, capoeira💫 and I love drawing comics🦸‍♂️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;