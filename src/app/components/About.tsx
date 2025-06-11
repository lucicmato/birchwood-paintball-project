import { HeartHandshakeIcon, TreePineIcon, UsersIcon } from 'lucide-react';

const About = () => {
  return (
    <section id={'About'} className="py-16 px-6 bg-forest-dark relative overflow-hidden">
      {/* Background with forest texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/images/backgroundAbout.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)',
        }}
      ></div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark/80 to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Naša <span className="text-paint-yellow">Priča</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Paintball Birchwood – u prijevodu "Drvo breze" – jedinstveni je paintball teren otvoren
            2023. godine u Breziku, nadomak Grada Našica. Ideja iza otvaranja bila je jednostavna:
            igra, zabava i sjajan način da se dobro istrčiš i opustiš. Ono što Birchwood izdvaja od
            ostalih jest činjenica da je to jedini paintball teren u ovom dijelu Slavonije s
            promjenjivim preprekama. Svaki posjet donosi novu konfiguraciju terena, što ga čini
            idealnim i za povremenu igru i za ozbiljnije turnire.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="bg-leaf-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TreePineIcon className="h-8 w-8 text-paint-neon" />
            </div>
            <h3 className="text-xl font-bold mb-2">Teren</h3>
            <p className="text-gray-300">
              Teren se prostire na impresivnih 2000 m², pružajući dovoljno prostora za dinamičnu
              igru, taktičko nadmudrivanje i adrenalinsku akciju u svakom kutku.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-leaf-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="h-8 w-8 text-paint-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-2">Tim</h3>
            <p className="text-gray-300">
              Tu smo da osiguramo da svaki tvoj dolazak na teren bude siguran, zabavan i pun
              adrenalina.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-leaf-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <HeartHandshakeIcon className="h-8 w-8 text-paint-pink" />
            </div>
            <h3 className="text-xl font-bold mb-2">Zajednica</h3>
            <p className="text-gray-300">
              Nemaš ekipu, ali želiš igrati? Ostavi poruku i ubacit ćemo te u našu zajednicu i kad
              netko zafali, možeš se priključiti. Ili složimo novu ekipu za paintball!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
