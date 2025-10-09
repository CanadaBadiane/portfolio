export default function Projects() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Mes projets</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-4 shadow rounded">
            <h3 className="font-bold mb-2">Projet {i}</h3>
            <p>Description courte du projet {i}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
