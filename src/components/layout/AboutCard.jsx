import "../styles/AboutCard.css"; // Ajusta la ruta a tu carpeta styles

export const AboutCard = () => {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-5xl mx-auto my-8 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="photo-frame">
          <img
            src="/yop.jpg"
            alt="Pablo Germán Jiménez - Developer"
            className="photo-item photo-formal"
          />
          <img
            src="/airChair.png"
            alt="Pablo Germán Jiménez - B-boy"
            className="photo-item photo-bboy"
          />
          <img
            src="/perfilFachero.png"
            alt="Pablo Germán Jiménez - B-boy"
            className="photo-item photo-bboy"
          />
          <img
            src="/devBreakBoyLinkinAirBabyFreeze.png"
            alt="Pablo Germán Jiménez - B-boy"
            className="photo-item photo-bboy"
          />
          <div className="lightning-flash"></div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase font-semibold">
            Frontend Software Developer
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Pablo Germán Jiménez
          </h1>
          <p className="text-slate-300 leading-relaxed text-base">
            Software developer specialized in modern JavaScript ecosystems,
            building fast, robust, and scalable web architectures.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            Beyond engineering, I am an active competitive{" "}
            <strong className="text-slate-200">B-boy (Breakdancer)</strong>. The
            rigorous discipline, physical consistency, and spatial
            problem-solving required on the dance floor are the exact same
            principles I bring to software development: relentless focus, clean
            execution, and resilience under pressure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
