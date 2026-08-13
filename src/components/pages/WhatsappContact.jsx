import '../../BannerContactoWpp.css'

const BannerContactoWppGmail = () => {
  return (
    <section className="w-full bg-dark text-white border-top border-secondary py-5 px-3 text-center">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
        <div className="text-start">
          <h3 className="fs-4 fw-bold mb-1">¿Do you have any project in mind?</h3>
          <p className="text-white small mb-0">Contact me through Whatsapp or gmail!.</p>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-3">
          {/* Botón WhatsApp */}
          <a 
            href="https://wa.me/549381XXXXXXX?text=Hi%20Pablo,%20i%20saw%20your%20portfolio%20and%20i%20would%like%20consult%20you..." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-contact-custom btn-wpp d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 rounded-3 text-decoration-none fw-semibold"
          >
            <svg className="icon-svg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Botón Gmail */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pablogermanjimenez@gmail.com&su=Your%20consult%20from%20German's%20Portfolio&body=Hi%20Germán!%20i%20saw%20your%20portfolio..." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-contact-custom btn-gmail d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 rounded-3 text-decoration-none fw-semibold"
          >
            <svg className="icon-svg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
            <span>Send Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerContactoWppGmail;
