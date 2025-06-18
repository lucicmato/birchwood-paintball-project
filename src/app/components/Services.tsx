import { CrosshairIcon, TrophyIcon, UsersIcon } from 'lucide-react';

const Services = () => {
return (
  <section id={'services'} className="py-24 px-6 bg-tactical-dark relative overflow-hidden">

  {/* Dynamic Background */}
  <div className="absolute inset-0">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("/images/ekipa.svg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.3)',
      }}
    />
    <div
      className="absolute inset-0 bg-gradient-to-b from-tactical-dark/95 via-tactical-dark/70 to-tactical-dark/95"></div>
  </div>
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-paint-yellow opacity-5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-paint-pink opacity-5 rounded-full blur-3xl"></div>
  <div className="container mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">
        Choose Your <span className="text-paint-neon">Mission</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Bilo da dolazite kao ekipa odraslih ili organizirate nezaboravan rođendan za djecu – imamo ponude prilagođene svima!
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Casual Games */}
      <div className="group relative">
        <div
          className="absolute inset-0 bg-paint-yellow/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        <div
          className="bg-forest-dark/90 backdrop-blur-sm rounded-lg p-8 border border-forest-dark group-hover:border-paint-yellow transition-all duration-300 relative">
          <div className="bg-paint-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <CrosshairIcon className="h-8 w-8 text-paint-yellow" />
          </div>
          <div
            className="absolute -top-4 right-4 bg-paint-neon text-forest-dark text-sm font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Djeca
          </h3>
          <ul className="space-y-3 text-gray-300 mb-8">
            <li className="flex items-center">
              <span className="text-paint-yellow mr-2">•</span>
              Zabava do isteka zaliha :)
            </li>
            <li className="flex items-center">
              <span className="text-paint-yellow mr-2">•</span>
              Naši dječji paintball markeri dizajnirani su posebno za mlađe igrače – lakši su, jednostavni za korištenje
              i koriste kuglice s manjom snagom pucanja.
              Maksimalna sigurnost, uz jednaku dozu uzbuđenja i timske akcije!
            </li>
            <li className="flex items-center">
              <span className="text-paint-yellow mr-2">•</span>
              500 kuglica i oprema za svakog igrača
            </li>
            <li className="flex items-center">
              <span className="text-paint-yellow mr-2">•</span>
              Nadzor prilikom igre
            </li>
            <li className="flex items-center">
              <span className="text-paint-yellow mr-2">•</span>
              Donesite svoje kolače, torte, grickalice i sokove
            </li>
            <li className="flex items-center">
              <span className="text-paint-yellow mr-2">•</span>
              Soda voda za dodatno osvježenje
            </li>
          </ul>
          <div className="text-paint-yellow font-bold text-2xl">
            €15/igrač
          </div>
        </div>
      </div>
      {/* Group Events */}
      <div className="group relative">
        <div
          className="absolute inset-0 bg-paint-neon/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        <div
          className="bg-forest-dark/90 backdrop-blur-sm rounded-lg p-8 border border-forest-dark group-hover:border-paint-neon transition-all duration-300 relative transform scale-105">
          <div className="bg-paint-neon/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <UsersIcon className="h-8 w-8 text-paint-neon" />
          </div>
          <div
            className="absolute -top-4 right-4 bg-paint-neon text-forest-dark text-sm font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Odrasli
          </h3>
          <ul className="space-y-3 text-gray-300 mb-8">
            <li className="flex items-center">
              <span className="text-paint-neon mr-2">•</span>
              Do isteka zaliha
            </li>
            <li className="flex items-center">
              <span className="text-paint-neon mr-2">•</span>
              Potpuna zaštitna oprema
            </li>
            <li className="flex items-center">
              <span className="text-paint-neon mr-2">•</span>
              500 kuglica za svakog igrača
            </li>
            <li className="flex items-center">
              <span className="text-paint-neon mr-2">•</span>
              Stalni nadzor za sigurnu i fair-play igru
            </li>
            <li className="flex items-center">
              <span className="text-paint-yellow mr-2">•</span>
              Soda voda za dodatno osvježenje
            </li>
          </ul>
          <div className="text-paint-neon font-bold text-2xl">
            €20/igrač
          </div>
          <div className="text-sm text-gray-400 mt-1">
          Minimum 6 igrača
          </div>
        </div>
      </div>
      {/* Tournaments */}
      <div className="group relative">
        <div
          className="absolute inset-0 bg-paint-pink/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        <div
          className="bg-forest-dark/90 backdrop-blur-sm rounded-lg p-8 border border-forest-dark group-hover:border-paint-pink transition-all duration-300 relative">
          <div className="bg-paint-pink/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <TrophyIcon className="h-8 w-8 text-paint-pink" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Natjecanje
          </h3>
          <ul className="space-y-3 text-gray-300 mb-8">
            <li className="flex items-center">
              <span className="text-paint-pink mr-2">•</span>
              Natjecanje ekipa traje cijeli dan
            </li>
            <li className="flex items-center">
              <span className="text-paint-pink mr-2">•</span>
              Pravila strogo definirana
            </li>
            <li className="flex items-center">
              <span className="text-paint-pink mr-2">•</span>
              Vođenje evidencije pobjede i poraza
            </li>
            <li className="flex items-center">
              <span className="text-paint-pink mr-2">•</span>
              Natjecanje će biti naknadno objavljeno
            </li>
          </ul>
          <div className="text-paint-pink font-bold text-2xl">
            €50/igrač
          </div>
        </div>
      </div>
    </div>
  </div>
</section>);
}

export default Services;