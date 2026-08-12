import BannerContactoWppGmail from "./WhatsappContact";

const Projects = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-light">Highlight proyect</h2>

      <div className="card bg-dark text-light border-secondary shadow-lg overflow-hidden">
        <div className="row g-0 align-items-center">
          {/* Columna de Previsualización */}
          <div className="col-lg-6">
            <div className="project-img-wrapper p-3">
              <img
                src="elveinticinco.png"
                className="img-fluid rounded border border-secondary shadow"
                alt="El veinticinco Proyect view"
              />
            </div>
          </div>

          {/* Columna de Detalles */}
          <div className="col-lg-6">
            <div className="card-body p-4">
              <h3 className="card-title text-white fw-bold">
                El Veinticinco - Soccer rental management.
              </h3>

              <p className="card-text text-light opacity-75 mt-3">
              Platform for booking socced fields and time slots, includes secure authentification, credential encrypton, and a dynamic dashboard for users and administrations.
              </p>

              {/* Badges de Tech Stack */}
              <div className="mb-4">
                <h6 className="text-uppercase text-muted fs-7 mb-2">
                  Technologies used
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">React</span>
                  <span className="badge bg-info text-dark">React Router</span>
                  <span className="badge bg-success">Node.js</span>
                  <span className="badge bg-dark border border-light">
                    Express
                  </span>
                  <span className="badge bg-success">MongoDB</span>
                  <span className="badge bg-secondary">Mongoose</span>
                  <span className="badge bg-danger">JWT</span>
                  <span className="badge bg-warning text-dark">Bcrypt</span>
                  <span className="badge bg-primary text-white">
                    MercadoLibre
                  </span>
                </div>
              </div>

              {/* Botones de Acción / Repositorios */}
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/Pablo-German-Jimenez/pixels-movie-back-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  View backEnd Repository
                </a>
                <a
                  href="https://github.com/Pablo-German-Jimenez/proyecto-alquiler-canchas-el-veinticinco-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  View frontEnd Repository
                </a>
                <a href="https://elveinticincoalquilercanchasfutbol.netlify.app/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.4 20.8h11.2L20.8 17.6V6.4L17.6 3.2H6.4L3.2 6.4v11.2l3.2 3.2zm4.8-14.4h1.6l4 4v1.6l-4 4h-1.6l-4-4v-1.6l4-4z" />
                  </svg>
                  Deploy proyect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center mb-4 text-light">Highlight proyect</h2>

      <div className="card bg-dark text-light border-secondary shadow-lg overflow-hidden">
        <div className="row g-0 align-items-center">
     
          <div className="col-lg-6">
            <div className="project-img-wrapper p-3">
              <img
                src="pixelsmoviefrontend.png"
                className="img-fluid rounded border border-secondary shadow"
                alt="Cancheros App Preview"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card-body p-4">
                           <h3 className="card-title text-white fw-bold">
                Pixels Movies - Streaming movie and series
              </h3>
              <div className="mb-4">
                <h6 className="text-uppercase text-muted fs-7 mb-2">
                  Technologies used
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">React</span>
                  <span className="badge bg-info text-dark">React Router</span>
                  <span className="badge bg-success">Node.js</span>
                  <span className="badge bg-dark border border-light">
                    Express
                  </span>
                  <span className="badge bg-success">MongoDB</span>
                  <span className="badge bg-secondary">Mongoose</span>
                  <span className="badge bg-danger">JWT</span>
                  <span className="badge bg-warning text-dark">Bcrypt</span>
                </div>
              </div>

              {/* Botones de Acción / Repositorios */}
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/Pablo-German-Jimenez/pixels-movie-back-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  View backEnd repository
                </a>
                <a
                  href="https://github.com/Pablo-German-Jimenez/pixels-movie-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  View frontEnd repository
                </a>
                <a href="https://pixels-movie-front-end.netlify.app/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.4 20.8h11.2L20.8 17.6V6.4L17.6 3.2H6.4L3.2 6.4v11.2l3.2 3.2zm4.8-14.4h1.6l4 4v1.6l-4 4h-1.6l-4-4v-1.6l4-4z" />
                  </svg>
                  Deploy proyect!
                </a>
              </div>
              <BannerContactoWppGmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
