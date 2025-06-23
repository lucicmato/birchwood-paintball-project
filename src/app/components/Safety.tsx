import { AlertTriangleIcon, HeartPulseIcon, ShieldCheckIcon } from 'lucide-react';

const Safety = () => {
  return (
    <section id={'safety'} className="py-16 px-6 bg-tactical-dark relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Upute <span className="text-paint-pink">sigurnosti</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-forest-dark rounded-lg p-6">
            <ShieldCheckIcon className="h-8 w-8 text-paint-yellow mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Pravila za opremu</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Maske se moraju nositi cijelo vrijeme u zoni igre</li>
              <li>• Poklopci cijevi obavezni su u sigurnim zonama</li>
              <li>• Nije dozvoljeno modificirati unajmljenu opremu</li>
              <li>• Provjera opreme prije svake igre</li>
            </ul>
          </div>
          <div className="bg-forest-dark rounded-lg p-6">
            <AlertTriangleIcon className="h-8 w-8 text-paint-pink mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Pravila na terenu</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Nema fizičkog kontakta između igrača</li>
              <li>• Minimalna udaljenost za pucanje: 5 metara</li>
              <li>• Pucanje naslijepo nije dozvoljeno</li>
              <li>• Upute suca moraju se poštivati u svakom trenutku</li>
              <li>• Uvijek nositi masku u terenu</li>
            </ul>
          </div>
          <div className="bg-forest-dark rounded-lg p-6">
            <HeartPulseIcon className="h-8 w-8 text-paint-neon mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Mjere opreza</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Redovito održavanje opreme</li>
              <li>• Sigurnosne upute prije svake igre</li>
              <li>• Utvrđene hitne procedure u slučaju nezgode</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
