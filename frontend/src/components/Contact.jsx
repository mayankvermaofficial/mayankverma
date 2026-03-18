import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="w-full py-24 px-6 bg-black border-t border-gray-900 flex flex-col items-center text-center">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
            Lets connect if you want me in a <span className="text-neon">room.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            All this time you spent to know me was emotional.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neon hover:text-black transition-all duration-300">
            <Mail className="w-5 h-5" /> Email Me
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium border border-gray-800 hover:border-neon hover:text-neon transition-all duration-300">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium border border-gray-800 hover:border-neon hover:text-neon transition-all duration-300">
            <Twitter className="w-5 h-5" /> Twitter
          </a>
        </motion.div>

        <div className="text-gray-600 text-sm">
          <p>© 2024 Mayank. Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
