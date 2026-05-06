'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Stethoscope, Microscope, ShieldCheck, Trophy, Users, CalendarCheck, Star } from 'lucide-react';

function CardComponent({ card }: { card: { id: string, title: string, desc: string, icon: React.ReactNode, align: string, delay: number } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: card.delay, duration: 0.6, ease: "easeOut" }}
      className="w-full lg:w-[320px] z-10 relative"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        animate={{ y: [0, card.id.includes('1') ? -4 : -6, 0] }}
        transition={{
          y: {
            duration: card.id.includes('1') ? 5 : 6,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className="bg-white/85 backdrop-blur-md border border-[#2C7BE5]/10 p-6 md:p-8 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(44,123,229,0.1)] hover:border-[#2C7BE5]/30 transition-all duration-300 w-full h-full group"
      >
        <div className="w-14 h-14 rounded-full bg-[#E6F0FA] shadow-[0_0_15px_rgba(44,123,229,0.15)] flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 rounded-full bg-[#2C7BE5]/20 animate-ping opacity-30" style={{ animationDuration: '3s' }}></div>
          <div className="relative z-10">
            {card.icon}
          </div>
        </div>
        <h3 className="text-[#0F3D3E] font-bold text-xl mb-3">{card.title}</h3>
        <p className="text-[#5A6A7A] text-[15px] leading-relaxed line-clamp-2">{card.desc}</p>
      </motion.div>
    </motion.div>
  );
}

export function AboutDoctor() {
  const cards = [
    {
      id: "left-1",
      title: "Skilled Specialists",
      desc: "Board-certified dentists with global training and aesthetic mastery.",
      icon: <Stethoscope className="w-7 h-7 text-[#2C7BE5]" />,
      align: "left",
      delay: 0.1
    },
    {
      id: "left-2",
      title: "Modern Technology",
      desc: "3D imaging and AI-assisted tools for precise, painless treatments.",
      icon: <Microscope className="w-7 h-7 text-[#2C7BE5]" />,
      align: "left",
      delay: 0.3
    },
    {
      id: "right-1",
      title: "Safety First",
      desc: "Strict international sterilization protocols for your peace of mind.",
      icon: <ShieldCheck className="w-7 h-7 text-[#2C7BE5]" />,
      align: "right",
      delay: 0.2
    },
    {
      id: "right-2",
      title: "Proven Results",
      desc: "Thousands of transformed smiles and lifetime confident reviews.",
      icon: <Trophy className="w-7 h-7 text-[#2C7BE5]" />,
      align: "right",
      delay: 0.4
    }
  ];

  const stats = [
    { label: "Happy Patients", value: "10K+", icon: <Users className="w-5 h-5 text-[#2C7BE5]" /> },
    { label: "Years Experience", value: "15+", icon: <CalendarCheck className="w-5 h-5 text-[#2C7BE5]" /> },
    { label: "Patient Rating", value: "4.9", icon: <Star className="w-5 h-5 text-[#2C7BE5]" /> },
    { label: "Safe & Hygienic", value: "100%", icon: <ShieldCheck className="w-5 h-5 text-[#2C7BE5]" /> },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F4F8FB] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Top Center: Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[#2C7BE5] font-semibold tracking-widest uppercase text-xs mb-3 block"
          >
            ABOUT OUR EXPERTISE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#0F3D3E] mb-4"
          >
            Excellence Behind Every Smile
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            A perfect blend of advanced medical science, proven expertise, and unparalleled comfort.
          </motion.p>
        </div>

        {/* 2. MAIN LAYOUT (3-column balance) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-24 relative">
            
            {/* Left Glass Cards */}
            <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-auto z-20 items-center lg:items-end">
              <CardComponent card={cards[0]} />
              <CardComponent card={cards[1]} />
            </div>

            {/* Center Doctor Image */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative w-full max-w-md lg:w-[440px] xl:w-[480px] aspect-[3/4] mx-auto z-10 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.15)] my-12 lg:my-0 group flex-shrink-0"
            >
              <motion.div
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.6, ease: "easeOut" }}
                 className="w-full h-full"
              >
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                    alt="Expert Dentist"
                    fill
                    className="object-cover relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lighting overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D3E]/30 to-transparent z-20 mix-blend-multiply rounded-[24px]"></div>
              </motion.div>
            </motion.div>

            {/* Right Glass Cards */}
            <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-auto z-20 items-center lg:items-start">
              <CardComponent card={cards[2]} />
              <CardComponent card={cards[3]} />
            </div>

        </div>

        {/* EXTRA: Bottom Stats Bar */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 0.6 }}
           className="bg-white/90 backdrop-blur-lg border border-[#2C7BE5]/10 rounded-[24px] py-10 px-6 max-w-5xl mx-auto shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x md:divide-gray-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-[#f0f5fa] flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <h4 className="text-2xl lg:text-3xl font-bold text-[#0F3D3E] mb-1">{stat.value}</h4>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
