import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Shield, Plane, BookOpen, Star, Coffee } from 'lucide-react';

const AchievementItem = ({ title, desc, icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="flex flex-col md:flex-row gap-6 mb-16 relative"
  >
    <div className="hidden md:flex flex-col items-center mr-8">
      <div className="w-12 h-12 rounded-full bg-black border border-neon flex items-center justify-center z-10">
        {icon}
      </div>
      <div className="w-[1px] h-full bg-gray-800 absolute top-12 left-6 -z-0"></div>
    </div>
    
    <div className="flex-1 bg-card p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
      <div className="flex items-center gap-4 md:hidden mb-4">
        <div className="w-10 h-10 rounded-full bg-black border border-neon flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-display text-white">{title}</h3>
      </div>
      
      <h3 className="hidden md:block text-2xl font-bold font-display text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  const items = [
    {
      title: "AI Research Assistant",
      desc: "Literally created NotebookLM (Kinda) through vibecoding before even GPT was a thing. Shows my long term thinking, haha.",
      icon: <BrainIcon className="w-6 h-6 text-neon" />
    },
    {
      title: "Project Management",
      desc: "Knew coding was not for me so tried a management course.",
      icon: <Briefcase className="w-6 h-6 text-neon" />
    },
    {
      title: "Google Cybersecurity",
      desc: "Yes, I know that those \"You have been contacted by prince\" are scams.",
      icon: <Shield className="w-6 h-6 text-neon" />
    },
    {
      title: "InsideFPV",
      desc: "Prob my best turning point; learned sales and how to talk to 100 people.",
      icon: <Plane className="w-6 h-6 text-neon" />
    },
    {
      title: "Endeavour",
      desc: "This was in Nigeria. Did I mention that I did my schooling (2011 - 2020) there?",
      icon: <BookOpen className="w-6 h-6 text-neon" />
    },
    {
      title: "LOR",
      desc: "My best return was when I took incharge of leadership at Bulls and Bears club. Work so goated that I got LOR hehe.",
      icon: <Star className="w-6 h-6 text-neon" />
    }
  ];

  return (
    <section className="min-h-screen w-full py-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neon text-sm tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center justify-center gap-3">
            Achievements <Coffee className="w-8 h-8 text-gray-500 animate-pulse" />
          </h2>
          <p className="text-gray-500 mt-4">Enough talks, have some chai while you check out my pre AI era.</p>
        </motion.div>

        <div className="relative">
          {items.map((item, index) => (
            <AchievementItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Custom minimal Brain icon for variety
const BrainIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m17 20.66-1-1.73" />
    <path d="M11 10.27 7 3.34" />
    <path d="m20.66 17-1.73-1" />
    <path d="m3.34 7 1.73 1" />
    <path d="M14 12h8" />
    <path d="M2 12h2" />
    <path d="m20.66 7-1.73 1" />
    <path d="m3.34 17 1.73-1" />
    <path d="m17 3.34-1 1.73" />
    <path d="m11 13.73-4 6.93" />
  </svg>
);

export default Achievements;
