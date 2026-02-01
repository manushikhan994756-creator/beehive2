
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_IMAGES, FACILITIES_IMAGES, DESTINATIONS } from '../constants';

// Categorized data for a more professional "Curated" feel
const GALLERY_ITEMS = [
  ...HERO_IMAGES.map(img => ({ url: img, category: 'Sanctuary', title: 'The Heart of BeeHive', location: 'Main Grounds' })),
  ...FACILITIES_IMAGES.map(img => ({ url: img, category: 'Architecture', title: 'Minimalist Design', location: 'Guest Cottages' })),
  ...DESTINATIONS.map(d => ({ url: d.image, category: 'Nature', title: d.title, location: 'Wayanad Region' })),
];

const CATEGORIES = ['All', 'Sanctuary', 'Architecture', 'Nature'];

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-[#0F2A1D] pt-48 pb-40 min-h-screen relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <header className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#C9A44C] text-[10px] tracking-[0.8em] uppercase mb-10 block font-black">Archive of Moments</span>
            <h1 className="text-6xl md:text-[10rem] font-serif text-[#F8F8F6] leading-none tracking-tighter mb-16">
              Immersive <span className="italic font-light opacity-60">Stillness</span>
            </h1>
          </motion.div>

          {/* Apple-style Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="group relative px-6 py-2 overflow-hidden"
              >
                <span className={`text-[10px] tracking-[0.4em] uppercase font-black transition-all duration-500 ${
                  activeFilter === cat ? 'text-[#C9A44C]' : 'text-[#F8F8F6]/40 group-hover:text-[#F8F8F6]'
                }`}>
                  {cat}
                </span>
                <motion.div 
                  initial={false}
                  animate={{ width: activeFilter === cat ? "100%" : "0%" }}
                  className="absolute bottom-0 left-0 h-[1px] bg-[#C9A44C]"
                />
              </button>
            ))}
          </div>
        </header>

        {/* Editorial Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div 
                key={item.url}
                layout
                initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                onClick={() => setSelected(item)}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-sm bg-black/20"
              >
                {/* Image Component */}
                <motion.img 
                  src={item.url} 
                  alt={item.title} 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-auto transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0" 
                />

                {/* Hover Meta Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-[#C9A44C] text-[8px] tracking-[0.5em] uppercase font-black mb-3 block">{item.category}</span>
                    <h3 className="text-[#F8F8F6] font-serif text-2xl tracking-tight mb-2">{item.title}</h3>
                    <p className="text-[#F8F8F6]/40 text-[9px] tracking-[0.2em] uppercase font-bold">{item.location}</p>
                  </div>
                </div>

                {/* Minimal Border Frame */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-1000" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cinematic Lightbox 2.0 */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/98 flex items-center justify-center p-6 md:p-24 overflow-hidden"
          >
            {/* Blurry Backdrop for Depth */}
            <motion.img 
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.1 }}
              src={selected.url} 
              className="absolute inset-0 w-full h-full object-cover blur-[100px] pointer-events-none"
            />
            
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setSelected(null)} 
            />

            <motion.div 
              layoutId={selected.url}
              className="relative z-10 max-w-full max-h-full flex flex-col items-center"
            >
              <img 
                src={selected.url} 
                className="max-w-[90vw] max-h-[75vh] object-contain shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] rounded-sm" 
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 text-center"
              >
                <h4 className="text-[#F8F8F6] font-serif text-4xl mb-4 tracking-tight">{selected.title}</h4>
                <div className="flex items-center justify-center space-x-6">
                  <span className="text-[#C9A44C] text-[9px] tracking-[0.4em] uppercase font-black">{selected.category}</span>
                  <div className="w-[1px] h-4 bg-white/20" />
                  <span className="text-[#F8F8F6]/40 text-[9px] tracking-[0.4em] uppercase font-black">{selected.location}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Magnetic-style Close Button */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelected(null)}
              className="absolute top-10 right-10 md:top-20 md:right-20 text-[#C9A44C] flex flex-col items-center group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#C9A44C]/30 rounded-full group-hover:bg-[#C9A44C] group-hover:text-black transition-all duration-500">
                <span className="text-2xl font-light">✕</span>
              </div>
              <span className="text-[8px] tracking-[0.5em] uppercase mt-4 font-black opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .columns-1 { column-count: 1; }
        @media (min-width: 640px) { .sm\\:columns-2 { column-count: 2; } }
        @media (min-width: 1024px) { .lg\\:columns-3 { column-count: 3; } }
      `}</style>
    </div>
  );
};

export default Gallery;
