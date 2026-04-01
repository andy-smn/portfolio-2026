export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-24">
        {/* Left — text */}
        <div className="animate-slide-up">
          <p className="text-secondary font-medium mb-3 tracking-widest text-sm uppercase">
            Bonjour, je suis
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="gradient-text">Ton Prénom</span>
            <br />
            <span className="text-white">Nom</span>
          </h1>
          <p className="text-xl text-primary font-semibold mb-6">
            Développeur Full-Stack
          </p>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-lg">
            Passionné par la création d'expériences numériques élégantes et performantes.
            J'aime transformer des idées en applications web modernes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-primary/30"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-white font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-200"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Right — photo placeholder */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Rotating border ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary animate-spin [animation-duration:8s] p-0.5">
              <div className="w-full h-full rounded-full bg-dark" />
            </div>
            {/* Inner photo area */}
            <div className="absolute inset-2 rounded-full bg-surface border border-border flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 rounded-full bg-border flex items-center justify-center">
                <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-muted text-xs text-center px-4">Photo à venir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
