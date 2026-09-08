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
            src="/perfilFachero.png"
            alt="Pablo Germán Jiménez - B-boy"
            className="photo-item photo-bboy"
          />
          <img
            src="/devBreakBoyLinkinAirBabyFreeze.png"
            alt="Pablo Germán Jiménez - B-boy"
            className="photo-item photo-bboy"
          />
          <img
            src="/airChair.png"
            alt="Pablo Germán Jiménez - B-boy"
            className="photo-item photo-bboy"
          />
          <div className="lightning-flash"></div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="tech-banner-container">
            <span className="banner-prefix">FULL STACK</span>
            <div className="tech-badge-group">
              {/* MongoDB */}
              <span className="tech-pill mongo">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="tech-bg-logo"
                />
                <span className="tech-label">MongoDB</span>
              </span>

              {/* Express */}
              <span className="tech-pill express">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express"
                  className="tech-bg-logo invert-logo"
                />
                <span className="tech-label">Express</span>
              </span>

              {/* React */}
              <span className="tech-pill react">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="tech-bg-logo"
                />
                <span className="tech-label">React</span>
              </span>

              {/* Node */}
              <span className="tech-pill node">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="tech-bg-logo"
                />
                <span className="tech-label">Node</span>
              </span>
            </div>
          </div>
          <div className="border border-2 border-success mb-3">
            {" "}
            <p className="text-slate-300  leading-relaxed text-base">
              Software developer specialized in modern JavaScript ecosystems,
              building fast, robust, and scalable web architectures.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Beyond developer, I am an active competitive{" "}
              <strong className="text-slate-200">B-boy (Breakdancer)</strong>.
              The rigorous discipline, physical consistency, and spatial
              problem-solving required on the dance floor are the exact same
              principles I bring to software development: relentless focus,
              clean execution, and resilience under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
