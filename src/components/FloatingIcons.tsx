// Images d'icones flottantes
const FloatingIcons = () => {
  return (
    <>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/Python.svg.png"
          alt="Python icon"
          className="w-12 h-12 absolute top-1/2 left-1/2 floating-global"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/react.png"
          alt="React icon"
          className="w-12 h-12 absolute top-1/2 left-1/3 floating-global-2 rounded-full"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/java-4-logo.svg"
          alt="Java icon"
          className="w-12 h-12 absolute top-1/2 left-1/4 floating-global-3"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/javascript.webp"
          alt="Javascript icon"
          className="w-12 h-12 absolute top-1/4 right-1/3 floating-global-4 rounded-lg"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/html.webp"
          alt="Html icon"
          className="w-12 h-12 absolute top-1/4 right-1/3 floating-global-5 rounded-lg"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/css.png"
          alt="Css icon"
          className="w-12 h-12 absolute top-1/3 left-1/4 floating-global-6 rounded-full"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/sql.png"
          alt="SQL icon"
          className="w-12 h-12 absolute top-1/3 left-1/4 floating-global-7 rounded-md"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/typescript.svg"
          alt="Typescript icon"
          className="w-12 h-12 absolute top-[80%] left-1/3 floating-global-8"
        />
      </div>
    </>
  );
};

export default FloatingIcons;
