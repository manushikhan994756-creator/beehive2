
import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import ScrollRevealText from '../components/ScrollRevealText';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#F8F8F6] pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A44C] text-[10px] tracking-[0.6em] uppercase mb-6 block font-bold"
          >
            Connect With Us
          </motion.span>
          <ScrollRevealText 
            tag="h1"
            text="The First Step to Your Retreat"
            className="text-5xl md:text-8xl font-serif text-[#0F2A1D] leading-[0.9] tracking-tight"
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-16">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#C9A44C] mb-6 font-bold">Sanctuary Address</h3>
                <p className="text-3xl font-serif text-[#3B2F2F] leading-tight">
                  Manjappara, near Ambalavayal,<br />
                  Wayanad, Kerala - 673593
                </p>
                <p className="mt-4 text-[#3B2F2F]/60 font-light text-lg">
                  Nestled in the whispers of the Western Ghats.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#C9A44C] mb-6 font-bold">Voice</h3>
                  <p className="text-2xl font-serif text-[#3B2F2F] leading-relaxed">
                    +91 9656 359 111<br />
                    +91 9447 394 111
                  </p>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#C9A44C] mb-6 font-bold">Digital</h3>
                  <p className="text-2xl font-serif text-[#3B2F2F] break-words">wayanadbeehive@gmail.com</p>
                </div>
              </div>

              <div className="pt-8 border-t border-[#3B2F2F]/10">
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#3B2F2F]/40 mb-6">Social Narrative</h3>
                <div className="flex space-x-10 text-xs tracking-widest uppercase font-bold text-[#0F2A1D]">
                   <a href="#" className="hover:text-[#C9A44C] transition-colors">Instagram</a>
                   <a href="#" className="hover:text-[#C9A44C] transition-colors">Facebook</a>
                   <a href="#" className="hover:text-[#C9A44C] transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#0F2A1D] p-10 md:p-16 rounded-sm shadow-3xl text-[#F8F8F6] relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A44C]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
             <h3 className="text-3xl font-serif mb-10 text-[#C9A44C]">Inquiry Concierge</h3>
             <form className="space-y-8">
               <div className="space-y-2">
                 <label className="text-[9px] uppercase tracking-[0.4em] opacity-40">Your Name</label>
                 <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#C9A44C] transition-colors font-light text-lg" placeholder="Honored Guest" />
               </div>
               <div className="space-y-2">
                 <label className="text-[9px] uppercase tracking-[0.4em] opacity-40">Email Address</label>
                 <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#C9A44C] transition-colors font-light text-lg" placeholder="email@example.com" />
               </div>
               <div className="space-y-2">
                 <label className="text-[9px] uppercase tracking-[0.4em] opacity-40">Message</label>
                 <textarea placeholder="Share your expectations..." rows={4} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#C9A44C] transition-colors resize-none font-light text-lg" />
               </div>
               <div className="pt-6">
                 <MagneticButton className="w-full bg-[#C9A44C] text-[#0F2A1D] hover:bg-[#F8F8F6]">Send Message</MagneticButton>
               </div>
             </form>
          </motion.div>
        </div>

        {/* Live Google Map Integration */}
        <section className="mt-40">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-serif text-[#0F2A1D]">Our Location</h3>
            <div className="h-[1px] flex-grow mx-10 bg-[#0F2A1D]/10" />
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">Manjappara</span>
          </div>
          
          <div className="w-full h-[600px] bg-[#0F2A1D]/5 rounded-sm overflow-hidden shadow-2xl relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97557.99741603399!2d76.07148881700422!3d11.563710731262008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60f18767fba6d%3A0x42d451324fd42699!2sBee%20Hive%20Staycations%20Wayanad!5e1!3m2!1sen!2sin!4v1769958807704!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1) brightness(0.9)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BeeHive Resort Wayanad Location"
             />
             <div className="absolute inset-0 pointer-events-none ring-1 ring-[#0F2A1D]/10" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
