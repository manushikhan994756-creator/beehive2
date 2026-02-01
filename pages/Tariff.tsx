
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ROOMS } from '../constants';
import { RoomPackage } from '../types';
import MagneticButton from '../components/MagneticButton';
import { useNavigate } from 'react-router-dom';
import ScrollRevealText from '../components/ScrollRevealText';

const RoomCard: React.FC<{ room: RoomPackage; index: number }> = ({ room, index }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Split price into parts for better hierarchy
  const priceParts = room.price.split(' '); // e.g., ["₹5,500", "/", "night"]
  const amount = priceParts[0];
  const suffix = priceParts.slice(1).join(' ');

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center mb-64`}
    >
      {/* Cinematic Image Container */}
      <div className="w-full lg:w-3/5 aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm relative group">
        <motion.div style={{ y }} className="w-full h-full scale-110">
          <img 
            src={room.image} 
            alt={room.title} 
            className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-105 group-hover:brightness-90"
          />
        </motion.div>
        
        {/* Subtle Masking Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Floating Tag */}
        <div className="absolute top-8 left-8 bg-[#F8F8F6]/10 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full">
          <span className="text-[8px] tracking-[0.4em] uppercase text-[#F8F8F6] font-black">Limited Inventory</span>
        </div>
      </div>

      {/* Narrative & Pricing Side */}
      <div className="w-full lg:w-2/5 flex flex-col items-start">
        <div className="flex items-center space-x-6 mb-10">
          <span className="text-[10px] tracking-[0.8em] uppercase text-[#C9A44C] font-black">Archive / 0{index + 1}</span>
          <div className="h-[1px] w-16 bg-[#3B2F2F]/10" />
        </div>

        <h2 className="text-5xl md:text-7xl font-serif text-[#0F2A1D] mb-8 leading-[0.9] tracking-tighter">
          {room.title}
        </h2>

        {/* Dynamic Pricing Hierarchy */}
        <div className="mb-12">
          <span className="text-[9px] uppercase tracking-[0.5em] text-[#3B2F2F]/30 mb-2 block font-black">Investment</span>
          <div className="flex items-baseline space-x-3">
            <span className="text-6xl font-serif text-[#C9A44C] leading-none">{amount}</span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#3B2F2F]/50 font-black italic">{suffix}</span>
          </div>
        </div>

        <p className="text-[#3B2F2F]/70 text-lg font-light leading-relaxed mb-12 max-w-md">
          {room.description}
        </p>
        
        {/* Inclusions Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-16 w-full py-10 border-y border-[#3B2F2F]/5">
          {['Breakfast Included', 'Tea Ritual', 'Forest View', 'High Speed Wi-Fi'].map((feat) => (
            <div key={feat} className="flex items-center space-x-3 group/feat">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]/30 group-hover/feat:bg-[#C9A44C] transition-colors duration-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#3B2F2F]/60 font-bold">{feat}</span>
            </div>
          ))}
        </div>

        <MagneticButton 
          onClick={() => navigate('/booking')} 
          className="w-full md:w-auto shadow-2xl shadow-[#C9A44C]/10"
        >
          Check Availability
        </MagneticButton>
      </div>
    </motion.div>
  );
};

const Tariff: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8F8F6] pt-56 pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header */}
        <header className="max-w-4xl mb-56 relative">
          <div className="absolute -left-12 top-0 w-[1px] h-full bg-[#C9A44C]/20 hidden lg:block" />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#C9A44C] text-[11px] tracking-[1em] uppercase mb-10 block font-black">
              SANCTUARIES & RATES
            </span>
            <ScrollRevealText 
              tag="h1"
              text="Spaces Designed for Stillness"
              className="text-6xl md:text-[9rem] font-serif text-[#0F2A1D] leading-[0.85] tracking-tighter"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="mt-12 text-xl md:text-2xl text-[#3B2F2F]/50 font-light max-w-2xl leading-relaxed italic"
            >
              Whether it's a family reconnection or a solo journey into the wild, our sanctuaries offer the perfect canvas for your Wayanad story.
            </motion.p>
          </motion.div>
        </header>

        {/* Detailed Room Listing */}
        <div className="mb-64">
          {ROOMS.map((room, i) => (
            <RoomCard key={i} room={room} index={i} />
          ))}
        </div>

        {/* Signature Retreats Section (Special Packages) */}
        <section className="relative overflow-hidden rounded-sm bg-[#0F2A1D] text-[#F8F8F6] shadow-[0_50px_100px_-20px_rgba(15,42,29,0.3)]">
          {/* Background Ambient Grain */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
          
          <div className="relative z-10 px-8 py-24 md:p-32 max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#C9A44C] text-[10px] tracking-[1.2em] uppercase mb-8 block font-black"
              >
                Signature Journeys
              </motion.span>
              <h2 className="text-5xl md:text-[8rem] font-serif mb-12 leading-none tracking-tighter">
                Curated <span className="text-[#C9A44C] italic font-light">Retreats</span>
              </h2>
              <div className="w-20 h-[1px] bg-[#C9A44C]/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* Package 1 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative bg-white/[0.02] border border-white/5 p-12 lg:p-16 hover:bg-white/[0.04] hover:border-[#C9A44C]/30 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="px-4 py-1.5 bg-[#C9A44C] text-[#0F2A1D] text-[9px] font-black tracking-[0.3em] uppercase rounded-sm">2N / 3D</span>
                  <span className="text-[9px] tracking-[0.4em] text-white/20 font-black uppercase">Ref: BB01</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-serif mb-8 group-hover:text-[#C9A44C] transition-colors duration-500">The Silence of the Plantation</h3>
                <p className="text-[#F8F8F6]/40 font-light leading-relaxed mb-12 text-lg italic">
                  Guided coffee estate tours, bonfire nights with folk music, and traditional Wayanad meals served in your private cottage.
                </p>

                <div className="pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
                  <div className="text-left w-full lg:w-auto">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#C9A44C] block mb-2 font-black">All-Inclusive</span>
                    <span className="text-3xl font-serif">₹12,000 <span className="text-xs opacity-30 tracking-widest uppercase ml-1">/ Couple</span></span>
                  </div>
                  <button 
                    onClick={() => navigate('/contact')} 
                    className="w-full lg:w-auto text-[10px] tracking-[0.4em] uppercase font-black text-white border-b border-white/10 pb-2 hover:border-[#C9A44C] transition-all duration-500"
                  >
                    Inquire Ritual
                  </button>
                </div>
              </motion.div>

              {/* Package 2 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative bg-white/[0.02] border border-white/5 p-12 lg:p-16 hover:bg-white/[0.04] hover:border-[#C9A44C]/30 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="px-4 py-1.5 bg-[#C9A44C] text-[#0F2A1D] text-[9px] font-black tracking-[0.3em] uppercase rounded-sm">3N / 4D</span>
                  <span className="text-[9px] tracking-[0.4em] text-white/20 font-black uppercase">Ref: BB02</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-serif mb-8 group-hover:text-[#C9A44C] transition-colors duration-500">The Wilderness Immersion</h3>
                <p className="text-[#F8F8F6]/40 font-light leading-relaxed mb-12 text-lg italic">
                  Inclusive of a Jeep Safari into the Muthanga Wildlife Sanctuary, nature photography workshop, and private outdoor BBQ.
                </p>

                <div className="pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
                  <div className="text-left w-full lg:w-auto">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#C9A44C] block mb-2 font-black">All-Inclusive</span>
                    <span className="text-3xl font-serif">₹18,000 <span className="text-xs opacity-30 tracking-widest uppercase ml-1">/ Couple</span></span>
                  </div>
                  <button 
                    onClick={() => navigate('/contact')} 
                    className="w-full lg:w-auto text-[10px] tracking-[0.4em] uppercase font-black text-white border-b border-white/10 pb-2 hover:border-[#C9A44C] transition-all duration-500"
                  >
                    Inquire Ritual
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-32 text-center opacity-10 text-[8px] tracking-[1.5em] uppercase font-black">
              BeeHive Sanctuary — Wayanad
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tariff;
