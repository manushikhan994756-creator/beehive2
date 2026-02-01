
import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#EFE9DD]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A44C] text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Reservation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-[#0F2A1D]"
          >
            Your Retreat Awaits
          </motion.h1>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#F8F8F6] p-8 md:p-16 rounded-sm shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#3B2F2F]/60">Full Name</label>
            <input type="text" className="bg-transparent border-b border-[#0F2A1D]/10 py-3 focus:border-[#C9A44C] outline-none transition-colors" placeholder="John Doe" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#3B2F2F]/60">Email Address</label>
            <input type="email" className="bg-transparent border-b border-[#0F2A1D]/10 py-3 focus:border-[#C9A44C] outline-none transition-colors" placeholder="hello@example.com" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#3B2F2F]/60">Mobile</label>
            <input type="tel" className="bg-transparent border-b border-[#0F2A1D]/10 py-3 focus:border-[#C9A44C] outline-none transition-colors" placeholder="+91 00000 00000" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#3B2F2F]/60">Room Type</label>
            <select className="bg-transparent border-b border-[#0F2A1D]/10 py-3 focus:border-[#C9A44C] outline-none transition-colors">
              <option>Family Room (AC)</option>
              <option>Private Cottage</option>
              <option>Tent Stay</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#3B2F2F]/60">Arrival Date</label>
            <input type="date" className="bg-transparent border-b border-[#0F2A1D]/10 py-3 focus:border-[#C9A44C] outline-none transition-colors" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#3B2F2F]/60">Departure Date</label>
            <input type="date" className="bg-transparent border-b border-[#0F2A1D]/10 py-3 focus:border-[#C9A44C] outline-none transition-colors" />
          </div>
          <div className="md:col-span-2 flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#3B2F2F]/60">Special Requests</label>
            <textarea rows={3} className="bg-transparent border-b border-[#0F2A1D]/10 py-3 focus:border-[#C9A44C] outline-none transition-colors resize-none" placeholder="Allergies, late arrival, special occasions..." />
          </div>
          
          <div className="md:col-span-2 pt-8 flex justify-center">
            <MagneticButton className="w-full md:w-auto px-20">
              Submit Inquiry
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Booking;
