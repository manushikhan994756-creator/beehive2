import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_IMAGES } from '../constants';
import MagneticButton from './MagneticButton';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgressKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Preload next image for smoother transitions
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % HERO_IMAGES.length;
    const img = new Image();
    img.src = HERO_IMAGES[nextIndex];
  }, [currentIndex]);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-[#0F2A1D]"
      aria-label="Hero section featuring luxury retreat"
    >
      {/* Cinematic Slider with Ken Burns Effect */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ 
            opacity: 1, 
            scale: 1.05,
            transition: { duration: 3.5, ease: [0.22, 1, 0.36, 1] }
          }}
          exit={{ 
            opacity: 0, 
            scale: 1,
            transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
          }}
          className="absolute inset-0 z-0"
          aria-hidden="true"
        >
          <img 
            src={HERO_IMAGES[currentIndex]} 
            alt={`Luxury retreat view ${currentIndex + 1}`} 
            className="w-full h-full object-cover brightness-[0.55] contrast-[1.1]"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Luxury Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0F2A1D]/90 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="text-[#C9A44C] text-[10px] md:text-xs tracking-[0.8em] uppercase font-bold inline-block border-b border-[#C9A44C]/30 pb-2">
            The Sanctuary of Stillness
          </span>
        </motion.div>
        
        <div className="overflow-hidden mb-8">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-[#F8F8F6] leading-[0.85] tracking-tighter max-w-6xl"
            style={{ 
              fontVariantLigatures: 'none',
              fontFeatureSettings: '"liga" 0, "clig" 0'
            }}
          >
            {/* Fix for "BEETHIVE" issue - ensuring proper letter spacing */}
            <span className="tracking-[-0.02em]">BEE</span>
            <span className="tracking-[-0.01em]">HIVE</span>
            <br />
            <span className="italic font-light opacity-90 text-4xl md:text-7xl lg:text-8xl tracking-normal block mt-2 md:mt-4">Wayanad</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.8 }}
          className="text-[#F8F8F6]/70 text-base md:text-xl font-light tracking-[0.1em] max-w-2xl mb-14 leading-relaxed"
        >
          An eco-luxury retreat woven into the verdant tapestry of <br className="hidden md:block"/> ancient coffee plantations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-10"
        >
          <MagneticButton 
            onClick={() => navigate('/booking')}
            className="px-12 py-5 bg-[#C9A44C] text-[#0F2A1D] hover:bg-[#F8F8F6] text-[11px] font-black transition-colors duration-300"
            aria-label="Navigate to booking page"
          >
            Secure Your Dates
          </MagneticButton>
          <button 
            onClick={() => navigate('/resort')}
            className="group flex items-center space-x-4 text-[11px] uppercase tracking-[0.4em] text-[#F8F8F6]/80 hover:text-[#C9A44C] transition-all duration-500 font-bold focus:outline-none focus:ring-2 focus:ring-[#C9A44C] focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="Learn more about the resort experience"
          >
            <span>The Experience</span>
            <div className="w-8 h-[1px] bg-[#F8F8F6]/30 group-hover:w-12 group-hover:bg-[#C9A44C] transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Enhanced Slider Indicators (Progress Bars) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-6 z-20">
        {HERO_IMAGES.map((_, i) => (
          <button 
            key={i} 
            onClick={() => goToSlide(i)}
            className="relative h-1 w-12 bg-white/10 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-[#C9A44C] focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={currentIndex === i ? "true" : "false"}
          >
            {currentIndex === i && (
              <motion.div 
                key={`progress-${progressKey}`}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="absolute inset-0 bg-[#C9A44C]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Floating Scroll Prompt */}
      <motion.div 
        animate={{ y: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 right-12 hidden lg:flex flex-col items-center space-y-4"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.6em] text-[#F8F8F6]/40 uppercase vertical-text">Descend</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#F8F8F6]/20 to-transparent" />
      </motion.div>

      {/* Slide counter for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {HERO_IMAGES.length}
      </div>
      
      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        /* Alternative CSS approach for font ligature fix */
        @supports (font-variant-ligatures: no-common-ligatures) {
          .no-ligatures {
            font-variant-ligatures: no-common-ligatures;
          }
        }
        
        @supports (font-feature-settings: "liga" 0) {
          .no-ligatures {
            font-feature-settings: "liga" 0, "clig" 0;
          }
        }
        
        /* Ensure proper letter rendering for EE combination */
        .tracking-ee {
          letter-spacing: -0.02em;
        }
      `}</style>
    </section>
  );
};

export default Hero;
