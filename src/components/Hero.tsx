import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00FF00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full rounded-md flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-800 via-purple-700 to-blue-900 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <h1 className="text-6xl font-bold text-white font-mono z-10 drop-shadow-lg typewriter-delay">
        Canada Badiane
      </h1>
      <p className="text-2xl mt-4 text-white font-mono z-10">
        Développeuse Web & Mobile
      </p>
      <button className="mt-6 px-6 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800 z-10 shadow-md">
        Voir mes projets
      </button>
    </section>
  );
};

export default Hero;
