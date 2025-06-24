'use client';
import React from 'react';

const Navbar = () => {
  //const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="bg-forest-dark text-white py-4 px-6 shadow-lg relative">
      {/* Paint Splatters */}
      <div className="absolute top-0 right-0 h-16 w-16 rounded-full bg-paint-pink opacity-20 blur-sm"></div>
      <div className="absolute bottom-0 left-1/4 h-12 w-12 rounded-full bg-paint-yellow opacity-20 blur-sm"></div>
      <div className="container mx-auto flex items-center justify-between relative z-10 gap-2">
        <div className="flex items-center space-x-2">
          <a href="#" className="font-bold text-2xl tracking-tight">
            Birchwood Paintball <span className="text-paint-neon">2.0</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#battlegrounds" className="hover:text-paint-neon transition-colors">
            Teren
          </a>
          <a href="#arsenal" className="hover:text-paint-neon transition-colors">
            Oprema
          </a>
          <a href="#services" className="hover:text-paint-neon transition-colors">
            Cijene
          </a>
          <a href="#gallery" className="hover:text-paint-neon transition-colors">
            Galerija
          </a>
          <a href="#booking" className="hover:text-paint-neon transition-colors">
            Rezerviraj
          </a>
          <a href="#safety" className="hover:text-paint-neon transition-colors">
            Sigurnost
          </a>
        </div>
        {/*<button*/}
        {/*  className="md:hidden z-50"*/}
        {/*  onClick={() => setIsMenuOpen(!isMenuOpen)}*/}
        {/*  aria-label="Toggle menu"*/}
        {/*>*/}
        {/*  {isMenuOpen ? <XIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6" />}*/}
        {/*</button>*/}

        {/*/!* Mobile Menu Overlay *!/*/}
        {/*{isMenuOpen && (*/}
        {/*  <div*/}
        {/*    className="fixed inset-0 bg-black opacity-1 md:hidden"*/}
        {/*    onClick={() => setIsMenuOpen(prevState => !prevState)}*/}
        {/*  />*/}
        {/*)}*/}
        {/* Mobile Menu */}
        {/*<div*/}
        {/*  className={`fixed top-0 right-0 h-full w-64 bg-tactical-dark transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-49`}*/}
        {/*>*/}
        {/*  <div className="flex flex-col pt-20 px-6 space-y-6">*/}
        {/*    <a href="#" className="text-lg hover:text-paint-neon transition-colors">*/}
        {/*      Home*/}
        {/*    </a>*/}
        {/*    <a href="#battlegrounds" className="text-lg hover:text-paint-neon transition-colors">*/}
        {/*      Teren*/}
        {/*    </a>*/}
        {/*    <a href="#arsenal" className="text-lg hover:text-paint-neon transition-colors">*/}
        {/*      Oprema*/}
        {/*    </a>*/}
        {/*    <a href="#services" className="text-lg hover:text-paint-neon transition-colors">*/}
        {/*      Cijene*/}
        {/*    </a>*/}
        {/*    <a href="#gallery" className="text-lg hover:text-paint-neon transition-colors">*/}
        {/*      Galerija*/}
        {/*    </a>*/}
        {/*    <a href="#booking" className="text-lg hover:text-paint-neon transition-colors">*/}
        {/*      Rezerviraj*/}
        {/*    </a>*/}
        {/*    <a href="#safety" className="text-lg hover:text-paint-neon transition-colors">*/}
        {/*      Sigurnost*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*  /!* Paint Splatter Effect *!/*/}
        {/*  <div className="absolute bottom-0 left-0 w-full h-64 opacity-10">*/}
        {/*    <div className="absolute bottom-78 right-8 h-24 w-24 rounded-full bg-paint-pink blur-md"></div>*/}
        {/*    <div className="absolute bottom-96 left-8 h-16 w-16 rounded-full bg-paint-yellow blur-md"></div>*/}
        {/*    <div className="absolute bottom-4 left-6 h-16 w-16 rounded-full bg-paint-yellow blur-md"></div>*/}
        {/*    <div className="absolute bottom-25 right-18 h-24 w-24 rounded-full bg-paint-neon blur-md"></div>*/}
        {/*    <div className="absolute bottom-4 left-6 h-26 w-6 rounded-full bg-paint-red blur-md"></div>*/}
        {/*    <div className="absolute bottom-25 right-18 h-24 w-24 rounded-full bg-leaf-green blur-md"></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
};

export default Navbar;
