
import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from '../components/ScrollRevealText';
import { FACILITIES_IMAGES } from '../constants';

const Resort: React.FC = () => {
  return (
    <div className="bg-[#F8F8F6] pt-40 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A44C] text-[10px] tracking-[0.6em] uppercase mb-8 block font-bold"
          >
            Our Sanctuary
          </motion.span>
          <ScrollRevealText 
            tag="h1"
            text="Architecture in Harmony with Wilderness"
            className="text-5xl md:text-8xl font-serif text-[#0F2A1D] max-w-5xl leading-[0.9] tracking-tight"
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 space-y-10"
          >
            <h2 className="text-4xl font-serif text-[#3B2F2F]">Artisanal Hospitality</h2>
            <p className="text-[#3B2F2F]/70 leading-relaxed font-light text-xl">
              Every structure at BeeHive is a dialogue between human comfort and the natural world. We've preserved the ancient coffee trees, building our sanctuaries around them to ensure minimal footprint and maximum immersion.
            </p>
            <div className="h-[1px] w-32 bg-[#C9A44C]" />
            <p className="text-[#3B2F2F]/60 leading-relaxed font-light text-lg italic">
              "We didn't just build a resort; we curated a space for the soul to breathe again."
            </p>
          </motion.div>
          
          <div className="lg:col-span-7 relative h-[700px] overflow-hidden group rounded-sm shadow-3xl">
            <motion.img 
              initial={{ scale: 1.25 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              src={FACILITIES_IMAGES[0]} 
              className="w-full h-full object-cover" 
              alt="Resort Sanctuary" 
            />
            <div className="absolute inset-0 bg-[#0F2A1D]/10 pointer-events-none" />
          </div>
        </div>

        <section className="mb-48">
           <div className="flex items-center justify-between mb-16">
              <h3 className="text-3xl font-serif text-[#0F2A1D]">Visual Narrative</h3>
              <div className="h-[1px] flex-grow mx-12 bg-[#0F2A1D]/10" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {FACILITIES_IMAGES.slice(1).map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1 }}
                className="h-[500px] overflow-hidden group rounded-sm"
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
                  alt={`Sanctuary Corner ${i}`} 
                />
              </motion.div>
            ))}
          </div>
        </section>

        <div className="bg-[#0F2A1D] p-16 md:p-32 text-[#F8F8F6] rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none bg-[url('https://beehivewayanad.com/images/banner2.png')] bg-cover" />
          <div className="max-w-4xl relative z-10">
             <motion.span 
               whileInView={{ opacity: [0, 1] }}
               className="text-[#C9A44C] text-[10px] tracking-[0.5em] uppercase mb-10 block font-bold"
             >
               The BeeHive Standard
             </motion.span>
             <h2 className="text-5xl md:text-7xl font-serif mb-16 text-[#C9A44C] leading-tight">Quiet Luxury, Defined by Nature.</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
               {[
                 { title: 'Artisanal Dining', desc: 'Farm-to-fork experiences highlighting local Kerala spices.' },
                 { title: 'Nature Immersion', desc: 'Private walking trails through centuries-old coffee estates.' },
                 { title: 'Water Purity', desc: 'Natural spring water filtered through sustainable systems.' },
                 { title: 'Absolute Privacy', desc: 'Intelligently spaced cottages for uninterrupted solitude.' }
               ].map((item, idx) => (
                 <div key={idx} className="space-y-4">
                   <h4 className="text-xl font-serif text-white">{item.title}</h4>
                   <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resort;
