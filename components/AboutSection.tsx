
import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';
import MagneticButton from './MagneticButton';
import { useNavigate } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#EFE9DD]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#C9A44C] text-sm tracking-[0.3em] uppercase mb-4 block">Our Philosophy</span>
            <ScrollRevealText 
              tag="h2"
              text="Harmony Between Nature and Luxury"
              className="text-3xl md:text-5xl font-serif text-[#0F2A1D] mb-8 leading-[1.2]"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[#3B2F2F]/80 text-lg leading-relaxed mb-8 font-light"
            >
              BeeHive is an eco-friendly boutique resort located in Manjappara near Ambalavayal, surrounded by expansive coffee estates. We believe in high-end hospitality that doesn't cost the earth.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-[#3B2F2F]/80 text-lg leading-relaxed mb-12 font-light"
            >
              Major attractions like Edakkal Caves, Phantom Rock, and Karapuzha Dam are just minutes away, making us the perfect hub for your Wayanad exploration.
            </motion.p>
            <MagneticButton variant="outline" onClick={() => navigate('/resort')}>
              Discover Our Story
            </MagneticButton>
          </motion.div>
        </div>

        {/* Image Column */}
        <div className="order-1 lg:order-2 relative h-[500px] md:h-[700px] overflow-hidden rounded-sm shadow-2xl">
          <motion.img 
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://beehivewayanad.com/images/resort.jpg" 
            alt="Resort Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-[#C9A44C]/30 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
