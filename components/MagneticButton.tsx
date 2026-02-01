
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
  className?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<Props> = ({ children, variant = 'solid', className = '', onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group ${
        variant === 'solid' 
          ? 'bg-[#C9A44C] text-[#F8F8F6]' 
          : 'border border-[#C9A44C] text-[#C9A44C] hover:bg-[#C9A44C] hover:text-[#F8F8F6]'
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'solid' && (
        <motion.div 
          className="absolute inset-0 bg-[#3B2F2F] origin-bottom"
          initial={{ scaleY: 0 }}
          whileHover={{ scaleY: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </motion.button>
  );
};

export default MagneticButton;
