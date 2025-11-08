// Composant Projects avec liste de projets
const Projects = () => {
  //Liste des projets
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      desc: "Portfolio personnel codé avec React et Tailwind, présentant mes projets et compétences en développement web et mobile.",
      image: "/images/projects/portfolio.png",
      languages: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      link: "https://github.com/CanadaBadiane/portfolio",
      status: "Terminé",
    },
    {
      id: 2,
      title: "Mini-Doctolib",
      desc: "Application web de prise de rendez-vous médicaux avec interface intuitive.",
      image: "/images/projects/mini-doctolib.png",
      languages: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://github.com/CanadaBadiane/mini-doctolib",
      status: "Terminé",
    },
    {
      id: 3,
      title: "CasaMode",
      desc: "Application web de boutique en ligne proposant des vêtements stylés pour femmes et hommes, avec une interface moderne et facile à utiliser.",
      image: "/images/projects/casamode.png",
      languages: [
        "Python",
        "Flask",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "PostgreSQL",
        "Node.js",
      ],
      link: "https://github.com/CanadaBadiane/CasaMode",
      status: "En cours",
    },
    {
      id: 4,
      title: "Ma Blibliothèque Personnelle",
      desc: "Application web permettant de gérer sa bibliothèque personnelle : ajout, modification, suppression de ses livres et une page catalogue.",
      image: "/images/projects/maBibliotheque.png",
      languages: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Node.js",
      ],
      link: "https://github.com/CanadaBadiane/laboratoire_2",
      status: "Terminé",
    },
    {
      id: 5,
      title: "Pokédex",
      desc: "Page web statique affichant une galerie d’images Pokémon, conçue en HTML et CSS.",
      image: "/images/projects/pokedex.png",
      languages: ["HTML", "CSS"],
      link: "https://github.com/CanadaBadiane/Pokedex",
      status: "Terminé",
    },
  ];

  // Rendu du composant Projets
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-xl font-semibold mb-4">
        Mes <span className="font-bold text-indigo-400 text-2xl">Projets</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/5 p-4 shadow rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:rotate-3 hover:bg-gradient-to-br hover:from-indigo-800 hover:to-purple-700 text-left"
          >
            {/* Statut du projet */}
            <span
              className={`absolute top-3 right-3 inline-flex items-center gap-2 text-xs font-mono px-2 py-1 rounded-full ${
                p.status === "En cours"
                  ? "bg-yellow-600/20 text-yellow-300 ring-1 ring-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.12)]"
                  : "bg-green-600/20 text-green-300 ring-1 ring-green-400/20 shadow-[0_0_10px_rgba(34,197,94,0.12)]"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  p.status === "En cours" ? "bg-yellow-400" : "bg-green-400"
                }`}
              />
              {p.status}
            </span>

            <div className="flex items-center gap-3 mb-2 w-full justify-start text-left">
              <h3 className="font-bold text-indigo-300 text-xl transition-colors duration-300 group-hover:text-fuchsia-200">
                {p.title}
              </h3>
            </div>

            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <p className="text-sm text-white/80 mb-6">{p.desc}</p>
            <div className="flex flex-wrap gap-1">
              {p.languages.map((lang, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-2 py-1 rounded-md transition duration-200 hover:from-indigo-400 hover:to-purple-500"
                >
                  {lang}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
