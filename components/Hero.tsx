'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, ShieldCheck, CalendarCheck, Phone, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-surface-light pt-10">
      {/* Background Decor Elements - Animated Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-teal/10 blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]" 
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 z-10">
        
        {/* Left Content */}
        <div className="flex-1 max-w-2xl pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-gray-700 font-heading">Accepting New Patients</span>
            </div>

            <h1 className="font-heading font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-primary mb-6">
              Pain-Free <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">Dental Care</span> <br />
              You Can Trust.
            </h1>
            
            <p className="text-lg text-gray-500 mb-8 max-w-[420px] leading-relaxed">
              Advanced technology, experienced dentists, and same-day appointments designed for your comfort and healthy smile.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 text-sm">
              <button suppressHydrationWarning onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl font-medium hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CalendarCheck className="w-5 h-5" /> Book Appointment
              </button>
              <button suppressHydrationWarning className="flex items-center justify-center gap-2 bg-white text-primary border border-gray-200 px-6 py-3.5 rounded-xl font-medium hover:scale-[1.03] hover:border-accent-teal hover:text-accent-teal hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
                <Phone className="w-5 h-5" /> Call Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-10 pt-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-accent-teal">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-bold text-gray-900 mt-1">4.9/5 Rating</span>
                <span className="text-xs text-gray-400">(Google Reviews)</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">500+</span>
                  <span className="text-xs text-gray-500">Happy Patients</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">10+</span>
                  <span className="text-xs text-gray-500">Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Image */}
        <div className="flex-1 w-full relative flex flex-col gap-4 mt-8 pb-12 lg:mb-0 lg:pb-0 lg:block lg:h-[700px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative w-full h-[350px] sm:h-[450px] lg:h-[560px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 rounded-3xl overflow-hidden shadow-2xl isolate"
          >
            <motion.div
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-full h-full relative"
            >
              {/* Realistic dental treatment scene (dentist treating a smiling patient) */}
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Dental Clinic"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent mix-blend-multiply" />
            </motion.div>
          </motion.div>

          {/* Card Component: 1 (Stacked on mobile, Bottom Left on desktop) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { delay: 0.6, duration: 0.6 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative lg:absolute lg:bottom-[8%] lg:left-[-10%] z-20 w-[95%] max-w-[320px] mx-auto lg:w-max bg-white/85 backdrop-blur-md px-5 py-4 lg:px-6 lg:py-4 rounded-2xl flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60"
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base lg:text-sm font-bold text-gray-900">Top Rated Care</p>
              <p className="text-sm lg:text-xs text-gray-500">Certified Specialists</p>
            </div>
          </motion.div>

          {/* Card Component: 2 (Stacked on mobile, Top Right on desktop) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 0.8, duration: 0.6 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative lg:absolute lg:top-[8%] lg:right-[-10%] z-20 w-[95%] max-w-[320px] mx-auto lg:w-max bg-white/85 backdrop-blur-md px-5 py-4 lg:px-6 lg:py-4 rounded-2xl flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60"
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base lg:text-sm font-bold text-gray-900">Same-Day Visits</p>
              <p className="text-sm lg:text-xs text-gray-500">Book Instantly</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="#"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
}
