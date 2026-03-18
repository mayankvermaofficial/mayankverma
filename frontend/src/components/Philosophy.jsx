import React from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ text, delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.1, borderColor: '#00ff00', color: '#00ff00', boxShadow: "0 0 15px rgba(0,255,0,0.3)" }}
    className="absolute border border-gray-700 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-gray-400 hover:text-neon cursor-pointer transition-colors duration-300 bg-black/50 backdrop-blur-sm"
    style={{ left: x, top: y }}
  >
    <span className="text-sm md:text-lg font-medium tracking-wider">{text}</span>
  </motion.div>
);

const Philosophy = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 relative overflow-hidden py-24">
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto"
        >
          But all this was possible because of one core, simple yet intricate skill which is literally not taught anywhere:
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold font-display text-white leading-tight mb-24"
        >
          Asking <span className="text-neon">Why</span>, <span className="text-neon">What</span>, <span className="text-neon">How</span> and whatever comes under <span className="text-white border-b-2 border-neon pb-1">Questioning.</span>
        </motion.h2>
      </div>

      {/* Decorative Circles */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-gray-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-gray-800 rounded-full opacity-10"></div>
      </div>

      {/* Interactive Bubbles - positioned specifically to match the vibe */}
      <div className="relative w-full max-w-5xl h-64 md:h-80 mt-8 hidden md:block">
        <Bubble text="When" delay={0.4} x="15%" y="10%" />
        <Bubble text="Why" delay={0.5} x="35%" y="40%" />
        <Bubble text="How" delay={0.6} x="55%" y="60%" />
        <Bubble text="Where" delay={0.7} x="75%" y="20%" />
      </div>
      
      {/* Mobile Bubbles Layout */}
      <div className="flex flex-wrap gap-4 justify-center mt-8 md:hidden">
        {['When', 'Why', 'How', 'Where'].map((text, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="border border-neon/50 text-neon rounded-full w-20 h-20 flex items-center justify-center text-sm font-medium"
          >
            {text}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
