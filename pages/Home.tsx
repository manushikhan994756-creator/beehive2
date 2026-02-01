
import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import { DESTINATIONS } from '../constants';
import ScrollRevealText from '../components/ScrollRevealText';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <main className="bg-[#F8F8F6]">
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <AboutSection />
      </motion.div>
      
      {/* Signature Amenities Grid */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-[#C9A44C] text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold">Unrivaled Comfort</span>
            <ScrollRevealText 
              tag="h2"
              text="Curated Amenities"
              className="text-5xl md:text-7xl font-serif text-[#0F2A1D] justify-center tracking-tight"
            />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-20 gap-x-12">
            {[
              { icon: '☕', label: "Plantation Stay" },
              { icon: '🔥', label: "Campfire & BBQ" },
              { icon: '🌊', label: "Natural Pond" },
              { icon: '💧', label: "Spring Water" },
              { icon: '🚗', label: "Private Parking" },
              { icon: '🛁', label: "Luxury En-suites" },
              { icon: '🎈', label: "Play Area" },
              { icon: '🍃', label: "Tea Rituals" },
              { icon: '🏘️', label: "Group Cottages" },
              { icon: '🦒', label: "Wayanad Safari" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 border border-[#C9A44C]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A44C] group-hover:border-[#C9A44C] transition-all duration-700 ease-out">
                  <span className="text-2xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">{item.icon}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#3B2F2F]/60 font-semibold group-hover:text-[#0F2A1D] transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection />

      {/* Destinations Preview - Re-styled for premium depth */}
      <section className="py-40 px-6 md:px-12 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-3xl">
               <span className="text-[#C9A44C] text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold">Nature's Theater</span>
               <ScrollRevealText 
                tag="h2"
                text="The Heart of Wayanad"
                className="text-5xl md:text-8xl font-serif text-[#0F2A1D] leading-[0.9] tracking-tighter"
              />
            </div>
            <button className="text-[10px] tracking-[0.4em] uppercase text-[#3B2F2F] border-b border-[#3B2F2F]/20 pb-2 hover:text-[#C9A44C] hover:border-[#C9A44C] transition-all duration-500 font-bold">
              View All Journeys
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {DESTINATIONS.slice(0, 3).map((dest, idx) => (
              <motion.div 
                key={idx}
                className="relative h-[700px] overflow-hidden group cursor-pointer rounded-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1D] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-1000" />
                
                <div className="absolute bottom-12 left-12 right-12 text-[#F8F8F6]">
                  <div className="w-10 h-[1px] bg-[#C9A44C] mb-6" />
                  <h3 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight leading-tight">{dest.title}</h3>
                  <p className="text-sm font-light opacity-0 group-hover:opacity-80 transition-all duration-700 translate-y-6 group-hover:translate-y-0 leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
