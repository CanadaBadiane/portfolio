import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";

function App() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      <Header />
      <Hero />
      <main className="relative space-y-16 px-4 md:px-12 py-8">
        <About />
        <FloatingIcons />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
