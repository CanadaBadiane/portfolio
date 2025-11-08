import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-950 to-black text-white p-3 text-center fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center px-4 lg:px-5">
        {/* Logo et titre */}
        <h1 className="text-3xl font-bold font-mono bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          <img
            src="/images/icons/code.png"
            alt="Canada Badiane Logo"
            className="inline-block w-10 h-10 ml-2 mr-2 align-middle"
          />
          Canada Badiane
        </h1>

        {/* Bouton burger */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="white"
                strokeWidth="2"
              />
            )}
          </svg>
        </button>

        {/* Menu desktop et mobile */}
        <nav
          className={`lg:flex gap-4 ${
            isOpen
              ? "flex flex-col absolute top-16 left-0 right-0 bg-blue-950 p-4"
              : "hidden"
          }`}
        >
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

          {/* Icônes sociales pour mobile */}
          <div className="lg:hidden flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/CanadaBadiane"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-orange-300 transition"
            >
              <img
                src="/images/icons/github.png"
                alt="GitHub icon"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/canada-badiane-132b60175/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-green-600 transition"
            >
              <img
                src="/images/icons/link.png"
                alt="Linkedin icon"
                className="w-10 h-10 mix-blend-screen"
              />
            </a>
            <a
              href="mailto:canada1555@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-blue-600 transition"
            >
              <img
                src="/images/icons/email6.png"
                alt="Email icon"
                className="w-8 h-8 mix-blend-screen"
              />
            </a>
          </div>
        </nav>

        {/* Social icons pour desktop uniquement */}
        <div className="hidden lg:flex gap-2">
          <a
            href="https://github.com/CanadaBadiane"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-orange-300 transition"
          >
            <img
              src="/images/icons/github.png"
              alt="GitHub icon"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/canada-badiane-132b60175/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-green-600 transition"
          >
            <img
              src="/images/icons/link.png"
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
              src="/images/icons/email6.png"
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
