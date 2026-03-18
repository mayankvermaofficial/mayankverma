import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, scale }}
      className="h-screen w-full flex flex-col justify-center items-center relative px-4 text-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8"
      >
        <p className="text-gray-500 text-sm tracking-[0.2em] uppercase mb-1">You might ask..</p>
        <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">What I bring in the room?</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col items-center gap-2 md:gap-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white">
          Well, Depends..
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white">
          Which room am I
        </h2>
        <motion.h2 
          animate={{ textShadow: ["0 0 10px #00ff00", "0 0 20px #00ff00", "0 0 10px #00ff00"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl md:text-8xl font-extrabold font-display tracking-tighter text-neon mt-2"
        >
          ENTERING?
        </motion.h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-gray-400">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-neon to-transparent animate-pulse"></div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
