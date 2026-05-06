'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const blogs = [
  {
    image: '/blog/wisdom_teeth.png',
    tag: 'Oral Surgery',
    title: 'Why Wisdom Teeth Are Removed (And When They Should Stay)',
    date: 'Oct 12, 2023',
    readTime: '4 min read'
  },
  {
    image: '/blog/cavity_prevention.png',
    tag: 'Prevention',
    title: '5 Daily Habits That Prevent Cavities Completely',
    date: 'Sep 28, 2023',
    readTime: '3 min read'
  },
  {
    image: '/blog/veneers_vs_bonding.png',
    tag: 'Cosmetic',
    title: 'Veneers vs Bonding: Which Is Right for Your Smile?',
    date: 'Sep 15, 2023',
    readTime: '5 min read'
  }
];

const faqs = [
  {
    q: 'Does it hurt to get a root canal?',
    a: 'Not at all. With modern anesthetics and our specialized techniques, getting a root canal feels no different than getting a standard filling. Our priority is your absolute comfort.'
  },
  {
    q: 'How much do dental implants cost?',
    a: 'The cost varies based on individual needs, bone density, and the number of implants required. We offer transparent pricing during your initial consultation and provide flexible EMI payment plans.'
  },
  {
    q: 'What is the recovery time for wisdom tooth extraction?',
    a: 'Most patients return to normal activities within 48 to 72 hours. We provide comprehensive aftercare instructions and medications to ensure a fast, comfortable recovery.'
  },
  {
    q: 'Do you take my insurance?',
    a: 'We accept most major PPO insurance plans. Our team will verify your benefits prior to your appointment so you know exactly what is covered before any treatment begins.'
  }
];

export function TrustEducation() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="blog" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mx-auto mb-20 max-w-[700px]">
          <span className="text-[#2C7BE5] font-bold tracking-widest uppercase text-xs mb-4 block">
            Patient Education
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight mb-6">
            Learn About Your Dental Health
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-[700px] mx-auto">
            Simple, expert-backed guides to help you prevent problems, understand treatments, and maintain a healthy smile.
          </p>
        </div>

        {/* Blog Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-32">
          {blogs.map((blog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="group cursor-pointer bg-white rounded-[22px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-gray-100/50 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  referrerPolicy="no-referrer" 
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#2C7BE5] bg-[#E6F0FA] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                    {blog.tag}
                  </span>
                  <span className="text-gray-400 font-medium text-sm">
                    {blog.date}
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-[#0F172A] mb-4 leading-snug line-clamp-2 flex-1">
                  {blog.title}
                </h3>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className="flex items-center gap-2 text-gray-500 group-hover:text-[#2C7BE5] font-medium text-sm tracking-wide transition-colors duration-300">
                    Read Article 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
          
          <div className="md:col-span-5 relative">
            <h3 className="font-heading text-3xl font-extrabold text-[#0F172A] mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">Can&apos;t find the answer you&apos;re looking for? Reach out to our front desk team.</p>
            <button suppressHydrationWarning className="bg-[#F8FAFC] text-[#0F172A] border border-gray-200 px-6 py-3 rounded-full font-medium hover:border-[#2C7BE5] hover:text-[#2C7BE5] hover:bg-white transition-all active:scale-[0.98] duration-200 shadow-sm">
              Contact Support
            </button>
          </div>

          <div className="md:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-[#F8FAFC] rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === idx ? 'border-[#2C7BE5] shadow-md shadow-blue-500/5 bg-white' : 'border-transparent hover:border-gray-200 hover:bg-white'
                }`}
              >
                <button suppressHydrationWarning
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-[#0F172A] pr-8">{faq.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openFaq === idx ? 'bg-[#2C7BE5] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-gray-500 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
