import { fieldSpecsBattlegroundsData } from '@/app/data/data';

const Battlegrounds = () => {
  return (
    <section id={'battlegrounds'} className="py-16 px-6 bg-forest-dark relative">
      {/* Full-width image container */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-transparent to-transparent h-32"></div>
        <img
          loading="lazy"
          src="/images/teren2.svg"
          alt="Teren"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          <span className="text-paint-yellow">Teren</span> za velike bitke
        </h2>
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Field Image */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              loading="lazy"
              src="/images/teren1.svg"
              alt="Teren"
              className="w-full rounded-lg transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent"></div>
          </div>
          {/* Field Description */}
          <div className="text-white space-y-8">
            <h3 className="text-3xl font-bold mb-6">Pregled igrališta</h3>
            {/* Field Specs */}
            <div className="grid grid-cols-3 gap-6">
              {fieldSpecsBattlegroundsData.map((spec, index) => (
                <div
                  key={index}
                  className="bg-tactical-dark/80 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-paint-yellow mb-3">{spec.icon}</div>
                  <div className="text-sm text-gray-300 mb-1">{spec.label}</div>
                  <div className="font-bold text-lg">{spec.value}</div>
                </div>
              ))}
            </div>
            {/* Field Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-paint-neon font-bold text-xl mb-3">Igralište</h4>
                <p className="text-gray-300 text-lg">
                  Više od 25 taktičkih zaklona raspoređeno je po našem prostranom terenu, uz
                  strateški postavljene žute napuhujuće prepreke koje stvaraju više borbenih zona i
                  taktičkih mogućnosti.
                </p>
              </div>
              <div>
                <h4 className="text-paint-yellow font-bold text-xl mb-3">
                  Teren prepun taktičkih prilika
                </h4>
                <p className="text-gray-300 text-lg">
                  Višestruke početne zone otvaraju prostor za različite taktike, uz isplanirane
                  pozicije i zahtjevan teren stvoren za prave timske okršaje.
                </p>
              </div>
              <div>
                <h4 className="text-paint-pink font-bold text-xl mb-3">
                  Pravila sigurnosti i ponašanja
                </h4>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Kaciga i zaštitna oprema moraju biti stalno na licu dok ste na terenu</li>
                  <li>
                    • Početak igre označava se odbrojavanjem – pucanje prije isteka 60 sekundi nije
                    dozvoljeno
                  </li>
                  <li>• Zabranjeno je pucati izvan granica terena ili prema osobama izvan igre</li>
                  <li>
                    • U slučaju ozljede, problema s opremom ili bilo kakve nesigurne situacije,
                    odmah podigni ruku i zatraži pomoć
                  </li>
                  <li>
                    • Ako si pogođen, odmah podigni ruku i izađi s terena bez daljnjeg pucanja
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Battlegrounds;
