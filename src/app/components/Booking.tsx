'use client';

import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '@/app/models/types';

const Booking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section id={'booking'} className="py-16 px-6 bg-forest-dark relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/images/djeca.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/60 to-forest-dark/80"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Kontaktirajte nas i <span className="text-paint-neon">dogovorite termin</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-tactical-dark/90 p-8 rounded-lg backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-white mb-2">Ime i prezime</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-tactical-gray text-white border border-gray-700 focus:border-paint-neon focus:outline-none"
                  placeholder="Ime i prezime"
                  {...register('name', {
                    required: 'Ime je obavezno.',
                  })}
                />
                {<p className="text-red-500">{errors.name?.message}</p>}
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-tactical-gray text-white border border-gray-700 focus:border-paint-neon focus:outline-none"
                  placeholder="your@email.com"
                  {...register('email', {
                    required: 'Email je obavezan.',
                  })}
                />
                {<p className="text-red-500">{errors.email?.message}</p>}
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-tactical-gray text-white border border-gray-700 focus:border-paint-neon focus:outline-none"
                  rows={4}
                  placeholder="Pošalji informacije o grupi i datumu koji vam odgovara"
                  {...register('message', {
                    required: 'Poruka je obavezna.',
                  })}
                />
                {<p className="text-red-500">{errors.message?.message}</p>}
              </div>
              <button
                type={'submit'}
                className="w-full bg-leaf-green hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                Pošalji
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-white space-y-8">
            <div className="bg-tactical-dark/90 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-paint-yellow" />
                  <span>+385 99 516 2355</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MailIcon className="h-5 w-5 text-paint-yellow" />
                  <span>stjepan.nekicq@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-paint-yellow" />
                  <span>UL. BANA JOSIPA JELAČIĆA 22 A, BREZIK NAŠIČKI</span>
                </div>
              </div>
            </div>
            <div className="bg-tactical-dark/90 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Radno vrijeme</h3>
              <div className="space-y-2">
                <p>Pon - Ned: 8:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
