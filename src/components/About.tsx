// Composant About avec timeline et description
const About = () => {
  // Rendu du composant About
  return (
    <section id="about" className="scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Colonne gauche */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-mono mb-6">
            MON{" "}
            <span className="text-purple-400 font-bold text-2xl">AVENTURE</span>{" "}
            DANS L'{" "}
            <span className="text-indigo-400 font-bold text-2xl">
              UNIVERS DIGITAL
            </span>{" "}
          </h2>
          <div className="relative w-auto h-auto overflow-hidden rounded-2xl border-4 border-white shadow-[0_0_24px_8px_rgba(236,72,153,0.7)]">
            <img
              src="/images/profil/moi.png"
              alt="Profil"
              className="max-w-[300px] w-auto h-auto object-contain transition-transform duration-500 transform hover:rotate-12"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow-md w-3/4 text-left mt-6 relative z-10">
            <p>
              <span className="text-fuchsia-400 font-semibold">Passionnée</span>{" "}
              par le{" "}
              <span className="text-fuchsia-400 font-semibold">
                développement web
              </span>
              , j'ai découvert le frontend en créant mon premier{" "}
              <span className="text-fuchsia-400 font-semibold">
                site e-commerce
              </span>
              . J'ai adoré concevoir l'interface, jouer avec les couleurs et les
              animations pour offrir une{" "}
              <span className="text-fuchsia-400 font-semibold">
                expérience fluide
              </span>
              . Ce projet m'a donné envie d'approfondir les{" "}
              <span className="text-fuchsia-400 font-semibold">
                bonnes pratiques
              </span>{" "}
              et de{" "}
              <span className="text-fuchsia-400 font-semibold">structurer</span>{" "}
              mon code. En formation de{" "}
              <span className="text-fuchsia-400 font-semibold">
                développement de logiciels
              </span>
              , j'ai consolidé mes bases en{" "}
              <span className="text-fuchsia-400 font-semibold">HTML/CSS</span>{" "}
              et appris{" "}
              <span className="text-fuchsia-400 font-semibold">React</span>,{" "}
              <span className="text-fuchsia-400 font-semibold">Tailwind</span>{" "}
              et les logiques{" "}
              <span className="text-fuchsia-400 font-semibold">backend</span>.
              Je continue à explorer le design tech et à développer mes
              compétences sur la{" "}
              <span className="text-fuchsia-400 font-semibold">
                logique métier
              </span>
              , tout en m'initiant avec enthousiasme au{" "}
              <span className="text-fuchsia-400 font-semibold">
                développement mobile
              </span>{" "}
              avec{" "}
              <span className="text-fuchsia-400 font-semibold">Flutter</span>.
              Je suis actuellement à la recherche d'un{" "}
              <span className="text-fuchsia-400 font-semibold">stage</span> pour
              mettre en pratique mes compétences et contribuer à des{" "}
              <span className="text-fuchsia-400 font-semibold">
                projets innovants
              </span>
              .
            </p>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="relative flex justify-end w-full">
          <div className="relative w-full max-w-4xl flex flex-col">
            {/* Timeline*/}
            <div className="grid grid-cols-2 gap-8 z-10 relative">
              {/* Corde verticale */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-fuchsia-400 via-purple-500 to-indigo-400 z-0"></div>
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-400 shadow-[0_0_24px_8px_rgba(236,72,153,0.7)] border-4 border-white"></div>
              </div>

              {/* Colonne gauche : timeline */}
              <div className="flex flex-col items-end space-y-12">
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-fuchsia-400">2023</span>
                  <div>
                    <span className="font-bold">
                      Création de mon premier site e-commerce :{" "}
                    </span>
                    C’est à travers ce projet que j’ai découvert les
                    fondamentaux du design web avec HTML et CSS.
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-fuchsia-400">2025</span>
                  <div>
                    <span className="font-bold">
                      Premier cours de programmation web :{" "}
                    </span>
                    J’ai approfondi les bases du développement web à travers
                    HTML et CSS et j'ai pu apprendre les premières notions de
                    JavaScript. Ce cours m’a permis de comprendre la structure
                    d’une page, le rôle du style dans l’expérience utilisateur,
                    et l’importance d’un code clair et bien organisé.
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-fuchsia-400">2025</span>
                  <div>
                    <span className="font-bold">
                      Programmation approfondi :{" "}
                    </span>
                    J’ai consolidé mes compétences en programmation orientée
                    objet à travers le langage Java. Ce module m’a permis de
                    comprendre les concepts clés comme les classes, l’héritage,
                    l’encapsulation et la gestion des exceptions.
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-fuchsia-400">2025</span>
                  <div>
                    <span className="font-bold">
                      Apprentissage de Scrum en tant que Scrum Master :{" "}
                    </span>
                    J’ai découvert les principes de la méthodologie agile Scrum
                    en occupant le rôle de Scrum Master. Cette expérience m’a
                    permis de comprendre l’importance de la coordination
                    d’équipe, de la gestion des sprints, et de la facilitation
                    des cérémonies agiles telles que les daily stand-ups, les
                    plannings et les rétrospectives.
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-fuchsia-400">
                    Présentement
                  </span>
                  <div>
                    <span className="font-bold">
                      Apprentissage du web transactionnel, de Flutter et de la
                      cybersécurité :{" "}
                    </span>
                    J’apprends à concevoir des applications web
                    transactionnelles en intégrant la gestion des paiements, des
                    sessions et de la sécurité des échanges. Je développe
                    également des interfaces mobiles avec Flutter, en tirant
                    parti de son approche multiplateforme et réactive. En
                    parallèle, je me forme aux principes de la cybersécurité.
                    J’identifie les vulnérabilités, je sécurise les données
                    utilisateurs et j’applique les bonnes pratiques pour
                    protéger les applications web.
                  </div>
                </div>
              </div>

              {/* Colonne droite : timeline */}
              <div className="flex flex-col items-start space-y-12">
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left mt-24">
                  <span className="font-bold text-indigo-400">2024</span>
                  <div>
                    <span className="font-bold">
                      Découverte de la programmation :{" "}
                    </span>
                    J’ai assisté à mon premier cours de programmation, où j’ai
                    appris les bases de python, de la logique, des algorithmes
                    et de l’écriture de code.
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-indigo-400">2025</span>
                  <div>
                    <span className="font-bold">
                      Apprentissage de la base de données :{" "}
                    </span>
                    J’ai découvert les principes fondamentaux de la gestion des
                    données à travers des systèmes comme MySQL et PostgreSQL.
                    J’ai appris à structurer des tables, à formuler des requêtes
                    SQL efficaces, et à comprendre les relations entre les
                    données.
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-indigo-400">2025</span>
                  <div>
                    <span className="font-bold">
                      Découverte des services web :{" "}
                    </span>
                    J’ai appris à interconnecter des applications à l’aide d’API
                    REST et de protocoles HTTP. Cette étape m’a permis de
                    comprendre comment les données circulent entre le frontend
                    et le backend, comment structurer des requêtes, et comment
                    sécuriser les échanges.
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-indigo-400">2025</span>
                  <div>
                    <span className="font-bold">
                      Apprentissage des algorithmes :{" "}
                    </span>
                    J’ai appris la logique algorithmique en travaillant sur des
                    problèmes de recherche et d’optimisation. Cette phase m’a
                    permis de maîtriser les principales structures de données
                    comme les tableaux, les listes chaînées, les piles, les
                    files et les arbres. J’ai également découvert les patrons de
                    conception tels que Singleton, Factory et Observer, qui
                    m’ont aidé à structurer mon code de manière modulaire,
                    réutilisable et maintenable.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
