const Hero = () => {
  return (
    <section id={'hero'}>
      <div className="relative bg-forest-dark text-white overflow-hidden">
        {/* Paintball team background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/images/novi_dresovi.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.9)',
          }}
        ></div>
        {/* Organic paint effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-forest-dark/90 via-forest-dark/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-paint-yellow/20 via-transparent to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-paint-neon/10 via-transparent to-transparent blur-3xl"></div>
        </div>
        {/* Dynamic lighting effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-forest-dark/70"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="block">KRENITE U</span>
              <span className="block text-paint-neon drop-shadow-[0_0_25px_rgba(118,255,3,0.3)]">
                OSVAJANJE TERENA
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Savladaj taktičko ratovanje i doživi vrhunsku paintball avanturu u Birchwoodu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/*TODO: dodaj href*/}
              <button className="bg-leaf-green hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(46,125,50,0.3)]">
                PRIDRUŽI SE
              </button>
              <button className="border-2 border-white hover:border-paint-neon hover:text-paint-neon text-white font-bold py-3 px-8 rounded-lg transition-all">
                POGLEDAJ TEREN I OPREMU
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
