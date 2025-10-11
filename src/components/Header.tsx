const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-950 to-black text-white p-3 text-center">
      <div className="flex justify-between mt-3 justify-items-center items-center px-4 md:px-5">
        <h1 className="text-3xl font-bold font-mono bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          <img
            src="/images/code.png"
            alt="Canada Badiane Logo"
            className="inline-block w-10 h-10 ml-2 mr-2 align-middle"
          />
          Canada Badiane
        </h1>
        <nav className="flex justify-start gap-8">
          <a href="#hero">Accueil</a>
          <a href="#about">À propos de moi</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Mes projets</a>
          <a href="#contact">Contact</a>
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
