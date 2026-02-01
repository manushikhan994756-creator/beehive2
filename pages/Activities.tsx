
import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES } from '../constants';
import ScrollRevealText from '../components/ScrollRevealText';

const Activities: React.FC = () => {
  return (
    <div className="bg-[#EFE9DD] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C9A44C] text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Adventures
          </motion.span>
          <ScrollRevealText 
            tag="h1"
            text="The Art of Doing Nothing. Or Everything."
            className="text-4xl md:text-7xl font-serif text-[#0F2A1D]"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {ACTIVITIES.map((act, i) => {
            // Create asymmetrical sizing
            const colSpan = i % 4 === 0 || i % 4 === 3 ? 'md:col-span-7' : 'md:col-span-5';
            const height = i % 3 === 0 ? 'h-[600px]' : 'h-[400px]';

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${colSpan} ${height} relative overflow-hidden group cursor-pointer rounded-sm`}
              >
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#F8F8F6] tracking-widest uppercase">{act.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;
