
import React, { useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants';
import ScrollRevealText from './ScrollRevealText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = triggerRef.current;
    const scrollContent = containerRef.current;

    if (!section || !scrollContent) return;

    const totalWidth = scrollContent.scrollWidth - window.innerWidth;

    const pin = gsap.to(scrollContent, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={triggerRef} className="bg-[#0F2A1D] overflow-hidden">
      <div className="h-screen flex items-center">
        <div ref={containerRef} className="flex flex-nowrap h-full items-center">
          {/* Intro Card */}
          <div className="w-[80vw] md:w-[60vw] h-full flex flex-col justify-center px-6 md:px-24 shrink-0">
            <span className="text-[#C9A44C] text-sm tracking-[0.5em] uppercase mb-4">The Resort</span>
            <ScrollRevealText 
              tag="h2"
              text="Curated Experiences in the Coffee Heart"
              className="text-4xl md:text-7xl font-serif text-[#F8F8F6] max-w-4xl"
            />
          </div>

          {/* Room & Facility Cards */}
          {EXPERIENCES.map((item, idx) => (
            <div key={idx} className="w-[90vw] md:w-[70vw] h-[80vh] flex items-center justify-center shrink-0 px-4 md:px-12">
              <div className="relative w-full h-full overflow-hidden group rounded-sm shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay with sliding title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="absolute bottom-12 left-12 right-12 text-[#F8F8F6] overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <h3 className="text-3xl md:text-5xl font-serif mb-4 group-hover:-translate-y-2 transition-transform duration-700">
                      {item.title}
                    </h3>
                    <p className="text-lg font-light text-[#F8F8F6]/70 leading-relaxed max-w-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}

          {/* Outro/CTA Card */}
          <div className="w-screen h-full flex flex-col justify-center items-center shrink-0 text-center px-6 bg-[#0F2A1D]">
            <motion.h2 
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-8xl font-serif text-[#F8F8F6] mb-12"
            >
              Ready to Escape?
            </motion.h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-16 py-6 bg-[#C9A44C] text-[#F8F8F6] rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#F8F8F6] hover:text-[#0F2A1D] transition-all duration-500 shadow-xl"
            >
              Check Availability
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
