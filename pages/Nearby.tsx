
import React from 'react';
import { motion } from 'framer-motion';
import { DESTINATIONS } from '../constants';
import ScrollRevealText from '../components/ScrollRevealText';

const Nearby: React.FC = () => {
  return (
    <div className="bg-[#F8F8F6] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C9A44C] text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Explore Wayanad
          </motion.span>
          <ScrollRevealText 
            tag="h1"
            text="Timeless Landscapes & Ancient Secrets"
            className="text-4xl md:text-7xl font-serif text-[#0F2A1D] justify-center"
          />
        </header>

        <div className="space-y-40">
          {DESTINATIONS.map((dest, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="group"
            >
              <div className="relative h-[60vh] overflow-hidden mb-12">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-serif text-[#0F2A1D] mb-6 tracking-tight">{dest.title}</h2>
                <p className="text-[#3B2F2F]/70 text-lg font-light leading-relaxed mb-8">
                  {dest.description}
                </p>
                <div className="h-[1px] w-12 bg-[#C9A44C] mx-auto opacity-30" />
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nearby;
