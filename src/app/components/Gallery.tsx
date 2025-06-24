'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import { galleryImages } from '@/app/data/data';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = useCallback(() => {
    setSelectedImage(prevState => (prevState !== 0 ? prevState - 1 : prevState));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImage(prevState =>
      prevState !== galleryImages.length - 1 ? prevState + 1 : prevState
    );
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          setIsModalOpen(false);
          setSelectedImage(0);
          break;
      }
    },
    [isModalOpen, handlePrevious, handleNext]
  );
  const scrollGallery = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      //number of scrolled pixels
      const scrollAmount = 400;
      const targetScroll =
        scrollContainerRef.current?.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  // On key down setup -- settings if user want to list gallery with keyboard
  useEffect(() => {
    if (isModalOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(0);
  };

  return (
    <section id={'gallery'} className="py-16 px-6 bg-tactical-gray relative">
      {/* Background 'X' */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Paintball <span className="text-paint-yellow">Galerija</span>
        </h2>
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scrollGallery('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-forest-dark/80 text-white p-2 rounded-r-lg hover:bg-forest-dark transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={() => scrollGallery('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-forest-dark/80 text-white p-2 rounded-l-lg hover:bg-forest-dark transition-colors"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar gap-4 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-none w-80 relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div
                  className="aspect-w-16 aspect-h-9 w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <div className="relative w-full h-full flex items-center justify-center">
              {/*Exit from dialog*/}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-paint-yellow transition-colors z-10"
              >
                <XIcon className="h-8 w-8" />
              </button>
              <button
                onClick={handlePrevious}
                className="absolute left-4 text-white hover:text-paint-yellow transition-colors"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 text-white hover:text-paint-yellow transition-colors"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
              <div className="relative max-w-[90%] max-h-[90vh]">
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="max-w-full max-h-[90vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                  <h3 className="text-white text-center font-bold">
                    {galleryImages[selectedImage].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
