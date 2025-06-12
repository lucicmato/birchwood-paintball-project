import { equipmentData } from '@/app/data/data';
import { ProductCategory } from '@/app/models/types';

const Arsenal = () => {
  return (
    <section id="arsenal" className="py-16 px-6 bg-tactical-gray relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tactical-dark via-transparent to-tactical-dark"></div>

      {/* Tactical Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Naša <span className="text-paint-pink">oprema</span>
        </h2>
        {equipmentData.map((category: ProductCategory, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-paint-neon mb-8">{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-forest-dark rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative h-55">
                    {item.images ? (
                      <div className="flex h-full">
                        {item.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="flex-1 relative"
                            style={{
                              backgroundImage: `url(${image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-xl font-bold text-white">{item.name}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {item.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="text-gray-300 flex items-center">
                          <span className="text-paint-neon mr-2">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arsenal;
