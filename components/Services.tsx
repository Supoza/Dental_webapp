'use client';
import { motion } from 'motion/react';
import { Sparkles, Activity, Anchor, BoxSelect, Smile, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile in just one visit.',
  },
  {
    icon: <Anchor className="w-8 h-8" />,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore full function and aesthetics.',
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Root Canal',
    description: 'Pain-free root canal therapies to save infected teeth and relieve severe discomfort.',
  },
  {
    icon: <BoxSelect className="w-8 h-8" />, // Placeholder icon for braces
    title: 'Orthodontics & Braces',
    description: 'Clear aligners and modern braces to straighten teeth discreetly and effectively.',
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: 'Smile Makeover',
    description: 'Comprehensive cosmetic treatments combining veneers, whitening, and contouring.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />, // Re-using sparkles logically
    title: 'Tooth Extraction',
    description: 'Safe, gentle extractions including wisdom teeth removal with rapid recovery protocols.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-teal font-semibold tracking-wider uppercase text-sm mb-3 block">Our Services</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">Comprehensive Dental Care</h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of specialized dental treatments using state-of-the-art technology to ensure optimal oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface-light rounded-3xl p-8 border border-gray-100 hover:border-accent-teal/30 hover:shadow-2xl hover:shadow-accent-teal/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary group-hover:text-accent-teal group-hover:shadow-md transition-all duration-300 mb-6 shadow-sm">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:-translate-y-1">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent-teal transition-colors">
                  Learn More 
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
