const contactLinks = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/monpseudo',
    href: 'https://github.com',
    color: 'hover:text-white',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/monprofil',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'mon.email@exemple.com',
    href: 'mailto:mon.email@exemple.com',
    color: 'hover:text-secondary',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      {/* Background blob */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">
            Travaillons ensemble
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="text-muted text-lg">
            Une idée de projet ? Une opportunité ? N'hésitez pas à me faire signe !
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`gradient-border bg-card rounded-2xl p-6 flex flex-col items-center gap-3 text-muted transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${link.color}`}
            >
              {link.icon}
              <span className="font-semibold text-white">{link.label}</span>
              <span className="text-xs text-center break-all">{link.value}</span>
            </a>
          ))}
        </div>

        {/* Quick form */}
        <div className="gradient-border bg-card rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6">Envoyer un message</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-muted text-sm block mb-1" htmlFor="name">Nom</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-muted/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-muted text-sm block mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-muted/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-muted text-sm block mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Votre message..."
                className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-primary/30"
            >
              Envoyer 🚀
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-muted text-sm mt-12">
          © {new Date().getFullYear()} — Fait avec ❤️ et React
        </p>
      </div>
    </section>
  );
}
