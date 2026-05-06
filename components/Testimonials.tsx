'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Eleanor Pena',
    image: 'https://picsum.photos/seed/user1/100/100',
    review: "I've always been terrified of the dentist, but Dr. Jenkins and her team completely changed that. The root canal was 100% painless. Highly recommended!",
    verified: true,
  },
  {
    name: 'Guy Hawkins',
    image: 'https://picsum.photos/seed/user2/100/100',
    review: "Got my Invisalign here. The facility is incredibly modern, like a luxury hotel. The staff is warm, and my teeth are perfectly straight now.",
    verified: true,
  },
  {
    name: 'Esther Howard',
    image: 'https://picsum.photos/seed/user3/100/100',
    review: "The whitening treatment was fast and effective. But what impressed me most was the transparent pricing and lack of upselling.",
    verified: true,
  },
  {
    name: 'Robert Fox',
    image: 'https://picsum.photos/seed/user4/100/100',
    review: "Took my 6-year-old for his first checkup. They have screens on the ceiling to distract kids. Absolute lifesaver!",
    verified: true,
  },
  {
    name: 'Cameron Williamson',
    image: 'https://picsum.photos/seed/user5/100/100',
    review: "Booking an appointment was seamless. Everything is digital, no paperwork to fill out on a clipboard. In and out in 45 minutes.",
    verified: true,
  },
  {
    name: 'Brooklyn Simmons',
    image: 'https://picsum.photos/seed/user6/100/100',
    review: "I had a dental emergency on a Saturday. They squeezed me in within an hour. Saved my tooth and my weekend. Thank you!",
    verified: true,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-teal font-semibold tracking-wider uppercase text-sm mb-3 block">Patient Stories</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Loved by Hundreds of Patients</h2>
          <div className="flex items-center justify-center gap-1 text-accent-teal mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <p className="text-white/80 text-lg">
            4.9/5 Average rating across Google & Yelp from over 500 reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/20">
                    <Image src={t.image} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    {t.verified && (
                      <div className="flex items-center gap-1 text-accent-teal text-xs font-semibold uppercase tracking-wider">
                        <CheckCircle className="w-3 h-3" />
                        Verified Patient
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-base leading-relaxed">&quot;{t.review}&quot;</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
