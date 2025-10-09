export default function Header() {
  return (
    <header className="bg-purple-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex justify-end gap-8">
        <h2>Accueil</h2>
        <h2>À propos de moi</h2>
        <h2>Technologies</h2>
        <h2>Mes projets</h2>
        <h2>Contact</h2>
      </div>
    </header>
  );
}
