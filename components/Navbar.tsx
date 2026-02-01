
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  // Optimized visibility logic: Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Buffer of 10px to avoid flickering
    if (latest > previous && latest > 120) {
      setIsHidden(true);
    } else if (latest < previous - 10 || latest < 50) {
      setIsHidden(false);
    }
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    open: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 30, filter: 'blur(10px)' },
    open: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        animate={isHidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
          isScrolled 
            ? 'bg-[#EFE9DD]/80 backdrop-blur-xl border-b border-[#3B2F2F]/5 py-3' 
            : 'bg-transparent border-b border-transparent py-6'
        } ${mobileMenuOpen ? 'bg-[#0F2A1D] border-transparent' : ''}`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Official Resort Logo - Dynamic Resizing */}
          <Link 
            to="/" 
            className="group flex items-center z-[110]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.img 
              src="https://beehivewayanad.com/images/logo.png" 
              alt="BeeHive Resort Wayanad" 
              className={`transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
                isScrolled && !mobileMenuOpen ? 'h-10 md:h-12 brightness-50' : 'h-14 md:h-20 brightness-0 invert'
              }`}
              style={{ filter: isScrolled && !mobileMenuOpen ? 'sepia(0.2) contrast(1.2) brightness(0.6)' : 'brightness(0) invert(1)' }}
              whileHover={{ scale: 1.02 }}
            />
          </Link>

          {/* Desktop Apple-Style Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <ul className="flex space-x-10 items-center">
              {NAV_ITEMS.filter(item => item.label !== 'Booking' && item.label !== 'Home').map((item) => (
                <li key={item.path} className="relative group/nav">
                  <Link
                    to={item.path}
                    className={`text-[9px] font-black uppercase tracking-[0.4em] transition-all duration-500 relative z-10 ${
                      isScrolled ? 'text-[#3B2F2F]' : 'text-[#F8F8F6]'
                    } ${location.pathname === item.path ? 'opacity-100' : 'opacity-40 group-hover/nav:opacity-100'}`}
                  >
                    {item.label}
                  </Link>
                  {/* Subtle minimal underline */}
                  <motion.div 
                    initial={false}
                    animate={{ width: location.pathname === item.path ? "100%" : "0%" }}
                    className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-700 ${
                      isScrolled ? 'bg-[#C9A44C]' : 'bg-[#F8F8F6]'
                    }`}
                  />
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#C9A44C", color: "#F8F8F6" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/booking')}
              className={`px-10 py-3 rounded-sm text-[9px] uppercase tracking-[0.4em] font-black transition-all duration-700 border ${
                isScrolled 
                  ? 'border-[#0F2A1D]/10 bg-[#0F2A1D] text-[#F8F8F6]' 
                  : 'border-white/20 bg-white/5 backdrop-blur-md text-[#F8F8F6]'
              }`}
            >
              Reserve
            </motion.button>
          </div>

          {/* Refined Mobile Toggle - Haptic feel */}
          <button 
            className="lg:hidden flex flex-col items-center justify-center space-y-[6px] w-10 h-10 z-[110] relative focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
              className={`w-6 h-[1.5px] transition-colors duration-500 ${isScrolled && !mobileMenuOpen ? 'bg-[#0F2A1D]' : 'bg-[#F8F8F6]'}`} 
            />
            <motion.div 
              animate={{ opacity: mobileMenuOpen ? 0 : 1, x: mobileMenuOpen ? 10 : 0 }}
              className={`w-6 h-[1.5px] transition-colors duration-500 ${isScrolled && !mobileMenuOpen ? 'bg-[#0F2A1D]' : 'bg-[#F8F8F6]'}`} 
            />
            <motion.div 
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
              className={`w-6 h-[1.5px] transition-colors duration-500 ${isScrolled && !mobileMenuOpen ? 'bg-[#0F2A1D]' : 'bg-[#F8F8F6]'}`} 
            />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Immersive Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[#0F2A1D] z-[90] lg:hidden flex flex-col pt-40 pb-16 px-10 overflow-hidden"
          >
            {/* Background Texture for Depth */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
            
            <div className="flex flex-col space-y-10 relative z-10 flex-grow">
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-end justify-between"
                  >
                    <span className={`text-6xl md:text-7xl font-serif tracking-tighter leading-none transition-all duration-500 ${
                      location.pathname === item.path ? 'text-[#C9A44C]' : 'text-[#F8F8F6]/40 hover:text-[#F8F8F6]'
                    }`}>
                      {item.label}
                    </span>
                    <span className="text-[10px] tracking-[0.5em] text-[#C9A44C] mb-2 font-black opacity-0 group-hover:opacity-100 transition-opacity">0{NAV_ITEMS.indexOf(item) + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-auto pt-16 border-t border-white/5 flex flex-col space-y-8 relative z-10"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-[9px] uppercase tracking-[0.6em] text-[#C9A44C] font-black">Concierge</span>
                <a href="tel:+919656359111" className="text-2xl font-serif text-[#F8F8F6]">+91 9656 359 111</a>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-6">
                  {['IG', 'FB', 'TA'].map(s => (
                    <span key={s} className="text-[10px] tracking-widest text-white/30 font-bold hover:text-[#C9A44C] cursor-pointer transition-colors">{s}</span>
                  ))}
                </div>
                <span className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-black">Wayanad, Kerala</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
