'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryData = [
  {
    before: '/gallery/veneers_before.png',
    after: '/gallery/veneers_after.png',
    title: 'Veneers & Whitening',
    description: 'Complete smile makeover using porcelain veneers to correct spacing and discoloration.'
  },
  {
    before: '/gallery/implants_before.png',
    after: '/gallery/implants_after.png',
    title: 'Dental Implants',
    description: 'Restored missing front tooth with a natural-looking custom zirconia implant.'
  },
  {
    before: '/gallery/aligners_before.png',
    after: '/gallery/aligners_after.png',
    title: 'Clear Aligners',
    description: 'Corrected crowding and alignment over 12 months using invisible aligners.'
  }
];

export function SmileGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  return (
    <section id="gallery" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <span className="text-[#2C7BE5] font-bold tracking-widest uppercase text-xs mb-4 block">
            Real Results
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight mb-6">
            Smile Transformation Gallery
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-[700px] mx-auto">
            See the life-changing results of our patients. Swipe or click to compare realistic before and after photos.
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="relative w-[95%] md:w-[90%] xl:w-[85%] mx-auto">
          <div className="bg-white rounded-[28px] p-6 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-gray-100/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="group"
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-10 transition-transform duration-500 hover:-translate-y-1">
                  
                  {/* Before Image */}
                  <div className="space-y-4">
                    <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden shadow-sm">
                      <Image 
                        src={galleryData[currentIndex].before} 
                        alt="Before Transformation" 
                        fill 
                        className="object-cover transition-transform duration-700 hover:scale-105" 
                      />
                      <div className="absolute top-4 left-4 bg-gray-800 text-white text-[10px] sm:text-xs font-bold uppercase py-1.5 px-4 rounded-full tracking-wider shadow-md">
                        Before
                      </div>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="space-y-4">
                    <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden shadow-sm">
                      <Image 
                        src={galleryData[currentIndex].after} 
                        alt="After Transformation" 
                        fill 
                        className="object-cover transition-transform duration-700 hover:scale-105" 
                      />
                      <div className="absolute top-4 left-4 bg-[#2C7BE5] text-white text-[10px] sm:text-xs font-bold uppercase py-1.5 px-4 rounded-full tracking-wider shadow-md">
                        After
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="mt-10 text-center max-w-2xl mx-auto">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4">
                    {galleryData[currentIndex].title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {galleryData[currentIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12 relative z-20">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#F8FAFC] hover:text-[#2C7BE5] hover:border-[#2C7BE5] transition-all duration-300 shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
              {galleryData.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#2C7BE5] w-8' : 'bg-gray-200 w-2.5 hover:bg-gray-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button 
               onClick={nextSlide}
               className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#F8FAFC] hover:text-[#2C7BE5] hover:border-[#2C7BE5] transition-all duration-300 shadow-sm active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
