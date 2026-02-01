
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
  delay?: number;
}

const ScrollRevealText: React.FC<Props> = ({ text, className = '', tag = 'p', delay = 0 }) => {
  const words = text.split(' ');
  const Tag = tag;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Tag className={`overflow-hidden flex flex-wrap ${className}`}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="mr-[0.3em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default ScrollRevealText;
