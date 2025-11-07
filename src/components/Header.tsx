const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-950 to-black text-white p-3 text-center fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between mt-3 justify-items-center items-center px-4 md:px-5">
        <h1 className="text-3xl font-bold font-mono bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          <img
            src="/images/code.png"
            alt="Canada Badiane Logo"
            className="inline-block w-10 h-10 ml-2 mr-2 align-middle"
          />
          Canada Badiane
        </h1>
        <nav className="flex justify-start gap-4">
          <a
            href="#hero"
            className="font-mono text-sm uppercase tracking-wider px-3 py-1 rounded-md transition-all duration-200 text-white hover:text-fuchsia-300 hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(168,85,247,0.12)] hover:ring-1 hover:ring-fuchsia-500"
          >
            Accueil
          </a>
          <a
            href="#about"
            className="font-mono text-sm uppercase tracking-wider px-3 py-1 rounded-md transition-all duration-200 text-white hover:text-fuchsia-300 hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(168,85,247,0.12)] hover:ring-1 hover:ring-fuchsia-500"
          >
            À propos de moi
          </a>
          <a
            href="#technologies"
            className="font-mono text-sm uppercase tracking-wider px-3 py-1 rounded-md transition-all duration-200 text-white hover:text-fuchsia-300 hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(168,85,247,0.12)] hover:ring-1 hover:ring-fuchsia-500"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="font-mono text-sm uppercase tracking-wider px-3 py-1 rounded-md transition-all duration-200 text-white hover:text-fuchsia-300 hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(168,85,247,0.12)] hover:ring-1 hover:ring-fuchsia-500"
          >
            Mes projets
          </a>
          <a
            href="#contact"
            className="font-mono text-sm uppercase tracking-wider px-3 py-1 rounded-md transition-all duration-200 text-white hover:text-fuchsia-300 hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(168,85,247,0.12)] hover:ring-1 hover:ring-fuchsia-500"
          >
            Contact
          </a>
        </nav>
        <div className="flex gap-2">
          <a
            href="https://github.com/CanadaBadiane"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-orange-300 transition"
          >
            <img
              src="/images/github.png"
              alt="GitHub icon"
              className="w-8 h-8"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-green-600 transition"
          >
            <img
              src="/images/link.png"
              alt="Linkedin icon"
              className="w-10 h-10 mix-blend-screen"
            />
          </a>
          <a
            href="mailto:canada1555@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iw-8 h-8 nline-flex items-center justify-center rounded-full hover:bg-blue-600 transition"
          >
            <img
              src="/images/email6.png"
              alt="Email icon"
              className="w-8 h-8 mix-blend-screen"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
