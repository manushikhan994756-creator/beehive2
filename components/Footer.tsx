
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2A1D] text-[#F8F8F6] pt-48 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Editorial Wordmark - A ghost of the brand */}
      <div className="absolute -bottom-10 left-0 w-full select-none pointer-events-none opacity-[0.03] flex justify-center">
        <h2 className="text-[28vw] font-serif tracking-tighter leading-none select-none" style={{ WebkitTextStroke: '1px #C9A44C' }}>
          BEEHIVE
        </h2>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-40">
          
          {/* Brand Identity Pillar */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-12 group overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  src="https://beehivewayanad.com/images/logo.png" 
                  alt="BeeHive Resort" 
                  className="h-24 md:h-28 w-auto brightness-0 invert transition-all duration-1000" 
                />
              </Link>
              <h3 className="text-3xl md:text-5xl font-serif text-[#C9A44C] mb-8 leading-[1.1] italic font-light max-w-lg tracking-tight">
                "Where the whispers of the plantation become the song of your soul."
              </h3>
            </div>
            
            <div className="mt-16">
              <span className="text-[9px] uppercase tracking-[0.6em] text-white/20 mb-8 block font-black">Digital Sanctuary</span>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {['Instagram', 'Facebook', 'TripAdvisor'].map((social) => (
                  <motion.a 
                    key={social} 
                    href="#" 
                    whileHover={{ x: 8 }}
                    className="text-[10px] uppercase tracking-[0.5em] font-black text-[#C9A44C] hover:text-[#F8F8F6] transition-all duration-700 flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-[#C9A44C] group-hover:w-6 transition-all duration-700 mr-0 group-hover:mr-4"></span>
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12 pt-4">
            <div className="space-y-12">
              <h4 className="text-[10px] uppercase tracking-[0.8em] text-[#C9A44C] font-black opacity-40">Discovery</h4>
              <ul className="space-y-6">
                {NAV_ITEMS.slice(0, 5).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="group flex items-center text-[#F8F8F6]/40 hover:text-[#F8F8F6] transition-all duration-700 text-[10px] uppercase tracking-[0.4em] font-black">
                      <span className="w-2 h-[1px] bg-[#C9A44C] mr-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-12">
              <h4 className="text-[10px] uppercase tracking-[0.8em] text-[#C9A44C] font-black opacity-40">Experience</h4>
              <ul className="space-y-6">
                {NAV_ITEMS.slice(5).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="group flex items-center text-[#F8F8F6]/40 hover:text-[#F8F8F6] transition-all duration-700 text-[10px] uppercase tracking-[0.4em] font-black">
                      <span className="w-2 h-[1px] bg-[#C9A44C] mr-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location & Concierge Desk */}
          <div className="lg:col-span-3 space-y-16 pt-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.8em] text-[#C9A44C] mb-10 font-black opacity-40">Coordinates</h4>
              <p className="text-2xl font-serif text-[#F8F8F6]/80 leading-relaxed mb-2 tracking-tight">Manjappara, near Ambalavayal,</p>
              <p className="text-2xl font-serif text-[#F8F8F6]/80 leading-relaxed tracking-tight">Wayanad, Kerala — 673593</p>
            </div>
            
            <div className="space-y-10">
              <div className="flex flex-col group cursor-pointer">
                <span className="text-[8px] uppercase tracking-[0.5em] text-white/10 mb-3 font-black group-hover:text-[#C9A44C] transition-colors duration-700">Reservations</span>
                <span className="text-3xl font-serif text-[#F8F8F6]/90 group-hover:text-white transition-colors duration-700">+91 9656 359 111</span>
              </div>
              <div className="flex flex-col group cursor-pointer">
                <span className="text-[8px] uppercase tracking-[0.5em] text-white/10 mb-3 font-black group-hover:text-[#C9A44C] transition-colors duration-700">Digital Liaison</span>
                <span className="text-sm font-light tracking-[0.2em] text-[#F8F8F6]/40 group-hover:text-[#F8F8F6] transition-colors duration-700">wayanadbeehive@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Signature & Legal Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 text-[9px] tracking-[0.6em] uppercase text-white/10 font-black">
            <p className="hover:text-white/30 transition-colors duration-700 cursor-default">© {new Date().getFullYear()} BeeHive Sanctuary Wayanad</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-[#C9A44C] transition-colors duration-700">Privacy Rituals</a>
              <a href="#" className="hover:text-[#C9A44C] transition-colors duration-700">Governance</a>
            </div>
          </div>
          
          {/* THE MASTER SIGNATURE: Real American Technologies */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-[8px] tracking-[0.8em] uppercase text-white/10 mb-6 font-black select-none">Experience Engineered By</span>
            <motion.a 
              href="https://realamericantechnologies.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              className="relative px-10 py-4 bg-[#C9A44C]/[0.02] border border-[#C9A44C]/10 rounded-sm overflow-hidden group/sig transition-all duration-1000 hover:border-[#C9A44C]/50 hover:bg-[#C9A44C]/[0.05] hover:shadow-[0_0_40px_-10px_rgba(201,164,76,0.2)]"
            >
              {/* Spectral Shimmer Effect */}
              <motion.div 
                variants={{
                  hover: { x: "200%", transition: { duration: 1.5, ease: "easeInOut" } },
                  initial: { x: "-100%" }
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A44C]/30 to-transparent skew-x-12" 
              />
              
              <div className="flex items-center space-x-4 relative z-10">
                <span className="text-[11px] tracking-[0.5em] uppercase text-[#C9A44C] font-black transition-all duration-1000 group-hover/sig:text-white group-hover/sig:tracking-[0.6em]">
                  Real American Technologies
                </span>
                
                {/* Breathing Haptic Indicator */}
                <div className="relative flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute w-4 h-4 rounded-full bg-[#C9A44C]/20 blur-sm" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-1.5 h-1.5 rounded-full bg-[#C9A44C] group-hover/sig:shadow-[0_0_15px_#C9A44C] transition-all duration-700" 
                  />
                </div>
              </div>
              
              {/* Subtle Glowing Bottom Edge */}
              <motion.div 
                variants={{
                  hover: { opacity: 1, scaleX: 1 },
                  initial: { opacity: 0, scaleX: 0 }
                }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent origin-center transition-all duration-1000"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
